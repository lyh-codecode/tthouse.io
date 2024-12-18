#!/bin/bash

# 执行打包命令
npm run build

# 进入到 build 目录
cd ../build || exit

# 检查是否有更改
if [ -n "$(git status --porcelain)" ]; then
  # 暂存所有更改
  git add .

  # 提交更改
  git commit -m "Update build files"

  echo "Build files have been added and committed."
else
  echo "No changes in the build directory."
fi
