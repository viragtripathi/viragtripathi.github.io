"""Generate the social card with Pillow. Uses system fonts or supplied font paths."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import os
ROOT=Path(__file__).resolve().parents[1]
def font(name,size):
    choices=[os.environ.get('PORTFOLIO_FONT_DIR','')+'/'+name, '/System/Library/Fonts/Supplemental/'+name, '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf']
    for p in choices:
        if Path(p).is_file(): return ImageFont.truetype(p,size)
    raise RuntimeError('Set PORTFOLIO_FONT_DIR to a directory with Arial.ttf and Arial Bold.ttf')
im=Image.new('RGB',(1200,630),'#f7f3eb');d=ImageDraw.Draw(im)
d.rectangle((0,0,1200,12),fill='#985008')
d.text((65,55),'VIRAG TRIPATHI',font=font('Arial Bold.ttf',24),fill='#985008')
d.text((60,135),'From customer challenge',font=font('Arial Bold.ttf',67),fill='#29251f')
d.text((60,220),'to production.',font=font('Arial Bold.ttf',67),fill='#985008')
d.text((65,347),'Sales engineering. Applied AI. Customer delivery.',font=font('Arial.ttf',27),fill='#625c52')
d.line((65,440,1135,440),fill='#d5c7b2',width=2)
d.text((65,475),'Principal, AI Ecosystems Engineer',font=font('Arial Bold.ttf',24),fill='#29251f')
d.text((65,513),'Cockroach Labs',font=font('Arial.ttf',23),fill='#625c52')
d.text((65,574),'viragtripathi.github.io',font=font('Arial.ttf',20),fill='#985008')
im.save(ROOT/'assets/social-preview.png',optimize=True)
