import AsyncStorage from '@react-native-community/async-storage';

const setData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  }

const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
          console.log(value)
        // value previously stored
        return value;
      }
    } catch(e) {
      // error reading value
    }
}

const removeItem = async (key) => {
  try {
      await AsyncStorage.removeItem(key);
      return true;
  }
  catch(exception) {
      return false;
  }
}

export {setData , getData, removeItem};