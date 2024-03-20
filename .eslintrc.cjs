module.exports = {
  'env': {
    'browser': true,
    'es2021': true 
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vitest-globals/recommended'
  ],
  'overrides': [
    {
      'env': { 'node': true },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': { 'sourceType': 'script' } 
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module' 
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'comma-spacing': ['error', { before: false, after: true }],
    'semi-spacing': ['error', { before: false, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 3
      },      
      'multiline': {
        'max': 1
      }
    }]
  }
};
