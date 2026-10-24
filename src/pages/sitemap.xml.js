const SITE = 'https://edistrictupseva.com';
const slugs = [
  '', 'income-certificate', 'caste-certificate', 'domicile-certificate',
  'birth-certificate', 'death-certificate', 'parivar-register-nakal',
  'self-declaration-form', 'csc-guide', 'about-us', 'contact-us',
  'login-registration', 'status-verification', 'ews-certificate',
  'privacy-policy', 'disclaimer',
];
export function GET() {
  const lastmod = '2026-10-24';
  const entries = slugs.flatMap((s) => {
    const hi = `${SITE}/${s ? s + '/' : ''}`;
    const en = `${SITE}/en/${s ? s + '/' : ''}`;
    const alternates = `
      <xhtml:link rel="alternate" hreflang="hi-IN" href="${hi}" />
      <xhtml:link rel="alternate" hreflang="en-IN" href="${en}" />
      <xhtml:link rel="alternate" hreflang="x-default" href="${hi}" />`;
    return [
      `  <url><loc>${hi}</loc><lastmod>${lastmod}</lastmod>${alternates}\n  </url>`,
      `  <url><loc>${en}</loc><lastmod>${lastmod}</lastmod>${alternates}\n  </url>`,
    ];
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
