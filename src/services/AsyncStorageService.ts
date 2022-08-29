import AsyncStorage from '@react-native-async-storage/async-storage';

class AStorageService {
  async setData(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }

  async getData(key: string) {
    try {
      const data = await AsyncStorage.getItem(key);

      if (data) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async removeData(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }
}

export const AsyncStorageService = new AStorageService();
