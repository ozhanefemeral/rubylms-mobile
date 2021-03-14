import { StyleSheet, } from 'react-native';

import color from '../../constants/color';


export default () =>
  StyleSheet.create({
    container: {
      backgroundColor: color.white,
      alignContent: 'center',
      width: '100%',
      height: '100%',
      flex:1
    },
    text: {
      textAlign: "left",
      marginBottom: 5,
      fontWeight: "bold",
      marginBottom:12
    },
    globalView: color.globalView,
  });
