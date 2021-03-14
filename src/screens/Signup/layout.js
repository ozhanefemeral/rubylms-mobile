import React from 'react';
import { SafeAreaView, View, StatusBar, Text, Button} from 'react-native';
import makeStyles from './styles';

const Signup = (props) => {
  const styles = makeStyles();

  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView>
        <View style={styles.container}>
            <Text>Signup</Text>
            <Button onPress={props.onPressSignup} title='Sign up'/>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Signup;
