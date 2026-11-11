# JSY Crystal 官网交接工作日记（WORKLOG）

> 每批改动在最上面追加一节。写清楚：日期、改了什么、为什么、涉及文件、怎么验证、还剩什么。**不要写任何账号、密码、令牌。**
> 站点：https://jsycrystal.com/（GitHub Pages，仓库 gaogaoapple/jsycrystal-site，分支 main，推送即发布）。
> 更早的历史说明见 `docs/PUBLISHING.md`、`AGENTS.md`、`README.md`。

---

## 2026-11-11 · 新落地页：/custom-beaded-bag-charms-keychains/ 天然石串珠包挂与钥匙扣定制

执行：Grok Bot（Apple 同意做包挂和钥匙扣定制落地页，并授权后续同类事项自行决定）。本批不 force push。

### 改了什么
1. **新页** `/custom-beaded-bag-charms-keychains/`（静态）。目标词 bag charm wholesale、custom keychain charms、beaded keychain、crystal bag charm、custom logo keychain。Title「Bag Charm Wholesale and Custom Keychain Charms」；H1 对准定制串珠包挂和钥匙扣，10 件起、可加 logo。内容：可做的产品（包挂、钥匙扣、手腕钥匙扣、手机挂/挂绳、流苏、logo 吊牌，可配不锈钢配件）、规格表、one-stop「What we handle」、6 类买家（精品/礼品/水晶店，普拉提和瑜伽馆，跑团和赛事，匹克球/帕德尔/网球和读书会，企业与活动礼，品牌贴牌）、6 步流程（发想法/logo → 效果图 → 样品确认 → 生产 → 质检 → 合并出货）、护理说明、询价清单、可塘位置、9 条 FAQ、页内表单（`_subject` = Website inquiry – Bag charms & keychains；alias、`_captcha=false`、绝对 `_next`、`_honey`；按钮旁 “We reply within 24 hours”）。CTA「Tell Us What You Need」。
2. **红线**：无价格/价格区间/目录或价格表；JSON-LD 只有 Organization / Service / FAQPage / BreadcrumbList（无 offers/priceRange）。MOQ、交期、运输时长沿用站内已有口径（10 件可混；打样后 15–30 天；快递约 7–10 天；海运约 25–35 天）。不宣称自有工厂。天然石写明远离汗液、泳池和长时间浸水，不写天然石防水；不锈钢配件可写防水、不褪色；黄铜镀金只写防水。不写儿童款，不写 925 银/珍珠，不写 ethical 等用语。
3. **同线产品（正文提及，暂不链未上线页）**：车挂、手机挂/挂绳、包带/手机链/眼镜链/挂绳等串珠链。后续这些落地页上线后再回补内链。
4. **图片**：仓库没有现成包挂/钥匙扣实拍，用 4 张概念图（标 Concept visualization；无文字、无 logo、无珍珠、无 925 银；以赠送/分享场景为主，已检查手部）：`media/custom-beaded-bag-charm-tote-gift-concept.webp`、`media/custom-beaded-keychains-keys-concept.webp`、`media/custom-beaded-charm-gift-boxes-concept.webp`、`media/custom-beaded-bag-and-phone-charms-concept.webp`。已压成 webp。
5. **内链**：首页双客群卡片（预渲染 + `site-home` 注入/补链）和 “What we handle” 的 charms 一行；页脚（静态壳 + React 原始页脚）；`/corporate-gifts/`、`/custom-gemstone-bracelet/`、`/wholesale-crystal-bracelets/` 相关链接。sitemap 优先级 0.9；llms.txt 已加入。
6. **JS 版本**：新建 `assets/site-20261111d.js`、`assets/site-home-20261111d.js`（STATIC_ROUTES 加新路径），全站 HTML 和 `tools/jsy_site.py` 引用已换；20261111c 保留回滚。
7. **日历**（`content/content-calendar.md`）延长并重排：生日石套装放 11-13（赶 12 月高峰）；企业礼品升级和节日交期指引仍留 11-14、11-15；其后交错插入车挂、叠戴套装、手机挂、混搭金属、串珠链、字母款；11-22～11-24 为三篇社群落地页（普拉提/瑜伽馆、跑团和赛事含 HYROX、匹克球/帕德尔/网球俱乐部），写之前先调研买家真实用语，并内链到配件产品页；原 11-14 起未写条目后移至 11-25～12-05。混搭金属页在 Apple 确认新线细节前只写通用口径。

### 验证
- `python3 tools/jsy_site.py check`：problems 0（THIN 为原有 /thank-you/）
- 推送后 curl 新页 200、缓存穿透渲染、点击内链；表单提交 1 条标明 TEST 的询盘，确认 302 到 `/thank-you/`（不二次跟 POST）；线上结果将补记

### 待办
- 后续配件页上线时，回补本页内链
- 11-13 生日石套装落地页；11-14 企业礼品升级（节日截单具体日期仍待 Apple 确认）
- 车挂页写明高温车内限制，不承诺不褪色
- 混搭金属页等 Apple 确认新线具体款式后再写细

---

## 2026-11-11 · 每日发文：/wholesale-crystal-bracelets/ 批发主词落地页

执行：Grok Bot（每日发文例程，日历 11-11 项）。本批不 force push。

### 改了什么
1. **新页** `/wholesale-crystal-bracelets/`（静态）。目标词 `wholesale crystal bracelets`，市场 US（AU/UK/CA 通用英文）。Title「Wholesale Crystal Bracelets from 10 Pieces, Mixed Stones」；H1 同主题。内容：10 件起混石的意义、4 个常见石种（复用仓库已有产品图 `media/products/*.webp`，alt 准确，lazy load）、规格表（石种/珠径/长度/绳/配件/吊牌卡片/包装/MOQ/交期/定价口径）、one-stop「What we handle」、4 类买家、5 步流程、「What to send us」清单、可塘位置、9 条 FAQ、页内表单（`_subject` = Website inquiry – Wholesale）、CTA「Tell Us What You Need」→ 表单与 `/inquiry/?intent=custom`。
2. **红线**：无任何价格/价格区间/目录或价格表承诺，统一「Pricing depends on quantity, design and packaging; we quote each inquiry.」；JSON-LD 只有 Organization / Service / FAQPage / BreadcrumbList（无 offers/priceRange）。MOQ、交期、运输时长只用站内已有口径（10 件混、打样后 15–30 天、快递约 7–10 天、海运约 25–35 天）。
3. **内链**：`tools/jsy_site.py` 页脚「Wholesale for distributors」加「Wholesale from 10 pcs, mixed」，React 页原始页脚同步；sitemap 优先级 0.9；llms.txt Main pages 加入。sitemap 30 个 URL。
4. **JS 版本**：新页必须进 STATIC_ROUTES，否则 React 接管显示 404。新建 `assets/site-20261111c.js`、`assets/site-home-20261111c.js`（只加一条路由），全站 HTML 和 `tools/jsy_site.py` 引用已换；20261111b 保留回滚。

### 验证
- `python3 tools/jsy_site.py check`：problems 0（THIN 为原有 /thank-you/）
- 本地 headless Chrome 截图：新页正常渲染（改 JS 前曾显示 React 404，已修复）；首页正常
- 线上（提交 db40098，约 2 分钟后）：新页 200、title 正确；site-20261111c.js 200；首页 200；线上 sitemap 已含新页

### 待办
- 11-12 已完成；下一项 11-13 corporate gifts 升级
- GSC：对新页请求编入索引（需 Apple 在 Search Console 操作或授权）

---

## 2026-11-10 · 去掉目录/价格表承诺，并撤掉全站标价

执行：Grok Bot（Apple 说明：产品目录要等与客户多轮沟通、需求明确之后才给，网站不要管目录；同时全站不得公布价格或价格区间）。本批不 force push。

### 改了什么
1. **撤掉目录/价格表承诺**：页头、菜单、页脚、表单旁的 “Get Catalog & Price Ranges”（原链到 `/inquiry/?intent=catalog`，承诺 24 小时内发目录和价格区间）全部改为需求导向入口。
   - 按钮文案：**Tell Us What You Need**，链到 `/inquiry/?intent=custom`。
   - 表单旁说明：Tell us your quantity, stones, packaging and timeline. We'll reply within 24 hours with suggestions and next steps.
   - 旧链接 `/inquiry/?intent=catalog` 仍可用，但按普通询盘处理，`_subject` 为 `Website inquiry – General`，页面上不再出现 catalog 文案。
   - “Wholesale catalog / View Full Catalog / Browse the catalog” 等买家可见说法改为 wholesale bracelets / Browse wholesale 等。
2. **撤掉全站标价**：产品页、批发页上的 “From x.xx USD”、价格区间、示例单价，以及 Product JSON-LD 里的 `offers` / `lowPrice` / `highPrice` 全部删除。统一口径：Pricing depends on quantity, design and packaging; we quote each inquiry. 样品费仍可提及，但不写金额。
3. **规则写入**：`AGENTS.md`、`content/content-calendar.md`、`content/benchmarks-top10.md` 注明后续每日发文（尤其 11-11 批发页）不得再加目录/价格表入口，也不得公布价格。
4. **资源**：`assets/site-20261111b.js`、`assets/site-home-20261111b.js`（旧版 20261111 保留回滚）；运行时会改写 React 包里残留的目录按钮和标价。表单本身未改：仍用原 FormSubmit 别名、`_captcha=false`、绝对 `_next`、`_honey`、按 intent 的 `_subject`、选填项和 “We reply within 24 hours”。

### 验证
- `python3 tools/jsy_site.py check`：problems 0
- 推送后 curl 首页、`/inquiry/`、`/inquiry/?intent=catalog`、`/custom-gemstone-bracelet/`、`/corporate-gifts/`，用 grep 确认买家可见文案不再出现 catalog，也不再出现标价
- 本次未再提交测试询盘（表单字段未改）

### 待办
- 11-11 写 `/wholesale-crystal-bracelets/`（10 件起、可混石种；**不写价格、不提供目录**）
- 11-13 企业礼品 mockup 与交期表；节日截单具体日期仍待 Apple 确认

---
## 2026-11-10 · 目录索取 CTA + 询价表单升级 + 日历对标重排

执行：Grok Bot（对标十佳行动 1/3；Apple KPI = 网站带来的真实询盘）。本批不 force push。

### 改了什么
1. **内容日历**（`content/content-calendar.md`）按 `benchmarks-top10.md` 重排：11-11 批发主词落地页、11-12 目录/表单升级（本日完成标 ✅）、11-13 企业礼品升级、11-14 贴牌、11-15 节日交期指引、11-22 紫水晶批发产品页、11-25 Why Ketang；「澳洲进口」「OEM vs 贴牌」移入 backlog。
2. **内部文档防抓取**：仓库有 `.nojekyll`（Jekyll 关闭），`_config.yml` exclude 不可用。已在 `robots.txt` 增加 `Disallow: /content/`、`/AGENTS.md`、`/WORKLOG.md`、`/README.md`、`/docs/`；sitemap 本就不含这些 md。
3. **Get Catalog & Price Ranges**：静态页头/`jsx-cta-catalog`、React 原始顶栏、页脚、表单旁均链到 `/inquiry/?intent=catalog`；承诺 24 小时内邮件发送目录与价格区间（尚无 PDF）。
4. **询价表单升级**（`/inquiry/`、`/contact/`、`/custom-gemstone-bracelet/`、`/oem-crystal-bracelet-manufacturer/` + 运行时 JS）：可选买家类型、数量档、needed-by、是否要包装；按钮旁 “We reply within 24 hours”；FormSubmit `_subject` 按页面/intent 区分；保留 alias、`_captcha=false`、绝对 `_next`、`_honey`。
5. **资源**：`assets/site-20261111.js`、`assets/site-home-20261111.js`；`tools/jsy_site.py` 指向新文件并刷新 shell。

### 验证
- `python3 tools/jsy_site.py check`：problems 0
- 推送后 curl 线上页头 CTA、询价页字段、robots Disallow
- curl POST FormSubmit 测试一单（标记 TEST），确认跳转 `/thank-you/`

### 待办
- 11-11 写 `/wholesale-crystal-bracelets/`（from 10 pcs, mixed；价格区间 on request）
- 目录 PDF / 可公开价格带（需 Apple 提供或授权制作）
- 11-13 企业礼品 mockup 与交期表；节日截单具体日期仍待 Apple 确认

---

## 2026-11-10 · 一站式定位（one-stop custom bracelet solution）

执行：Grok Bot（Apple 确认：独家海外代理可保留作背景；主推一站式，合作多家可塘工厂，客户不必分开找珠子/配件/包装）。本批不 force push。

### 改了什么
1. **定位主句**：JSY = one-stop custom bracelet solution supplier；合作 Shanwei/Ketang **partner factories**（复数）；不宣称自有工厂。独家海外代理保留在 About、`/factory/`、OEM「factory or trading company?」FAQ。
2. **首页**：hero 副标题改为 One partner… coordinated across our Shanwei partner factories…；双客群卡片与 lead 同步；新增 “What we handle for you” 区块；`assets/site-home-20261110b.js` 运行时 reinject/patch。
3. **转化页**写入 one-stop 导语 + What we handle 列表 + FAQ “Do I need separate suppliers for boxes, tags and beads?”（含 FAQ JSON-LD，凡原有 FAQPage 的页面）：`/custom-gemstone-bracelet/`、`/oem-crystal-bracelet-manufacturer/`、`/custom-bracelets-for-tour-groups/`、`/travel-group-gifts/`、`/corporate-gifts/`、`/private-label-jewelry/`（至少原始 HTML）、`/about/`、`/factory/`。
4. **Organization JSON-LD description**、`llms.txt`、页脚/`tools/jsy_site.py` shell 文案同步。
5. **`AGENTS.md` 增加 Positioning 节**；`content/topic-library.md`、`content/content-calendar.md` 注明后续文章（含 11-20 礼盒）带 one-stop 角度。

### 验证
- `python3 tools/jsy_site.py check`：problems 0（THIN 提示为原有 React 页）
- 推送后 curl 线上转化页 200 并抽查新文案

### 待办
- React 顶栏 Products/Services 仍待源码仓重建；private-label 可见层仍以 React 为主，one-stop 已写入原始 HTML，静态化时一并放进可见页。

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

## 2026-11-09 23:59 陌生客户全站测试 + 去掉 "Apple" 人名
- 自测（硬刷新后）：首页导航、两条客户线卡片、浮动按钮、页脚、3 个产品页、custom/private-label/travel/corporate 全部正常，无 404。
- 真实提交 1 条测试询盘（标注 TEST），提交后跳到 /thank-you/，不再出现 FormSubmit 验证页。
- 按 Apple 要求，对客户可见文案里不出现 "Apple" 人名：travel-group-gifts、choose-supplier、about 的静态页和 React 包字符串，统一改成 our team / JSY Crystal team。

## 2026-11-10 00:5x 选题库 + 16 天日历 + OEM 落地页 + 旅行团下单指南
- **研究**：11 个同行/竞品站（Aeva、Peiax、Crystalrocc、Auranova、Customcy、Bestone 等）；Google 自动补全（US/AU/MY/UK）；Notion「JSY 已回复客户」库只读提炼 10 个客户痛点（不含客户名）。结果写在 `content/topic-library.md`（34 题）和 `content/content-calendar.md`（11-10～11-25 每天 1 项）。
- **市场**（Apple 最终决定）：美国为主；澳洲若干；马来西亚 1–2 篇；欧洲轻量 1–2 篇只写定制/贴牌，不写欧盟法规，不做意大利专题。
- **新页 1**：`/oem-crystal-bracelet-manufacturer/`（静态）。Title 对准 OEM crystal bracelet manufacturer；规格表、4 类买家、6 步流程、复购一致性、可塘位置、8 条 FAQ（含“是工厂还是贸易公司”的如实回答：合作工厂独家海外代理）、页内询盘表单（_subject = OEM crystal bracelet inquiry）。JSON-LD：Organization / Service / FAQPage / BreadcrumbList。
- **新页 2**：`/custom-bracelets-for-tour-groups/`（静态文章，原定 11-11，提前上线）。倒推时间线、选石、珠径与手围、吊牌字要短、包装、看样、统一收货、报价清单、6 条 FAQ。图片：复用仓库已有概念图，另存为 `media/custom-bracelets-for-tour-groups-tiger-eye-tag-concept.webp`，alt 准确并标注 Concept visualization，lazy load。JSON-LD：BlogPosting / FAQPage / BreadcrumbList。
- **“其他材质”一句话**（Apple 要求）：custom 页（正文 + FAQ + FAQ JSON-LD）、private-label 和 shop 的原始 HTML 预渲染里加了“Need other bead materials or crystal items? Tell us…”。注意：private-label、shop 仍是 React 页，浏览器里看到的是 React 渲染内容，这句目前只在爬虫读到的原始 HTML 里；等 11-12 private-label 静态化时一起放进可见页面。
- **内链**：静态页页脚加 “OEM manufacturing”“Tour group ordering guide”；React 页原始页脚加 OEM；travel-group-gifts 原始 HTML 加指南链接；custom 页 Related 加 OEM。llms.txt 加两页和“其他材质”说明。sitemap 29 个 URL。
- **JS 版本**：`assets/site-20261110.js`、`assets/site-home-20261110.js`（STATIC_ROUTES 加两条新路径），全站 HTML 和 `tools/jsy_site.py` 引用已换；旧 20261109 文件保留回滚。
- **验证**：`jsy_site.py check` 0 问题（THIN 提示为原有 React 页）；本地 headless Chrome 截图两页正常渲染。
- **下一步**：11-12 把 private-label 改成静态页 + FAQ；之后按日历每天 1 篇。
