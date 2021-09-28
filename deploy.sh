#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./public

git init
git remote add origin https://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@github.com/qknavy/my-blog.git
git add -A
git commit -m 'deploy'

git branch -M gh-pages

git push -f origin gh-pages

cd -