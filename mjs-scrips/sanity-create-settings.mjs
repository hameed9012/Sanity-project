// sanity-create-settings.mjs
// Creates the siteSettings singleton in Sanity
// NAVBAR matches the original hardcoded defaults in TopHeaderClient EXACTLY
//
// PowerShell: $env:SANITY_TOKEN="sk...yourtoken"; node sanity-create-settings.mjs

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '20d53wo5',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

if (!process.env.SANITY_TOKEN) {
  console.error('❌  Missing SANITY_TOKEN'); process.exit(1);
}

const settings = {
  _id: 'siteSettings',
  _type: 'siteSettings',

  // ── NAVBAR — matches TopHeaderClient hardcoded defaults EXACTLY ──
  // Left side: ABOUT, PROPERTIES, OFFPLAN, SECONDARY, LANDS, WHERE TO LIVE
  // Right side: DEVELOPERS, MARKET ANALYSIS, Search, MEDIA CENTER, CONTACT US
  navbar: {
    desktopLeft: [
      { _key: 'nl1', labelEn: 'ABOUT',         labelAr: 'من نحن',        type: 'link', href: '/about',         openInNewTab: false },
      { _key: 'nl2', labelEn: 'PROPERTIES',    labelAr: 'العقارات',      type: 'link', href: '/properties',    openInNewTab: false },
      { _key: 'nl3', labelEn: 'OFFPLAN',       labelAr: 'على الخارطة',   type: 'link', href: '/offplan',       openInNewTab: false },
      { _key: 'nl4', labelEn: 'SECONDARY',     labelAr: 'الثانوي',       type: 'link', href: '/secondary',     openInNewTab: false },
      { _key: 'nl5', labelEn: 'LANDS',         labelAr: 'الأراضي',       type: 'link', href: '/lands',         openInNewTab: false },
      { _key: 'nl6', labelEn: 'WHERE TO LIVE', labelAr: 'أين تسكن',      type: 'link', href: '/where-to-live', openInNewTab: false },
    ],
    desktopRight: [
      { _key: 'nr1', labelEn: 'DEVELOPERS',      labelAr: 'المطورون',         type: 'link',          href: '/developers',      openInNewTab: false },
      { _key: 'nr2', labelEn: 'MARKET ANALYSIS', labelAr: 'تحليل السوق',      type: 'link',          href: '/market-analysis', openInNewTab: false },
      { _key: 'nr3', labelEn: 'Search',           labelAr: 'بحث',              type: 'action_search', href: '',                 openInNewTab: false },
      { _key: 'nr4', labelEn: 'MEDIA CENTER',    labelAr: 'المركز الإعلامي',  type: 'link',          href: '/articles/',       openInNewTab: false },
      { _key: 'nr5', labelEn: 'CONTACT US',      labelAr: 'تواصل معنا',       type: 'link',          href: '/contact-us/',     openInNewTab: false },
    ],
    mobileMenu: [
      { _key: 'nm1',  labelEn: 'ABOUT',           labelAr: 'من نحن',           type: 'link',          href: '/about',           openInNewTab: false },
      { _key: 'nm2',  labelEn: 'SEARCH PROPERTIES',labelAr: 'بحث عن عقارات',  type: 'action_search', href: '',                 openInNewTab: false },
      { _key: 'nm3',  labelEn: 'PROPERTIES',      labelAr: 'العقارات',         type: 'link',          href: '/properties',      openInNewTab: false },
      { _key: 'nm4',  labelEn: 'OFFPLAN',          labelAr: 'على الخارطة',     type: 'link',          href: '/offplan',         openInNewTab: false },
      { _key: 'nm5',  labelEn: 'SECONDARY',        labelAr: 'الثانوي',          type: 'link',          href: '/secondary',       openInNewTab: false },
      { _key: 'nm6',  labelEn: 'LANDS',            labelAr: 'الأراضي',          type: 'link',          href: '/lands',           openInNewTab: false },
      { _key: 'nm7',  labelEn: 'WHERE TO LIVE',    labelAr: 'أين تسكن',         type: 'link',          href: '/where-to-live',   openInNewTab: false },
      { _key: 'nm8',  labelEn: 'DEVELOPERS',       labelAr: 'المطورون',         type: 'link',          href: '/developers',      openInNewTab: false },
      { _key: 'nm9',  labelEn: 'MARKET ANALYSIS',  labelAr: 'تحليل السوق',      type: 'link',          href: '/market-analysis', openInNewTab: false },
      { _key: 'nm10', labelEn: 'MEDIA CENTER',     labelAr: 'المركز الإعلامي', type: 'link',          href: '/articles',        openInNewTab: false },
      { _key: 'nm11', labelEn: 'CONTACT US',       labelAr: 'تواصل معنا',       type: 'link',          href: '/contact-us',      openInNewTab: false },
    ],
  },

  // ── ART OF DETAIL ─────────────────────────────────────────
  artOfDetail: {
    sloganPre:     'CRAFTED WITH',
    sloganPreAr:   'صُنع بـ',
    sloganMain:    'THE ART OF DETAIL',
    sloganMainAr:  'فن التفاصيل',
    companyLine:   'Al Rasikhoon Real Estate',
    companyLineAr: 'الراسخون للعقارات',
    description:   'We believe every great investment begins with expert guidance, local knowledge, and an unwavering commitment to your goals.',
    descriptionAr: 'نؤمن بأن كل استثمار ناجح يبدأ بإرشاد متخصص ومعرفة محلية وتفانٍ حقيقي في تحقيق أهدافك.',
    ownerImage:    '/boss-nobg.png',
    discoverMoreUrl: '/about',
  },

  // ── PILLARS ───────────────────────────────────────────────
  pillars: {
    heading:   'OUR THREE PILLARS',
    headingAr: 'ركائزنا الثلاث',
    items: [
      {
        _key: 'p1',
        title:   'Expert Knowledge',
        titleAr: 'الخبرة والمعرفة',
        intro:   'Deep market expertise across the UAE real estate landscape.',
        introAr: 'خبرة عميقة في سوق العقارات الإماراتي.',
        imageUrl: '/pillar-1.avif',
        points:   ['10+ years in Dubai market', 'DLD certified advisor', 'Access to pre-launch projects', 'Data-driven investment strategies', 'Full market analysis', 'Off-plan specialists', 'Secondary market experts'],
        pointsAr: ['أكثر من 10 سنوات في سوق دبي', 'مستشار معتمد من دائرة الأراضي والأملاك', 'وصول إلى مشاريع ما قبل الإطلاق', 'استراتيجيات استثمارية مبنية على البيانات', 'تحليل شامل للسوق', 'متخصصون في العقارات قيد الإنشاء', 'خبراء السوق الثانوي'],
      },
      {
        _key: 'p2',
        title:   'Trusted Network',
        titleAr: 'شبكة الثقة',
        intro:   'Exclusive relationships with top UAE developers.',
        introAr: 'علاقات حصرية مع كبار المطورين في الإمارات.',
        imageUrl: '/pillar-2.png',
        points:   ['26+ premium developers', 'Exclusive launch allocations', 'Pre-approved payment plans', 'Priority access to inventory'],
        pointsAr: ['أكثر من 26 مطوراً متميزاً', 'تخصيصات حصرية عند الإطلاق', 'خطط دفع معتمدة مسبقاً', 'وصول أولوي إلى المخزون'],
      },
      {
        _key: 'p3',
        title:   'Client First',
        titleAr: 'العميل أولاً',
        intro:   'Your investment goals drive every recommendation we make.',
        introAr: 'أهدافك الاستثمارية تقود كل توصياتنا.',
        imageUrl: '/pillar-3-2.jpg',
        points:   ['Bilingual Arabic/English service', '15-30% proven ROI track record', 'Post-purchase support included'],
        pointsAr: ['خدمة ثنائية اللغة عربي/إنجليزي', 'سجل عائد استثماري مُثبت 15-30%', 'دعم ما بعد الشراء مشمول'],
      },
    ],
  },

  // ── CONTACT ───────────────────────────────────────────────
  contact: {
    whatsapp:    '971568888906',
    phone:       '+971 56 888 8906',
    email:       'info@mohamadkodmani.ae',
    formTitle:   'Get In Touch',
    formTitleAr: 'تواصل معنا',
  },
};

async function run() {
  console.log('\n🚀  Writing siteSettings to Sanity...\n');
  try {
    await client.createOrReplace(settings);
    console.log('  ✅  siteSettings created/updated');
    console.log('\n  Navbar links written:');
    console.log('    Left:   ', settings.navbar.desktopLeft.map(l => l.labelEn).join(' | '));
    console.log('    Right:  ', settings.navbar.desktopRight.map(l => l.labelEn).join(' | '));
    console.log('    Mobile: ', settings.navbar.mobileMenu.map(l => l.labelEn).join(' | '));
    console.log('\n  👉  Go to Sanity Studio → Site Settings to edit further\n');
  } catch (e) {
    console.error('  ❌  Error:', e.message);
  }
}

run();
