# JSY Crystal production website

This repository is the published GitHub Pages site for https://jsycrystal.com/ (CNAME: jsycrystal.com).

Editable application source is maintained in gaogaoapple/jsycrystal-com-full-backup-2026. Source changes there do not automatically update this publication repository.

## 2026-10-20 brand buyer landing update

- Private-label page: clear B2B brand audience, light hero, existing local gemstone imagery, sample/MOQ/mixed-order FAQs, brand project inquiry links.
- Homepage: sample inquiry instead of an unconditional free-sample/covered-shipping offer.
- Preserve existing static product data and all other application code; do not overwrite this bundle with an unadapted full-stack build requiring the unavailable Manus backend.
- CSS was generated from the validated source build. Existing image/font assets remain in place.
- index.html and 404.html point to the same versioned JS/CSS assets so deep links continue to work.

Validation: source TypeScript check and production build passed; 23 tests passed and 1 live Shopify test skipped. Publication bundle syntax and component server rendering passed; exact comparison verified unrelated bundle code is unchanged.

Rollback: restore index.html and 404.html from commit dbd2879c7e81d2a101d61c5766c328b7c643cefc. Previous assets remain available.
