"""Export the rendered website without build scripts or source content."""
import argparse
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_FILES = (
    'index.html', 'resume.html', 'terminal.html',
    'work/debezium-explainer.html', 'assets/debezium-explainer.css', 'assets/debezium-explainer.js',
    'work/ai.html', 'work/debezium.html', 'work/ibm.html',
    'assets/site.css', 'assets/site.js', 'assets/resume.css', 'assets/resume.js',
    'assets/favicon.svg', 'assets/virag-portrait.jpg',
    'assets/codex-demo.mp4', 'assets/codex-poster.jpg',
    'assets/social-preview.png', 'assets/virag-tripathi-resume.pdf',
)


def export(destination, root=ROOT):
    root = Path(root).resolve()
    destination = Path(destination).resolve()
    if destination.exists() and any(destination.iterdir()):
        raise ValueError('Export destination must be empty')
    for name in PUBLIC_FILES:
        source = root / name
        if not source.is_file() or source.is_symlink() or source.resolve() != source:
            raise ValueError(f'Expected a regular public artifact: {name}')
    destination.mkdir(parents=True, exist_ok=True)
    for name in PUBLIC_FILES:
        target = destination / name
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(root / name, target)
    (destination / '.nojekyll').touch()
    print(f'Exported {len(PUBLIC_FILES)} public artifacts and .nojekyll to {destination}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('destination', type=Path)
    export(parser.parse_args().destination)
