
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginLayout from '../screens/Login';
import SignupLayout from '../screens/Signup';
import AuthNavigator from './AuthNavigator';
import RefreshPasswordLayout from '../screens/RefreshPasword';
import SplashLayout from '../screens/Splash';

function LoginScreen({ navigation }) {
  return (
    <LoginLayout navigation={navigation} />
  );
}

function SplashScreen({ route, navigation }) {
  return (
    <SplashLayout navigation={navigation} route={route}  to="Login" />
  );
}

function SignupScreen({ navigation }) {
  return (
    <SignupLayout navigation={navigation} />
  );
}

function RefreshPassword({ navigation }) {
  return (
    <RefreshPasswordLayout navigation={navigation} />
  );
}


const StackNavigator = createStackNavigator();

const LoginStackNavigator = (props) => {
  return (
    <StackNavigator.Navigator initialRouteName="Splash">
      <StackNavigator.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown:false
        }}
      />
      <StackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown:false
        }}
      />
      <StackNavigator.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: 'Sign up' ,headerBackground:"#6441a5" }}
      />
      <StackNavigator.Screen
        name="RefreshPassword"
        component={RefreshPassword}
        options={{ title: 'Refresh Password' }}
      />
      <StackNavigator.Screen
        name="AuthStack"
        component={AuthNavigator}
      />
    </StackNavigator.Navigator>
  );
}

export default LoginStackNavigator;