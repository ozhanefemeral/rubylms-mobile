import {StyleSheet, } from 'react-native';

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
  });
