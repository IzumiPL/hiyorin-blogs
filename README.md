# Izumi Blogs

![Izumi Blogs Preview](README.png)

个人博客网站，基于
[Astro](https://astro.build),
[Mizuki](https://github.com/matsuzaka-yuki/mizuki),
[Fuwari](https://github.com/saicaca/fuwari.git)
构建

---

## 文章格式说明

### 文件位置

文章存放在 `src/content/posts/` 目录下，按分类创建子目录：

```
src/content/posts/
├── avalonia/
│   ├── custom_item_control.md
│   └── dependency_injection.md
├── c_sharp/
│   └── r_w_json_file.md
├── network/
│   └── hydra.md
└── os/
    └── install_arch_linux.md
```

### Frontmatter 格式

每篇文章开头需要添加 YAML 格式的 frontmatter：

```yaml
---
title: 文章标题                    # 必填
published: 2024-01-13              # 必填，发布日期
updated: 2024-01-15                # 可选，更新日期
description: '文章描述'             # 可选，用于列表展示
image: 'guide/cover.webp'          # 可选，封面图片路径（相对于当前文章目录）
tags: ["Tag1", "Tag2"]             # 可选，标签数组
category: 'Category'               # 可选，分类
draft: false                       # 可选，是否为草稿（默认 false）
pinned: false                      # 可选，是否置顶（默认 false）
lang: ''                           # 可选，语言
author: 'Author'                   # 可选，作者
encrypted: false                   # 可选，是否加密（默认 false）
password: ''                       # 可选，加密密码
permalink: '/custom-url'           # 可选，自定义链接
sourceLink: ''                     # 可选，原文链接
licenseName: ''                    # 可选，许可证名称
licenseUrl: ''                     # 可选，许可证链接
---
```

### 字段说明

| 字段            | 类型       | 必填 | 默认值   | 说明                 |
|---------------|----------|----|-------|--------------------|
| `title`       | string   | ✅  | -     | 文章标题               |
| `published`   | date     | ✅  | -     | 发布日期，格式：YYYY-MM-DD |
| `updated`     | date     | ❌  | -     | 更新日期               |
| `description` | string   | ❌  | ""    | 文章描述，显示在列表页        |
| `image`       | string   | ❌  | ""    | 封面图片路径             |
| `tags`        | string[] | ❌  | []    | 标签列表               |
| `category`    | string   | ❌  | ""    | 分类名称               |
| `draft`       | boolean  | ❌  | false | 设为 true 则不会发布      |
| `pinned`      | boolean  | ❌  | false | 设为 true 则文章置顶      |
| `lang`        | string   | ❌  | ""    | 文章语言               |
| `author`      | string   | ❌  | ""    | 作者名称               |
| `encrypted`   | boolean  | ❌  | false | 是否加密文章             |
| `password`    | string   | ❌  | ""    | 加密文章的密码            |
| `permalink`   | string   | ❌  | -     | 自定义 URL 路径         |

### 封面图片

封面图片路径相对于文章所在目录：

```
src/content/posts/
├── guide/
│   ├── my-post.md
│   └── cover.webp      ← 图片和文章在同一目录
└── images/
    └── banner.png       ← 或放在 images 目录
```

在 frontmatter 中引用：

```yaml
image: 'cover.webp'           # 同目录下的图片
image: '../images/banner.png' # 上级目录的图片
```

### Markdown 扩展语法

#### 警告提示框

```markdown
:::note
这是普通提示
:::

:::tip
这是提示信息
:::

:::important
这是重要信息
:::

:::warning
这是警告信息
:::

:::caution
这是危险警告
:::
```

也支持 GitHub 风格：

```markdown
> [!NOTE]
> 这是普通提示

> [!TIP]
> 这是提示信息

> [!IMPORTANT]
> 这是重要信息

> [!WARNING]
> 这是警告信息

> [!CAUTION]
> 这是危险警告
```

#### 剧透文本

```markdown
:spoiler[这是隐藏的内容]
```

#### 嵌入视频

**YouTube：**

```html
<iframe width="100%" height="468" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```

**Bilibili：**

```html
<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV_ID&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
```

#### 图片

```markdown
![图片描述](images/photo.png)
```

#### 代码块

支持语法高亮和行号：

````markdown
```python
def hello():
    print("Hello, World!")
```
````

### 文章示例

```markdown
---
title: 我的第一篇文章
published: 2024-01-13
description: '这是一篇示例文章'
image: 'cover.webp'
tags: ["教程", "入门"]
category: '教程'
draft: false
pinned: false
author: Mikuas
---

## 引言

这是文章的开头部分。

## 正文

:::tip
这是一个提示框
:::

这里是正文内容。

## 代码示例

```python
print("Hello!")
```

### 响应式布局

- **手机端**（< 768px）：封面图片显示在顶部
- **平板端**（768px - 1023px）：封面图片显示在右侧
- **桌面端**（≥ 1024px）：左侧边栏 + 主内容
- **大桌面**（≥ 1280px）：左侧边栏 + 主内容 + 右侧边栏
