import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {AuthContext} from '../component/AuthContext';
import axios from 'axios';

export default function Login({}) {
  const {loginAuth} = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    motDePasse: '',
  });
  const {email, motDePasse} = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };
  const login = async () => {
    try {
      const res = await axios.post('http://192.168.1.41:4200/sign-in', {
        ...userInfo,
      });
      setUserInfo({email: '', motDePasse: ''});
      let user = JSON.stringify(res.data);
      if (res.data.success) {
        loginAuth();
      }
    } catch (e) {
      console.log(`login error ${e}`);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.topSection}>
          <Image source={require('../assets/zedneylogo.jpg')} />
        </View>

        <View
          style={styles.bottomSection}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <View style={{width: '80%', marginBottom: 20}}>
              <Text
                style={{
                  color: '#BFBDBA',
                  fontSize: 40,
                  marginTop: 10,
                  marginBottom: 30,
                }}>
                Connectez{'\n'}vous
              </Text>
              <TextInput
                style={{
                  height: 52,
                  width: '100%',
                  color: 'white',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'white',
                  paddingLeft: 10,
                }}
                value={email}
                placeholderTextColor="#BFBDBA"
                placeholder="Adresse e-mail"
                onChangeText={value => handleOnChangeText(value, 'email')}
              />

              <TextInput
                secureTextEntry={true}
                style={{
                  height: 52,
                  width: '100%',
                  color: 'white',
                  borderRadius: 10,
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: 'white',
                  paddingLeft: 10,
                }}
                value={motDePasse}
                placeholderTextColor="#BFBDBA"
                placeholder="Mot de passe"
                onChangeText={value => handleOnChangeText(value, 'motDePasse')}
              />
            </View>
            <TouchableOpacity
              style={{
                height: 52,
                width: '60%',
                color: 'white',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'white',
              }}
              onPress={() => {
                login();
              }}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#F2D22E',
                    paddingHorizontal: '31%',
                    paddingTop: '5%',
                  },
                ]}>
                Se connecter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  marginTop: 20,
                  color: '#F2D22E',
                  textDecorationLine: 'underline',
                }}>
                Mot de passe oublié
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topSection: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '27%',
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomSection: {
    width: '100%',
    height: '70%',
    backgroundColor: '#2A558C',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
