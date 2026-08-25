const productionUrl = "https://ironnest.guide";

function normalizeSiteUrl(value: string) {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
}

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  productionUrl;

export const siteUrl = normalizeSiteUrl(configuredUrl);

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
