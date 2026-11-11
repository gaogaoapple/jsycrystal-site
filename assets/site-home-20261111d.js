/** Static publication entry (2026-11-11b needs-based CTA; no catalog/price promises). Email-first contact (no WhatsApp).
 * STATIC_ROUTES are complete HTML pages: React is NOT loaded there.
 * FormSubmit forms get _next + _captcha=false; honeypot _honey kept if present. */
export const STATIC_ROUTES = new Set([
  '/about/', '/factory/', '/ketang/', '/corporate-gifts/',
  '/choose-gemstone-bracelet-wholesale-supplier/',
  '/importing-crystal-bracelets-from-china/',
  '/gemstone-bracelet-bead-size-guide/',
  '/custom-gemstone-bracelet/', '/thank-you/',
  '/products/strawberry-quartz-crystal-bracelet/',
  '/products/snow-phantom-quartz-crystal-bracelet/',
  '/products/super-seven-crystal-bracelet/',
  '/oem-crystal-bracelet-manufacturer/',
  '/custom-bracelets-for-tour-groups/',
  '/wholesale-crystal-bracelets/',
  '/custom-beaded-bag-charms-keychains/',
]);
export const FORM_NEXT = 'https://jsycrystal.com/thank-you/';
export const PAGE_ROUTES = new Set([
  '/', ...STATIC_ROUTES, '/contact/', '/custom-gemstone-bracelet/',
  '/how-it-works/', '/inquiry/', '/private-label-jewelry/', '/projects/',
  '/shop/', '/travel-group-gifts/',
  ...['amethyst', 'citrine', 'clear-quartz', 'four-seasons-phantom-quartz',
    'gold-rutilated-quartz', 'golden-obsidian', 'rose-quartz', 'silver-obsidian']
    .map(stone => `/products/${stone}-crystal-bracelet/`),
]);

export function canonicalPath(path) {
  const candidate = path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
  return PAGE_ROUTES.has(candidate) ? candidate : null;
}

export function internalPageURL(href, currentHref) {
  try {
    const current = new URL(currentHref);
    const target = new URL(href, current);
    if (target.origin !== current.origin) return null;
    const path = canonicalPath(target.pathname);
    if (!path) return null;
    target.pathname = path;
    return target;
  } catch {
    return null;
  }
}

function ensureHidden(form, name, value) {
  let input = form.querySelector(`input[name="${name}"]`);
  if (!input) {
    input = form.ownerDocument.createElement('input');
    input.type = 'hidden';
    input.name = name;
    form.appendChild(input);
  }
  input.value = value;
}

export function ensureFormFields(root) {
  const forms = [...(root.matches?.('form') ? [root] : []),
    ...(root.querySelectorAll?.('form') ?? [])];
  for (const form of forms) {
    const action = form.getAttribute('action') || '';
    if (!action.includes('formsubmit.co/')) continue;
    ensureHidden(form, '_next', FORM_NEXT);
    ensureHidden(form, '_captcha', 'false');
  }
}


export const FORM_ALIAS = 'https://formsubmit.co/84de44e7c16b22f5baa08c38d60c1461';
export const INTENT_SUBJECTS = {
  catalog: 'Website inquiry – General',
  wholesale: 'Website inquiry – Wholesale',
  corporate: 'Website inquiry – Corporate gifts',
  tour: 'Website inquiry – Tour group',
  travel: 'Website inquiry – Tour group',
  custom: 'Website inquiry – Custom/OEM',
  oem: 'Website inquiry – Custom/OEM',
  'private-label': 'Website inquiry – Private label',
  privatelabel: 'Website inquiry – Private label',
  private_label: 'Website inquiry – Private label',
};

export function subjectFor(path, intent) {
  const key = (intent || '').toLowerCase().trim();
  if (key && INTENT_SUBJECTS[key]) return INTENT_SUBJECTS[key];
  if (/corporate-gifts|company-events/i.test(path)) return INTENT_SUBJECTS.corporate;
  if (/tour-groups|travel-group/i.test(path)) return INTENT_SUBJECTS.tour;
  if (/private-label/i.test(path)) return INTENT_SUBJECTS['private-label'];
  if (/oem-crystal|custom-gemstone/i.test(path)) return INTENT_SUBJECTS.custom;
  if (/wholesale|\/shop\/?/i.test(path)) return INTENT_SUBJECTS.wholesale;
  if (/inquiry|contact/i.test(path)) return 'Website inquiry';
  return 'Website inquiry';
}

function optionalFieldsHTML() {
  return `<div class="jsy-qualify" data-jsy-qualify="1">
<label>Buyer type (optional)<select name="buyer_type">
<option value="">Select…</option>
<option value="shop/boutique">Shop / boutique</option>
<option value="wholesaler/distributor">Wholesaler / distributor</option>
<option value="corporate/event gifts">Corporate / event gifts</option>
<option value="tour/travel group">Tour / travel group</option>
<option value="brand/private label">Brand / private label</option>
<option value="other">Other</option>
</select></label>
<label>Quantity band (optional)<select name="quantity_band">
<option value="">Select…</option>
<option value="10-49">10–49</option>
<option value="50-199">50–199</option>
<option value="200-999">200–999</option>
<option value="1000+">1000+</option>
</select></label>
<label>Needed by (optional)<input type="date" name="needed_by"/></label>
<label>Packaging needed (optional)<select name="packaging_needed">
<option value="">Select…</option>
<option value="yes">Yes</option>
<option value="no">No</option>
<option value="not sure">Not sure</option>
</select></label>
</div>`;
}

export function upgradeInquiryForms(doc, win) {
  if (!doc) return;
  const path = (win?.location?.pathname || doc.defaultView?.location?.pathname || '/');
  const intent = (() => {
    try {
      return new URLSearchParams(win?.location?.search || doc.defaultView?.location?.search || '').get('intent') || '';
    } catch { return ''; }
  })();
  const subject = subjectFor(path, intent);
  const forms = [...(doc.querySelectorAll?.('form[action*="formsubmit.co"]') ?? [])];
  for (const form of forms) {
    ensureHidden(form, '_next', FORM_NEXT);
    ensureHidden(form, '_captcha', 'false');
    ensureHidden(form, '_subject', subject);
    ensureHidden(form, '_template', 'table');
    if (!form.querySelector('input[name="_honey"]')) {
      const honey = form.ownerDocument.createElement('input');
      honey.type = 'text';
      honey.name = '_honey';
      honey.tabIndex = -1;
      honey.autocomplete = 'off';
      honey.className = 'jsy-honeypot';
      honey.setAttribute('aria-hidden', 'true');
      form.appendChild(honey);
    }
    // Optional qualification fields
    if (!form.querySelector('[data-jsy-qualify], select[name="buyer_type"]')) {
      const wrap = form.ownerDocument.createElement('div');
      wrap.innerHTML = optionalFieldsHTML();
      const block = wrap.firstElementChild;
      const btn = form.querySelector('button[type="submit"], button.jsy-primary');
      if (btn) form.insertBefore(block, btn);
      else form.appendChild(block);
    }
    // Preselect buyer type from intent
    const buyer = form.querySelector('select[name="buyer_type"]');
    if (buyer && intent && !buyer.value) {
      const map = {
        catalog: '',
        wholesale: 'wholesaler/distributor',
        corporate: 'corporate/event gifts',
        tour: 'tour/travel group',
        travel: 'tour/travel group',
        custom: 'brand/private label',
        oem: 'brand/private label',
        'private-label': 'brand/private label',
      };
      if (map[intent]) buyer.value = map[intent];
    }
    // Reply SLA near submit
    if (!form.querySelector('.jsy-reply-sla')) {
      const btn = form.querySelector('button[type="submit"], button.jsy-primary');
      const sla = form.ownerDocument.createElement('p');
      sla.className = 'jsy-reply-sla';
      sla.textContent = 'We reply within 24 hours';
      if (btn && btn.parentNode) btn.insertAdjacentElement('afterend', sla);
      else form.appendChild(sla);
    }
    // Supporting line near form (needs-based; never promise a catalog or price list)
    const section = form.closest('section, .jsy-short-inquiry, div') || form.parentNode;
    if (section) {
      const old = section.querySelector('.jsy-catalog-near, .jsy-need-near');
      const p = old || form.ownerDocument.createElement('p');
      p.className = 'jsy-need-near';
      p.textContent = 'Tell us your quantity, stones, packaging and timeline. We\'ll reply within 24 hours with suggestions and next steps.';
      if (!old) form.insertAdjacentElement('beforebegin', p);
    }
  }
  // /inquiry/?intent=catalog still works, but is treated as a general inquiry (no catalog wording).
}

export function rewriteCatalogAndPrices(doc) {
  if (!doc || !doc.querySelectorAll) return;
  const quote = 'Pricing depends on quantity, design and packaging; we quote each inquiry.';
  const skip = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE']);
  // Leftover catalog / price-list CTAs and labels
  for (const a of [...doc.querySelectorAll('a')]) {
    const href = a.getAttribute('href') || '';
    const text = (a.textContent || '').replace(/\s+/g, ' ').trim();
    if (/intent=catalog/i.test(href) || /Get Catalog|catalog &(?:amp;)? price|Request our catalog/i.test(text)) {
      a.setAttribute('href', '/inquiry/?intent=custom');
      a.textContent = 'Tell Us What You Need';
      a.classList.remove('jsx-cta-catalog', 'jsy-catalog-link');
      if (a.classList.contains('jsx-cta')) a.classList.add('jsx-cta-need');
      a.removeAttribute('data-jsy-catalog');
      a.setAttribute('data-jsy-need', '1');
      continue;
    }
    if (/^View Full Catalog$/i.test(text) || /^See the full wholesale catalog/i.test(text)) {
      a.textContent = text.toLowerCase().includes('see the full') ? 'See wholesale bracelets →' : 'Browse wholesale';
    } else if (/^(Full )?Catalog$/i.test(text) && /\/shop\/?/i.test(href)) {
      a.textContent = 'Wholesale';
    } else if (/wholesale catalog/i.test(text)) {
      a.textContent = text.replace(/wholesale catalog/ig, 'wholesale bracelets');
    } else if (/^Browse the catalog$/i.test(text)) {
      a.textContent = 'Browse wholesale bracelets';
    } else if (/catalog bracelets/i.test(text)) {
      a.textContent = text.replace(/catalog bracelets/ig, 'existing bracelets');
    } else if (/Back to Catalog/i.test(text)) {
      a.textContent = 'Back to wholesale';
    }
  }
  for (const el of [...doc.querySelectorAll('p, h1, h2, h3, h4, li, span, td, figcaption, small, label, button')]) {
    if (skip.has(el.tagName) || el.closest('script, style')) continue;
    if (el.childElementCount > 0) continue;
    let text = el.textContent || '';
    if (!text) continue;
    let next = text
      .replace(/we'll email you our catalog and price ranges within 24 hours\.?/ig, '')
      .replace(/Leave your email and a short note\. We'll email you our catalog and price ranges within 24 hours\. No PDF download on this page yet\./ig, 'Tell us your quantity, stones, packaging and timeline. We\'ll reply within 24 hours with suggestions and next steps.')
      .replace(/Request our catalog & price ranges/ig, 'Tell us what you need')
      .replace(/Pick stones and styles from our catalog/ig, 'Pick stones and styles from our existing range')
      .replace(/\ba catalog style\b/ig, 'a standard style')
      .replace(/\bCatalog styles\b/g, 'Standard styles')
      .replace(/instead of a price list/ig, 'for your brief')
      .replace(/free product catalog \+ wholesale price list/ig, 'suggestions and next steps')
      .replace(/Receive free catalog \+ price list/ig, 'We reply with suggestions and next steps')
      .replace(/Wholesale from \d+\.\d{2} USD;?/g, quote)
      .replace(/Wholesale range \d+\.\d{2}[–-]\d+\.\d{2} USD by size & bead count/g, quote)
      .replace(/Wholesale: \d+\.\d{2}[–-]\d+\.\d{2} USD/g, 'Wholesale: quoted per inquiry')
      .replace(/From \d+\.\d{2} USD/g, quote)
      .replace(/— \d+\.\d{2} USD per unit \(indicative wholesale\)\.?/g, '. ' + quote)
      .replace(/\s{2,}/g, ' ')
      .trim();
    if (next !== text) el.textContent = next;
  }
  for (const el of [...doc.querySelectorAll('.jsy-price')]) {
    const text = (el.textContent || '').trim();
    if (/From \d|\d+\.\d{2}\s*USD|\$\d/.test(text)) el.textContent = quote;
  }
}

export function ensureNeedCta(doc) {
  if (!doc) return;
  rewriteCatalogAndPrices(doc);
  const sub = doc.getElementById('jsy-subnav');
  if (sub && !sub.querySelector('a[href*="intent=custom"], a.jsy-need-link, a[data-jsy-need]')) {
    const inner = sub.querySelector('.jsy-subnav-inner') || sub;
    const a = doc.createElement('a');
    a.href = '/inquiry/?intent=custom';
    a.textContent = 'Tell Us What You Need';
    a.className = 'jsy-need-link';
    inner.appendChild(a);
  }
  const hd = doc.querySelector('header.jsx-hd .jsx-hd-in, header .jsx-hd-in');
  if (hd && !hd.querySelector('a.jsx-cta-need, a[href*="intent=custom"][class*="cta"]')) {
    const primary = hd.querySelector('a.jsx-cta:not(.jsx-cta-need):not(.jsx-cta-catalog)');
    const a = doc.createElement('a');
    a.className = 'jsx-cta jsx-cta-need';
    a.href = '/inquiry/?intent=custom';
    a.textContent = 'Tell Us What You Need';
    if (primary) primary.insertAdjacentElement('beforebegin', a);
    else hd.appendChild(a);
  }
  const reactHeader = doc.querySelector('#root header, header');
  if (reactHeader && !reactHeader.querySelector('a[href*="intent=custom"][data-jsy-need], a.jsx-cta-need') && !reactHeader.classList.contains('jsx-hd')) {
    if (!reactHeader.querySelector('a[data-jsy-need]')) {
      const a = doc.createElement('a');
      a.href = '/inquiry/?intent=custom';
      a.textContent = 'Tell Us What You Need';
      a.setAttribute('data-jsy-need', '1');
      a.style.cssText = 'margin-left:12px;font-size:0.85rem;font-weight:600;color:#292524;text-decoration:underline;';
      reactHeader.appendChild(a);
    }
  }
}


export function stripWhatsApp(root) {
  if (!root || !root.querySelectorAll) return;
  for (const a of [...(root.querySelectorAll?.('a[href*="wa.me"]') ?? [])]) a.remove();
  for (const el of [...(root.querySelectorAll?.('.jsy-whatsapp, .jsx-btn-wa, .jsy-phone') ?? [])]) el.remove();
  for (const btn of [...(root.querySelectorAll?.('button') ?? [])]) {
    const t = (btn.textContent || '').toLowerCase();
    if (t.includes('whatsapp') || (t.includes('copy') && t.includes('number'))) btn.remove();
  }
  for (const el of [...(root.querySelectorAll?.('label, span, p, h1, h2, h3, li, summary, a') ?? [])]) {
    const text = el.textContent || '';
    if (!/whatsapp|wa\.me|8898 0405|136 8898/i.test(text)) continue;
    if (el.childElementCount > 0 && !/whatsapp/i.test(text)) continue;
    if (/whatsapp/i.test(text) && el.childElementCount === 0) {
      el.textContent = text
        .replace(/WhatsApp\s*\/\s*Social Media/gi, 'Other contact')
        .replace(/WhatsApp\s*\/\s*Social/gi, 'Other contact')
        .replace(/Email our team[^\n]*/gi, '')
        .replace(/Chat on WhatsApp Now/gi, '')
        .replace(/Ask Apple on WhatsApp/gi, '')
        .replace(/Email us[^\n]*/gi, '')
        .replace(/Hi,? Apple,? ?/gi, '')
        .replace(/on WhatsApp/gi, '')
        .replace(/WhatsApp/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
      if (!el.textContent) el.remove();
    }
  }
}

function injectHideStyle(doc) {
  if (doc.getElementById('jsy-no-whatsapp-css')) return;
  const style = doc.createElement('style');
  style.id = 'jsy-no-whatsapp-css';
  style.textContent = '.jsy-whatsapp,a[href*="wa.me"],.jsx-btn-wa,.jsy-phone{display:none!important}.jsy-contact-dock{position:fixed;right:16px;bottom:16px;z-index:60;display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}.jsy-contact-dock .jsy-dock-email,.jsy-contact-dock .jsy-dock-secondary{display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:999px;text-decoration:none;font-size:.88rem;box-shadow:0 8px 24px #0003}.jsy-contact-dock .jsy-dock-email{background:#292524;color:#fff}.jsy-contact-dock .jsy-dock-secondary{background:#fff;color:#1c1917;border:1px solid #e7e5e4}.jsy-honeypot{position:absolute;left:-9999px;height:0;width:0;opacity:0;}.jsy-qualify{display:grid;gap:10px;margin:12px 0;}.jsy-qualify label{display:flex;flex-direction:column;gap:4px;font-size:.9rem;}.jsy-qualify select,.jsy-qualify input[type=date]{padding:8px 10px;border:1px solid #e7e5e4;border-radius:6px;font:inherit;}.jsy-reply-sla{margin:8px 0 0;font-size:.9rem;color:#44403c;font-weight:600;}.jsy-need-near,.jsy-catalog-near{margin:0 0 12px;font-size:.92rem;}.jsy-need-near a,.jsy-catalog-near a{font-weight:600;}.jsx-cta-need,.jsx-cta-catalog{background:#fff!important;color:#1c1917!important;border:1px solid #d6d3d1;}.jsx-cta-need:hover,.jsx-cta-catalog:hover{background:#f5f5f4!important;}@media (max-width:980px){.jsx-hd .jsx-cta-need,.jsx-hd .jsx-cta-catalog{display:none}}';
  doc.head.appendChild(style);
}

function ensureBuyerPathsCss(doc) {
  if (doc.querySelector('link[href*="buyer-paths-20261109.css"]')) return;
  const link = doc.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/assets/buyer-paths-20261109.css';
  doc.head.appendChild(link);
}

export function buyerPathsHTML() {
  return `<section id="jsy-buyer-paths" class="jsy-buyer-paths" aria-labelledby="jsy-buyer-paths-title">
  <div class="jsy-buyer-paths-inner">
    <p class="jsx-eyebrow">Who we work with</p>
    <h2 id="jsy-buyer-paths-title">Two clear paths to work with JSY</h2>
    <p class="jsy-buyer-paths-lead">One partner for both paths: custom programs for end clients, and wholesale plus private label for distributors — beads, tags, boxes and cards coordinated together.</p>
    <div class="jsy-buyer-paths-grid">
      <article class="jsy-buyer-card">
        <img src="/media/travel-group-gifts-concept.webp" alt="Natural stone bracelets prepared as travel and tour group gifts" width="640" height="400" loading="lazy" decoding="async">
        <h3>Custom for end clients</h3>
        <p>Tour groups, company gifts and boutique exclusives — stones, tags, boxes and cards handled by one team.</p>
        <ul>
          <li><a href="/travel-group-gifts/">Travel &amp; tour group gifts</a></li>
          <li><a href="/corporate-gifts/">Corporate &amp; annual meeting gifts</a></li>
          <li><a href="/custom-gemstone-bracelet/">Boutique &amp; crystal-shop custom</a></li>
          <li><a href="/custom-beaded-bag-charms-keychains/">Bag charms &amp; keychains</a></li>
        </ul>
        <div class="jsy-buyer-card-actions">
          <a class="jsx-btn" href="/custom-gemstone-bracelet/">Explore custom</a>
          <a class="jsy-buyer-quote" href="/inquiry/#inquiry-form">Get a quote</a>
        </div>
      </article>
      <article class="jsy-buyer-card">
        <img src="/media/brand-collection-faceted-20261020.webp" alt="Wholesale natural stone beaded bracelets for distributors and private label" width="640" height="400" loading="lazy" decoding="async">
        <h3>Wholesale for distributors</h3>
        <p>Bulk natural-stone bracelets for wholesalers who resell to retailers, with private label packaging and tags from the same one-stop partner.</p>
        <ul>
          <li><a href="/shop/">Wholesale bracelets</a></li>
          <li><a href="/wholesale-crystal-bracelets/">Wholesale from 10 pcs, mixed</a></li>
          <li><a href="/custom-beaded-bag-charms-keychains/">Bag charms &amp; keychains</a></li>
          <li><a href="/private-label-jewelry/">Private label &amp; packaging</a></li>
        </ul>
        <div class="jsy-buyer-card-actions">
          <a class="jsx-btn" href="/shop/">Browse wholesale</a>
          <a class="jsy-buyer-quote" href="/inquiry/#inquiry-form">Get a quote</a>
        </div>
      </article>
    </div>
  </div>
</section>`;
}


export function patchBuyerPathsCopy(doc) {
  const lead = doc.querySelector('.jsy-buyer-paths-lead');
  if (lead) lead.textContent = 'One partner for both paths: custom programs for end clients, and wholesale plus private label for distributors — beads, tags, boxes and cards coordinated together.';
  const cards = doc.querySelectorAll('.jsy-buyer-card > p');
  if (cards[0]) cards[0].textContent = 'Tour groups, company gifts and boutique exclusives — stones, tags, boxes and cards handled by one team.';
  if (cards[1]) cards[1].textContent = 'Bulk natural-stone bracelets for wholesalers who resell to retailers, with private label packaging and tags from the same one-stop partner.';
}


export function ensureBagCharmHomeLinks(doc) {
  const section = doc.getElementById('jsy-buyer-paths');
  if (!section) return;
  const href = '/custom-beaded-bag-charms-keychains/';
  if (section.querySelector(`a[href="${href}"]`)) return;
  const lists = section.querySelectorAll('.jsy-buyer-card ul');
  const label = 'Bag charms & keychains';
  for (const ul of lists) {
    const li = doc.createElement('li');
    const a = doc.createElement('a');
    a.href = href;
    a.textContent = label;
    li.appendChild(a);
    ul.appendChild(li);
  }
}

export function ensureBuyerPaths(doc) {
  if (doc.getElementById('jsy-buyer-paths')) return;
  ensureBuyerPathsCss(doc);
  const root = doc.getElementById('root') || doc.body;
  const hero = root.querySelector('section.relative, section[class*="min-h"]') || root.querySelector('section');
  const wrap = doc.createElement('div');
  wrap.innerHTML = buyerPathsHTML().trim();
  const section = wrap.firstElementChild;
  if (hero && hero.parentNode) hero.insertAdjacentElement('afterend', section);
  else root.insertAdjacentElement('afterbegin', section);
}

export function patchHomeHeroCopy(doc) {
  const h1 = doc.querySelector('#root h1');
  if (h1 && /Jewelry Manufacturer|Gemstone/i.test(h1.textContent || '')) {
    h1.innerHTML = 'Custom Natural Stone Bracelets<br><em class="italic" style="color: var(--gold);">for Tour Groups, Corporate Events &amp; Boutiques</em>';
  }
  const lead = doc.querySelector('#root section.relative p.text-white\\/80, #root section.relative p[class*="text-white"]');
  // fragile; also try first muted paragraph under hero
  const hero = doc.querySelector('#root section.relative, #root section[class*="min-h"]');
  if (hero) {
    const ps = [...hero.querySelectorAll('p')];
    if (ps[0] && /private label|jewelry brands|Custom programs|One partner|partner factor/i.test(ps[0].textContent || '')) {
      ps[0].textContent = 'One partner for your custom bracelet program: natural-stone beads, charms, tags, gift boxes and cards — coordinated across our Shanwei partner factories and shipped together.';
    }
    if (ps[1] && /Serving|worldwide|brands/i.test(ps[1].textContent || '')) {
      ps[1].textContent = 'Two paths: custom for end clients, and wholesale for distributors';
    }
  }
}


export function ensureEmailDock(doc) {
  let dock = doc.querySelector('nav.jsy-contact-dock');
  if (!dock) {
    dock = doc.createElement('nav');
    dock.className = 'jsy-contact-dock';
    dock.setAttribute('aria-label', 'Quick contact');
    doc.body.appendChild(dock);
  }
  // remove any wa leftovers inside dock
  for (const a of [...dock.querySelectorAll('a[href*="wa.me"], .jsy-whatsapp')]) a.remove();
  if (!dock.querySelector('a[href^="mailto:"]')) {
    const mail = doc.createElement('a');
    mail.className = 'jsy-dock-email';
    mail.href = 'mailto:marketing@jsycrystal.com';
    mail.textContent = 'Email us';
    dock.insertBefore(mail, dock.firstChild);
  }
  if (!dock.querySelector('a[href*="inquiry"]')) {
    const inq = doc.createElement('a');
    inq.className = 'jsy-dock-secondary';
    inq.href = '/inquiry/#inquiry-form';
    inq.textContent = 'Send inquiry';
    dock.appendChild(inq);
  }
}

export function patchContactCopy(doc) {
  const root = doc.getElementById('root') || doc.body;
  // Replace Apple-as-contact (not needed to scrub "Apple Cao" on about — path-limited)
  const path = (doc.defaultView?.location?.pathname || '');
  if (!/^\/(contact|inquiry)\/?$/.test(path)) return;
  for (const el of [...root.querySelectorAll('p, h1, h2, h3, span, label, li, div')]) {
    if (el.childElementCount > 2) continue;
    let t = el.textContent || '';
    if (!/Apple|WhatsApp|Start with\s*,|photos in\s*\./i.test(t)) continue;
    // Only rewrite leaf-ish nodes
    if (el.childElementCount === 0) {
      el.textContent = t
        .replace(/Send us a reference photo or a quick message\.\s*/gi, 'Send our team a reference photo or a short brief. ')
        .replace(/Start with\s*,?\s*or send your inquiry here[^.]*/gi, 'Use the form below — no email app needed')
        .replace(/Start with WhatsApp,?\s*or send your inquiry here[^.]*/gi, 'Use the form below — no email app needed')
        .replace(/Your contact\s*[·•]\s*Apple/gi, 'Your contact · JSY Crystal')
        .replace(/You can share reference photos in\s*\.?/gi, 'You can attach reference photos or describe them in the form.')
        .replace(/You can share reference photos in WhatsApp\.?/gi, 'You can attach reference photos or describe them in the form.')
        .replace(/\bHi,? Apple,?\s*/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
    }
  }
  for (const el of [...root.querySelectorAll('.jsy-eyebrow, p.jsy-eyebrow')]) {
    if (/Apple/i.test(el.textContent || '')) el.textContent = 'Your contact · JSY Crystal';
  }
  // Fix lead paragraph specifically
  const lead = root.querySelector('p.jsy-lead');
  if (lead) {
    lead.textContent = 'Send our team a reference photo or a short brief. Use the form below — no email app needed.';
  }
}


export function ensureSubnav(doc) {
  if (doc.getElementById('jsy-subnav')) return;
  const bar = doc.createElement('nav');
  bar.id = 'jsy-subnav';
  bar.className = 'jsy-subnav';
  bar.setAttribute('aria-label', 'Buyer paths');
  bar.innerHTML = `<div class="jsy-subnav-inner">
    <strong>Custom</strong>
    <a href="/travel-group-gifts/">Travel groups</a>
    <a href="/corporate-gifts/">Corporate gifts</a>
    <a href="/custom-gemstone-bracelet/">Boutique custom</a>
    <span class="jsy-subnav-sep" aria-hidden="true">|</span>
    <strong>Wholesale</strong>
    <a href="/shop/">Wholesale</a>
    <a href="/private-label-jewelry/">Private label</a>
    <span class="jsy-subnav-sep" aria-hidden="true">|</span>
    <a href="/inquiry/#inquiry-form">Get a quote</a>
    <a href="/inquiry/?intent=custom">Tell Us What You Need</a>
  </div>`;
  const header = doc.querySelector('header') || doc.querySelector('#root > div > header') || doc.querySelector('#root header');
  if (header && header.parentNode) header.insertAdjacentElement('afterend', bar);
  else {
    const root = doc.getElementById('root');
    if (root) root.insertAdjacentElement('afterbegin', bar);
    else doc.body.insertAdjacentElement('afterbegin', bar);
  }
}

export function startPublication(win, doc, loadLegacy) {
  injectHideStyle(doc);
  function normalizeLinks(root) {
    const links = [...(root.matches?.('a[href]') ? [root] : []),
      ...(root.querySelectorAll?.('a[href]') ?? [])];
    for (const anchor of links) {
      const href = anchor.getAttribute('href');
      const url = internalPageURL(href, win.location.href);
      if (!url || !href || href.startsWith('#')) continue;
      const canonical = `${url.pathname}${url.search}${url.hash}`;
      if (href !== canonical) anchor.setAttribute('href', canonical);
    }
  }
  normalizeLinks(doc);
  ensureFormFields(doc);
  stripWhatsApp(doc);
  const observer = new win.MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'attributes') {
        normalizeLinks(record.target);
        if (record.target.matches?.('a[href*="wa.me"]')) record.target.remove();
      } else for (const node of record.addedNodes) {
        if (node.nodeType !== 1) continue;
        normalizeLinks(node);
        ensureFormFields(node);
        stripWhatsApp(node);
        ensureEmailDock(doc);
        patchContactCopy(doc);
        upgradeInquiryForms(doc, win);
        ensureNeedCta(doc);
        ensureSubnav(doc);
      }
    }
  });
  observer.observe(doc.documentElement, {
    childList: true, subtree: true, attributes: true, attributeFilter: ['href'],
  });

  doc.addEventListener('submit', event => {
    const form = event.target;
    if (!(form instanceof win.HTMLFormElement)) return;
    const action = form.getAttribute('action') || '';
    if (!action.includes('formsubmit.co/')) return;
    ensureFormFields(form);
    upgradeInquiryForms(doc, win);
  }, true);

  doc.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
        event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target?.closest?.('a[href]');
    if (!anchor || anchor.hasAttribute('download') ||
        (anchor.target && anchor.target !== '_self')) return;
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    if (/wa\.me/i.test(href)) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const url = internalPageURL(href, win.location.href);
    if (!url) return;
    const current = new URL(win.location.href);
    if (url.pathname === current.pathname && url.search === current.search && url.hash) return;
    event.preventDefault();
    event.stopPropagation();
    win.location.assign(`${url.pathname}${url.search}${url.hash}`);
  }, true);

  const path = canonicalPath(win.location.pathname);
  const isStatic = STATIC_ROUTES.has(path) &&
    doc.documentElement.dataset.jsyRenderMode === 'static';
  // Static pages still get form/CTA polish (no React bundle).
  ensureSubnav(doc);
  ensureNeedCta(doc);
  upgradeInquiryForms(doc, win);
  if (isStatic) return;

  const afterLegacy = () => {
    const polish = () => {
      stripWhatsApp(doc);
      ensureFormFields(doc);
      ensureEmailDock(doc);
      patchContactCopy(doc);
      ensureSubnav(doc);
      ensureNeedCta(doc);
      upgradeInquiryForms(doc, win);
      if (path === '/') {
        ensureBuyerPathsCss(doc);
        patchHomeHeroCopy(doc);
        ensureBuyerPaths(doc);
        patchBuyerPathsCopy(doc);
        ensureBagCharmHomeLinks(doc);
      }
    };
    polish();
    win.setTimeout(polish, 50);
    win.setTimeout(polish, 300);
    win.setTimeout(polish, 1000);
    win.setTimeout(polish, 2500);
  };

  return Promise.resolve(loadLegacy()).then(afterLegacy).catch(afterLegacy);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  startPublication(window, document, () => import('./home-image-20261109.js'));
}
