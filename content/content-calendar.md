# 16 天内容日历（2026-11-10 → 2026-11-25）

每天 1 项。前 3 天以落地页为主（转化价值最高）。市场：美国为主，澳洲 3 篇，马来西亚 1 篇，欧洲 1 篇（轻量，只写定制/贴牌，不写法规）。状态：✅ 已上线 · ⏳ 待写。

> **2026-11-10 对标调整**：按十佳成功对标（`content/benchmarks-top10.md`）重排。原则：先抬已索引页转化，再补主词落地页；时间敏感（圣诞/春节）优先。

| 日期 | 类型 | 标题 | 目标关键词 | 组 | 市场 | URL（计划） | 状态 |
|---|---|---|---|---|---|---|---|
| 11-10 | 落地页 | OEM Crystal Bracelet Manufacturer, for brands and wholesalers | oem crystal bracelet manufacturer | B | US | /oem-crystal-bracelet-manufacturer/ | ✅ |
| 11-10 | 文章 | How to Order Custom Bracelets for a Tour Group: Timeline, Name Tags and Packaging | custom bracelets for tour groups | A | US | /custom-bracelets-for-tour-groups/ | ✅（提前上线；原 11-11 槽位腾出） |
| 11-11 | 落地页 | Wholesale Crystal Bracelets — from 10 pcs, mixed stones（规格表 + 站内表单；**不写任何价格或价格区间**，统一 “Pricing depends on quantity, design and packaging; we quote each inquiry.”；不要提供目录或价格表） | wholesale crystal bracelets | B | US | /wholesale-crystal-bracelets/ | ⏳ |
| 11-12 | 转化升级 | ~~目录/价格表索取 CTA~~ 已撤销。保留询价表单升级（买家类型 / 数量档 / needed-by / 包装；按 intent 设 FormSubmit `_subject`）。页头改为 “Tell Us What You Need” → `/inquiry/?intent=custom`。 | tell us what you need / custom inquiry | A/B | US | /inquiry/?intent=custom（全站页头 CTA） | ✅（2026-11-10 完成表单；同日晚间去掉目录承诺） |
| 11-13 | 落地页升级 | Corporate gifts：免费 logo mockup 承诺 + 数量→交期表 + 节日截单占位（不写具体日期） | custom bracelets for corporate gifts | A | US | /corporate-gifts/ | ⏳ |
| 11-14 | 落地页升级 | Private Label Gemstone Bracelets（静态化 + FAQ + 包装/吊牌细节） | private label crystal bracelets | B | US | /private-label-jewelry/ | ⏳ |
| 11-15 | 文章 | Holiday Order Timeline: Christmas and Chinese New Year guidance for US / AU / MY（只写一般交期指引，不承诺具体截单日） | christmas corporate bracelet order / cny door gift | A | US/AU/MY | /holiday-bracelet-order-timeline/ | ⏳ |
| 11-16 | 文章 | Wholesale Crystal Jewellery for Australian Shops: Small Mixed Orders from China | wholesale crystal jewellery australia | B | AU | /wholesale-crystal-jewellery-australia/ | ⏳ |
| 11-17 | 文章 | Sampling Custom Bracelets: Fees, Photos, Video and What to Check | custom bracelet sample | A/B | US | /custom-bracelet-samples/ | ⏳ |
| 11-18 | 文章 | Natural Stone Bracelets as Corporate Door Gifts in Malaysia | corporate door gift malaysia | A | MY | /corporate-door-gifts-malaysia/ | ⏳ |
| 11-19 | 文章 | Custom Bracelets for Australian Gift and Event Companies | custom bracelets australia | A | AU | /custom-bracelets-australia/ | ⏳ |
| 11-20 | 文章 | Gift Box Sets for Bracelets: Box, Card and Pouch Options for Holiday Orders（one-stop：盒+卡+手链） | bracelet gift box wholesale | A/B | US | /bracelet-gift-box-sets/ | ⏳ |
| 11-21 | 文章 | Boutique Exclusive Bracelet Designs: A Range No Other Shop Carries | custom crystal bracelets for boutiques | A | US | /exclusive-bracelet-designs-for-boutiques/ | ⏳ |
| 11-22 | 产品页升级 | Amethyst Bracelets Wholesale（重做 /products/amethyst-crystal-bracelet/：规格表 + FAQ + 迷你询价） | amethyst bracelets wholesale | B | US | /products/amethyst-crystal-bracelet/ | ⏳ |
| 11-23 | 文章 | Private Label Natural Stone Bracelets for European Design Brands and Boutiques | private label gemstone bracelets europe | B | EU | /private-label-bracelets-european-brands/ | ⏳ |
| 11-24 | 文章 | Natural, Treated or Imitation: How We Describe Stones on a Quote | real vs fake crystal bracelet wholesale | A/B | US | /natural-stone-bracelet-quality/ | ⏳ |
| 11-25 | 文章 | Crystal Bracelet Supplier in China: Why Ketang, Shanwei | crystal bracelet supplier china | B | US | /crystal-bracelet-supplier-china-ketang/ | ⏳ |

## 移入 backlog（本轮不对标优先）
| 原日期 | 选题 | URL（计划） | 原因 |
|---|---|---|---|
| 原 11-22 | Ordering Crystal Bracelets into Australia: Shipping Options and What to Ask Your Broker | /import-crystal-bracelets-australia/ | 信息型弱于交易型产品页；AU 已有 11-16 / 11-19 |
| 原 11-25 | OEM vs Private Label for Crystal Bracelets | /oem-vs-private-label-bracelets/ | 让位给 `crystal bracelet supplier china` 主词；OEM/贴牌页已存在 |

## 每篇的固定动作
写 → `python3 tools/jsy_site.py shell && sitemap && check` → 加入 llms.txt 和 `assets/site-*.js` 的 STATIC_ROUTES（换新文件名）→ 推送 → curl 线上 → WORKLOG 记一笔。
澳洲/马来西亚篇：拼写用 jewellery、colour；尺寸写 cm；关税/GST/SST 只写“请向货代或报关行确认”或引用官方页面（Australian Border Force、Royal Malaysian Customs），不写具体税率和时效承诺。

## Positioning note（2026-11-10）
后续每天文章都带 **one-stop** 角度：客户不必分开找珠子、吊牌、礼盒供应商；JSY 协调合作工厂后合并出货。11-20「Gift Box Sets」尤其要写清盒+卡+手链同一报价与同一发货。身份：partner factories（复数），不写自有工厂。

## Conversion note（2026-11-10 晚间修订）
**硬性规则（后续每日发文必须遵守）：**
- Never offer or promise a catalog or price list on the site. 网站不提供、不承诺发送产品目录或价格表。目录只在与买家多轮沟通、需求明确之后由人工发送。
- Never publish prices or price ranges. 不要写单价、起售价（from $X）、价格档、FAQ 里的价格区间，也不要在 JSON-LD 里写 `offers`/`price`/`priceRange`。11-11 批发页尤其不能写价。统一口径：Pricing depends on quantity, design and packaging; we quote each inquiry.
- 页头 CTA 为 **Tell Us What You Need** → `/inquiry/?intent=custom`。表单旁说明：Tell us your quantity, stones, packaging and timeline. We'll reply within 24 hours with suggestions and next steps.
- 询价表单可选填买家类型、数量档、needed-by、是否要包装；`_subject` 按页面/intent 区分。`?intent=catalog` 旧链接仍可用，但按普通询盘处理（`Website inquiry – General`），页面上不出现 catalog 文案。
