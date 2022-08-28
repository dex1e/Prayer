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
}

export const AsyncStorageService = new AStorageService();

// export const setData = async (key: string, value: any) => {
//   try {
//     await AsyncStorage.setItem(key, JSON.stringify(value));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getData = async (key: string) => {
//   try {
//     const data = await AsyncStorage.getItem(key);

//     if (data) {
//       return JSON.parse(data);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
