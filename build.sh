#!/usr/bin/env bash
# Sestaví docs/index.html (GitHub Pages / PWA) ze zdroje src/app.html
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p docs
{
  printf '<!doctype html>\n<html lang="cs">\n<head>\n<meta charset="utf-8">\n'
  printf '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">\n'
  printf '<link rel="manifest" href="manifest.webmanifest">\n<link rel="icon" href="icon.svg" type="image/svg+xml">\n'
  printf '<meta name="mobile-web-app-capable" content="yes">\n<meta name="apple-mobile-web-app-capable" content="yes">\n'
  printf '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);box-sizing:border-box;height:100%%}[hidden]{display:none!important}</style>\n'
  printf '</head>\n<body>\n'
  cat src/app.html
  printf '\n</body>\n</html>\n'
} > docs/index.html
echo "docs/index.html sestaveno"
