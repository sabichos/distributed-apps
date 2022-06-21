/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['https://esm.sh',"https://cdn.skypack.dev"],
  }
}

module.exports = nextConfig
