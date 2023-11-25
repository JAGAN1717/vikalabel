import { Routes } from '@/config/routes';
import { PaymentGateway } from '@/types'; 




export const siteSettings = {
  name: 'Vikalabel',
  description: '',
  logo: {
    url: '/logo.svg',
    alt: 'Vikalabel',
    href: '/grocery',
    // href: '/clothing',
    width: 128,
    height: 40,
  },
  defaultLanguage: 'en',
  currencyCode: 'INR',
  product: {
    placeholderImage: '/product-placeholder.svg',
    cardMaps: {
      grocery: 'Krypton',
      furniture: 'Radon',
      bag: 'Oganesson',
      makeup: 'Neon',
      book: 'Xenon',
      medicine: 'Helium',
      default: 'Argon',
    },
  },
  authorizedLinks: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    { href: Routes.orders, label: 'auth-menu-my-orders' },
    { href: Routes.wishlists, label: 'profile-sidebar-my-wishlist' },
    { href: Routes.checkout, label: 'auth-menu-checkout' },
  ],
  authorizedLinksMobile: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    { href: Routes.orders, label: 'auth-menu-my-orders' },
    { href: Routes.cards, label: 'profile-sidebar-my-cards' },
    { href: Routes.wishlists, label: 'profile-sidebar-my-wishlist' },
    // { href: Routes.questions, label: 'profile-sidebar-my-questions' },
    { href: Routes.refunds, label: 'text-my-refunds' },
    { href: Routes.reports, label: 'profile-sidebar-my-reports' },
    { href: Routes.checkout, label: 'auth-menu-checkout' },
    { href: Routes.changePassword, label: 'profile-sidebar-password' },
  ],
  dashboardSidebarMenu: [
    {
      href: Routes.profile,
      label: 'profile-sidebar-profile',
    },
    {
      href: Routes.changePassword,
      label: 'profile-sidebar-password',
    },
    {
      href: Routes.orders,
      label: 'profile-sidebar-orders',
    },
    // {
    //   href: Routes.downloads,
    //   label: 'profile-sidebar-downloads',
    // },
    {
      href: Routes.wishlists,
      label: 'profile-sidebar-my-wishlist',
    },
    // {
    //   href: Routes.questions,
    //   label: 'profile-sidebar-my-questions',
    // },
    {
      href: Routes.refunds,
      label: 'text-my-refunds',
    },
    {
      href: Routes.reports,
      label: 'profile-sidebar-my-reports',
    },
    {
      href: Routes.cards,
      label: 'profile-sidebar-my-cards',
      // MultiPayment: Make it dynamic or from mapper
      cardsPayment: [PaymentGateway.STRIPE],
    },
    {
      href: Routes.help,
      label: 'profile-sidebar-help',
    },
    {
      href: Routes.logout,
      label: 'profile-sidebar-logout',
    },
  ],
  sellingAdvertisement: {
    image: {
      src: '/selling.png',
      alt: 'Selling Advertisement',
    },
  },
  cta: {
    mockup_img_src: '/mockup-img.png',
    play_store_link: '/',
    app_store_link: '/',
  },
  footer: {
    copyright: {
      name: 'RedQ, Inc',
      // href: 'https://redq.io/',
      href: '',
    },
    address: '2429 River Drive, Suite 35 Cottonhall, CA 2296 United Kingdom',
    email: 'vikalabel@gmail.com',
    phone: '+91 12345-67890',
    menus: [
      {
        // title: 'text-explore',
        title: 'INFORMATION',
        links: [
          {
            name: 'text-about-us',
            href: '/about',
          },
          {
            name: 'text-contact-us',
            href: Routes.contactUs,
          },
          // {
          //   name: 'Client Diaries',
          //   href: '/',
          // },
          // {
          //   name: 'Help',
          //   href: Routes.help,
          // },
          {
            name: 'text-terms-condition',
            href: Routes.terms,
          },
        ],
      },
      // {
      //   // title: 'text-customer-service',
      //   title: 'CATEGORY',
      //   links: [
      //     {
      //       name: 'Party Wear',
      //       href: '/',
      //     },
      //     {
      //       name: 'Anarkalis',
      //       href: '/',
      //     },
      //     {
      //       name: 'Casual Wear',
      //       href: '/',
      //     },
      //     {
      //       name: 'Designer saree',
      //       href: '/',
      //     },
      //     // {
      //     //   name: 'Full Sets',
      //     //   href: '/',
      //     // },
      //     // {
      //     //   name: 'Kurtis',
      //     //   href: '/',
      //     // },
      //   ],
      // },
      {
        title: 'POLICIES',
        links: [
          {
            name: 'Privacy Policy',
            href: Routes.privacy,
          },
          // {
          //   name: 'text-terms-condition',
          //   href: Routes.terms,
          // },
          {
            name: 'text-return-policy',
            href: '/rpolicy',
          },
          {
            name: 'Shipping Policy',
            href: '/spolicy',
          },
        ],
      },
    ],
    payment_methods: [
      {
        // img: '/payment/master.png',
        img: '/img/_-01.png',
        url: '/',
      },
      // {
      //   // img: '/payment/skrill.png',
      //   img: '/img/_-02.png',
      //   url: '/',
      // },
      {
        // img: '/payment/paypal.png',
        img: '/img/_-03.png',
        url: '/',
      },
      {
        // img: '/payment/visa.png',
        img: '/img/_-04.png',
        url: '/',
      },
      {
        // img: '/payment/discover.png',
        img: '/img/_-05.png',
        url: '/',
      },
      {
        // img: '/payment/discover.png',
        img: '/img/_-06.png',
        url: '/',
      },
      {
        // img: '/payment/discover.png',
        img: '/img/_-09.png',
        url: '/',
      },
      {
        // img: '/payment/discover.png',
        img: '/img/_-08.png',
        url: '/',
      },
    ],
  },
};
