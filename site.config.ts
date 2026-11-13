import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Frost & Crumbs",
  tagline: "Custom cakes, Nigerian snacks, bread and pastries.",
  category: "Cakes and baked goods",
  schemaType: "Bakery",
  area: "Milton, ON",
  siteUrl: "https://frost-and-crumbs-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#8a4a86" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Cakes and bakes in Milton",
    headline: "Custom cakes, snacks and pastries, baked with care",
    subhead: "Frost & Crumbs makes custom celebration cakes, authentic Nigerian snacks, freshly baked bread and pastries in Milton, with delivery across the GTA. Order by WhatsApp or Instagram DM.",
    images: [
      { src: "/images/post-1.jpg", alt: "A black and gold birthday cake from Frost & Crumbs", width: 1080, height: 1424 },
      { src: "/images/post-6.jpg", alt: "A red rose bouquet cake from Frost & Crumbs", width: 1080, height: 1438 },
      { src: "/images/post-5.jpg", alt: "A space-themed first birthday cake from Frost & Crumbs", width: 1080, height: 1176 },
    ],
    primaryCta: { label: "Order on WhatsApp", href: "https://wa.me/14379336182" },
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Custom celebration cakes in Milton",
    "Authentic Nigerian snacks, bread and pastries",
    "Delivery across the GTA",
    "Order by WhatsApp or Instagram DM",
  ],

  about: {
    title: "Welcome to Frost & Crumbs",
    body: [
      "Frost & Crumbs makes custom celebration cakes, authentic Nigerian snacks, freshly baked bread and pastries in Milton, with delivery across the GTA and nearby areas.",
      "Recent cakes have included a black and gold birthday cake, a pink bow cake, a yellow butterfly cake, a space-themed first birthday cake and a red rose bouquet cake. Order by WhatsApp at 437-933-6182, or send a message on Instagram.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A black and gold birthday cake from Frost & Crumbs", width: 1080, height: 1424 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Send a WhatsApp or Instagram message for a quote on your date and order.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Custom celebration cakes", description: "Recent work has included themed, bow and rose bouquet cakes." },
        ],
      },
      {
        title: "Snacks and pastries",
        items: [
          { name: "Meat pie (beef patty)" },
          { name: "Chicken pie" },
          { name: "Sausage rolls" },
          { name: "Freshly baked bread and pastries" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent bakes",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1424, alt: "A black and gold birthday cake from Frost & Crumbs", caption: "A black and gold cake", href: "https://www.instagram.com/p/DflgaZ5tefv/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1438, alt: "A red rose bouquet cake from Frost & Crumbs", caption: "A rose bouquet cake", href: "https://www.instagram.com/p/DfWHBc9xb9K/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1176, alt: "A space-themed first birthday cake from Frost & Crumbs", caption: "A first birthday cake", href: "https://www.instagram.com/p/DfYyWNAx8Nm/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1920, alt: "A pink bow birthday cake from Frost & Crumbs", caption: "A bow cake", href: "https://www.instagram.com/reel/Dfld_TKNEz7/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1234, alt: "A yellow butterfly birthday cake from Frost & Crumbs", caption: "A butterfly cake", href: "https://www.instagram.com/p/DfY4OCjRtfA/" },
      { src: "/images/post-3.jpg", width: 502, height: 886, alt: "Meat pies and baked buns from Frost & Crumbs", caption: "Nigerian snacks", href: "https://www.instagram.com/reel/DfgQha_xRgq/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "frostandcrumbs",
    embeds: ["https://www.instagram.com/p/DflgaZ5tefv/", "https://www.instagram.com/p/DfWHBc9xb9K/", "https://www.instagram.com/p/DfYyWNAx8Nm/"],
  },

  order: {
    label: "How to order",
    title: "Order on WhatsApp or in a DM",
    intro: "Send a WhatsApp message to 437-933-6182, or a message on Instagram, with your date and what you would like to order. Frost & Crumbs is based in Milton and delivers across the GTA.",
    dmMessage: "Hi Frost & Crumbs! I would like to order.\nDate needed:\nCake or baked goods:",
    headerCtaLabel: "Order on WhatsApp",
    links: [
      { label: "Order on WhatsApp", href: "https://wa.me/14379336182" },
      { label: "Order by Instagram DM", href: "https://ig.me/m/frostandcrumbs" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a WhatsApp message to 437-933-6182, or a message on Instagram, with your date and what you would like to order." },
    { q: "Do you deliver?", a: "Yes. Frost & Crumbs is based in Milton and delivers cakes and baked goods across the GTA and nearby areas." },
    { q: "What do you bake?", a: "Custom celebration cakes, plus authentic Nigerian snacks such as meat pie, chicken pie and sausage rolls, and freshly baked bread and pastries." },
  ],

  contact: {
    title: "Contact",
    area: "Milton, Ontario, with delivery across the GTA",
    phone: "437-933-6182",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/frostandcrumbs/" }],
  },

  seo: {
    title: "Frost & Crumbs | Custom cakes and Nigerian snacks in Milton",
    description: "Custom cakes, Nigerian snacks, bread and pastries in Milton, with delivery across the GTA. Order by WhatsApp 437-933-6182 or send an Instagram DM.",
    keywords: ["custom cakes Milton", "Nigerian snacks GTA", "Frost & Crumbs"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
