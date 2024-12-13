/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'page.tsx'],
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'pt-BR',
  },
  images: {
    domains: ['api.sumup.com', 'v2.exercisedb.io', 'images.unsplash.com'],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    })

    return config
  },
}

module.exports = nextConfig
