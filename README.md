# 我的个人主页

用 [Astro](https://astro.build) 搭的酷炫个人主页，托管在 GitHub Pages，`git push` 后自动部署。

## 本地预览

```bash
npm install       # 只需第一次
npm run dev       # 打开 http://localhost:4321
```

## 日常怎么改内容

| 想改什么 | 改哪个文件 |
|---|---|
| 首页标题 / 简介 / 社交链接 | `src/pages/index.astro` |
| 论文列表 | `src/data/papers.js`（往数组里加一项即可） |
| 加一篇 Note | 在 `src/content/notes/` 新建一个 `.md` 文件 |
| 配色 / 视觉风格 | `src/styles/global.css` 顶部的 `:root` 变量 |
| 动态背景效果 | `src/components/Background.astro` |
| 图片 | 丢进 `public/`，用 `/文件名.png` 引用 |

## 部署到 GitHub Pages（一次性设置）

1. **改地址**：编辑 `astro.config.mjs`，把 `site` 里的 `YOUR_USERNAME` 换成你的 GitHub 用户名。
   - 如果仓库名就叫 `<用户名>.github.io` → 只改 `site`，`base` 保持注释状态。
   - 如果仓库名是别的（如 `homepage`）→ 还要取消 `base: '/homepage'` 的注释。
2. **改链接占位符**：把 `index.astro` 里的 `YOUR_USERNAME`、`you@example.com`、Scholar 链接换成你的。
3. 在 GitHub 新建仓库，把代码 push 上去（见下方命令）。
4. GitHub 仓库页 → **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。
5. 之后每次 `git push` 到 `main`，几分钟后网站自动更新。

## 首次推送命令

```bash
git init
git add -A
git commit -m "init homepage"
git branch -M main
git remote add origin https://github.com/<用户名>/<仓库名>.git
git push -u origin main
```