import {StyleSheet, } from 'react-native';

import color from '../../constants/color';


export default () =>
  StyleSheet.create({
    container: {
      backgroundColor: "#6441a5",
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      flex:1,
    },
    inputContainer:{
      height: 40, 
      width:'80%',
      margin:20,
      marginTop:5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius:5,
      padding:10,
      },
      cardContainer:{
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor:color.white,
        borderRadius:20,
        marginHorizontal:10,
        padding:8
      }
  });
