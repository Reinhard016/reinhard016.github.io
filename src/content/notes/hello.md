---
title: "Hello, 这是我的第一篇 Note"
date: 2026-07-28
summary: "随手记点想法、读论文的笔记、或者踩过的坑。写 Note 就是往 src/content/notes/ 里加一个 .md 文件这么简单。"
tags: ["meta", "getting-started"]
---

## 怎么加一篇新 Note

超级简单——在 `src/content/notes/` 目录里新建一个 `.md` 文件，顶部写好这段 frontmatter：

```markdown
---
title: "标题"
date: 2026-07-28
summary: "一句话摘要（会显示在列表里）"
tags: ["随便", "打标签"]
---

正文用 Markdown 写……
```

保存、`git push`，网站就自动更新了。

## 支持的东西

- **列表**、*强调*、`行内代码`
- 代码块（带语法高亮）
- 引用块：

> 保持热爱，奔赴山海。

- 图片：把图片丢到 `public/` 里，然后 `![描述](/图片名.png)`

## 一段代码示例

```python
def hello(name):
    return f"你好, {name}!"
```

就这些，开始写吧 ✍️