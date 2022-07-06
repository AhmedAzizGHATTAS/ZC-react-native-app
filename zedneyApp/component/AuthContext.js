// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
// import {Auth_URL} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const loginAuth = ()=>{
    setIsLoading(true)
    setUserToken('token')
    AsyncStorage.setItem('userToken','token')
    setIsLoading(false)
  }
  const logout=()=>{
    setIsLoading(true)
    setUserToken(null)
    AsyncStorage.removeItem('userToken')
    setIsLoading(false)
  }
  const isLoggedIn = async()=>{
    try{
      setIsLoading(true)
      let userToken = await AsyncStorage.getItem('userToken')
      setUserToken(userToken)
      setIsLoading(false) 
    }catch(e){
console.log(`isLogged in error ${e}`);
    }
  }
  useEffect(()=>{
    isLoggedIn()
  },[])
  
  
//   const login = (name,email, motDePasse) => {
//     setIsLoading(true);

//     axios
//       .post(`${Auth_URL}/login`, {
//        name,
// email,
//         motDePasse,
//       })
//       .then(res => {
//         let userInfo = res.data;
//         console.log(userInfo);
//         setUserInfo(userInfo);
//         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//         setIsLoading(false);
//       })
//       .catch(e => {
//         console.log(`login error ${e}`);
//         setIsLoading(false);
//       });
//   };

  return (
    <AuthContext.Provider
      value={{loginAuth,logout,isLoading,userToken,userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};