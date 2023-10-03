const { i18n } = require('./next-i18next.config');

/** @type {import("next").NextConfig} */
const config = {
  i18n,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/all',
        permanent: false,
      },
    ];
  },
};

module.exports = config;
