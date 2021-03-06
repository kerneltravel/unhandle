let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
  .js('resources/assets/js/inline-attachment.js', 'public/js/inline-attachment.js')
  .copyDirectory('node_modules/simplemde/dist/', 'public/js/simplemde/')
  .js('resources/assets/js/page-question-show.js', 'public/js/')
;
