import 'dotenv/config';

export default {
  extra: {
    env: process.env.ENV,
    backendDevUri: process.env.BACKEND_DEV_URI,
    backendProductionUri: process.env.BACKEND_PRODUCTION_URI,
    AWSAccessKeyId: process.env.AWSAccessKeyId,
    AWSSecretKey: process.env.AWSSecretKey,
  },
  name: "Reciper",
  slug: "reciper",
  version: "0.5.2",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#2a9d8f"
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
  },
  expo: {
    name: "Reciper",
    icon: "./assets/icon.png",
    version: "0.5.2",
    slug: "reciper",
    ios: {
      bundleIdentifier: "com.alpo.reciper",
      buildNumber: "0.5.2"
    },
    android: {
      package: "com.alpo.reciper",
      versionCode: 3
    }
  }
};
