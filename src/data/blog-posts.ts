// Blog post data — transcribed exactly from the blog index pages
// (src/pages/blog/index.astro and src/pages/en/blog/index.astro), newest first.
// Used by the homepage blog sections and the site-wide sidebar.
export interface BlogPost {
  href: string;
  img: string;
  alt: string;
  tag: string;   // card label as shown on the blog index, e.g. "Article · 15 November 2026"
  date: string;  // date only, for compact sidebar display
  title: string;
  excerpt: string;
}

export const blogPostsHi: BlogPost[] = [
  {
    href: '/blog/edistrict-forms-download/',
    img: '/images/blog/edistrict-forms-download-featured.webp',
    alt: 'eDistrict UP के सभी फॉर्म और घोषणा पत्र — एक जगह सूची (उदाहरण चित्र)',
    tag: 'आर्टिकल · 15 नवंबर 2026',
    date: '15 नवंबर 2026',
    title: 'eDistrict Form PDF: सभी प्रमाण पत्रों के फॉर्म और घोषणा पत्र — एक ही जगह',
    excerpt: 'कौन सा फॉर्म कहां से मिलेगा — स्व-प्रमाणित घोषणा पत्र का आधिकारिक स्रोत और JPEG नियम, हर सेवा के आवेदन-फॉर्म की असली व्यवस्था, और फॉर्म की गलतियों से बचाव।',
  },
  {
    href: '/blog/edistrict-helpline-contact/',
    img: '/images/blog/edistrict-helpline-contact-featured.webp',
    alt: 'प्रमाण पत्र अटक जाए तो किससे संपर्क करें — सही क्रम (उदाहरण चित्र)',
    tag: 'आर्टिकल · 15 नवंबर 2026',
    date: '15 नवंबर 2026',
    title: 'eDistrict Helpline: प्रमाण पत्र अटक जाए तो कहां संपर्क करें — Email, नंबर और शिकायत का सही क्रम',
    excerpt: 'सत्यापित आधिकारिक संपर्क — हेल्पडेस्क 0522-2304706, ceghelpdesk@gmail.com, CM हेल्पलाइन 1076, IGRS शिकायत और जनहित अपील का सही क्रम।',
  },
  {
    href: '/blog/esathi-download/',
    img: '/images/blog/esathi-download-featured.webp',
    alt: 'eSathi डाउनलोड — लॉगिन के बाद प्रमाण पत्र PDF लेना (उदाहरण चित्र)',
    tag: 'आर्टिकल · 14 नवंबर 2026',
    date: '14 नवंबर 2026',
    title: 'eSathi Download: लॉगिन करके प्रमाण पत्र और दस्तावेज़ कैसे डाउनलोड करें',
    excerpt: 'डाउनलोड के लिए login क्यों ज़रूरी है, Completed Applications से PDF लेने का रास्ता, file कहां मिलती है, DigiLocker और CSC वाला रास्ता — और download न होने के हल।',
  },
  {
    href: '/blog/esathi-login-forgot-password-otp/',
    img: '/images/blog/esathi-login-forgot-password-otp-featured.webp',
    alt: 'eSathi लॉगिन समस्या — पासवर्ड और OTP सहायता (उदाहरण चित्र)',
    tag: 'आर्टिकल · 12 नवंबर 2026',
    date: '12 नवंबर 2026',
    title: 'eSathi लॉगिन नहीं हो रहा? पासवर्ड भूल गए या OTP नहीं आ रहा — क्या करें',
    excerpt: 'लॉगिन ID और पासवर्ड की recovery, OTP न आने के हल, captcha और page न खुलने की समस्याएं — सही website से लेकर helpdesk तक, चरण-दर-चरण।',
  },
  {
    href: '/blog/certificate-print-download-verification/',
    img: '/images/blog/certificate-print-download-verification-featured.webp',
    alt: 'प्रमाण पत्र प्रिंट, डाउनलोड और सत्यापन (उदाहरण चित्र)',
    tag: 'आर्टिकल · 11 नवंबर 2026',
    date: '11 नवंबर 2026',
    title: 'eDistrict Print: Certificate Print, Download और Verification कैसे करें',
    excerpt: 'जारी प्रमाण पत्र की PDF कैसे लें, print कैसे करें और Certificate Number व QR से verify कैसे करें — Completed Applications, DigiLocker और आम समस्याओं के हल के साथ।',
  },
  {
    href: '/blog/rani-laxmibai-scooty-yojana-verification-november-2026/',
    img: '/images/blog/rani-laxmibai-scooty-yojana-verification-november-2026-featured.webp',
    alt: 'रानी लक्ष्मीबाई स्कूटी योजना — प्रमाण पत्र सत्यापन (उदाहरण चित्र)',
    tag: 'खबर · 8 नवंबर 2026',
    date: '8 नवंबर 2026',
    title: 'रानी लक्ष्मीबाई स्कूटी योजना: निवास और आय प्रमाण पत्र का सत्यापन 10 नवंबर तक — छात्राएं ये जांच लें',
    excerpt: 'चुनी गई छात्राओं के निवास और आय प्रमाण पत्र का सत्यापन 10 नवंबर तक होना है — कौन चुना गया, कौन से प्रमाण पत्र जांचे जाएंगे, और अपना प्रमाण पत्र e-District पोर्टल पर खुद कैसे जांचें।',
  },
  {
    href: '/blog/up-scholarship-deadline-extension-13-november-2026/',
    img: '/images/blog/up-scholarship-deadline-extension-13-november-2026-featured.webp',
    alt: 'UP छात्रवृत्ति 2026-27 — आखिरी तारीख बढ़ने की खबर (उदाहरण चित्र)',
    tag: 'अपडेट · 8 नवंबर 2026',
    date: '8 नवंबर 2026',
    title: 'UP छात्रवृत्ति 2026-27: फॉर्म की आखिरी तारीख 13 नवंबर तक बढ़ने की खबर — पहले पोर्टल पर जांच लें',
    excerpt: 'दशमोत्तर फ्रेश और नवीनीकरण फॉर्म की आखिरी तारीख 13 नवंबर तक बढ़ने की खबर है — लेकिन आधिकारिक पुष्टि अभी नहीं। फॉर्म से पहले आय प्रमाण पत्र में क्या ठीक करें।',
  },
  {
    href: '/blog/janhit-guarantee-appeal-delayed-certificate/',
    img: '/images/blog/janhit-guarantee-appeal-delayed-certificate-featured.webp',
    alt: 'जनहित गारंटी अधिनियम — अपील के चरण (उदाहरण चित्र)',
    tag: 'आर्टिकल · 6 नवंबर 2026',
    date: '6 नवंबर 2026',
    title: 'प्रमाण पत्र समय पर न मिले तो क्या करें? यूपी जनहित गारंटी अधिनियम 2011 — अपील का पूरा तरीका',
    excerpt: 'तहसीलदार से एसडीएम और एसडीएम से डीएम तक — देरी या खारिज होने पर पहली और दूसरी अपील का रास्ता, 30 और 60 दिन की समय-सीमा, और ₹500–₹5,000 जुर्माने का नियम।',
  },
  {
    href: '/blog/up-scholarship-verification-november-2026/',
    img: '/images/blog/up-scholarship-verification-november-2026-featured.webp',
    alt: 'यूपी छात्रवृत्ति नवंबर 2026 सत्यापन (उदाहरण चित्र)',
    tag: 'अपडेट · 6 नवंबर 2026',
    date: '6 नवंबर 2026',
    title: 'यूपी छात्रवृत्ति 2026-27: नवंबर में सत्यापन का कार्यक्रम — कब क्या होगा',
    excerpt: 'एनआईसी जांच 6–20 नवंबर, संस्थान सत्यापन 10 नवंबर तक, विश्वविद्यालय सत्यापन 25 नवंबर तक — और सुधार विंडो 21 नवंबर से।',
  },
  {
    href: '/blog/kasganj-certificate-clearance-october-2026/',
    img: '/images/blog/kasganj-certificate-clearance-october-2026-featured.webp',
    alt: 'कासगंज — eDistrict आवेदन निपटान, अक्टूबर 2026 (उदाहरण चित्र)',
    tag: 'खबर · 6 नवंबर 2026',
    date: '6 नवंबर 2026',
    title: 'कासगंज ने अक्टूबर 2026 में 97.2% eDistrict आवेदन निपटाए — यूपी में पहले नंबर पर',
    excerpt: 'अक्टूबर 2026 में कासगंज जिला पूरे यूपी में पहले नंबर पर रहा — 97.20% आवेदन निपटाए। बाक़ी 2.8% क्यों रह गए, और अपना फॉर्म खारिज होने से कैसे बचाएं।',
  },
];

export const blogPostsEn: BlogPost[] = [
  {
    href: '/en/blog/edistrict-forms-download/',
    img: '/images/blog/edistrict-forms-download-featured.webp',
    alt: 'All eDistrict UP forms and declarations — listed in one place (example illustration)',
    tag: 'Article · 15 November 2026',
    date: '15 November 2026',
    title: 'eDistrict Form PDF: Every Certificate Form and the Declaration — in One Place',
    excerpt: 'Which form comes from where — the official source and JPEG rule for the self-declaration, the real application-form arrangement for every service, and how to avoid form mistakes.',
  },
  {
    href: '/en/blog/edistrict-helpline-contact/',
    img: '/images/blog/edistrict-helpline-contact-featured.webp',
    alt: 'Who to contact when a certificate is stuck — in the right order (example illustration)',
    tag: 'Article · 15 November 2026',
    date: '15 November 2026',
    title: 'eDistrict Helpline: Where to Contact When a Certificate Is Stuck — Email, Number and the Right Complaint Order',
    excerpt: 'Verified official contacts — helpdesk 0522-2304706, ceghelpdesk@gmail.com, CM Helpline 1076, the IGRS complaint route and the Janhit appeal, in the right order.',
  },
  {
    href: '/en/blog/esathi-download/',
    img: '/images/blog/esathi-download-featured.webp',
    alt: 'eSathi download — getting your certificate PDF after login (example illustration)',
    tag: 'Article · 14 November 2026',
    date: '14 November 2026',
    title: 'eSathi Download: How to Download Your Certificate and Documents After Login',
    excerpt: 'Why a download needs login first, the Completed Applications route to the PDF, where the file lands, the DigiLocker and CSC routes — and fixes when the download does not work.',
  },
  {
    href: '/en/blog/esathi-login-forgot-password-otp/',
    img: '/images/blog/esathi-login-forgot-password-otp-featured.webp',
    alt: 'eSathi login problems — password and OTP help (example illustration)',
    tag: 'Article · 12 November 2026',
    date: '12 November 2026',
    title: 'eSathi Login Not Working? Forgot Password or OTP Not Received — What to Do',
    excerpt: 'Login ID and password recovery, fixes for OTP not received, captcha and page-not-opening errors — from the right website to the helpdesk, step by step.',
  },
  {
    href: '/en/blog/certificate-print-download-verification/',
    img: '/images/blog/certificate-print-download-verification-featured.webp',
    alt: 'Certificate print, download and verification (example illustration)',
    tag: 'Article · 11 November 2026',
    date: '11 November 2026',
    title: 'eDistrict Print: How to Print, Download and Verify Your Certificate',
    excerpt: 'How to print, download and verify an eDistrict UP certificate — download the signed PDF from Completed Applications, check status with your application number, verify with Certificate Verification and QR, and fix common problems.',
  },
  {
    href: '/en/blog/rani-laxmibai-scooty-yojana-verification-november-2026/',
    img: '/images/blog/rani-laxmibai-scooty-yojana-verification-november-2026-featured.webp',
    alt: 'Rani Laxmibai Scooty Yojana — certificate verification (example illustration)',
    tag: 'News · 8 November 2026',
    date: '8 November 2026',
    title: 'Rani Laxmibai Scooty Yojana: Domicile and Income Certificate Verification by 10 November — What Students Must Check',
    excerpt: 'Selected students must get their domicile and income certificates verified by 10 November 2026 — who was selected, which certificates will be checked, and how to check your own certificate on the e-District portal.',
  },
  {
    href: '/en/blog/up-scholarship-deadline-extension-13-november-2026/',
    img: '/images/blog/up-scholarship-deadline-extension-13-november-2026-featured.webp',
    alt: 'UP Scholarship 2026-27 — last date extension reported (example illustration)',
    tag: 'Update · 8 November 2026',
    date: '8 November 2026',
    title: 'UP Scholarship 2026-27: Last Date Reported Extended to 13 November — Check the Portal Yourself First',
    excerpt: 'The Dashmottar fresh and renewal form last date is reported to be extended to 13 November — but there is no official confirmation yet. What to fix in the income certificate first.',
  },
  {
    href: '/en/blog/janhit-guarantee-appeal-delayed-certificate/',
    img: '/images/blog/janhit-guarantee-appeal-delayed-certificate-featured.webp',
    alt: 'Appeal route under the UP Janhit Guarantee Act, 2011 (example illustration)',
    tag: 'Article · 6 November 2026',
    date: '6 November 2026',
    title: 'What to Do If Your Certificate Does Not Arrive on Time? UP Janhit Guarantee Act 2011 — the Full Appeal Process',
    excerpt: 'From Tehsildar to SDM and SDM to District Magistrate — the first and second appeal route for delays or rejection, the 30- and 60-day limits, and the ₹500–₹5,000 penalty rule.',
  },
  {
    href: '/en/blog/up-scholarship-verification-november-2026/',
    img: '/images/blog/up-scholarship-verification-november-2026-featured.webp',
    alt: 'UP Scholarship 2026-27 verification schedule for November 2026 (example illustration)',
    tag: 'Update · 6 November 2026',
    date: '6 November 2026',
    title: 'UP Scholarship 2026-27: November Verification Schedule — What Happens When',
    excerpt: 'NIC scrutiny 6–20 November, institution verification until 10 November, university verification until 25 November — and the correction window from 21 November.',
  },
  {
    href: '/en/blog/kasganj-certificate-clearance-october-2026/',
    img: '/images/blog/kasganj-certificate-clearance-october-2026-featured.webp',
    alt: 'Kasganj district topping Uttar Pradesh in eDistrict certificate clearance (example illustration)',
    tag: 'News · 6 November 2026',
    date: '6 November 2026',
    title: 'Kasganj Cleared 97.2% of eDistrict Applications in October 2026 — First in UP',
    excerpt: 'In October 2026, Kasganj district ranked first across UP — 97.20% of applications cleared. Why the remaining 2.8% were left, and how to keep your own form from being rejected.',
  },
];

export function getBlogPosts(lang: 'hi' | 'en'): BlogPost[] {
  return lang === 'hi' ? blogPostsHi : blogPostsEn;
}
