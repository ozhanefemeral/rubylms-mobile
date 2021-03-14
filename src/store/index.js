
import React, { useContext, createContext, useReducer } from 'react';
import userReducer, { userState } from '../reducers/userReducer';
import loadingReducer, { loadingState } from '../reducers/loadingReducer';


const UserContext = createContext(userState);
const LoadingContext = createContext(loadingState)


const Store = ({ children }) => (
  <UserContext.Provider value={useReducer(userReducer, userState)}>
      <LoadingContext.Provider value={useReducer(loadingReducer, loadingState)}>
         {children}
      </LoadingContext.Provider>
  </UserContext.Provider>
);

const useUser = () => useContext(UserContext);
const useLoading = () => useContext(LoadingContext)

export {
  Store as default,
  useUser,
  useLoading,
};