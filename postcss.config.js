const production = !process.env.ROLLUP_WATCH

module.exports = {
  plugins: {
    cssnano: production
  }
}
