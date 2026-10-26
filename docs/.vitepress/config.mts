import { defineConfig } from 'vitepress';

// Published on GitHub Pages at https://amasmoudi90.github.io/yafa-react-docs/
export default defineConfig({
  base: '/yafa-react-docs/',
  title: 'YAFA React',
  description: 'توثيق ثيم يافا لمتاجر سلة',
  cleanUrls: true,
  lastUpdated: true,
  head: [['meta', { name: 'theme-color', content: '#4438ce' }]],
  locales: {
    root: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      title: 'ثيم يافا',
      description: 'توثيق ثيم يافا (YAFA React) لمتاجر سلة',
      themeConfig: {
        nav: [
          { text: 'البداية', link: '/guide/getting-started' },
          { text: 'الإعدادات', link: '/guide/settings' },
          { text: 'عناصر الرئيسية', link: '/guide/home-blocks' },
          { text: 'الدعم', link: '/support' },
        ],
        sidebar: [
          {
            text: 'الدليل',
            items: [
              { text: 'البداية السريعة', link: '/guide/getting-started' },
              { text: 'إعدادات الثيم', link: '/guide/settings' },
              { text: 'عناصر الصفحة الرئيسية', link: '/guide/home-blocks' },
              { text: 'صفحات المتجر', link: '/guide/pages' },
              { text: 'المحتوى بلغتين', link: '/guide/languages' },
              { text: 'الأسئلة الشائعة', link: '/guide/faq' },
            ],
          },
          {
            text: 'المزيد',
            items: [
              { text: 'سجل التحديثات', link: '/changelog' },
              { text: 'الدعم والتواصل', link: '/support' },
            ],
          },
        ],
        outline: { label: 'في هذه الصفحة', level: [2, 3] },
        docFooter: { prev: 'السابق', next: 'التالي' },
        lastUpdated: { text: 'آخر تحديث' },
        returnToTopLabel: 'العودة للأعلى',
        sidebarMenuLabel: 'القائمة',
        darkModeSwitchLabel: 'المظهر',
        lightModeSwitchTitle: 'الوضع النهاري',
        darkModeSwitchTitle: 'الوضع الداكن',
        langMenuLabel: 'اللغة',
        footer: { message: 'ثيم يافا لمتاجر سلة', copyright: '© YAFA' },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      dir: 'ltr',
      link: '/en/',
      title: 'YAFA Theme',
      description: 'Documentation of the YAFA React theme for Salla stores',
      themeConfig: {
        nav: [
          { text: 'Getting started', link: '/en/guide/getting-started' },
          { text: 'Settings', link: '/en/guide/settings' },
          { text: 'Home blocks', link: '/en/guide/home-blocks' },
          { text: 'Support', link: '/en/support' },
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Getting started', link: '/en/guide/getting-started' },
              { text: 'Theme settings', link: '/en/guide/settings' },
              { text: 'Home page blocks', link: '/en/guide/home-blocks' },
              { text: 'Store pages', link: '/en/guide/pages' },
              { text: 'Content in two languages', link: '/en/guide/languages' },
              { text: 'FAQ', link: '/en/guide/faq' },
            ],
          },
          {
            text: 'More',
            items: [
              { text: 'Changelog', link: '/en/changelog' },
              { text: 'Support', link: '/en/support' },
            ],
          },
        ],
        outline: { label: 'On this page', level: [2, 3] },
        footer: { message: 'YAFA theme for Salla stores', copyright: '© YAFA' },
      },
    },
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'بحث', buttonAriaLabel: 'بحث' },
              modal: {
                noResultsText: 'لا توجد نتائج',
                resetButtonTitle: 'مسح',
                footer: { selectText: 'اختيار', navigateText: 'تنقل', closeText: 'إغلاق' },
              },
            },
          },
        },
      },
    },
  },
});
