/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self' https://www.gstatic.com;
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              connect-src 'self' http://localhost:5000;
              style-src 'self' 'unsafe-inline' https://www.gstatic.com;
              img-src 'self' data:;
            `.replace(/\s{2,}/g, " "),
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",         // intercepta chamadas locais a /api/*
        destination: "http://localhost:5000/api/:path*", // e redireciona pro backend
      },
    ];
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
