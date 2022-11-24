/* eslint-disable comma-dangle */

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          /** @see https://www.reactnativeschool.com/how-to-setup-path-alias-in-a-react-native-typescript-app */
          '@': './src'
        }
      }
    ]
  ]
};
