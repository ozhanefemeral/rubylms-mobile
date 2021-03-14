import React from 'react';
import { SafeAreaView, View, StatusBar, Text, Button, Image} from 'react-native';
import makeStyles from './styles';

const Splash = (props) => {
  const styles = makeStyles();

  return (
    <>
    <StatusBar hidden />
      <SafeAreaView style={styles.container}>
        <Image
        source={
          require('../../assets/images/diamond.png')
        }
        style={styles.image}
        resizeMode='contain'
        />
      </SafeAreaView>
    </>
  );
};

export default Splash;
