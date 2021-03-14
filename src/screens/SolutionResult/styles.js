import { StyleSheet, } from 'react-native';

import color from '../../constants/color';


export default () =>
  StyleSheet.create({
    container: {
      backgroundColor: color.white,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    text: {
      backgroundColor: color.white,
      textAlign: "center"
    }, topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    globalView: color.globalView,
    card: {
      flex: 1,
      marginHorizontal: 15,
      marginVertical: 5
    },

    correct: {
      backgroundColor: '#4CAF50'
    },

    wrong: {
      backgroundColor: '#FF9800'
    },

    questionText: {
      color: 'white',
      marginBottom:10
    }

  });