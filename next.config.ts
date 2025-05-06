import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 🔒 Увімкнена перевірка безпечного React-коду
  reactStrictMode: true,

  // 🌐 Міжнародна локалізація (опціонально)
  // i18n: {
  //   locales: ['en', 'ua'], // додай мови, які підтримує сайт
  //   defaultLocale: 'ua',
  // },

  // 🖼️ Оптимізація зображень
  images: {
    formats: ['image/avif', 'image/webp'], // краща компресія
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ❗️на проді вкажи конкретно (наприклад: cdn.example.com)
      },
    ],
  },

  // ⚗️ Експериментальні фічі (якщо юзаєш Server Actions)
  experimental: {
    serverActions: {}, // або конфіг { bodySizeLimit, allowedOrigins }
  },

  // 🚀 Мінімальні production-оптимізації
  // (Next 15+ автоматично мінімізує код і юзає turbopack)

  // 🔐 Заголовки (наприклад, для безпеки та кешування)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
