import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import AuthStackNavigator from './AuthNavigator';
import { useUser } from '../store';



function Routes() {
  const [userState, userDispatch] = useUser();
  const [isLoading, setIsLoading] = useUser(); //bunu değşircez
  

  useEffect(() => {
  }, [userState]);


  return (
    <NavigationContainer>
      {userState.token == null ? <StackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

export default Routes;