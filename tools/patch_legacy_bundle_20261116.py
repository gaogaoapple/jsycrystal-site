"""2026-11-16: build copy-fixed copies of the old React bundles.

home-image-20261109.js -> home-image-20261116.js (homepage)
whatsapp-20261020.js   -> legacy-20261116.js     (other non-static pages)
Old files are kept for rollback. Run from repo root:
    python3 tools/patch_legacy_bundle_20261116.py
"""
import json, re, sys
from pathlib import Path

A = Path(__file__).resolve().parent.parent / "assets"
PAIRS = [("home-image-20261109.js", "home-image-20261116.js"),
         ("whatsapp-20261020.js", "legacy-20261116.js")]

ASAP = "as soon as possible"
REPL = [
    # reply-time promises
    ("We'll respond within 24 hours with a tailored proposal.", f"We'll reply {ASAP} with a tailored proposal."),
    ('"Response within 24 hours \\xB7 NDA available', f'"We reply {ASAP} \\xB7 NDA available'),
    ('"Response within 24 hours"', f'"We reply {ASAP}"'),
    ('" within 24 hours."', f'" {ASAP}."'),
    ("We respond within 24 hours · No commitment required", f"We reply {ASAP} · No commitment required"),
    ("Wholesale Pricing on Inquiry · 24h Response", "Quotes on Inquiry · Prompt Replies"),
    ("we'll send a tailored proposal within 24 hours.", f"we'll send a tailored proposal {ASAP}."),
    ("We respond within 24 hours · Competitive wholesale pricing", f"We reply {ASAP} · Quotes per inquiry"),
    ('{value:"20+",label:"Years Experience"},{value:"24h",label:"Response Time"}',
     '{value:"One-stop",label:"Beads, Tags & Packaging"},{value:"Prompt",label:"Replies"}'),
    ('{label:"Production Capacity",value:"Flexible"},{label:"Years of Experience",value:"20+"}',
     '{label:"Production Capacity",value:"Flexible"},{label:"Inquiry Replies",value:"Prompt"}'),
    ("We'll review your requirements and respond within 24 hours.", f"We'll review your requirements and reply {ASAP}."),
    ("receive a tailored wholesale quote within 24 hours", f"receive a tailored wholesale quote {ASAP}"),
    ("We typically respond within 24 hours on business days. For complex custom orders, allow up to 48 hours for a detailed quotation.",
     f"We reply {ASAP}. Complex custom orders may need a little more time for a detailed quotation."),
    ("We'll respond within 24 hours.", f"We'll reply {ASAP}."),
    ('duration:"Within 24 Hours"', 'duration:"Promptly"'),
    ('{label:"Inquiry Response",value:"24 Hours"}', '{label:"Inquiry Response",value:"Promptly"}'),
    ("we'll respond within 24 hours with a tailored proposal", f"we'll reply {ASAP} with a tailored proposal"),
    # factory-direct
    ("Ketang production · OEM/ODM · Global Partner", "One-Stop Custom Supplier · OEM/ODM"),
    ("Factory-direct sourcing · Shanwei, Guangdong, China",
     "One-stop custom bracelet supplier in Shanwei, Guangdong, making bracelets in Ketang"),
    ("Ketang production · OEM/ODM Available", "One-Stop Supplier · OEM/ODM Available"),
    ("Ketang production · Shanwei, China", "Ketang production · Shanwei, China"),
    ('label:"Ketang production",sub:"Shanwei, China"', 'label:"Ketang production",sub:"Shanwei, China"'),
    ('label:"Ketang production"', 'label:"One-Stop Supplier"'),
    ('" Ketang production"', '" One-Stop Supplier"'),
    # WhatsApp
    ('return`https://wa.me/8613688980405?text=${encodeURIComponent(a)}`', 'return G("JSY inquiry",a)'),
    ('s="+86 136 8898 0405"', 's="marketing@jsycrystal.com"'),
    ("Start with WhatsApp, or send your inquiry here", "Email us, or send your inquiry here"),
    ("You can share reference photos in WhatsApp.", "You can attach reference photos or describe them in the form."),
    ('label:"Copy WhatsApp number"', 'label:"Copy email address"'),
    ('"WhatsApp \\xB7 "', '"Email \\xB7 "'),
    ('href:"https://wa.me/8613688980405"', 'href:"/inquiry/"'),
    ('"Chat on WhatsApp Now"', '"Send an Inquiry"'),
    ('"WhatsApp / Social Media "', '"Other contact "'),
    ("WhatsApp / Social: ${h}", "Other contact: ${h}"),
    ('"Phone / WhatsApp"', '"Phone"'),
    # healing / metaphysical
    ('{label:"Healing",value:"healing"},{label:"Spiritual",value:"spiritual"},{label:"Protection",value:"protection"}',
     '{label:"Custom",value:"custom"},{label:"Wholesale",value:"wholesale"},{label:"Gift",value:"gift"}'),
    ('label:"Function",filters', 'label:"Use",filters'),
    ('market:"Wellness & Spiritual"', 'market:"Purple tones · Bestseller"'),
    ('market:"Romance & Self-Love"', 'market:"Soft pink · Gift favorite"'),
    ('market:"Confidence & Focus"', "market:\"Golden-brown chatoyance · Men's lines\""),
    ('market:"Protection & Balance"', 'market:"Multi-color tones"'),
    ("market:\"Grounding & Men's\"", "market:\"Deep black · Men's lines\""),
    ('market:"Abundance & Prosperity"', 'market:"Golden-yellow tones"'),
    ('market:"Clarity & Universal"', 'market:"Transparent · Universal"'),
    ('market:"Growth & Premium"', 'market:"Green inclusions · Premium"'),
    ('"Amethyst — Tranquility & Protection"', '"Amethyst — purple tones"'),
    ('"Rose Quartz — Love & Compassion"', '"Rose Quartz — soft pink"'),
    ('"Tiger Eye — Courage & Focus"', '"Tiger Eye — golden-brown chatoyance"'),
    ('"Tourmaline — Balance & Healing"', '"Tourmaline — multi-color"'),
    ('"Black Obsidian — Grounding & Protection"', '"Black Obsidian — deep black"'),
    ('"Citrine — Abundance & Positivity"', '"Citrine — golden yellow"'),
    ('"Clear Quartz — Clarity & Amplification"', '"Clear Quartz — transparent"'),
    ('"Green Phantom — Growth & Prosperity"', '"Green Phantom — green phantom inclusions"'),
    ('"Gold Rutilated Quartz — Manifestation"', '"Gold Rutilated Quartz — golden rutile needles"'),
    ('"Super Seven — Multi-crystal Synergy"', '"Super Seven — multi-mineral inclusions"'),
    ('note:"Tranquility & Protection — Bestseller in wellness markets"', 'note:"Purple tones — Bestseller across gift and retail lines"'),
    ('note:"Love & Compassion — Popular in gift and romance categories"', 'note:"Soft pink — Popular in gift categories"'),
    ("note:\"Courage & Focus — Strong demand in men's jewelry\"", "note:\"Golden-brown chatoyance — Strong demand in men's jewelry\""),
    ('note:"Balance & Healing — Premium positioning"', 'note:"Multi-color tones — Premium positioning"'),
    ('note:"Grounding & Protection — Unisex appeal"', 'note:"Deep black — Unisex appeal"'),
    ('note:"Abundance & Positivity — Prosperity gift market"', 'note:"Golden-yellow tones — Gift market"'),
    ('note:"Clarity & Amplification — Universal appeal"', 'note:"Transparent — Universal appeal"'),
    ('note:"Growth & Prosperity — High-end positioning"', 'note:"Green phantom inclusions — High-end positioning"'),
    ('note:"Manifestation — Premium collector segment"', 'note:"Golden rutile needles — Premium collector segment"'),
    ('note:"Multi-crystal synergy — Spiritual market"', 'note:"Multi-mineral inclusions — Collector market"'),
    ('note:"Purity & Clarity — Minimalist aesthetic"', 'note:"White phantom layers — Minimalist aesthetic"'),
    ("Add crystal healing jewelry to your wellness product line with custom branding.",
     "Add natural stone bracelets to your lifestyle product line with custom branding."),
    ('"Wellness Brands"', '"Lifestyle Brands"'),
    ('"Wellness Brand Partnerships"', '"Lifestyle Brand Partnerships"'),
    ("Natural crystal bracelet lines developed for wellness and lifestyle brands, with custom packaging and brand storytelling.",
     "Natural stone bracelet lines developed for lifestyle and gift brands, with custom tags and packaging."),
    ("launching a new wellness brand", "launching a new lifestyle brand"),
    ("jewelry brands, wellness companies and wholesale buyers", "jewelry brands, lifestyle brands and wholesale buyers"),
    ('"Golden and silver obsidian protection bracelets"', '"Golden and silver obsidian bracelets"'),
    # children / catalog / price wording
    ("\"Men's or women's sizing\",\"Children's sizing available\"", "\"Men's or women's sizing\",\"Custom wrist sizes\""),
    ('"JSY Crystal · Wholesale Catalog"', '"JSY Crystal · Wholesale Collection"'),
    ("Browse our catalog and request wholesale pricing directly from each product.",
     "Browse our styles and tell us what you need from each product."),
    ('" Back to Catalog"', '" Back to Shop"'),
    ('children:"Catalog"}', 'children:"Shop"}'),
    ('"Full Catalog"', '"All Styles"'),
    ("For standard catalog designs, small batches are available.", "For standard designs, small batches are available."),
    ("Standard catalog products work for many buyers", "Standard designs work for many buyers"),
    ('"Get Wholesale Price"', '"Get a Quote"'),
    ('" Get Wholesale Price"', '" Get a Quote"'),
    # added after second pass
    ("20+ years of experience sourcing and manufacturing with natural gemstones from Shanwei, Guangdong — the world's premier colored gemstone production hub.",
     "Our production in Ketang, Shanwei, China's crystal bead hub."),
    ('"View Full Catalog "', '"View All Styles "'),
    ('title:"Ketang production",desc:"Shanwei, Guangdong — China\'s premier colored gemstone production hub. No middlemen."',
     'title:"One-Stop Supplier",desc:"Based in Shanwei, Guangdong, making beads, tags and packaging in Ketang."'),
    ('o6=["Under $5 USD / pc","$5–$10 USD / pc","$10–$20 USD / pc","$20–$50 USD / pc","Above $50 USD / pc","Not sure yet"]',
     'o6=["Entry level","Mid-range","Premium","Not sure yet"]'),
    ("the world's premier colored gemstone production hub — we combine deep material expertise with flexible manufacturing to serve",
     "a well-known colored gemstone production hub — we make bracelets in Ketang, Shanwei, China's crystal bead hub, for"),
    ("Shanwei, Guangdong — World's Colored Gemstone Hub", "Shanwei, Guangdong — Colored Gemstone Hub"),
    ("We source directly from Shanwei, Guangdong — the world's premier colored gemstone production hub.",
     "Our production is in Ketang, Shanwei, China's crystal bead hub."),
    ("Natural gemstone jewelry manufacturer and private label supplier. Sourced from Shanwei, Guangdong — the world's premier colored gemstone hub. Serving jewelry brands globally.",
     "One-stop custom bracelet supplier in Shanwei, Guangdong, making beads, tags and packaging in Ketang. Serving jewelry brands globally."),
]

DESC = {
    "amethyst-crystal-bracelet": ("Natural amethyst beaded bracelet in purple tones, with natural color variation from bead to bead.",
        "Round beads on elastic cord, 6–12mm. Bracelet size, logo tags and packaging can be customized; OEM/ODM and private label available."),
    "citrine-crystal-bracelet": ("Natural citrine beaded bracelet in warm golden-yellow tones.",
        "Round beads on elastic cord, 6–12mm. Bracelet size, logo tags and packaging can be customized for jewelry brands and retailers."),
    "clear-quartz-crystal-bracelet": ("Clear quartz beaded bracelet with high-clarity transparent beads; small natural inclusions may appear.",
        "Round beads on elastic cord, 6–12mm. Made in Ketang, Shanwei, China's crystal bead hub; logo tags and packaging can be customized."),
    "four-seasons-phantom-quartz-crystal-bracelet": ("Four seasons phantom quartz bracelet. Each bead shows layered mineral inclusions that form ghost-like phantoms inside the quartz.",
        "Green and brown chlorite inclusions, 8–12mm beads on elastic cord. Logo tags and packaging can be customized."),
    "gold-rutilated-quartz-crystal-bracelet": ("Gold rutilated quartz bracelet with dense golden needle-like rutile inclusions in clear quartz.",
        "Beads 8–12mm on elastic cord. Bracelet size, logo tags and packaging can be customized."),
    "golden-obsidian-crystal-bracelet": ("Natural golden obsidian bracelet with a shimmering golden sheen. Volcanic glass with golden iridescence.",
        "Round beads on elastic cord, 6–12mm. Bracelet size, logo tags and packaging can be customized."),
    "rose-quartz-crystal-bracelet": ("Soft pink rose quartz bracelet with a gentle, milky translucency.",
        "Round beads on elastic cord, 6–12mm. A bestseller for jewelry brands; OEM/ODM and private label available."),
    "silver-obsidian-crystal-bracelet": ("Natural silver obsidian bracelet with a striking silver-white flash. Volcanic glass with silver iridescence.",
        "Round beads on elastic cord, 6–12mm. Bracelet size, logo tags and packaging can be customized."),
}
ALT = {
    "Clear Quartz Crystal Bracelet - Master Healer High Clarity": "Clear Quartz Crystal Bracelet - High Clarity Natural Quartz",
    "Gold Rutilated Quartz Bracelet - Venus Hair Stone Dense Rutile": "Gold Rutilated Quartz Bracelet - Dense Golden Rutile",
}
TAG_MAP = {"healing": "custom", "spiritual": "wholesale", "protection": "gift"}


def fix_products(s):
    i = s.index("JSON.parse(`") + len("JSON.parse(`")
    j = s.index("`", i)
    data = json.loads(s[i:j])
    for p in data:
        a, b = DESC[p["handle"]]
        p["description"] = f"{a} {b}"
        p["descriptionHtml"] = f"<p>{a}</p><p>{b}</p>"
        tags = []
        for t in p["tags"]:
            t = TAG_MAP.get(t, t)
            if t not in tags:
                tags.append(t)
        p["tags"] = tags
        for im in p.get("images", []):
            im["altText"] = ALT.get(im.get("altText"), im.get("altText"))
        # no prices anywhere: blank the old Shopify demo amounts
        for k in ("min", "max"):
            p["priceRange"][k]["amount"] = "0.00"
        for v in p.get("variants", []):
            for k in ("price", "compareAtPrice"):
                if v.get(k):
                    v[k]["amount"] = "0.00"
    out = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    assert "`" not in out and "${" not in out
    return s[:i] + out + s[j:]


def patch(src):
    s = src
    missing = []
    for old, new in REPL:
        n = s.count(old)
        if not n:
            missing.append(old)
        s = s.replace(old, new)
    s = fix_products(s)
    for old, new in ALT.items():
        s = s.replace(old, new)
    return s, missing


def main():
    ok = True
    for a, b in PAIRS:
        s, missing = patch((A / a).read_text(encoding="utf-8"))
        (A / b).write_text(s, encoding="utf-8")
        print(b, len(s), "missing:", missing)
        ok &= not missing
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
