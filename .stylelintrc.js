module.exports = {
  extends: [
    "stylelint-config-recess-order",
    "stylelint-config-recommended-scss",
  ],
  rules: {
    // ::before, ::afterのコロンを2つにする
    "selector-pseudo-element-colon-notation": "double",
    // クラス名でアンパサンド（&）は禁止（&:hoverなどはOK）
    "scss/selector-no-union-class-name": true,
    // シングルクォーテーションに統一
    // "string-quotes": "single",
  },
  // 無理やりですが、@Tailwindが紐づいているglobals.cssは除外する
  // そんため、Scssやcssが別に用意が必要
  ignoreFiles: ["**/node_modules/**", "**/globals.css"],
};
