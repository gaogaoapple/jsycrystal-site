import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const content = JSON.parse(await readFile(path.join(root, "content", "site-content.json"), "utf8"));

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceBetween(html, start, end, value) {
  const pattern = new RegExp(`${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}`);
  return html.replace(pattern, `${start}${value}${end}`);
}

async function update(file, transform) {
  const filePath = path.join(root, file);
  const before = await readFile(filePath, "utf8");
  const after = transform(before);
  await writeFile(filePath, after, "utf8");
}

await update("index.html", (html) => {
  let next = html;
  next = next.replace(/<title>[\s\S]*?<\/title>/, `<title>${content.brand.displayName} | Natural Crystal Jewelry Wholesale Supplier</title>`);
  next = replaceBetween(next, '<strong data-edit="brand-name">', "</strong>", content.brand.displayName);
  next = replaceBetween(next, '<small data-edit="brand-tagline">', "</small>", content.brand.tagline);
  next = replaceBetween(next, '<p class="eyebrow" data-edit="home-eyebrow">', "</p>", content.home.eyebrow);
  next = replaceBetween(next, '<h1 data-edit="home-title">', "</h1>", content.home.title);
  next = replaceBetween(next, '<p class="hero-text" data-edit="home-intro">', "</p>", content.home.intro);
  next = replaceBetween(next, '<figcaption data-edit="home-caption">', "</figcaption>", `<strong>Main focus:</strong> ${content.home.mainImageCaption.replace(/^Main focus:\s*/i, "")}`);
  next = next.replaceAll("apple.cao@jsycrystal.com", content.brand.email);
  next = next.replaceAll("marketing@jsycrystal.com", content.brand.email);
  next = next.replaceAll("jsycrystal.com", content.brand.website);
  next = next.replaceAll("姹曞熬甯傛櫠鐕婄紭鐝犲疂鏈夐檺鍏徃", content.brand.legalName);

  const cards = content.products
    .map((product, index) => `          <a class="product-card${index === 0 ? " primary-product" : ""}" href="${product.url}">
            <span>${product.label}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </a>`)
    .join("\n");
  next = next.replace(/          <a class="product-card primary-product"[\s\S]*?          <\/a>\n          <a class="product-card"[\s\S]*?          <\/a>\n          <a class="product-card"[\s\S]*?          <\/a>\n          <a class="product-card"[\s\S]*?          <\/a>/, cards);

  next = replaceBetween(next, '<h2 data-edit="contact-heading">', "</h2>", content.contact.heading);
  next = replaceBetween(next, '<p data-edit="contact-description">', "</p>", content.contact.description);
  return next;
});

await update("products/index.html", (html) => {
  let next = html.replaceAll("apple.cao@jsycrystal.com", content.brand.email);
  next = next.replaceAll("marketing@jsycrystal.com", content.brand.email);
  next = next.replaceAll("JSY Crystal", content.brand.displayName);
  const cards = content.products
    .map((product, index) => `        <a class="catalog-card${index === 0 ? " featured" : ""}" href="${product.url}">
          <span>${index === 0 ? "Primary category" : product.label}</span>
          <h2>${product.name}</h2>
          <p>${product.description}</p>
        </a>`)
    .join("\n");
  next = next.replace(/        <a class="catalog-card featured"[\s\S]*?        <\/a>\n        <a class="catalog-card"[\s\S]*?        <\/a>\n        <a class="catalog-card"[\s\S]*?        <\/a>\n        <a class="catalog-card"[\s\S]*?        <\/a>/, cards);
  return next;
});

console.log("Site content applied.");
