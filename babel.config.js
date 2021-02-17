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
            '@components': './src/components',
            '@constants': './src/constants',
            '@models': './src/models'
          },
        }
      ]
    ]
  };
};
