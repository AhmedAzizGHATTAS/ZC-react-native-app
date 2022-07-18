import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';
export default function Register({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const register = () => {
    const userData = {name: name, email: email, motDePasse: motDePasse};
    setIsLoading(true);
    axios
      .post(`http://192.168.1.41:4200/register`, userData)
      .then(response => {
        if (response.data.success) {
          navigation.navigate('Login');
        } else {
          Alert.alert(response.data.message);
        }
      })
      .catch(e => {
        console.log(`register error ==> ${e}`);

        setIsLoading(false);
      });
  };
  const haveAccount = () => {
    navigation.navigate('Login');
    setIsLoading(false);
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
                  marginTop: '-8%',
                  marginBottom: '6%',
                }}>
                Creé votre{'\n'}compte
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
                value={name}
                placeholderTextColor="#BFBDBA"
                placeholder="Votre nom"
                onChangeText={text => {
                  setName(text);
                }}
              />
              <TextInput
                style={{
                  height: 52,
                  width: '100%',
                  color: 'white',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'white',
                  paddingLeft: 10,
                  marginTop: 10,
                }}
                value={email}
                placeholderTextColor="#BFBDBA"
                placeholder="Adresse e-mail"
                onChangeText={text => {
                  setEmail(text);
                }}
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
                onChangeText={text => setMotDePasse(text)}
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
                alignItems: 'center',
              }}
              onPress={register}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#F2D22E',
                    paddingTop: '5%',
                  },
                ]}>
                S’inscrire
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => haveAccount()}>
              <Text
                style={{
                  marginTop: 20,
                  color: '#F2D22E',
                  textDecorationLine: 'underline',
                }}>
                J'ai déjà un compte
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
