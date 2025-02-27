const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== "svg"), // Убираем SVG из assetExts
    sourceExts: [...defaultConfig.resolver.sourceExts, "svg"], // Добавляем SVG в sourceExts
  },
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"), // Указываем SVG-трансформер
  },
};

module.exports = mergeConfig(defaultConfig, config);
