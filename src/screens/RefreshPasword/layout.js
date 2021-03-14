import React from 'react';
import { SafeAreaView, View, StatusBar, Text} from 'react-native';
import makeStyles from './styles';

const RefreshPassword = (props) => {
  const styles = makeStyles();

  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView>
        <View style={styles.container}>
            <Text>Refresh Password</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RefreshPassword;
