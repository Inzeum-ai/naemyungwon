#!/usr/bin/env python3
"""Check built HTML route/fragment and asset integrity without driving a browser.
Run after npm run build. Visual/interaction evidence remains a separate browser gate.
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote, parse_qs
import json
import sys

root = Path(__file__).resolve().parents[1]
build = root / '.next/server/app'
class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(); self.ids=set(); self.links=[]; self.assets=[]; self.h1=0; self.missing_alt=[]
        self.feed(source)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag=='h1': self.h1+=1
        if tag=='a' and a.get('href'): self.links.append(a['href'])
        if tag=='img':
            if 'alt' not in a: self.missing_alt.append(a.get('src'))
            if a.get('src'): self.assets.append(a['src'])
        if tag=='source' and a.get('srcset'):
            self.assets.extend(x.strip().split(' ')[0] for x in a['srcset'].split(','))

pages={}
for f in build.rglob('*.html'):
    route='/' + str(f.relative_to(build).with_suffix(''))
    if route=='/index': route='/'
    pages[route]=Page(f.read_text())
if not pages: sys.exit('No built HTML; run npm run build first.')
errors=[]
for route,page in pages.items():
    if page.h1!=1: errors.append(f'{route}: expected one h1, found {page.h1}')
    for src in page.missing_alt: errors.append(f'{route}: missing alt: {src}')
    for href in page.links:
        url=urlsplit(href)
        if url.scheme or url.netloc: continue
        path=unquote(url.path) or route
        if not path.startswith('/'): continue
        if path.startswith('/_next/'): continue
        if path in pages:
            if url.fragment and unquote(url.fragment) not in pages[path].ids:
                errors.append(f'{route}: broken fragment {href}')
        elif not (root/'public'/path.lstrip('/')).exists():
            errors.append(f'{route}: missing destination {href}')
    for src in page.assets:
        url=urlsplit(src)
        if url.scheme or url.netloc: continue
        path=unquote(url.path)
        if path=='/_next/image': path=parse_qs(url.query).get('url',[''])[0]
        if path.startswith('/_next/static/'): continue
        if path.startswith('/') and not (root/'public'/path.lstrip('/')).is_file():
            errors.append(f'{route}: missing image {src}')
report={'routes':sorted(pages),'routeCount':len(pages),'errors':errors,'result':'failed' if errors else 'passed'}
print(json.dumps(report,ensure_ascii=False,indent=2))
sys.exit(bool(errors))
