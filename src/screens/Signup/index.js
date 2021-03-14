import React, {useEffect} from 'react';
import SignupContent from './layout';

const SignupScreen = props => {

  useEffect(() => {

   }, []);

  const onPressSignup = () => {
      alert('test');
  }

  return (
    <SignupContent
       onPressSignup={onPressSignup}
    />
  );
};

export default SignupScreen;
