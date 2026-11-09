# 16 天内容日历（2026-11-10 → 2026-11-25）

每天 1 项。前 3 天以落地页为主（转化价值最高）。市场：美国为主，澳洲 3 篇，马来西亚 1 篇，欧洲 1 篇（轻量，只写定制/贴牌，不写法规）。状态：✅ 已上线 · ⏳ 待写。

| 日期 | 类型 | 标题 | 目标关键词 | 组 | 市场 | URL（计划） | 状态 |
|---|---|---|---|---|---|---|---|
| 11-10 | 落地页 | OEM Crystal Bracelet Manufacturer, for brands and wholesalers | oem crystal bracelet manufacturer | B | US | /oem-crystal-bracelet-manufacturer/ | ✅ |
| 11-11 | 文章 | How to Order Custom Bracelets for a Tour Group: Timeline, Name Tags and Packaging | custom bracelets for tour groups | A | US | /custom-bracelets-for-tour-groups/ | ✅（提前于 11-10 上线） |
| 11-12 | 落地页升级 | Private Label Gemstone Bracelets（静态化 + FAQ + 包装/吊牌细节） | private label crystal bracelets | B | US | /private-label-jewelry/ | ⏳ |
| 11-13 | 文章 | Custom Bracelets for Company Annual Meetings and Incentive Trips: A Buyer's Checklist | custom bracelets for company events | A | US | /custom-bracelets-for-company-events/ | ⏳ |
| 11-14 | 文章 | Wholesale Crystal Bracelets from 10 Pieces, Mixed: How Small Shops Test a Range | wholesale crystal bracelets low minimum | B | US | /wholesale-crystal-bracelets-small-orders/ | ⏳ |
| 11-15 | 文章 | Custom Logo Tags for Bracelets: Engraved Tag, Pendant or Printed Card? | custom logo tag bracelets | A/B | US | /custom-logo-tags-for-bracelets/ | ⏳ |
| 11-16 | 文章 | Wholesale Crystal Jewellery for Australian Shops: Small Mixed Orders from China | wholesale crystal jewellery australia | B | AU | /wholesale-crystal-jewellery-australia/ | ⏳ |
| 11-17 | 文章 | Sampling Custom Bracelets: Fees, Photos, Video and What to Check | custom bracelet sample | A/B | US | /custom-bracelet-samples/ | ⏳ |
| 11-18 | 文章 | Natural Stone Bracelets as Corporate Door Gifts in Malaysia | corporate door gift malaysia | A | MY | /corporate-door-gifts-malaysia/ | ⏳ |
| 11-19 | 文章 | Custom Bracelets for Australian Gift and Event Companies | custom bracelets australia | A | AU | /custom-bracelets-australia/ | ⏳ |
| 11-20 | 文章 | Gift Box Sets for Bracelets: Box, Card and Pouch Options for Holiday Orders（one-stop：盒+卡+手链） | bracelet gift box wholesale | A/B | US | /bracelet-gift-box-sets/ | ⏳ |
| 11-21 | 文章 | Boutique Exclusive Bracelet Designs: A Range No Other Shop Carries | custom crystal bracelets for boutiques | A | US | /exclusive-bracelet-designs-for-boutiques/ | ⏳ |
| 11-22 | 文章 | Ordering Crystal Bracelets into Australia: Shipping Options and What to Ask Your Broker | import crystal bracelets australia | B | AU | /import-crystal-bracelets-australia/ | ⏳ |
| 11-23 | 文章 | Private Label Natural Stone Bracelets for European Design Brands and Boutiques | private label gemstone bracelets europe | B | EU | /private-label-bracelets-european-brands/ | ⏳ |
| 11-24 | 文章 | Natural, Treated or Imitation: How We Describe Stones on a Quote | real vs fake crystal bracelet wholesale | A/B | US | /natural-stone-bracelet-quality/ | ⏳ |
| 11-25 | 文章 | OEM vs Private Label for Crystal Bracelets: Which One Fits Your Business | oem vs private label jewelry | B | US | /oem-vs-private-label-bracelets/ | ⏳ |

## 每篇的固定动作
写 → `python3 tools/jsy_site.py shell && sitemap && check` → 加入 llms.txt 和 `assets/site-*.js` 的 STATIC_ROUTES（换新文件名）→ 推送 → curl 线上 → WORKLOG 记一笔。
澳洲/马来西亚篇：拼写用 jewellery、colour；尺寸写 cm；关税/GST/SST 只写“请向货代或报关行确认”或引用官方页面（Australian Border Force、Royal Malaysian Customs），不写具体税率和时效承诺。

## Positioning note（2026-11-10）
后续每天文章都带 **one-stop** 角度：客户不必分开找珠子、吊牌、礼盒供应商；JSY 协调合作工厂后合并出货。11-20「Gift Box Sets」尤其要写清盒+卡+手链同一报价与同一发货。身份：partner factories（复数），不写自有工厂。
