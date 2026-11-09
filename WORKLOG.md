# JSY Crystal 官网交接工作日记（WORKLOG）

> 每批改动在最上面追加一节。写清楚：日期、改了什么、为什么、涉及文件、怎么验证、还剩什么。**不要写任何账号、密码、令牌。**
> 站点：https://jsycrystal.com/（GitHub Pages，仓库 gaogaoapple/jsycrystal-site，分支 main，推送即发布）。
> 更早的历史说明见 `docs/PUBLISHING.md`、`AGENTS.md`、`README.md`。

---

## 2026-11-09 · 去掉 WhatsApp、表单直达感谢页、首页双客群路径

执行：Grok Bot（Apple 授权：全站可改可发）。本批不 force push。

### 目标
询盘只走邮件/表单；提交后直达 `/thank-you/`（不再卡 FormSubmit 验证码页）；首页突出两类买家路径。

### 改了什么
1. **全站去掉 WhatsApp / 手机号对外露出**
   - `tools/jsy_site.py` 页头/页脚/悬浮条不再生成 wa.me；改为 Email + Send inquiry。
   - 静态 HTML、JSON-LD `telephone`、llms.txt、产品页 CTA、about 正文中的 WhatsApp 说法已清掉。
   - React 包（`whatsapp-20261020.js` / `home-image-20261109.js`）不改压缩源码；由 `assets/site-20261109.js` 与 `site-home-20261109.js` 运行时隐藏/删除 `a[href*="wa.me"]`、`.jsy-whatsapp`，并注入 Email 悬浮条。
2. **FormSubmit 跳过验证码页**
   - 所有表单（静态 + React 注入）增加 `name="_captcha" value="false"`；保留绝对地址 `_next=https://jsycrystal.com/thank-you/` 与蜜罐 `_honey`。
   - **未改** FormSubmit 别名 `84de44e7c16b22f5baa08c38d60c1461`（不回退到明文邮箱）。
   - 未加 `_autoresponse`。
3. **`/thank-you/` 文案**
   - “We'll reply to the email address you entered within 24 hours.”
   - 说明中国时区（GMT+8）时差；提醒查垃圾箱；不出现 “Apple” 人名；无 WhatsApp。
4. **联系/询盘页文案**
   - 标题与导语改为邮件/表单；React 渲染后也会被脚本改成 “our team / JSY Crystal”。
5. **首页双路径（hero 正下方）**
   - A. Custom for end clients → travel / corporate / boutique custom
   - B. Wholesale for distributors → shop + private label
   - 各有 Get a quote → `/inquiry/`；静态预渲染 + React 加载后注入；样式 `assets/buyer-paths-20261109.css`
   - 静态页导航改为 Travel Groups / Corporate Gifts / Custom Bracelets / Wholesale / Private Label / Contact；页脚两列对应两类买家；React 页另加 `jsy-subnav` 次级导航。
   - DIY 未做（预留空间、无占位文案）。

### 涉及文件
- 修改：几乎全部 `*/index.html`、`404.html`、`index.html`、`llms.txt`、`tools/jsy_site.py`、`assets/site-20261109.js`、`assets/site-home-20261109.js`、`assets/static-shell-20261109.css`
- 新增：`assets/buyer-paths-20261109.css`
- 未改压缩包文件名（仍引用 `whatsapp-20261020.*` 作为旧 bundle 文件名，仅品牌样式，页面上不再露出 WhatsApp 联系方式）

### 验证
- `python3 tools/jsy_site.py check`：problems 0
- 本地 headless：home/inquiry/contact/custom 可见 DOM 无 wa.me/WhatsApp/8898；inquiry/contact/custom 表单含 `_captcha=false` 与绝对 `_next`；别名保留
- 截图：`/workspace/jsy-verify/home-buyer-paths.png`、`home-buyer-paths-mobile.png`、`inquiry-desktop.png`、`thankyou-desktop.png`、`home-desktop.png`、`home-mobile.png`
- **未真实提交表单**（避免打进真实邮箱）

### 待办
- React 顶栏仍是旧的 Products/Services（压缩包内）；已用 `jsy-subnav` 与静态壳导航补两类路径。若要彻底改顶栏，需改源码仓重建 bundle。
- Apple 之前的 FormSubmit 送达测试若已完成可在下轮确认；HTTP→HTTPS 500 仍在域名侧。

---

## 2026-11-09 · 去掉 WhatsApp、表单直达感谢页、首页双客群路径

执行：Grok Bot（Apple 授权：全站可改可发）。本批不 force push。

### 目标
询盘只走邮件/表单；提交后直达 `/thank-you/`（不再卡 FormSubmit 验证码页）；首页突出两类买家路径。

### 改了什么
1. **全站去掉 WhatsApp / 手机号对外露出**
   - `tools/jsy_site.py` 页头/页脚/悬浮条不再生成 wa.me；改为 Email + Send inquiry。
   - 静态 HTML、JSON-LD `telephone`、llms.txt、产品页 CTA、about 正文中的 WhatsApp 说法已清掉。
   - React 包（`whatsapp-20261020.js` / `home-image-20261109.js`）不改压缩源码；由 `assets/site-20261109.js` 与 `site-home-20261109.js` 运行时隐藏/删除 `a[href*="wa.me"]`、`.jsy-whatsapp`，并注入 Email 悬浮条。
2. **FormSubmit 跳过验证码页**
   - 所有表单（静态 + React 注入）增加 `name="_captcha" value="false"`；保留绝对地址 `_next=https://jsycrystal.com/thank-you/` 与蜜罐 `_honey`。
   - **未改** FormSubmit 别名 `84de44e7c16b22f5baa08c38d60c1461`（不回退到明文邮箱）。
   - 未加 `_autoresponse`。
3. **`/thank-you/` 文案**
   - “We'll reply to the email address you entered within 24 hours.”
   - 说明中国时区（GMT+8）时差；提醒查垃圾箱；不出现 “Apple” 人名；无 WhatsApp。
4. **联系/询盘页文案**
   - 标题与导语改为邮件/表单；React 渲染后也会被脚本改成 “our team / JSY Crystal”。
5. **首页双路径（hero 正下方）**
   - A. Custom for end clients → travel / corporate / boutique custom
   - B. Wholesale for distributors → shop + private label
   - 各有 Get a quote → `/inquiry/`；静态预渲染 + React 加载后注入；样式 `assets/buyer-paths-20261109.css`
   - 静态页导航改为 Travel Groups / Corporate Gifts / Custom Bracelets / Wholesale / Private Label / Contact；页脚两列对应两类买家；React 页另加 `jsy-subnav` 次级导航。
   - DIY 未做（预留空间、无占位文案）。

### 涉及文件
- 修改：几乎全部 `*/index.html`、`404.html`、`index.html`、`llms.txt`、`tools/jsy_site.py`、`assets/site-20261109.js`、`assets/site-home-20261109.js`、`assets/static-shell-20261109.css`
- 新增：`assets/buyer-paths-20261109.css`
- 未改压缩包文件名（仍引用 `whatsapp-20261020.*` 作为旧 bundle 文件名，仅品牌样式，页面上不再露出 WhatsApp 联系方式）

### 验证
- `python3 tools/jsy_site.py check`：problems 0
- 本地 headless：home/inquiry/contact/custom 可见 DOM 无 wa.me/WhatsApp/8898；inquiry/contact/custom 表单含 `_captcha=false` 与绝对 `_next`；别名保留
- 截图：`/workspace/jsy-verify/home-buyer-paths.png`、`home-buyer-paths-mobile.png`、`inquiry-desktop.png`、`thankyou-desktop.png`、`home-desktop.png`、`home-mobile.png`
- **未真实提交表单**（避免打进真实邮箱）

### 待办
- React 顶栏仍是旧的 Products/Services（压缩包内）；已用 `jsy-subnav` 与静态壳导航补两类路径。若要彻底改顶栏，需改源码仓重建 bundle。
- Apple 之前的 FormSubmit 送达测试若已完成可在下轮确认；HTTP→HTTPS 500 仍在域名侧。

---

## 2026-11-09 · 第一批：修坏链接、静态可读、定制落地页、询盘成功页

执行：Grok Bot（受 Apple 授权：网站全权负责，可直接修改并发布）。改前基线提交：`f7ea9fac4aa22756326d29b67b74ff5757727f9c`（`git log` 中 “fix: restore homepage hero…”）。回滚方式：新建提交恢复受影响文件，**不要 force push**。

### 目标
11 月底前官网至少拿到 1 个真实 B2B 询盘。官网迄今约 3 个询盘（含现在的美国订单、9 月意大利客户），客户主要搜 custom / OEM / private label / DIY 类词；最早带来询盘的是 2026 年 5 月的纯静态 HTML 版。

### GSC 基线（2026-11-09 读取；数据区间 2026-08-13～11-07，资源 sc-domain:jsycrystal.com）
- 合计：20 次点击，189 次展示，CTR 10.6%，平均排名 21.2；国家里没有意大利。
- 搜索词（点击/展示/排名）：custom gemstone bracelets 0/21/56；custom stone-set bracelet manufacturer 0/20/16.4；custom gemstone bracelet 0/9/51；custom gemstone bracelet design 0/8/47；jsy designs 0/6/9.3。
- 页面：`/` 19/79；`/custom-gemstone-bracelet` 0/89（美国 52）；`/shop` 0/21；`/products/amethyst-crystal-bracelet` 1/12；`/contact` 1/6；`/private-label-jewelry/` 1/4。
- 索引（11-06）：8 已收录，49 未收录。重定向错误 9（8 个 `/products/*` 无斜杠 + `/shop`）；5xx 9；404 6（strawberry-quartz、snow-phantom-quartz、`/how-it-works`、`/contact`、`/$`、`/shop?filter=amethyst`）；软 404 4（`/factory`、`/choose-…supplier`、`/gemstone-bracelet-bead-size-guide`、`/corporate-gifts`）；已抓取未编入 6；已发现未编入 1（`/about`）。
- 原因判断：10-26 前大部分路径还没有静态文件，React 应用对未知路径渲染 404 内容 → 软 404 / 404；11-09 上午之前的版本里 React 会覆盖静态正文。到今天无斜杠路径已是 GitHub 301 → 带斜杠 200，GSC 里的错误多是历史记录，需要在 GSC 里点「验证修复」。

### 本批改了什么、为什么
1. **坏 URL 全部修好**
   - 恢复 3 个曾有收录/展示但 404 的旧产品页为真实静态页面：`/products/strawberry-quartz-crystal-bracelet/`、`/products/snow-phantom-quartz-crystal-bracelet/`、`/products/super-seven-crystal-bracelet/`（仓库里没有这三种的图片和价格，页面写“Contact us for current pricing”，并说明可索要批次照片；不加 Product 结构化数据，避免缺 offers 报错）。
   - 2026-05 旧站的 URL 做跳转页（目录 index.html + meta refresh 0 + JS replace + canonical 指向新地址 + 可点击链接）：`/products/`、`/products/bracelets/`、`/products/bracelets/materials/`、`/products/bangles/`、`/products/rings-necklaces-pendants/`、`/products/decorative-crystals/` → `/shop/`；`/products/bracelets/materials/amethyst/` → `/products/amethyst-crystal-bracelet/`；`/$/` → `/`。
   - GitHub Pages 不能对单个 URL 发 301，这是能做到的最接近的方式；跳转页不进 sitemap。
2. **所有页面原始 HTML 可读（不靠 JS）**
   - 删除每个 HTML 里内联的 Manus 预览运行时 `<script id="manus-runtime">`（约 366KB/页，只用于 Manus 编辑器预览，不渲染网站内容）。页面体积从约 370–400KB 降到 3–35KB。本地 headless Chrome 验证 React 页面照常渲染。
   - 首页 `index.html`：`#root` 里放入 React 首页的预渲染快照（H1、服务、8 个产品、流程、联系方式、询盘按钮都在原始 HTML 里），React 加载后照常接管。标题/描述改为对准 custom gemstone bracelet manufacturer、OEM、private label。
   - 其余 React 页面（shop、8 个产品、contact、inquiry、how-it-works、projects、private-label、travel）：原有预渲染正文保留；原始 HTML 的顶部导航换成完整链接（含 Custom Bracelets），末尾加联系方式与内链（标记 `<!--jsy:rawnav-->`、`<!--jsy:rawfooter-->`）。
   - 静态页（不加载 React）：about、factory、ketang、corporate-gifts、3 篇指南，加上本批新做的 custom-gemstone-bracelet、thank-you、3 个恢复的产品页。统一新页头（logo + 导航 + “Submit Your Inquiry”）、页脚（邮箱、WhatsApp、内链）和底部 WhatsApp/询盘悬浮条，样式在 `assets/static-shell-20261109.css`。
3. **`/custom-gemstone-bracelet/` 重做为核心落地页（静态）**
   - Title：Custom Gemstone Bracelets — OEM Stone Bracelet Manufacturer | JSY Crystal；H1：Custom Gemstone Bracelets, made to your spec。
   - 内容：可定制项表格、OEM / 白牌 / 新设计三种合作方式、6 步流程（样品、15–30 天、运输时间）、11 种天然石（链接到产品页）、报价清单、8 条 FAQ、页内询盘表单 + WhatsApp + 邮箱。
   - 结构化数据：Organization、Service、FAQPage、BreadcrumbList。
   - 所有数字都来自仓库已有内容：MOQ 每单 10 件可混、珠径 6/8/10/12mm、手围 15–20cm、大货 15–30 天、DHL/FedEx 7–10 天、海运 25–35 天、24 小时内回复、20+ 种石头、NDA 可签。样品费写成“按项目报价，是否抵扣写在报价里”（仓库里几页说法不一致，取最保守的）。
   - 互链：首页（React 首页本来就有链接）、全站新页头/页脚、private-label 原始 HTML、产品页、llms.txt。
4. **询盘表单**
   - 收件地址不变：FormSubmit → marketing@jsycrystal.com；蜜罐 `_honey` 保留。
   - 新增 `/thank-you/`（noindex，不进 sitemap）。静态表单直接带 `_next=https://jsycrystal.com/thank-you/`；React 渲染的表单由 `assets/site-20261109.js` 自动补 `_next`（MutationObserver）。
   - **未真实提交测试**（按要求）。FormSubmit 对一个新地址的第一次提交需要在 marketing@ 邮箱里点激活邮件——是否已激活未知，见待办 1。
5. **sitemap / robots / llms / canonical**
   - `sitemap.xml`：27 个 200 的规范 URL（全部 `https://jsycrystal.com/...` 带斜杠），lastmod 2026-11-09。
   - `robots.txt`：允许全部，并显式允许 Googlebot、Bingbot、GPTBot、OAI-SearchBot、ChatGPT-User、ClaudeBot、Claude-SearchBot、PerplexityBot、Google-Extended、Applebot；声明 sitemap。
   - 新增 `llms.txt`：业务要点、联系方式、主要页面。
6. **图片**：不新增内容图片。非首屏 `<img>` 补 `loading="lazy" decoding="async"`；首页主图加 `fetchpriority="high"`。`manus-storage/jsy-logo-full_cd68681f.png`（React 页头/页脚 logo）原图 1254px/1.9MB，原地缩到 640px/约 210KB（同文件名，画面不变）。新增 `media/jsy-crystal-jewelry-logo-128.webp`（官方 logo 的 128px 缩小版，供静态页头用，约 6KB）。

### 涉及文件
- 新增：`assets/site-20261109.js`、`assets/site-home-20261109.js`、`assets/static-shell-20261109.css`、`tools/jsy_site.py`、`llms.txt`、`WORKLOG.md`、`thank-you/`、3 个产品目录、8 个跳转目录（`products/…`、`$/`）、`media/jsy-crystal-jewelry-logo-128.webp`
- 修改：全部页面 HTML、`404.html`、`sitemap.xml`、`robots.txt`、`manus-storage/jsy-logo-full_cd68681f.png`、`AGENTS.md`（加 WORKLOG 指引）
- 保留不动：旧 `assets/*` 版本（回滚用）、`CNAME`、`.nojekyll`、`media/` 原图、字体、Pages 设置。

### 站点结构说明（给下一位接手的人）
- **两种页面**
  - React 页面：`<html lang="en">`，加载 `/assets/site-20261109.js`（首页和 404 用 `site-home-20261109.js`），再动态加载旧的 React 包（`whatsapp-20261020.js` / `home-image-20261109.js`）。`#root` 里的 HTML 是给爬虫看的预渲染，React 会替换它。改这些页面的可见内容需要改 React 源码（另一个仓库 `jsycrystal-com-full-backup-2026`）或者把页面改成静态页。
  - 静态页：`<html lang="en" data-jsy-render-mode="static">`，路径必须同时在 `assets/site-20261109.js` 的 `STATIC_ROUTES` 里，否则 React 会覆盖。
- **新增一个静态页**：复制 `custom-gemstone-bracelet/index.html` 或 `products/strawberry-quartz-crystal-bracelet/index.html` 到新目录 `新路径/index.html`，改 title / description / canonical / og / JSON-LD / 正文；在 `assets/site-20261109.js` 的 `STATIC_ROUTES` 里加路径（改了 JS 最好换新文件名避免缓存，并用脚本替换所有 HTML 的引用）；然后运行 `python3 tools/jsy_site.py all`。
- **`tools/jsy_site.py`**：`shell` 刷新静态页的页头/页脚和 React 页的原始导航；`clean` 去 Manus 运行时、换资源版本、补懒加载；`sitemap` 重建 sitemap（只收 canonical 等于自身、非 noindex、非跳转的页面，lastmod 为当天）；`check` 查站内死链、JSON-LD、H1、红线词。
- **跳转页**：目录 + index.html，含 `meta refresh`、`location.replace`、canonical、可点击链接。
- **询盘去向**：所有表单 POST 到 `https://formsubmit.co/marketing@jsycrystal.com`，成功后到 `/thank-you/`；WhatsApp `https://wa.me/8613688980405`（Apple）；邮箱 marketing@jsycrystal.com。
- **发布**：push 到 main → GitHub Actions “pages build and deployment” 自动部署，约 1–2 分钟。用 `gh run list --repo gaogaoapple/jsycrystal-site` 看状态，再用 curl 查线上。
- **内容红线**：只写天然石；不写 925 银、珍珠；不用 ethical / fair-trade / sustainable / eco / charity 等说法；不编造认证、客户、数字（MOQ、交期、价格只用已有信息，否则写 contact us）。

### 验证（本批）
- 本地静态服务器：站内链接 0 死链；全部 JSON-LD 可解析；每页原始 HTML 有且只有 1 个 H1；红线词 0 命中。
- 本地 headless Chrome：React 页面（首页、contact、inquiry、private-label、产品、shop、how-it-works）正常渲染；React 表单已带 `_next`。
- 线上（提交 2765299，Pages run 42633567446 success，2026-11-09 22:21 北京时间部署完成）：GSC 列出的坏 URL 全部变为 200，或 301 → 200，跳转页 200 + meta refresh；sitemap 27 个 URL；首页原始 HTML 正文约 7,800 字符（改前约 190）；custom 页 JSON-LD 为 Organization / Service / FAQPage / BreadcrumbList；渲染后的 /contact/ 表单带 `_next`。
- 仍然：`http://jsycrystal.com/` 返回 500（见待办 3）。

### 待办（按优先级）
1. **【必须，Apple 本人做】FormSubmit 送达测试**：用自己的另一个邮箱在 https://jsycrystal.com/inquiry/ 提交一条测试；去 marketing@jsycrystal.com（含垃圾箱）找 FormSubmit 的激活邮件并点确认；再提交一次，确认收到邮件、能直接回复客户、提交后跳到 thank-you 页。没做这一步之前，表单是否能收到询盘都不能保证。
2. **GSC**：提交新 sitemap；对「重定向错误 / 404 / 软 404 / 5xx」各点「验证修复」；对 `/custom-gemstone-bracelet/`、首页、3 个恢复的产品页请求编入索引。1–2 周后看 custom gemstone bracelets 的排名变化。
3. **HTTP 500**：`http://jsycrystal.com/` 与 `http://www.jsycrystal.com/` 返回 Pingora 500（不是 GitHub），在域名/CDN 服务商那边改成 301 到 https。仓库内改不了。
4. **OEM / private label 落地页**：新做 `/oem-crystal-bracelet-manufacturer/` 静态页；把 `/private-label-jewelry/`（广告落地页，目前 React 渲染）改成静态页并加 FAQ。
5. **DIY**：先跟 Apple 确认是否真的供应散珠/半成品；确认后再做 `/diy-natural-stone-beads/`（只写天然石）。
6. **产品页**：8 个 React 产品页原始正文偏少（约 1,450 字符），可改成静态页并补规格/FAQ；为 strawberry、snow phantom、super seven 拍真实产品图后补图和 Product 结构化数据。
7. **图片**：corporate/travel 的 JPG（400–620KB）转 WebP；考虑 image sitemap。
8. **`/ketang/`**：介绍汕尾可塘珠宝/水晶集散地，与业务相关，保留；如长期不被收录，可合并进 `/factory/`。
9. **内容**：按审计选题写 2–3 篇文章（OEM vs private label、custom bracelet brief、MOQ 10 件试单）。

## 2026-11-09 23:3x 表单激活
- Apple 已在 marketing@jsycrystal.com 收到 FormSubmit 激活邮件并点了 Activate。
- 按 FormSubmit 建议，把 contact、inquiry、custom-gemstone-bracelet 静态表单和 home-image、whatsapp 两个 React 包里的表单地址，从明文邮箱换成 FormSubmit 别名（不再在表单 action 里暴露邮箱）。mailto 链接保持不变。
- 待办：Apple 再提交一次真实测试，确认收信和跳转 /thank-you/。
