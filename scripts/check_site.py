"""Validate local links, fragments, and images in the generated static site."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
ROOT=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
    def __init__(self,path):
        super().__init__();self.path=path;self.ids=set();self.refs=[];self.errors=[];self.titles=0;self.h1s=0
        self.feed(path.read_text())
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:
            if a['id'] in self.ids:self.errors.append(f'duplicate id {a["id"]}')
            self.ids.add(a['id'])
        if tag=='title':self.titles+=1
        if tag=='h1':self.h1s+=1
        if tag=='img' and 'alt' not in a:self.errors.append('image missing alt text')
        for field in ('src','href','poster'):
            if a.get(field):self.refs.append(a[field])
pages={p.resolve():Page(p) for p in ROOT.glob('**/*.html') if '.git' not in p.parts}
errors=[];checked=0
for path,page in pages.items():
    errors += [f'{path.name}: {error}' for error in page.errors]
    if page.titles!=1:errors.append(f'{path.name}: expected one title')
    for ref in page.refs:
        u=urlsplit(ref)
        if u.scheme or u.netloc:continue
        dest=(path.parent/unquote(u.path)).resolve() if u.path else path
        if dest.is_dir():dest=dest/'index.html'
        checked+=1
        if not dest.exists():errors.append(f'{path.name}: missing {ref}')
        elif u.fragment and dest in pages and unquote(u.fragment) not in pages[dest].ids:
            errors.append(f'{path.name}: missing fragment {ref}')
for p in [ROOT/'index.html',*ROOT.glob('work/*.html')]:
    if pages[p.resolve()].h1s!=1:errors.append(f'{p.name}: expected one h1')
if errors:raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} HTML pages; {checked} local references; no missing files, fragments, or image alt attributes.')
