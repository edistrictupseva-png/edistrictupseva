const SITE = 'https://edistrictupseva.com';
const slugs = [
  '', 'income-certificate', 'caste-certificate', 'domicile-certificate',
  'birth-certificate', 'death-certificate', 'parivar-register-nakal',
  'self-declaration-form', 'csc-guide', 'about-us', 'contact-us',
  'login-registration', 'status-verification', 'ews-certificate',
  'privacy-policy', 'disclaimer',
];
export function GET() {
  // Per-slug lastmod: 2026-10-27 = pages content-edited in this fix round;
  // 2026-10-22 = trust pages not edited in this round.
  const lastmodBySlug = {
    '': '2026-10-27',
    'income-certificate': '2026-10-27',
    'caste-certificate': '2026-10-27',
    'domicile-certificate': '2026-10-27',
    'birth-certificate': '2026-10-27',
    'death-certificate': '2026-10-27',
    'parivar-register-nakal': '2026-10-27',
    'self-declaration-form': '2026-10-27',
    'csc-guide': '2026-10-27',
    'login-registration': '2026-10-27',
    'status-verification': '2026-10-27',
    'ews-certificate': '2026-10-27',
    'about-us': '2026-10-22',
    'contact-us': '2026-10-22',
    'privacy-policy': '2026-10-22',
    'disclaimer': '2026-10-22',
  };
  const entries = slugs.flatMap((s) => {
    const lastmod = lastmodBySlug[s];
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
