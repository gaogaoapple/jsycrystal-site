# JSY Crystal 官网交接工作日记（WORKLOG）

> 每批改动在最上面追加一节。写清楚：日期、改了什么、为什么、涉及文件、怎么验证、还剩什么。**不要写任何账号、密码、令牌。**
> 站点：https://jsycrystal.com/（GitHub Pages，仓库 gaogaoapple/jsycrystal-site，分支 main，推送即发布）。
> 更早的历史说明见 `docs/PUBLISHING.md`、`AGENTS.md`、`README.md`。

---

## 2026-11-20 · 每日发文：/custom-beaded-chains-straps/ 定制串珠包链、手机链、眼镜链与挂绳落地页

执行：Grok Bot（每日发文例程，日历 11-20 项）。提交 7bb1fee，约 09:13 Asia/Shanghai 线上确认 200。

### 改了什么
1. **新页** /custom-beaded-chains-straps/（静态）。目标词 beaded bag strap / phone chain / glasses chain / beaded lanyard，市场 US（CA/AU/GB 通用）。Title「Custom Beaded Chains and Straps, Wholesale」；H1 对准包链、手机链、眼镜链和挂绳。与已上线的短款包挂、钥匙扣和手机挂/短挂绳分开写：本页是更长的链和带；短款手机挂与腕式/短挂绳仍指向 /beaded-phone-charms-straps/。正文写明长度和扣具在效果图和样品上确认；请买家附上包具、手机壳、眼镜或卡扣照片；**包链若需承重，询价时说明，不把每条串珠带都当成承重肩带**。护理口径：天然石远离汗液、泳池和长时间浸水，**不写天然石防水或防汗**；眼镜链和挂绳贴皮肤、手机链常握在手里，建议尽量保持珠子干燥，运动或游泳前取下；不锈钢配件可写防水、不褪色；黄铜镀金写防锈和防水，不写不褪色。规格表、one-stop、4 类买家、6 步流程、询价清单、可塘位置、10 条 FAQ、页内表单（`_subject` = Website inquiry – Beaded chains & straps）、CTA「Tell Us What You Need」。
2. **红线**：无价格/价格区间/目录；JSON-LD 仅 Organization / Service / FAQPage / BreadcrumbList（无 offers/priceRange）。MOQ、交期、运输时长沿用站内口径。不写 925 银/珍珠、ethical 类、WhatsApp/电话、Apple 人名、儿童、欧盟法规、圣诞截单、24 小时回复。
3. **图片**：仓库里没有合适的包链、眼镜链或挂绳实拍或概念图，本页未放产品图；og/twitter 图用官方 logo。
4. **内链**：静态页页脚补 Beaded chains & straps（紧接 Phone charms & straps 之后）；部分 React 页底部产品链同步补上。/custom-beaded-bag-charms-keychains/ 与 /beaded-phone-charms-straps/ 正文、规格表、Related（包挂页 FAQ 与 JSON-LD 一并）回链本页；/crystal-car-charms/ 与 /wholesale-crystal-bracelets/ 的 Related 也已加上。sitemap 38 个 URL（优先级 0.9）；llms.txt 已加入。
5. **JS 版本**：在 `site-20261119.js` 基础上新建 `assets/site-20261120.js`（STATIC_ROUTES 加新路径），全站引用已换；20261119 加入回滚替换表并保留。site-home 未改。

### 验证
- `python3 tools/jsy_site.py check`：problems 0；新页 JSON-LD 可解析，1 个 H1；script 闭合为字面量 `</script>`。
- 线上：/custom-beaded-chains-straps/、site-20261120.js、sitemap、llms.txt 均 200；title 正确；线上 sitemap 与 llms.txt 已含新页。
- 本例程要求不发邮件，未提交测试询盘（表单结构与已验证的配件页相同）。

### 待办
- GSC：对 /custom-beaded-chains-straps/ 请求编入索引。
- 明天 11-21：/personalized-initial-letter-bracelets/（个性化首字母/字母珠手链；B2B，页内表单，自有 `_subject`；无价格、无目录）。

---


## 2026-11-19 · 每日发文：/mixed-metal-beaded-bracelets/ 混金属天然石串珠手链落地页

执行：Grok Bot（每日发文例程，日历 11-19 项）。提交 `c19772b`，约 09:15 Asia/Shanghai 线上确认 200。

### 改了什么
1. **新页** /mixed-metal-beaded-bracelets/（静态）。目标词 mixed metal beaded bracelets / gold beaded bracelet wholesale，市场 US（CA/AU/GB 通用）。Title「Mixed Metal Beaded Bracelets, Wholesale」；H1 对准天然石搭配不锈钢或黄铜镀金。内容保持通用（Apple 尚未确认新线细节，不写具体款名或系列）：可做的组合（天然石 + 不锈钢；天然石 + 黄铜镀金的金感批发款；同一订单可混两种金属和全石手链）；**护理与金属口径**如实写：天然石远离汗液、泳池和长时间浸水，**不写天然石防水或防汗**；不锈钢配件可写防水、不褪色；黄铜镀金写防锈和防水，不写不褪色；报价和样品上标明所用金属。规格表、one-stop、4 类买家、6 步流程、询价清单、可塘位置、10 条 FAQ、页内表单（`_subject` = Website inquiry – Mixed metal beaded bracelets）、CTA「Tell Us What You Need」。金感批发款写明是天然石加黄铜镀金配件，不是实金。
2. **红线**：无价格/价格区间/目录；JSON-LD 仅 Organization / Service / FAQPage / BreadcrumbList（无 offers/priceRange）。MOQ、交期、运输时长沿用站内口径。不写 925 银/珍珠、ethical 类、WhatsApp/电话、Apple 人名、儿童、欧盟法规、圣诞截单、24 小时回复。
3. **图片**：仓库里没有合适的混金属实拍或概念图，本页未放产品图；og/twitter 图用官方 logo。
4. **内链**：静态页页脚与部分 React 页中部链接补 Mixed metal beaded bracelets；/wholesale-crystal-bracelets/ 正文与 Related、/wholesale-stackable-bracelet-sets/ 和 /tiger-eye-bracelets-wholesale/ 的 Related 回链本页。sitemap 37 个 URL（优先级 0.9）；llms.txt 已加入。
5. **JS 版本**：在刚合并的 `site-20261118b.js` 基础上新建 `assets/site-20261119.js`（STATIC_ROUTES 加新路径），全站引用已换；20261118b 加入回滚替换表并保留。site-home 未改（首页仍走已批准的 20261118 包）。

### 验证
- `python3 tools/jsy_site.py check`：problems 0；新页 JSON-LD 可解析，1 个 H1；script 闭合为字面量 `</script>`。
- 线上：/mixed-metal-beaded-bracelets/、site-20261119.js、sitemap、llms.txt 均 200；title 正确；线上 sitemap 与 llms.txt 已含新页。
- 本例程要求不发邮件，未提交测试询盘（表单结构与已验证的配件页相同）。

### 待办
- GSC：对 /mixed-metal-beaded-bracelets/ 请求编入索引。
- 明天 11-20：/custom-beaded-chains-straps/（包链、手机链、眼镜链、挂绳；内链包挂/钥匙扣和手机挂页）。
- 混金属新品若 Apple 确认了具体款式或系列，再回来补细节和实拍，不必另开新 URL。

---

## 2026-11-18 · 叠戴页白屏修复 + 已批准可塘文案（分支，未上线）

执行：本分支 `cursor/fix-stackable-ketang-copy-8167`。**没有合并，没有推 main，正式站尚未更新。** 本地预览不能当成已上线。

### 叠戴页白屏：核对后的原因
线上 `https://jsycrystal.com/wholesale-stackable-bracelet-sets/` 本次仍是 HTTP 200、HTML 约 36KB，但 5 处 script 结束标签写成了 JS 转义 `<\/script>`，字面量 `</script>` 为 0。浏览器只把字面量 `</script>` 当作 script 结束，所以第一个 `<script src="/assets/site-20261118.js">` 一直不结束，后面的正文、H1 和 JSON-LD 都被吃进脚本，页面空白、无障碍树没有正文。首页和 `/custom-gemstone-bracelet/` 的闭合是正常的，所以它们能打开。

仓库里没有落地页生成器。这一页是 2026-11-17 直接提交的静态 HTML（`53447de`）。次日的 `/beaded-phone-charms-straps/` 用的是正确的 `</script>`。全站 HTML 扫描后，只有叠戴页有这种转义闭合。`tools/jsy_site.py check` 原先用正则找 `</script>`，找不到闭合就不解析 JSON-LD，也不报错，所以当时 problems 0 仍能放过白屏。

### 改了什么
1. **叠戴页** `wholesale-stackable-bracelet-sets/index.html`：5 处 `<\/script>` 改成字面量 `</script>`。正文、图片、表单、title 未改。该页原有的 “exclusive overseas agent” 句子不在本次文案包里，没有顺手改。
2. **回归检查** `tools/jsy_site.py check`：用 HTML 解析器检查每个页面的 script 是否真正闭合；未闭合（包括把结束标签写成 `<\/script>`）记为问题并让检查失败。script 内部合法的 `<\/script>` 字符串（外面仍有真正的 `</script>`）不算错。JSON-LD 必须能解析。检查开始时用一段故意写错的样例自测，确认检测器会拦住它。不能只看 HTTP 200。
3. **已批准可塘文案**（附件核心，不是全文重写）。SEO title、URL、canonical 未改。
   - 首页首屏、信任条里的 `20+ / Years Manufacturing`、`#why-us` 四张卡、`#about`（去掉 “100% Natural / No synthetic”，补 `/about/`）。首页是 React 覆盖静态 HTML 的，所以同时改了预渲染 HTML、`assets/home-image-20261118.js`（由 20261116 复制后只换这些句子）和 `assets/site-home-20261118.js`。`index.html` 与 `404.html` 一起改指向新的 site-home。旧包保留。首页时间轴整段按文案包没有改。
   - `/about/`：首屏角色、What we do、把原来的 How orders run 换成 “How we work together” 五步。去掉 exclusive overseas agent、15–30 天和验货承诺。法律名称仍是 Shanwei Jingshenyuan Jewelry Co., Ltd.。标题未改。后面的 What we handle / What we supply / Who you deal with 没有整段重写。
   - `/custom-gemstone-bracelet/`：选择表、护理句、四步流程、CTA 和表单旁说明。首屏事实条里的 “Bulk 15–30 days after approval” 改为 “Production and shipping times confirmed with your order”。10 件可混只写成成品手链，吊牌和包装按设计确认。FAQ 里同一条交期承诺与 JSON-LD 一起改成 “confirmed with your order”。表单字段、FormSubmit 地址、`#inquiry-form`、按钮 “Send inquiry →” 保留。没有提交测试询盘。
4. **站点脚本** `assets/site-20261118b.js`：只比 `site-20261118.js` 多一行，定制页的表单说明用已批准句子；其他页面的说明不变。静态页的 script 引用改到这个新文件，是为了避免旧脚本把定制页说明写回去。`/beaded-phone-charms-straps/` 只改了这一处 script 文件名，正文没有动。

### 验证（本地，不是线上）
- `node --check`：`site-home-20261118.js`、`site-20261118b.js`、`home-image-20261118.js` 通过。
- `python3 tools/jsy_site.py check`：problems 0。含 script 开闭自测和全站 HTML 扫描；JSON-LD 可解析。
- 本机 `python3 -m http.server` + headless Chrome（桌面 1280×900，手机 390×844）打开叠戴页、首页、`/about/`、`/custom-gemstone-bracelet/`：
  - 四页都有可见 H1 和正文；控制台 error 和 pageerror 为 0；没有横向溢出。
  - 叠戴页 H1 “Wholesale Stackable Bracelet Sets, from 10 pieces, mixed”，虎眼套装图 naturalWidth 1000。懒加载的产品图滚进视口后也能加载。
  - 首页 H1 “Natural Stone Bracelets for Crystal Shops, Boutiques & Gift Stores”；可见文字里没有 “Years Manufacturing”“on time, every time”。优势四卡和 About 入口与批准文案一致，“Read more about JSY” 指向 `/about/`。
  - About H1 “Based in Ketang, working with partner factories”。这页正文没有新照片，页头沿用原有 logo。
  - 定制页选择表、护理句、表单说明可见。`#inquiry-form` 仍在；字段和 `https://formsubmit.co/84de44e7c16b22f5baa08c38d60c1461` 未改；按钮仍是 “Send inquiry →”。
  - 首页首屏 “Submit Your Inquiry” 进入 `/inquiry/#inquiry-form`，表单在页面上。About 的 “Submit Your Inquiry” 同样进入该锚点。定制页 “Get a custom quote” 滚到本页 `#inquiry-form`（平滑滚动结束后表单顶到视口）。叠戴页 “Tell Us What You Need” 指向本页 `#inquiry-form`。**没有提交表单，没有发信。**

### 还没做 / 不要误读
- 正式站仍是修之前的版本，叠戴页线上仍会白屏，直到这个分支合并进 main 且 Pages 部署成功。
- 首页时间轴、`/factory/`、`/ketang/`、`/how-it-works/` 不在本包，没有改。叠戴页正文里原有的 exclusive overseas agent 一句也没改。
- 首页 About 右侧仍是既有官方整徽（徽上原有 Factory Direct 字样）。没有新生成图片，也没有用视频帧。
- 表单能打开不等于询盘已经送达。这次没有做线上提交验收。

---

## 2026-11-18 · 每日发文：/beaded-phone-charms-straps/ 天然石手机挂与手机挂绳落地页

执行：Grok Bot（每日发文例程，日历 11-18 项）。提交 `c4b4c1e`，约 09:08 Asia/Shanghai 线上确认 200。

### 改了什么
1. **新页** /beaded-phone-charms-straps/（静态）。目标词 beaded phone charm / phone strap wholesale / custom phone charm，市场 US（CA/AU/GB 通用）。Title「Beaded Phone Charms and Phone Straps, Wholesale」；H1 对准手机挂与挂绳、10 件起可混。内容：可做的产品（短串珠手机挂、串珠手腕/短挂绳、与包挂/钥匙扣/手链的配套礼盒、logo 吊牌/卡片）；**汗液与日常使用**一节如实写：手机常握在手里，天然石远离汗液、泳池和长时间浸水，**不写天然石防水或防汗**；不锈钢配件可写防水、不褪色；黄铜镀金写防锈和防水，不写不褪色。扣具以不锈钢钩扣、圆环为主，具体卡扣或壳型请买家随询价附照片，不承诺兼容所有手机壳。规格表、one-stop、4 类买家、6 步流程、询价清单、可塘位置、9 条 FAQ、页内表单（`_subject` = Website inquiry – Phone charms & straps）、CTA「Tell Us What You Need」。更长的包链、眼镜链、挂绳可同单询问，暂不链未上线页面。
2. **红线**：无价格/价格区间/目录；JSON-LD 仅 Organization / Service / FAQPage / BreadcrumbList（无 offers/priceRange）。MOQ、交期、运输时长沿用站内口径。不写 925 银/珍珠、ethical 类、WhatsApp/电话、Apple 人名、儿童、欧盟法规、圣诞截单、24 小时回复。
3. **图片**：复用仓库已有概念图（包挂 + 手机挂同框），另存为 keyword 文件名 `media/beaded-phone-charms-straps-natural-stone-concept.webp`；alt 准确并标注 Concept visualization，首图 fetchpriority。
4. **内链**：静态页页脚与 React 原始页脚加 Phone charms & straps；/custom-beaded-bag-charms-keychains/ 正文列表、相关段、FAQ 及 /crystal-car-charms/ 的 Related 回链本页。sitemap 36 个 URL（优先级 0.9）；llms.txt 已加入。
5. **JS 版本**：新建 `assets/site-20261118.js`（STATIC_ROUTES 加新路径），全站 HTML 和 `tools/jsy_site.py` 引用已换；20261117 加入回滚替换表并保留。site-home 未变。

### 验证
- `python3 tools/jsy_site.py check`：problems 0；新页 JSON-LD 可解析，1 个 H1。
- 线上：/beaded-phone-charms-straps/、site-20261118.js、概念图、sitemap、llms.txt 均 200；title 正确；线上 sitemap 已含新页。
- 本例程要求不发邮件，未提交测试询盘（表单结构与已验证的包挂页相同）。

### 待办
- GSC：对 /beaded-phone-charms-straps/ 请求编入索引。
- 明天 11-19：/mixed-metal-beaded-bracelets/（新品细节若 Apple 尚未确认，保持通用写法）。

---

## 2026-11-17 · 每日发文：/wholesale-stackable-bracelet-sets/ 批发叠戴手链套装落地页

执行：Grok Bot（每日发文例程，日历 11-17 项）。提交 `53447de`，约 09:13 Asia/Shanghai 线上确认 200。

### 改了什么
1. **新页** /wholesale-stackable-bracelet-sets/（静态）。目标词 wholesale stackable bracelet sets / bracelet stack sets，市场 US（CA/AU/GB 通用）。Title「Wholesale Stackable Bracelet Sets, from 10 Pieces」；H1 对准叠戴套装、10 件起可混。内容：为何店铺卖套装（成套造型、可整套或拆开单卖）；起订按手链件数计，三条一套计 3 件；现成虎眼三件套（M-10 黄/红/蓝、M-07 虎眼+金曜石+火山石、M-05 虎眼+火山石+木珠，链到虎眼批发页对应锚点）；也可用常规批发石种（紫水晶、粉晶、黄水晶、白水晶）做配色套装；规格表、one-stop、4 类买家、5 步流程、询价清单、可塘位置、11 条 FAQ、页内表单（`_subject` = Website inquiry – Stackable bracelet sets）、CTA「Tell Us What You Need」。
2. **红线**：无价格/价格区间/目录；JSON-LD 仅 Organization / Service / FAQPage / BreadcrumbList（无 offers/priceRange）。MOQ、交期、运输时长、珠数沿用站内口径。天然石不写防水；不锈钢隔珠可写防水、不褪色，黄铜镀金只写防锈和防水。不写 925 银/珍珠、ethical 类、WhatsApp/电话、Apple 人名、儿童、欧盟法规、圣诞截单、24 小时回复。
3. **图片**：复用仓库已有虎眼套装实拍，另存为 keyword 文件名：`media/wholesale-stackable-bracelet-sets-tiger-eye-yellow-red-blue.webp`（首屏）、`…-obsidian-lava.webp`、`…-lava-wood.webp`；alt 准确，首图 fetchpriority，其余 lazy load。配色示例复用已有产品图。
4. **内链**：静态页页脚与 React 原始页脚加 Stackable bracelet sets；/wholesale-crystal-bracelets/ 正文和 Related、/tiger-eye-bracelets-wholesale/ 叠戴段落和 Related、/birthstone-bracelet-sets/ 与 /crystal-car-charms/ 的 Related 回链本页。sitemap 35 个 URL（优先级 0.9）；llms.txt 已加入。
5. **JS 版本**：新建 `assets/site-20261117.js`（STATIC_ROUTES 加新路径），全站 HTML 和 `tools/jsy_site.py` 引用已换；20261116b 加入回滚替换表并保留。site-home 未变。

### 验证
- `python3 tools/jsy_site.py check`：problems 0；新页 JSON-LD 可解析，1 个 H1。
- 线上：/wholesale-stackable-bracelet-sets/、site-20261117.js、三张套装图、sitemap、llms.txt 均 200；title 正确；线上 sitemap 已含新页。
- 本例程要求不发邮件，未提交测试询盘（表单结构与已验证的批发页相同）。

### 待办
- GSC：对 /wholesale-stackable-bracelet-sets/ 请求编入索引。
- 明天 11-18：/beaded-phone-charms-straps/。

---

## 2026-11-16 · 每周 SEO 复盘（GSC 数据截至 11-13）+ 两个高展示页改标题和描述

执行：Grok Bot（每周 SEO 复盘例程）。

### GSC 读数（sc-domain:jsycrystal.com，只读，2026-11-16 读取，数据最新到 11-13）
- 近 7 天（11-07～11-13）：0 点击，90 展示，平均排名 15.1；美国 68 展示。
- 近 28 天（10-17～11-13）：3 点击，163 展示，CTR 1.8%，平均排名 17.1；美国 2/114。
- 搜索词（28 天，展示/排名）：custom stone-set bracelet manufacturer 32/13.9（7 天 13/9.0）；custom gemstone bracelet design 10/32.9（7 天 8.3）；custom gemstone bracelets 10/34.0（7 天 21.7）；custom gemstone bracelet 5/10.8；jsy designs 4/9.0；新出现 wholesale stone bracelets 2/72.5、wholesale crystal bracelets 1/11.0、custom stone bracelets 1/13.0。
- 落地页（7 天，展示/排名）：/custom-gemstone-bracelet/ 52/10.6；/ 15/17.3；/oem-crystal-bracelet-manufacturer/ 11/15.7；/private-label-jewelry/ 4/6.3；/wholesale-crystal-bracelets/ 4/62.8；/choose-gemstone-bracelet-wholesale-supplier/ 3/6.3。全部 0 点击。
- 收录：已编入索引 22（11-09 基线 8），未编入 61；「已发现未编入」10（/about/、/how-it-works/、/ketang/、7 个旧产品页）；「已抓取未编入」3，验证失败（/products/citrine-crystal-bracelet/、无斜杠 /importing-crystal-bracelets-from-china、/ketang）；重定向错误/5xx/404/软 404 验证进行中。
- Sitemap：成功，11-15 读取，发现 33 个 URL。
- 和 11-09 基线（08-13～11-07：20 点击/189 展示/排名 21.2）比：排名从 21 升到 15～17，收录 8→22；点击仍少，询盘 0。

### 抽查（web 搜索工具，非 Google 原始排名）
- 能看到 jsycrystal.com：OEM crystal bracelet manufacturer（第 1）、private label crystal bracelets（第 3）、custom crystal bracelet manufacturer China（第 1）、"best custom crystal bracelet factory for small boutiques with low MOQ"（第 1）、品牌词。
- 看不到：custom gemstone bracelets、wholesale natural stone bracelets、wholesale crystal bracelets、custom beaded bag charms wholesale、wholesale tiger eye bracelets、crystal car charms wholesale。

### 改了什么（有展示没点击 → 改标题和描述，正文不动）
1. /custom-gemstone-bracelet/：title、og/twitter title 改为「Custom Gemstone Bracelets: Your Design, Logo & Box, from 10 Pcs | JSY Crystal」；description 改为买家视角（选天然石、珠径、长度、配件、logo 吊牌、礼盒；先打样；10 件起；发想法来询价）。
2. /oem-crystal-bracelet-manufacturer/：title 改为「OEM Crystal Bracelet Manufacturer in China — Your Brand, from 10 Pcs | JSY Crystal」，description 同步收紧。
- 红线检查：无价格、无目录、无 free、无回复时限、无 925 银/珍珠/ethical 类词。`python3 tools/jsy_site.py check` problems 0。

### 下周看什么
- 这两个页 7 天 CTR 是否从 0 变化；custom gemstone bracelets 排名（7 天 21.7）。
- GSC：对改过的两页和 /crystal-car-charms/ 请求编入索引；「已发现未编入」的 /about/、/how-it-works/ 继续加内链。
- 每日发文继续按日历。

---

## 2026-11-16 · 每日发文：/crystal-car-charms/ 天然石车挂与后视镜挂饰落地页

执行：Grok Bot（每日发文例程，日历 11-16 项）。提交 `d3b48d7`，约 09:3x Asia/Shanghai 线上确认 200。

### 改了什么
1. **新页** `/crystal-car-charms/`（静态）。目标词 crystal car charms / rearview mirror charms / crystal suncatcher，市场 US（CA/AU/GB 通用）。Title「Crystal Car Charms and Rearview Mirror Charms, Wholesale」；H1 对准车挂、10 件起。内容：可做的产品（后视镜挂饰、suncatcher、车挂+钥匙扣套装、车挂+手链礼盒、logo 吊牌/卡片）；**日晒与高温**一节如实写：紫水晶、粉晶、黄水晶及染色珠长时间直晒会褪色，**不承诺不褪色**，可建议较稳定的石头（白水晶、虎眼、黑曜石）并在样品上确认；不锈钢配件不生锈不褪色，黄铜镀金只写防锈、不写不褪色；挂饰尽量短轻、不挡视线，提醒店家让顾客自查当地对后视镜挂物的规定（未写具体州法）；suncatcher 的多面棱镜一般是玻璃，按需做（其他材质只简短提）。规格表、one-stop、4 类买家、6 步流程、询价清单、可塘位置、9 条 FAQ、页内表单（`_subject` = Website inquiry – Car charms）、CTA「Tell Us What You Need」。
2. **红线**：无价格/价格区间/目录；JSON-LD 仅 Organization / Service / FAQPage / BreadcrumbList（无 offers/priceRange）。MOQ、交期、运输时长沿用站内口径。不写 925 银/珍珠、ethical 类、WhatsApp/电话、Apple 人名、儿童、欧盟法规、圣诞截单。
3. **图片**：仓库没有车挂实拍或合适的图，本页不放正文图片；og:image 用官方 logo。
4. **内链**：静态页页脚与 React 原始页脚加 Car charms；`/custom-beaded-bag-charms-keychains/` 正文“we also make crystal car charms”和 Related 回链本页；本页链到包挂、批发、定制、私标、OEM、企业礼品、factory、ketang、inquiry。sitemap 34 个 URL（优先级 0.9）；llms.txt 已加入。
5. **JS 版本**：新建 `assets/site-20261116b.js`（STATIC_ROUTES 加新路径），全站 HTML 和 `tools/jsy_site.py` 引用已换；20261116 加入回滚替换表并保留。site-home 未变。

### 验证
- `python3 tools/jsy_site.py check`：problems 0；新页 JSON-LD 可解析，1 个 H1。
- 线上：/crystal-car-charms/、site-20261116b.js、包挂页、sitemap、llms.txt 均 200；title 正确；线上 sitemap 已含新页；页内全部站内链接 200；表单 `_subject` 正确。
- 本例程要求不发邮件，未提交测试询盘（表单结构与已验证的包挂页相同）。

### 待办
- 有车挂实拍或概念图后补图（标注 Concept visualization）。
- GSC：对 /crystal-car-charms/ 请求编入索引。
- 明天 11-17：/wholesale-stackable-bracelet-sets/。

---

## 2026-11-16 · 旧 React 包运行时覆盖文案：去掉功效说法、24 小时承诺、Factory direct、WhatsApp；8 个旧产品页移除 Product 结构化数据

执行：Grok Bot（Apple 已授权改站发布；起因是 Dot 2026-11-16 核实：首页源码写“尽快回复”，浏览器渲染后却显示“24 小时内回复”，产品卡还有 stress relief / Master Healer，页脚有 Factory Direct；Google 也提示旧产品页结构化数据缺价格、评价）。提交 `1d29c42`，Pages run 43738446102 success（约 00:58 Asia/Shanghai 上线）。

### 原因
非静态页（首页、/contact/、/inquiry/、/how-it-works/、/private-label-jewelry/、/projects/、/travel-group-gifts/、404 和 8 个旧产品页）加载 site JS 后，会再懒加载旧 React 包（首页 `home-image-20261109.js`，其他页 `whatsapp-20261020.js`）。旧包里编译了 Home.tsx / Shop.tsx / ProductDetail / JSYContactV2 / Footer 的老文案和 8 个产品的老描述，运行时整块渲染覆盖静态 HTML，所以只改静态文字不够。

### 改了什么
1. **新版旧包（保留旧文件回滚）**：`tools/patch_legacy_bundle_20261116.py` 由旧包生成 `assets/home-image-20261116.js`（首页）和 `assets/legacy-20261116.js`（其他非静态页），逐条替换文案并对每条做“必须命中”检查。新入口 `assets/site-20261116.js`、`assets/site-home-20261116.js` 只改了 import 路径；`tools/jsy_site.py` 指向新 JS，20261114 加入回滚替换表；全站 HTML 引用已更新。
2. **回复时限**：所有 within 24 hours / 24h / 24 Hours / “48 hours” 改为 as soon as possible / Promptly / Prompt Replies。
3. **功效说法**：8 款产品描述改为客观描述（颜色、天然包裹体、6–12mm 珠径、弹力绳、尺寸/logo 吊牌/包装可定制），去掉 Brazilian / Madagascar 等未核实产地；产品标签 healing/spiritual/protection 改为 custom/wholesale/gift；private label 与 projects 页的“石头-寓意”表（Tranquility & Protection、Abundance & Prosperity、Manifestation 等）改为颜色/外观；wellness/crystal healing 改为 lifestyle；图片 alt 去掉 Master Healer、Venus Hair Stone。
4. **不宣称自有工厂**：Factory Direct / Factory-direct 全部改为 One-Stop Supplier / Partner Workshops / “One-stop custom bracelet supplier in Shanwei, Guangdong, coordinating partner workshops”；页脚 “manufacturer … world's premier colored gemstone hub” 改为一站式口径；`/factory/` 标题去掉 Factory-Direct（改为 Coordinated Crystal Bracelet Production in Shanwei），“Factory-direct terms” 卡片改为 “One coordinated order”；`/choose-gemstone-bracelet-wholesale-supplier/` 中“由那一家工厂 factory-direct 供货”改为一站式协调合作工坊。
5. **未核实数字**：“20+ Years Experience / Years of Experience / 20+ years of experience” 全部去掉（改为 One-stop、Prompt replies 等）。
6. **WhatsApp**：旧包里 wa.me 链接、电话号码、“Chat on WhatsApp Now”“Copy WhatsApp number”等改为邮箱 / 询价页；表单旧的“WhatsApp / Social”字段文案改为 Other contact。源码中已无 wa.me 和电话号码，site JS 里的 WhatsApp 清理代码保留作保险。
7. **价格**：旧包里残留的 Shopify 演示价格（priceRange、variant price）全部置 0（页面本不显示）；旧询价表单里的预算档 “Under $5 USD / pc … Above $50” 改为 Entry level / Mid-range / Premium / Not sure yet。“Children's sizing available” 改为 Custom wrist sizes；“catalog” 类标签改为 Shop / All Styles / standard designs。
8. **结构化数据**：8 个旧产品页（amethyst、citrine、clear-quartz、rose-quartz、golden-obsidian、silver-obsidian、gold-rutilated-quartz、four-seasons-phantom-quartz）删除 Product JSON-LD，保留 Organization 和 BreadcrumbList，未加任何 price/offers/rating/review；与 3 个新产品页一致。meta / og / twitter 描述同步去掉功效和产地说法。

### 验证
- `python3 tools/jsy_site.py check`：problems 0；两个新包 `node --check` 通过。
- 线上 headless Chrome 渲染 18 个页面（首页、/shop/、/inquiry/、/contact/、/factory/、/how-it-works/、8 个旧产品页、/private-label-jewelry/、/projects/、/travel-group-gifts/、/choose-gemstone-…/）：违禁词（24 hours、24h、within 24、healer、stress、calming、protection、negative energy、wealth、manifestation、abundance、prosperity、unconditional love、factory direct、years experience、whatsapp、wa.me、healing、spiritual）可见文字命中 **改前 135 处 → 改后 0 处**；属性和 JSON-LD 也为 0；页面无 “$数字” 价格。
- 首页截图 `/workspace/jsy_home_check_20261116.png`（1280×4000）和整页截图 `/workspace/jsy_home_check_20261116_fullpage.png`，布局与改前一致。
- 测试询盘：从线上 /inquiry/ 表单提交 1 条（name「TEST – JSY site check」，email marketing@，message 写明 TEST ONLY），跳转到 `https://jsycrystal.com/thank-you/`。

### 待办
- 静态页里个别 “manufacturer” 类 SEO 用词（如 /oem-crystal-bracelet-manufacturer/）未动，属于既有关键词策略。
- GSC：可对 8 个旧产品页请求重新抓取，让 Google 更新结构化数据报告。

---

## 2026-11-14 · 全站文案：不写免费、不承诺回复时限、圣诞改全年下单

执行：Grok Bot（Apple 2026-11-14 决定：不写免费、不承诺、只说尽快，赶不上圣诞了，关注全年）。本批为文案修订，未发测试询盘。提交 `7dccd7b`，Pages run 43540673447 success（约 09:27 Asia/Shanghai 上线）。

### 改了什么
1. **不再承诺回复时限。** 全站去掉 “within 24 hours / 24h / same day / within one business day” 等回复承诺，改成自然的英文说法 “as soon as possible” 或 “promptly”。涉及：各页正文和 CTA、FAQ、FAQ JSON-LD、询价表单旁说明（“We reply as soon as possible”）、thank-you 页及 meta、llms.txt、`how-it-works` 页头数据（原 “24 Hours / Inquiry Response” 改为 “Promptly”）和步骤徽章、交期表里的 “Reply to your brief” 一行。要点列表里的 “Reply within 24 hours” 改为 “Prompt replies”。
2. **不写免费。** 全站检索后，公开页本身没有 “free mockup / free sample / free shipping”。企业礼品页的 logo mockup 段原本就没写免费，保持只写先出效果图再打样。样品费和运费收费的既有说法未改。
3. **圣诞改全年。** `/corporate-gifts/` 去掉 “Holiday Timelines / holiday orders / Christmas and Lunar New Year” 截单规划块（原 `#holiday-orders`）。改为 `#year-round-orders`：按客户自己的送礼日历规划（客户答谢、入职礼盒、公司周年、活动、春节和其他季节），预留样品时间和生产时间；交期仍用站内已有口径（大货 15–30 天、快递约 7–10 天、海运约 25–35 天），不写具体日期。Title / meta / FAQ（含 JSON-LD）同步。生日石套装页里 “圣诞节和母亲节前柜台好卖” 属于常年礼品场景，未改。
4. **资源**：新建 `assets/site-20261114.js`、`assets/site-home-20261114.js`（表单旁 SLA 同步；用于清除旧目录文案的正则仍匹配 “within 24 hours”，以免残留旧句，替换句已改为 as soon as possible）。`tools/jsy_site.py` 指向新 JS，20261113b 保留回滚。`content/content-calendar.md`：11-14 条目标记已按决定改完；11-15 圣诞截单文取消（全年指引已写在企业礼品页）；转化说明里的 24 小时回复承诺已改掉。

### 改到的页面
about、birthstone-bracelet-sets、choose-gemstone-bracelet-wholesale-supplier、contact、corporate-gifts（含节日段重写）、custom-beaded-bag-charms-keychains、custom-bracelets-for-tour-groups、custom-gemstone-bracelet、factory、gemstone-bracelet-bead-size-guide、how-it-works、importing-crystal-bracelets-from-china、首页、inquiry、ketang、oem-crystal-bracelet-manufacturer、private-label-jewelry、products/snow-phantom-quartz、strawberry-quartz、super-seven、projects、shop、thank-you、tiger-eye-bracelets-wholesale、wholesale-crystal-bracelets，以及 llms.txt。其余产品页、404、travel-group-gifts 只换了 JS 文件名。

### 验证
- `python3 tools/jsy_site.py check`：problems 0。
- 线上抽查（均为 200）：首页、/corporate-gifts/、/shop/、/thank-you/、/inquiry/、/contact/、/how-it-works/、/custom-gemstone-bracelet/、/wholesale-crystal-bracelets/、/private-label-jewelry/、/factory/、/about/、/birthstone-bracelet-sets/、/tiger-eye-bracelets-wholesale/、/oem-crystal-bracelet-manufacturer/、/custom-beaded-bag-charms-keychains/、/importing-crystal-bracelets-from-china/、/products/strawberry-quartz-crystal-bracelet/、llms.txt、两个新 JS。公开 HTML 中已无 “24 hours” 和 “free mockup”；/corporate-gifts/ 可见 Year-Round Orders、全年下单段和 “As soon as possible”。新 JS 里仅清理旧目录文案的匹配正则仍含 “within 24 hours”，替换句已是 as soon as possible。

### 待办
- 11-15 原计划的 `/holiday-bracelet-order-timeline/` 已取消，不要再做今年圣诞截单页；当日若发文请改其他选题。
- 全站页头 logo 是否都换成徽章上半部分，仍待 Apple 定。

---

## 2026-11-14 · 每日发文：/corporate-gifts/ 企业礼品落地页升级（custom bracelets for corporate gifts）

执行：Grok Bot（每日发文例行任务）。提交 `a6071c0`，Pages run 43538455729 success（约 09:06 Asia/Shanghai 上线）。

### 改了什么
1. **主词**：custom bracelets for corporate gifts（美国）。Title「Custom Bracelets for Corporate Gifts — Logo Tags, Gift Boxes & Holiday Timelines」；H1 改为「Custom bracelets for corporate gifts」；meta / og / twitter 描述同步；面包屑改为同名。
2. **新增 4 段**：
   - Logo mockup 先确认再打样（4 步：发 logo 和卡片文字 → 我们回 mockup → 客户改/批 → 按 mockup 打实物样）。**没写“免费”或“24 小时内”**——这两点 Apple 尚未确认，确认后可加。
   - 交期阶段表（回复 24 小时内 / mockup 和样品按项目确认 / 大货 15–30 天（样品确认后）/ 快递约 7–10 天 / 海运约 25–35 天），全部沿用站内已有口径；没有编造“数量档→天数”，用“什么会让它变长”一栏代替；加倒推示例；关税一句交给报关行。
   - 圣诞与春节：只写规划思路和“春节前后工坊放缓、停工一段时间”，**不写具体截单日期**，写明发需求时由我们确认本季最后生产日。
   - 询价清单（人数、日期、石头/颜色、logo 与卡片文字、包装、收货地址），价格口径「Pricing depends on quantity, design and packaging; we quote each inquiry.」
3. **CTA**：首屏和底部按钮改为「Tell Us What You Need」→ `/inquiry/?intent=corporate`；清单段落后再加一个。
4. **FAQ**：7 → 10 条（新增 logo mockup、圣诞/春节下单时间、价格怎么算）；FAQ JSON-LD 同步；Service 名称改为 Custom Bracelets for Corporate Gifts。无 offers/price。
5. **内链**：how-it-works、importing 指南、bead size guide、factory、wholesale、OEM、inquiry（原有 travel、bag charms、private label 保留）。
6. **sitemap**：`tools/jsy_site.py` PRIORITY 加 `/corporate-gifts/` = 0.9，重建 sitemap（33 个 URL）。**llms.txt**：corporate 条目改为带说明的新标题。
7. 图片：沿用页面原有图片，未新增。

### 验证
- `python3 tools/jsy_site.py check`：problems 0；JSON-LD 全部可解析；1 个 H1；FAQ 10 条。
- 线上 https://jsycrystal.com/corporate-gifts/ 返回 200，title / H1 / 新段落均已更新。

### 待办
- 请 Apple 确认：logo mockup 能否写“免费”、能否承诺“24 小时内回 mockup”；以及今年圣诞、春节前最后生产日。确认后补进页面。
- GSC：对 /corporate-gifts/ 请求重新编入索引。
- 明天 11-15：/holiday-bracelet-order-timeline/，上线后从本页节日段加内链。

---

## 2026-11-13 · 虎眼石专题页 /tiger-eye-bracelets-wholesale/ + /shop/ 改静态并上架 13 款虎眼石商品卡

执行：Grok Bot（大总管转达 Apple 要求；已有发布授权）。本批不 force push。提交 `aa6af6e`，Pages run 43500368914 success（约 12:19 PT 上线）。

### 改了什么
1. **新页** `/tiger-eye-bracelets-wholesale/`（静态）。目标词 wholesale tiger eye bracelets。Title「Wholesale Tiger Eye Bracelets, 7A Graded」；H1「Wholesale Tiger Eye Bracelets — 7A graded, ready to stack」。内容：7A 是行业分级不是证书的说明、男款 7A 亮面素圈 4 色、男款叠戴三件套、女款、规格表、私牌礼盒、one-stop（明确写 JSY 不自有工厂）、询价清单、11 条 FAQ、页内表单（`_subject` = Website inquiry – Tiger eye bracelets）、CTA「Tell Us What You Need」。JSON-LD：Organization / Service / FAQPage / ItemList / BreadcrumbList（无 offers/price）。
2. **/shop/ 改为静态页**（原为 React 渲染，首屏还写着 "Indicative unit prices below"，与禁价规则冲突，一并去掉）。保留原 8 款水晶手串卡片（链接原产品页），新增「Wholesale tiger eye bracelets」区：男款 8 张、女款 5 张卡片，卡片链接到专题页对应锚点（#m-01 等）。CollectionPage ItemList 21 项。
3. **商品卡（13 款，款号与 2026-11-13 报价单一致）**
   - 男款 8：M-01 黄 / M-02 金 / M-03 红 / M-04 蓝 7A 亮面弹力素圈（8/10 mm，12 mm 可加选）；M-05 虎眼+火山石+木珠三件套；M-06 虎眼隔片+火山石隔片+木珠三件套；M-07 虎眼+金曜石（黑曜石）+火山石三件套；M-10 7A 黄红蓝三色三件套。
   - 女款 5：T-39 葫芦链条手链、T-52 爱心蝴蝶结耳坠、T-53 葫芦耳钉、T-59 圆珠耳钉、T-69 太阳花开口戒。
   - 英文名按「材质 + 石头 + 造型」；规格写珠径/颗数、7A（只在报价单写明 7A 的 M-01~04、M-10）、颜色、绳/金属。女款金属写 gold-tone（报价单只写"铜锆/金色合金理解"，未确认镀金黄铜，故不写防锈防水）。
4. **图片**：`media/tiger-eye/*.webp`，13 张 1000×1000 白底。用 rembg 去背景后放白底；三件套为三张白底单条图竖排拼合。M-03 报价单用的是模特腕拍，改用同一 1688 链接的红虎眼白底主图；M-02 原图为深色底，去背景后放白底。T-69 原图带卖家卡片文字，已裁掉并补白。
5. **Logo**：新页面页头和私牌区只用徽章上半部分（`media/jsy-crystal-jewelry-logo-top-160.webp` / `-600.webp`，来自 `/workspace/brand/JSY_logo_top.png`）；`tools/jsy_site.py` 新增：`<html data-jsy-logo="top">` 的页面页头自动用上半部分 logo。其他旧页面仍是完整徽章（未动）。
6. **内链**：首页 Wholesale 卡片（预渲染 + `site-home-20261113b.js` 的 `ensureTigerEyeHomeLink`）、静态页页脚与 React 原始页脚、/shop/、/wholesale-crystal-bracelets/ 和 /birthstone-bracelet-sets/ 的 Related。sitemap 33 个 URL（新页 0.9）；llms.txt 已加。
7. **JS 版本**：新建 `assets/site-20261113b.js`、`assets/site-home-20261113b.js`（STATIC_ROUTES 加 `/tiger-eye-bracelets-wholesale/` 和 `/shop/`），全站 HTML 和 `tools/jsy_site.py` 引用已换；20261113 保留回滚。

### 没放进来的（及原因）
- M-08 / M-09 / M-11 / M-12（可调绳款）：主珠是"磨砂石"，材质未核实，市面常见为磨砂黑玛瑙，按"不用黑玛瑙"规则先不上。
- 女款其余 61 款：卖家原图都是带道具/卡片文字的场景图，没有白底图；去背景效果差（项链被画框截断、残留文字或灰底）的不上。含珍珠点缀的（T-02/04/06/07/41/38/44/11 等）一律不上。T-66、T-68、T-16 去背景后有残影/灰底/截断，未用。
- 黑胆石、黑玛瑙款：报价单本来就未收录。

### 规则冲突与处理
- 简报要求写"可塘合作天然石工厂直供"。核对来源：这批货源是 1688 上的义乌商家和连云港（东海）店铺，不是可塘工厂。为不写不实信息，页面改写为：JSY 不自有工厂；以汕尾可塘为基地，协调中国天然石珠行业的合作工坊和供应商，统一负责打样、质检、包装、出货。没写"factory direct"。
- 7A：写明是行业分级、不是证书。红/蓝虎眼常见热处理或染色，FAQ 写"已知处理会在报价单注明"。
- 防水：FAQ 明确天然石不防水，建议洗澡、游泳、运动前摘下。

### 验证
- `python3 tools/jsy_site.py check`：problems 0
- 线上：新页、/shop/、首页、两个新 JS、13 张商品图、logo、sitemap、llms.txt 全部 200；/shop/ 为静态渲染；首页渲染后有 1 个指向新页的链接；新页 FAQ 11 条，表单 `_next` 正确；手机 390px 无横向溢出。
- 全页截图：`/workspace/tigereye_screens/live_tiger-eye-bracelets-wholesale_full.png`、`/workspace/tigereye_screens/live_shop_full.png`
- 测试询盘：从新页表单字段提交 1 条（name「TEST – JSY site check」，email marketing@，message「TEST ONLY, please ignore」），FormSubmit 返回 302 → `https://jsycrystal.com/thank-you/`。

### 待办
- GSC：对新页和 /shop/ 请求编入索引。
- 有实拍白底图后补女款（项链、耳圈等）；拿到磨砂石材质确认后再决定可调绳款。
- 是否把全站页头 logo 都换成上半部分，待 Apple 定。

---

## 2026-11-13 · 每日发文：/birthstone-bracelet-sets/ 生日石手链套装批发落地页

执行：Grok Bot（每日发文例程，日历 11-13 项）。本批不 force push。

### 改了什么
1. **新页** `/birthstone-bracelet-sets/`（静态）。目标词 birthstone bracelet sets wholesale / birthstone bracelet set，市场 US（CA/AU/GB 通用）。Title「Birthstone Bracelet Sets Wholesale, 12 Months」；H1 对准给店铺的 12 个月套装、10 件起。内容：店铺为什么备货（只需知道生日月份，节日和生日都能卖；10 件起按整单算，一套 12 条即达标）、按月份的天然石起点表（现代生日石 + 珠子常用替代石，如 4 月用白水晶代钻石、6 月用月光石；客户可给自己的清单；每种石头如实命名）、3 个已有产品图示例、规格表、one-stop、4 类买家、5 步流程（节日倒推时间只写站内已有口径）、询价清单、可塘位置、9 条 FAQ（含绿松石常见为染色菱镁/再造、黄水晶多为热处理紫晶，报价单如实标注）、页内表单（`_subject` = Website inquiry – Birthstone bracelet sets）、CTA「Tell Us What You Need」。
2. **红线**：无价格/价格区间/目录；JSON-LD 仅 Organization / Service / FAQPage / BreadcrumbList（无 offers/priceRange）。6 月不写珍珠（初稿 FAQ 提到 pearl，被 check 标出后整条删除）。不写儿童。MOQ、交期、运费时长沿用站内口径。
3. **图片**：复用已有紫水晶产品图另存为 `media/birthstone-bracelet-sets-february-amethyst.webp`（首图）；示例区用已有紫水晶/白水晶/黄水晶产品图，alt 准确，lazy load。
4. **内链**：静态页页脚与 React 原始页脚「Wholesale for distributors」加 Birthstone bracelet sets；`/wholesale-crystal-bracelets/` Related 加链接；页内链到 wholesale、custom、private label、产品页、bead size guide、factory、ketang、inquiry。sitemap 32 个 URL（优先级 0.9）；llms.txt Main pages 加入。
5. **JS 版本**：新建 `assets/site-20261113.js`、`assets/site-home-20261113.js`（STATIC_ROUTES 加新路径），全站 HTML 和 `tools/jsy_site.py` 引用已换；20261111d 保留回滚。
6. **顺手修红线**：`/wholesale-crystal-bracelets/` 询价清单的 "women, men, kids" 改为 "women or men"；`/custom-gemstone-bracelet/` 规格表去掉 children's sizing。

### 验证
- `python3 tools/jsy_site.py check`：problems 0（THIN 为原有 /thank-you/）
- 提交 `b729ccb`，Pages run 43342959888 success。线上（约 09:13 Asia/Shanghai）：新页 200、title/H1 正确；`site-20261113.js`、首图均 200；线上 sitemap 已含新页

### 待办
- 11-14 企业礼品升级（节日截单具体日期仍待 Apple 确认，先写占位不写日期）
- 生日石其他月份暂无实拍图，有真实产品图后补进示例区

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
- 提交 `76b7579`（完整 `76b75798ecc0cc12c7a9d175d2728c6e4b5d1705`），Pages run 43010418324 success。线上（约 19:16 Asia/Shanghai）：新页 200、title/H1 正确、静态渲染（非 React 404）；`site-20261111d.js` 与 4 张概念图均为 200；sitemap 31 个 URL 且含新页；页内全部站内链接 200；首页/企业礼品/定制/批发页已有回链。
- 从表单提交 1 条标明 TEST 的询盘（name「TEST – JSY site check」，email marketing@，message「TEST ONLY, please ignore」）：FormSubmit 返回 302，Location 为 `https://jsycrystal.com/thank-you/`（未跟随后续 POST）。

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
