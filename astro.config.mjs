// @ts-check
import { defineConfig } from 'astro/config';

// ⚠️ 部署前请把下面的 site 改成你的地址：
//   - 如果仓库名叫 <用户名>.github.io   →  site: 'https://<用户名>.github.io'   (base 不用改，保持 '/')
//   - 如果是普通仓库名，比如 homepage    →  site: 'https://<用户名>.github.io', base: '/homepage'
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  // base: '/homepage',   // 只有仓库名不是 <用户名>.github.io 时才需要取消注释并改成你的仓库名
});
