/** Static publication entry (2026-11-09 v3). Email-first contact (no WhatsApp).
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
  style.textContent = '.jsy-whatsapp,a[href*="wa.me"],.jsx-btn-wa,.jsy-phone{display:none!important}.jsy-contact-dock{position:fixed;right:16px;bottom:16px;z-index:60;display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}.jsy-contact-dock .jsy-dock-email,.jsy-contact-dock .jsy-dock-secondary{display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:999px;text-decoration:none;font-size:.88rem;box-shadow:0 8px 24px #0003}.jsy-contact-dock .jsy-dock-email{background:#292524;color:#fff}.jsy-contact-dock .jsy-dock-secondary{background:#fff;color:#1c1917;border:1px solid #e7e5e4}';
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
    <p class="jsy-buyer-paths-lead">Natural stone beaded bracelets — custom programs for end clients, and wholesale supply for distributors.</p>
    <div class="jsy-buyer-paths-grid">
      <article class="jsy-buyer-card">
        <img src="/media/travel-group-gifts-concept.webp" alt="Natural stone bracelets prepared as travel and tour group gifts" width="640" height="400" loading="lazy" decoding="async">
        <h3>Custom for end clients</h3>
        <p>Tour groups, company annual meetings, and boutique exclusive designs — made to your brief.</p>
        <ul>
          <li><a href="/travel-group-gifts/">Travel &amp; tour group gifts</a></li>
          <li><a href="/corporate-gifts/">Corporate &amp; annual meeting gifts</a></li>
          <li><a href="/custom-gemstone-bracelet/">Boutique &amp; crystal-shop custom</a></li>
        </ul>
        <div class="jsy-buyer-card-actions">
          <a class="jsx-btn" href="/custom-gemstone-bracelet/">Explore custom</a>
          <a class="jsy-buyer-quote" href="/inquiry/#inquiry-form">Get a quote</a>
        </div>
      </article>
      <article class="jsy-buyer-card">
        <img src="/media/brand-collection-faceted-20261020.webp" alt="Wholesale natural stone beaded bracelets for distributors and private label" width="640" height="400" loading="lazy" decoding="async">
        <h3>Wholesale for distributors</h3>
        <p>Bulk natural-stone bracelets for wholesalers who resell to retailers, with private label packaging and tags.</p>
        <ul>
          <li><a href="/shop/">Wholesale catalog</a></li>
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
    if (ps[0] && /private label|jewelry brands/i.test(ps[0].textContent || '')) {
      ps[0].textContent = 'Custom programs for travel groups, company gifts and boutique exclusives — plus wholesale supply and private label for distributors. Natural stone beaded bracelets from our Shanwei partner factory.';
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
    <a href="/shop/">Catalog</a>
    <a href="/private-label-jewelry/">Private label</a>
    <span class="jsy-subnav-sep" aria-hidden="true">|</span>
    <a href="/inquiry/#inquiry-form">Get a quote</a>
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
  if (isStatic) return;

  const afterLegacy = () => {
    const polish = () => {
      stripWhatsApp(doc);
      ensureFormFields(doc);
      ensureEmailDock(doc);
      patchContactCopy(doc);
      if (path === '/') {
        ensureBuyerPathsCss(doc);
        patchHomeHeroCopy(doc);
        ensureBuyerPaths(doc);
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
  startPublication(window, document, () => import('./whatsapp-20261020.js'));
}
