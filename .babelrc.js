module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@images': './src/assets/images',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
             }
        }
      ]
    ]
  };

