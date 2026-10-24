const SITE = 'https://edistrictupseva.com';
const slugs = [
  '', 'income-certificate', 'caste-certificate', 'domicile-certificate',
  'birth-certificate', 'death-certificate', 'parivar-register-nakal',
  'self-declaration-form', 'csc-guide', 'about-us', 'contact-us',
  'login-registration', 'status-verification', 'ews-certificate',
  'privacy-policy', 'disclaimer',
];
export function GET() {
  const urls = [];
  for (const s of slugs) {
    urls.push(`${SITE}/${s ? s + '/' : ''}`);
    urls.push(`${SITE}/en/${s ? s + '/' : ''}`);
  }
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc><changefreq>monthly</changefreq></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
