module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ],
          root: ['./'],
          alias: {
            '@helpers': './src/helpers',
            '@constants': './src/constants',
            '@models': './src/models',
            '@store': './src/store',

            '@components': './src/view/components',
            '@screens': './src/view/screens',
            '@navigation': './src/view/navigation',

            '@data': './src/data',

            '@fonts': './assets/fonts',
            '@images': './assets/images'
          },
        }
      ]
    ]
  };
};
