---
title: Windows和Linux的终端美化
published: 2025-01-12
description: '美化终端'
image: ''
tags: ["Linux", "Windows", "Themes"]
category: 'Themes'
draft: false 
lang: ''
pinned: false
author: Mikuas
---


## 如何安装Oh-My-Posh和Oh-My-Zsh

### 在Windows安装oh-my-posh
1. 安装`oh-my-posh`
```powershell
winget install JanDeDobbeleer.OhMyPosh --source winget

# 修改执行策略
set-ExecutionPolicy RemoteSigned

# 查看软件路径
(Get-Command oh-my-posh).Source

# 把软件路径bin目录添加到PATH
$env:Path += ";[软件路径/bin]"
```

2. 创建配置文件
```powershell
# 查看文件是否存在
Test-Path $PROFILE

# 创建
New-Item -Path $PROFILE -Type File -Force

# 初始化
oh-my-posh init pwsh | Invoke-Expression

notepad $PROFILE
# 添加内容, themeName是主题文件名
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/{themeName}.omp.json" | Invoke-Expression
```

3. 下载字体
[MesloLg Nerd Font](https://www.nerdfonts.com/font-downloads)

4. 查看所有主题
```powershell
get-Poshthemes
```


### 在Fedora安装oh-my-zsh

1. 安装 `oh-my-zsh`
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
2. 安装字体
```bash
sudo dnf install powerline-fonts
```

3. 修改默认终端为`/bin/zsh`

[下载主题](https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes)

4. 编辑配置文件
```bash
# 查看主题文件夹
ls ~/.oh-my-zsh/themes


# 更换主题文件 修改 ZSH_THEME
nano ~/.zshrc
```