import React, {useEffect, useState} from 'react';
import LoginContent from './layout';
import { useUser} from '../../store';
import userActions from '../../actions/userActions';
import {setData, getData} from '../../providers/AsyncStorage'
import ApiCall from '../../providers/ApiCall'


const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [ userState, userDispatch ] = useUser();

  const getToken = async () => {
    const token  = await getData('token');
    if(token){
      userDispatch(userActions.updateToken(token));
    }
  }

  useEffect( () => {
     getToken();
   }, [userState]);


   const onPressSignup = () => {
        props.navigation.navigate('Signup')
   }

   const onPressLogin = async () => {
     const response = await ApiCall.login(username,password);
     if(response.body.token){
      userDispatch(userActions.updateToken(response.token));
      await setData('token', response.body.token);
      await setData('studentId', response.body.studentId);
     }else{
      alert('Hatalı giriş yaptınız ! ')
     } 
   }


  return (
    <LoginContent
       onPressLogin={onPressLogin}
       onPressSignup={onPressSignup}
       username={username}
       setUsername={setUsername}
       password={password}
       setPassword={setPassword}
    />
  );
};

export default LoginScreen;
