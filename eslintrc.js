module.exports = {
    "env": {
      "browser": true,
      "es6": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "react-hooks"
    ],
    "rules": {
      // Add any additional rules here
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  };
  