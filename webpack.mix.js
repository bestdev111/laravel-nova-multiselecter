let path = require('path');
let mix = require('laravel-mix');
let postcss = require('postcss-import');
let tailwindcss = require('tailwindcss');

mix
  .setPublicPath('dist')
  .js('resources/js/entry.js', 'js')
  .vue({ version: 3 })
  .webpackConfig({
    // stats: { children: true },
    externals: {
      vue: 'Vue',
      'laravel-nova': 'LaravelNova',
    },
    output: {
      uniqueName: 'outl1ne/nova-multiselect-field',
    },
  })
  .postCss('resources/css/entry.css', 'dist/css/', [postcss(), tailwindcss('tailwind.config.js')]);
