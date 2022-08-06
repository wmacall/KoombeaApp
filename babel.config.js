module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@components': './src/components',
          '@i18n': './src/i18n',
          '@constants': './src/constants',
          '@routes': './src/routes',
          '@hooks': './src/hooks',
          '@api': './src/api',
        },
      },
    ],
  ],
};
