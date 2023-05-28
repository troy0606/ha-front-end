const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@hero_feature': path.resolve(__dirname, 'src/features/hero'),
    },
  },
};