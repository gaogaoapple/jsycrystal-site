/** Static publication entry. Keep the legacy catalog bundle unchanged. */
export const STATIC_ROUTES = new Set([
  '/about/', '/factory/', '/ketang/', '/corporate-gifts/',
  '/choose-gemstone-bracelet-wholesale-supplier/',
  '/importing-crystal-bracelets-from-china/',
  '/gemstone-bracelet-bead-size-guide/',
]);
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

export function startPublication(win, doc, loadLegacy) {
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
  const observer = new win.MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'attributes') normalizeLinks(record.target);
      else for (const node of record.addedNodes) normalizeLinks(node);
    }
  });
  observer.observe(doc.documentElement, {
    childList: true, subtree: true, attributes: true, attributeFilter: ['href'],
  });

  // Each HTML document owns its title, canonical and structured data. Native
  // document navigation also allows the seven static routes to bypass React.
  doc.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
        event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target?.closest?.('a[href]');
    if (!anchor || anchor.hasAttribute('download') ||
        (anchor.target && anchor.target !== '_self')) return;
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#')) return;
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
  if (!isStatic) return loadLegacy();
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  startPublication(window, document, () => import('./home-image-20261109.js'));
}
