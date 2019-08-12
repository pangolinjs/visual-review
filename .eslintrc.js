module.exports = {
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
        'no-undef-init': 0
      }
    }
  ]
}
