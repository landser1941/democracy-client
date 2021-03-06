module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true
  },
  parser: "babel-eslint",
  plugins: ["react", "react-native", "flowtype", "prettier", "standard"],
  extends: ["airbnb", "prettier", "prettier/flowtype", "prettier/react"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ios.js", ".android.js"]
      }
    }
  },
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "no-use-before-define": 0,
    "global-require": 0,
    "no-underscore-dangle": ["error", { allow: ["_id"] }]
  }
};
