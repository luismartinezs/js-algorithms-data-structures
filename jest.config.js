module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'json'],
  // required to tell babel to transpire un-transpiled dependencies inside node_modules, to use in jest
  transformIgnorePatterns: [
    '/node_modules/(?!(@babel/runtime-corejs2/helpers/esm))'
  ]
}
