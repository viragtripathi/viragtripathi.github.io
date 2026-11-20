"""Render HTML and a two-page PDF from content/resume.json.
Requires reportlab; pip install -r scripts/requirements.txt
"""
from pathlib import Path
from html import escape as e
import json
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, ListFlowable, ListItem
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
ROOT=Path(__file__).resolve().parents[1]
d=json.loads((ROOT/'content/resume.json').read_text())
# ReportLab's built-in fonts keep the generated file portable and text-selectable.
ink=HexColor('#29251f'); accent=HexColor('#985008'); muted=HexColor('#625c52'); line=HexColor('#d9d0c1')
styles={
 'body':ParagraphStyle('body',fontName='Helvetica',fontSize=10.2,leading=14.3,textColor=ink,spaceAfter=7),
 'summary':ParagraphStyle('summary',fontName='Helvetica',fontSize=10.5,leading=15,textColor=ink),
 'small':ParagraphStyle('small',fontName='Helvetica',fontSize=9.3,leading=13,textColor=ink),
}
html='''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Virag Tripathi — Resume</title><meta name="description" content="Customer-facing technical leader in sales engineering, applied AI, and solution architecture."><meta name="robots" content="noindex"><link rel="stylesheet" href="assets/resume.css"><link rel="icon" href="assets/favicon.svg" type="image/svg+xml"></head><body><nav class="toolbar" aria-label="Resume navigation"><a href="index.html">← Portfolio</a><a href="assets/virag-tripathi-resume.pdf" download>Download two-page PDF ↓</a></nav><main>'''
pdf=canvas.Canvas(str(ROOT/'assets/virag-tripathi-resume.pdf'),pagesize=(612,792))
pdf.setTitle('Virag Tripathi — Resume');pdf.setAuthor('Virag Tripathi');pdf.setSubject(d['title'])
LEFT=43;WIDTH=526

def text(txt,x,y,size=10,font='Helvetica',color=ink):
    pdf.setFont(font,size);pdf.setFillColor(color);pdf.drawString(x,y,txt)
def paragraph(txt,y,style='body',indent=0):
    p=Paragraph(txt,styles[style]);_,h=p.wrap(WIDTH-indent,780)
    p.drawOn(pdf,LEFT+indent,y-h)
    return y-h

def rule(y,color=line):
    pdf.setStrokeColor(color);pdf.setLineWidth(.6);pdf.line(LEFT,y,569,y)

for page_no,sections in enumerate(d['pages'],1):
    html+='<article class="resume-page" aria-label="Resume page '+str(page_no)+'">'
    if page_no==1:
        html+=f'''<header class="resume-header"><h1>{e(d['name'])}</h1><div class="role">{e(d['title'])}</div><div class="contact">Tampa, FL · <a href="mailto:virag.tripathi@gmail.com">virag.tripathi@gmail.com</a> · 404-512-2656<br><a href="https://viragtripathi.github.io">viragtripathi.github.io</a> · <a href="https://www.linkedin.com/in/virag">linkedin.com/in/virag</a> · <a href="https://github.com/viragtripathi">github.com/viragtripathi</a></div></header><p class="summary">{e(d['summary'])}</p>'''
        text(d['name'],LEFT,739,28,'Helvetica-Bold')
        text(d['title'],LEFT,717,12,'Helvetica',accent)
        y=697
        y=paragraph('Tampa, FL · <a href="mailto:virag.tripathi@gmail.com" color="#985008">virag.tripathi@gmail.com</a> · 404-512-2656',y,'small')
        y=paragraph('<a href="https://viragtripathi.github.io" color="#985008">viragtripathi.github.io</a> · <a href="https://www.linkedin.com/in/virag" color="#985008">linkedin.com/in/virag</a> · <a href="https://github.com/viragtripathi" color="#985008">github.com/viragtripathi</a>',y-2,'small')
        rule(y-11,ink);y=paragraph(e(d['summary']),y-25,'summary')-10
    else:
        html+='<div class="page-label"><strong>Virag Tripathi</strong><span>Sales engineering · Applied AI · Customer delivery</span></div>'
        text(d['name'],LEFT,745,12,'Helvetica-Bold')
        text('Sales engineering · Applied AI · Customer delivery',205,745,9,'Helvetica',muted)
        rule(731,ink);y=715
    for section in sections:
        cls=' class="focus"' if section['heading']=='Technical & field expertise' else ''
        html+=f'<section{cls}><h2>{e(section["heading"])}</h2>'
        y-=16;text(section['heading'].upper(),LEFT,y,8.5,'Helvetica-Bold',accent);rule(y-6);y-=18
        for job in section.get('jobs',[]):
            html+=f'<div class="job"><div class="job-head"><h3>{e(job["role"])}</h3><span class="dates">{e(job["dates"])}</span></div><div class="company">{e(job["company"])}</div><ul>'
            text(job['role'],LEFT,y,10.7,'Helvetica-Bold')
            pdf.setFillColor(muted);pdf.setFont('Helvetica',8.5);pdf.drawRightString(569,y,job['dates'])
            y-=15;text(job['company'],LEFT,y,10,'Helvetica',accent);y-=10
            for bullet in job['bullets']:
                html+=f'<li>{e(bullet)}</li>'
                text('•',LEFT+1,y-10,9,'Helvetica',accent)
                y=paragraph(e(bullet),y,'body',12)-6
            html+='</ul></div>';y-=7
        for a,b in section.get('rows',[]):
            html+=f'<div class="resume-row"><span>{e(a)}</span><span>{e(b)}</span></div>'
            if section['heading']=='Technical & field expertise':
                y=paragraph(f'<b>{e(a)}</b> &nbsp; {e(b)}',y,'small')-4
            else:
                text(a,LEFT,y-9,9.3);pdf.setFont('Helvetica',9);pdf.setFillColor(muted);pdf.drawRightString(569,y-9,b);y-=17
        for p in section.get('paragraphs',[]):
            html+=f'<p>{e(p)}</p>';y=paragraph(e(p),y,'small')-7
        html+='</section>'
    if y<64: raise RuntimeError(f'Page {page_no} overflows: remaining bottom y={y:.1f}')
    html+=f'<footer class="page-footer"><a href="https://viragtripathi.github.io">Selected work: viragtripathi.github.io</a><span>{page_no} / 2</span></footer></article>'
    rule(48);text('Selected work: viragtripathi.github.io',LEFT,34,8,'Helvetica',muted)
    pdf.linkURL('https://viragtripathi.github.io',(LEFT,30,240,43),relative=0)
    pdf.setFont('Helvetica',8);pdf.drawRightString(569,34,f'{page_no} / 2');pdf.showPage()
    print(f'PDF page {page_no}: content ends at {y:.1f} pt; footer at 34 pt.')
pdf.save();html+='</main></body></html>'
(ROOT/'resume.html').write_text(html.replace('><', '>\n<') + '\n')
print('Built resume HTML and PDF from shared content.')
