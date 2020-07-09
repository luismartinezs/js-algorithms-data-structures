const path = require('path')

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['standard', 'plugin:vue/essential'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off'
    // indent: [2, 'tab', { ignoredNodes: ['TemplateLiteral > *'] }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Src', path.resolve(__dirname, 'src')],
          ['TestE2e', path.resolve(__dirname, 'test/e2e')],
          ['Common', path.resolve(__dirname, 'src/common')],
          ['App', path.resolve(__dirname, 'src/app')],
          ['Campaign', path.resolve(__dirname, 'src/campaign')],
          [
            'OverviewTotal',
            path.resolve(__dirname, 'src/campaign/overview/total')
          ],
          [
            'OverviewPerChannel',
            path.resolve(__dirname, 'src/campaign/overview/per/channel')
          ],
          ['Activities', path.resolve(__dirname, 'src/campaign/activities')],
          ['AdPreviews', path.resolve(__dirname, 'src/campaign/ad-previews')],
          ['Magic', path.resolve(__dirname, 'src/magic/link/token')],
          ['Mixin', path.resolve(__dirname, 'src/common/mixin')]
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  }
}
