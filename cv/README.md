# Curriculum vitae

Edit `cv/cv.tex` to change the CV. The website uses `/cv.pdf`.

The `Update dated CV` workflow compiles with pdfLaTeX after edits, on manual runs,
and daily at approximately 00:47 Asia/Kolkata. GitHub may delay scheduled jobs.
The declaration uses `\today`, evaluated using the India timezone at compilation.
Changing the date does not certify that the contents have been reviewed again.

Local build (TeX Live with latex-extra and fonts-recommended, plus latexmk):

```sh
mkdir -p /tmp/cv-build
TZ=Asia/Kolkata latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=/tmp/cv-build cv/cv.tex
cp /tmp/cv-build/cv.pdf cv.pdf
```

The workflow commits the resulting PDF and explicitly requests a GitHub Pages
build, since commits made with GITHUB_TOKEN do not trigger it automatically.
Public-repository scheduled workflows may be disabled after 60 days of inactivity;
if so, re-enable this workflow in the repository's Actions tab.
