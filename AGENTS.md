# JSY 正式网站：智能体操作入口

先读 [WORKLOG.md](WORKLOG.md)（最新交接日记，2026-11-09 起）和 [docs/PUBLISHING.md](docs/PUBLISHING.md)。本仓库是 jsycrystal.com 的 GitHub Pages 正式发布仓库；源码仓库为 gaogaoapple/jsycrystal-com-full-backup-2026。不要将仅修改源码误报为上线。

- 保留现有静态商品数据、图片、字体、CNAME、.nojekyll 和深链接404入口。
- 不用依赖Manus后端的全栈构建直接覆盖静态站。
- index.html 和404.html必须同时引用存在的新版本JS/CSS；旧资源保留供回滚。
- 按任务已有授权操作，遵守实际工具权限；文档不会授予额外账户/发布权限。
- 发布前做语法、渲染、资源和范围验证；发布后核对对应提交的Pages任务及正式页面。
- 不把表单可打开当作询盘可送达。未验证的提交、通知、登录、结账应明确注明。
- 可复用技能位于源码仓库 [.agents/skills/jsy-site-maintenance](https://github.com/gaogaoapple/jsycrystal-com-full-backup-2026/tree/main/.agents/skills/jsy-site-maintenance)，其他智能体可直接读SKILL.md。

## Positioning（一站式口径，2026-11-10 起）

JSY Crystal Jewelry = **one-stop custom bracelet solution supplier**（一站式定制手链方案供应商）。

- 合作多家汕尾可塘 **partner factories / workshops**（复数）；接海外订单后向合作工厂 sourcing / 采购；**不宣称 JSY 自有工厂**。
- 客户只对接一家：天然石珠（主推；其他珠材可询）、吊坠/配件、刻字或 logo 吊牌、礼盒、卡片与包装；JSY 跨工厂协调、打样确认、质检、合并出货。
- 「汕尾可塘合作工厂的独家海外代理」可保留在 About、`/factory/`、以及 “factory or trading company?” FAQ 作背景；**转化页主句突出 one-stop**，不要把“代理”当唯一卖点。
- 红线不变：天然石优先；不写 925 银/珍珠；不写 ethical/fair-trade/sustainable/eco/charity；无 WhatsApp/电话；客户可见文案不出现 Apple 人名；不写欧盟法规专题。
- 不编造工厂数量、年限、产能、认证或客户名单。

