/*
|-------------------------------------------------------------------------------
| Production config                       https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

module.exports = {
  build: {
    templates: {
      destination: {
        path: 'build_production',
      },
    },
  },
  minify: true,
  inlineCSS: {
    mergeLonghand: true
  },
  removeUnusedCSS: true,
  shorthandCSS: true,
  prettify: true,
}
