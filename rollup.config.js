import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import svelte from 'rollup-plugin-svelte'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',

  output: {
    name: 'PangolinVisualReview',
    file: 'dist/bundle.min.js',
    format: 'iife',
    sourcemap: true
  },

  plugins: [
    svelte({
      dev: !production,
      emitCss: true
    }),

    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    commonjs(),

    postcss(),

    !production && serve(['dist', 'docs']),
    !production && livereload(['dist', 'docs']),

    production && terser()
  ]
}
