import React from 'react';
import { SafeAreaView, View, StatusBar,  TextInput,Image,KeyboardAvoidingView} from 'react-native';
import {Button} from 'react-native-elements'
import makeStyles from './styles';
import ListItem from '../../components/ListItem';

const Login = (props) => {
  const styles = makeStyles();
  const {onPressSignup, onPressLogin, username, setUsername, password, setPassword}  = props;
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}
      >
        <View style={styles.container}>
          <View style={styles.cardContainer}>
           <Image style={{width:150,height:150}}
               source={require('../../assets/images/diamond.png')}
               resizeMode='stretch'
           />
            <TextInput 
              
              style={styles.inputContainer}
              value={username}
              onChangeText={setUsername}
              placeholder="Öğrenci Numarası"
            />
            <TextInput 
              style={styles.inputContainer}
              value={password}
              onChangeText={setPassword}
              placeholder="Şifre"
              textContentType="password"
              secureTextEntry={true}
            />       
            <Button style={{backgroundColor:"#4CAF50"}} buttonStyle={{backgroundColor:"#4CAF50",width:100,marginBottom:5}} onPress={onPressLogin} title='GİRİŞ'/>
            </View>
        </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default Login;
