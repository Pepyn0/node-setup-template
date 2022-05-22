module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/models',
        '@views': './src/views',
        '@controllers': './src/controllers',
        '@config': './src/config',
        '@core': './src/core',
        '@domain': './src/domain',
        '@infra': './src/infra'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
