# JSY 正式网站：智能体操作入口

先读 [docs/PUBLISHING.md](docs/PUBLISHING.md)。本仓库是 jsycrystal.com 的 GitHub Pages 正式发布仓库；源码仓库为 gaogaoapple/jsycrystal-com-full-backup-2026。不要将仅修改源码误报为上线。

- 保留现有静态商品数据、图片、字体、CNAME、.nojekyll 和深链接404入口。
- 不用依赖Manus后端的全栈构建直接覆盖静态站。
- index.html 和404.html必须同时引用存在的新版本JS/CSS；旧资源保留供回滚。
- 按任务已有授权操作，遵守实际工具权限；文档不会授予额外账户/发布权限。
- 发布前做语法、渲染、资源和范围验证；发布后核对对应提交的Pages任务及正式页面。
- 不把表单可打开当作询盘可送达。未验证的提交、通知、登录、结账应明确注明。
- 可复用技能位于源码仓库 [.agents/skills/jsy-site-maintenance](https://github.com/gaogaoapple/jsycrystal-com-full-backup-2026/tree/main/.agents/skills/jsy-site-maintenance)，其他智能体可直接读SKILL.md。
