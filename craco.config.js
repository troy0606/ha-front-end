const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@hero_feature": path.resolve(__dirname, "src/features/hero"),
      "@fp_feature": path.resolve(__dirname, "src/features/fp"),
      "@md_path": path.resolve(__dirname, "src/assets/md"),
      "@utils_style": path.resolve(__dirname, "src/utils/styles"),
    },
    module: {
      rules: [{ test: /\.md$/, type: "asset/source" }],
    },
  },
};
