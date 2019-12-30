module.exports = {
  env: {
    browser: true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 0,
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }],
        'no-undef-init': 0
      }
    }
  ]
}
