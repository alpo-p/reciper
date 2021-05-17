import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AuthStorage {
  namespace: string;
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getKey(key: string) {
    return `${this.namespace}:${key}`;
  }

  getAccessToken() {
    return AsyncStorage.getItem(this.getKey('accessToken'));
  }

  setAccessToken(accessToken: string) {
    return AsyncStorage.setItem(this.getKey('accessToken'), accessToken);
  }

  removeAccessToken() {
    return AsyncStorage.removeItem(this.getKey('accessToken'));
  }
}