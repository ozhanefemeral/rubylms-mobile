import React, { useEffect } from 'react';
import SplashContent from './layout';
import { useUser } from '../../store';


const SplashScreen = ({ navigation, route ,to}) => {
   

  setTimeout(() => {
    navigation.navigate(to)
  },2000)

  return (
    <SplashContent

    />
  );
};

export default SplashScreen;
