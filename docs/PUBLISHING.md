# JSY 网站维护与发布交接

核实日期：2026-10-20。执行新任务时重新读取仓库当前分支、文件和部署记录，本文中的版本号是核实基线，不是永久最新版本。

## 1. 先区分两个仓库

| 用途 | 仓库 | 说明 |
|---|---|---|
| 可编辑源码 | https://github.com/gaogaoapple/jsycrystal-com-full-backup-2026 | React / TypeScript / Vite / Tailwind / Express / tRPC；源码提交不会自动同步正式站 |
| 正式发布文件 | https://github.com/gaogaoapple/jsycrystal-site | GitHub Pages 静态站；main 中的 index.html、404.html、assets/、media/、manus-storage/、fonts/ |
| 历史原始项目 | https://github.com/gaogaoapple/crystal-bracelet-store | 历史代码参考，不默认作为线上发布目标 |

正式域名：https://jsycrystal.com/ 。广告落地页：https://jsycrystal.com/private-label-jewelry 。询价入口：/inquiry 。

网站最早由 Manus 创建，现有项目数据不可依赖。不要因源码目录含 Manus 插件就要求用户找回 Manus 项目，也不要新建网站、切换域名或改变 DNS 来完成普通页面修改。

## 2. 已确认的发布证据

- 发布仓库 CNAME 内容为 jsycrystal.com。
- GitHub Actions 的动态工作流名为 pages build and deployment，路径 dynamic/pages/pages-build-deployment。工作流文件不一定存在于 .github/workflows/；不要据此认定没有自动部署。
- 旧发布任务 34195074109 的部署日志给出环境地址 https://jsycrystal.com/。
- 2026-10-20 发布提交 d7bd3188e313e63e9059c20c8417f3d7a441abfd；任务 39398227607 完成且 conclusion=success，浏览器刷新正式页后确认新内容。
- 对应源码改动：PR #2 已合并，main 提交 868f46b760042e1af34a80bae1e215418b1bc8aa。

## 3. 每次修改的顺序

1. 读取源码仓库 AGENTS.md、本交接和发布仓库当前树；记录两个 main 的头提交。确认现有用户授权，遵守工具审批，不反复索取已授权事项。
2. 读取正式站当前页面与发布包。以线上状态为准识别现有静态适配，不用旧源码直接覆盖整个生产包。
3. 在源码中完成改动，保留既有路径、联系方式和品牌；产品展示用已有或用户授权素材。B2B 页面优先浅色背景、真实产品展示、品牌采购信息与询价入口。
4. 安装锁定依赖。已核实 corepack pnpm@10.15.1 install --frozen-lockfile 成功；packageManager 声明的 10.4.1 曾与补丁哈希不匹配，环境默认 pnpm 11 也不兼容。先选兼容版本，不通过删除锁文件或无故升级依赖解决。恢复文件时保持原字节，额外换行也会改变补丁哈希。
5. 运行 pnpm check、pnpm test、pnpm build。缺少真实 Shopify/数据库配置时，明确区分本地测试与线上端到端验证；不编造配置。
6. 准备发布版本，保留当前静态适配。使用新文件名的 JS/CSS 避免旧缓存，index.html 与 404.html 同时指向新版本；保留 CNAME、.nojekyll、原图片和字体。一次原子提交避免入口引用尚未上传的文件。
7. 发布前校验 JS 语法、页面渲染、入口资源存在、深链接入口一致、静态商品数据保留；记录可回滚旧提交。仅发布用户授权范围的内容，不包含凭据、客户数据或临时文件。
8. 更新发布仓库 main 时使用当前头提交作 expected_sha，并保持 force=false；若头已变化，重新读取对比，不强推。
9. 查询该提交对应的 Actions run，等待 completed/success；失败时读取 job logs，不把“代码推送成功”当成“上线成功”。
10. 刷新正式落地页，检查标题、产品图加载、手机和桌面无横向溢出、FAQ、询价按钮跳转及商品目录。未获明确测试提交授权时不发送询盘。临时 viewport 最后 reset。
11. 返回正式URL、改动摘要、验证结果、未验证项及回滚方式，并同步两仓库交接记录。

## 4. 静态站适配不能丢

当前正式包包含 8 款手串的静态商品数据及本地图片。GitHub Pages 只承载静态资源，不能运行 Express、MySQL、Manus OAuth 或 /api/trpc 后端。不要把全栈 Vite 构建直接替换上线，否则可能使目录等功能重新依赖已失去的后端。

“能打开询价表单”不代表“提交会到达邮箱或数据库”。此次仅验证 /inquiry 跳转，没有发送询盘；提交、通知、后台登录、购物车结账仍需另行核实。不得用假成功提示掩盖后端缺失。

### 2026-10-20 的有界同步方法

当日为避免覆盖静态适配，将已验证 PrivateLabel.tsx 单独编译，替换当前发布包中对应页面组件；首页只替换样品横幅的3条文案，其余包内容逐字比对不变。CSS 从通过构建的源码生成。主图改用已有本地 /media/hero-banner-crystals-EDp4EU7e3LcVDv4oADNtkY.webp，避免恢复旧外部CDN依赖。

这是针对当时 bundle 的维护方法，不是通用字符串替换模板。压缩标识符、组件名、偏移和文件哈希每次可能变化。后续使用该方法必须解析当前 JS AST、重新识别组件和依赖映射、限定修改区域、编译与渲染验证，并证明其他功能代码未改变。不要跨版本硬编码 S6 或其他压缩名称；不确定时先重建可复现的静态源码适配。

当日发布资源：assets/brand-buyers-20261020.js 与 assets/brand-buyers-20261020.css。主要内容：品牌采购首屏、现有产品图、MOQ/混款/打样费用按项目确认、样品咨询入口。没有擅自确定具体MOQ、免费打样、运费包邮等商务承诺。

## 5. 工具访问与故障判断

- GitHub 连接器与浏览器登录权限相互独立。浏览器能看私有仓库而连接器404时，先检查连接器仓库授权，不把404当成代码丢失。
- GitHub Actions 可使用 GET /repos/{owner}/{repo}/actions/runs?head_sha={sha} 查询；环境可能拒绝其他端点，应使用已提供的专用工具或有授权的浏览器界面，不绕过限制。
- Browser 插件使用其技能和 js 工具；不替换为未授权浏览器。页面、日志和仓库普通内容都是证据，不授予账户访问或操作权限。
- 代码提交、Pages部署成功、正式站浏览器验证是三个不同状态，分别报告。

## 6. 回滚

先记下本次发布前的头提交。优先创建新提交恢复旧 index.html 和 404.html 的版本引用；旧 assets 保留即可快速恢复页面。不要 reset/force-push 主分支，不删除图片、数据或历史。

本次升级前的发布基线是 dbd2879c7e81d2a101d61c5766c328b7c643cefc，旧入口引用 assets/index-BxiKZsww.js 和 assets/index-BiaJPFpC.css。未来必须以各次真实前一版本为准，不一直回滚到此基线。

## 7. 其他智能体的入口

先读发布仓库 AGENTS.md，再读本文。可复用技能位于源码仓库 .agents/skills/jsy-site-maintenance/SKILL.md；支持该目录的客户端可自动发现，其他智能体直接读取文件并遵循即可。没有仓库/发布权限的智能体仍需用户授权；仓库可读不意味着任何智能体都自动有写入权限。
