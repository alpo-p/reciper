import 'dotenv/config';

export default {
  extra: {
    env: process.env.ENV,
    backendDevUri: process.env.BACKEND_DEV_URI,
    backendProductionUri: process.env.BACKEND_PRODUCTION_URI,
    AWSAccessKeyId: process.env.AWSAccessKeyId,
    AWSSecretKey: process.env.AWSSecretKey,
  },
  name: "reciper-front",
  slug: "reciper-front",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    }
  },
  web: {
    favicon: "./assets/favicon.png"
  }
};
