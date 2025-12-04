// next.config.mjs

import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  productionBrowserSourceMaps: false,
  output: "export",
  compress: true,
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
    },
    "date-fns": {
      transform: "date-fns/{{member}}",
    },
  },
});

export default nextConfig;
