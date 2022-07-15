# stream-chat-electron
Minimal reproduction example to figure out issue

**INSTALLATION**

`yarn install`

**START SERVER**

`yarn start`

**MORE INFO ON EXPO ELECTRON**

[Using electron with Expo](https://docs.expo.dev/guides/using-electron/)

**COMPILE TIME ERROR**

```
  ERROR in ./node_modules/html-to-react/node_modules/htmlparser2/lib/esm/index.js 59:9
  Module parse failed: Unexpected token (59:9)
  You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
  |     return getFeed(parseDOM(feed, options));
  | }
  > export * as DomUtils from "domutils";
  | // Old name for DomHandler
  | export { DomHandler as DefaultHandler };
   @ ./node_modules/html-to-react/lib/parser.js 2:19-41
   @ ./node_modules/html-to-react/index.js
   @ ./node_modules/react-markdown/lib/plugins/html-parser.js
   @ ./node_modules/react-markdown/lib/with-html.js
   @ ./node_modules/react-markdown/with-html.js
   @ ./node_modules/stream-chat-react/dist/utils.js
   @ ./node_modules/stream-chat-react/dist/index.js
   @ ./App.js
   @ ./node_modules/expo/AppEntry.js
   @ multi css-hot-loader/hotModuleReplacement ./node_modules/expo/AppEntry.js
  Child HtmlWebpackCompiler:
       1 asset
      Entrypoint HtmlWebpackPlugin_0 = __child-HtmlWebpackPlugin_0
      [./node_modules/html-loader/dist/cjs.js?minimize=false!./dist/.renderer-index-template.html] 3.59 KiB {HtmlWebpackPlugin_0} [built]
  Child mini-css-extract-plugin node_modules/css-loader/dist/cjs.js??ref--7-2!node_modules/stream-chat-react/dist/css/index.css:
      Entrypoint mini-css-extract-plugin = *
      [./node_modules/css-loader/dist/cjs.js?!./node_modules/stream-chat-react/dist/css/index.css] ./node_modules/css-loader/dist/cjs.js??ref--7-2!./node_modules/stream-chat-react/dist/css/index.css 202 KiB {mini-css-extract-plugin} [built]
      [./node_modules/css-loader/dist/runtime/api.js] 2.46 KiB {mini-css-extract-plugin} [built]
      [./node_modules/css-loader/dist/runtime/getUrl.js] 830 bytes {mini-css-extract-plugin} [built]
      [./node_modules/stream-chat-react/dist/assets/EmojiOneColor.woff2] 77 bytes {mini-css-extract-plugin} [built]
      [./node_modules/stream-chat-react/dist/assets/NotoColorEmoji-flags.woff2] 84 bytes {mini-css-extract-plugin} [built]
      [./node_modules/stream-chat-react/dist/assets/Poweredby_100px-White_VertText.png] 1.97 KiB {mini-css-extract-plugin} [built]
      [./node_modules/stream-chat-react/dist/assets/str-chat__reaction-list-sprite@1x.png] 2.58 KiB {mini-css-extract-plugin} [built]
      [./node_modules/stream-chat-react/dist/assets/str-chat__reaction-list-sprite@2x.png] 5.25 KiB {mini-css-extract-plugin} [built]
      [./node_modules/stream-chat-react/dist/assets/str-chat__reaction-list-sprite@3x.png] 10.1 KiB {mini-css-extract-plugin} [built]

┗ ----------------------------
┏ Renderer -------------------

  ℹ ｢wdm｣: Failed to compile.

┗ ----------------------------
┏ Renderer -------------------

  ℹ ｢wdm｣: Compiling...

┗ ----------------------------
┏ Renderer -------------------

  ✖ ｢wdm｣: Hash: 8f98fbf297ae08530f7f
  Version: webpack 4.43.0
  Time: 181ms
  Built at: 07/15/2022 12:21:59 PM
   8 assets
  Entrypoint renderer = styles.css renderer.js
  [./node_modules/html-to-react/node_modules/htmlparser2/lib/esm/index.js] 398 bytes {renderer} [built] [failed] [1 error]
      + 936 hidden modules
  
  ERROR in ./node_modules/html-to-react/node_modules/htmlparser2/lib/esm/index.js 59:9
  Module parse failed: Unexpected token (59:9)
  You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
  |     return getFeed(parseDOM(feed, options));
  | }
  > export * as DomUtils from "domutils";
  | // Old name for DomHandler
  | export { DomHandler as DefaultHandler };
   @ ./node_modules/html-to-react/lib/parser.js 2:19-41
   @ ./node_modules/html-to-react/index.js
   @ ./node_modules/react-markdown/lib/plugins/html-parser.js
   @ ./node_modules/react-markdown/lib/with-html.js
   @ ./node_modules/react-markdown/with-html.js
   @ ./node_modules/stream-chat-react/dist/utils.js
   @ ./node_modules/stream-chat-react/dist/index.js
   @ ./App.js
   @ ./node_modules/expo/AppEntry.js
   @ multi css-hot-loader/hotModuleReplacement ./node_modules/expo/AppEntry.js
  Child HtmlWebpackCompiler:
       1 asset
      Entrypoint HtmlWebpackPlugin_0 = __child-HtmlWebpackPlugin_0
      [./node_modules/html-loader/dist/cjs.js?minimize=false!./dist/.renderer-index-template.html] 3.59 KiB {HtmlWebpackPlugin_0} [built]

┗ ----------------------------
┏ Renderer -------------------
```
