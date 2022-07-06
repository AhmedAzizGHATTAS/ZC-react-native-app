import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { AuthContext } from "../component/AuthContext";
// import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";
import { Auth_URL } from "../config";

export default function Login({ navigation }) {
  const {loginAuth,logout,userToken}=useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const login = (email, motDePasse) => {
    setIsLoading(true);
    axios
      .post(`${Auth_URL}/login`, {
        email,
        motDePasse,
      })
      .then((res) => {
        AsyncStorage.setItem("userInfo", JSON.stringify(res.data));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* <Spinner visible={isLoading} /> */}
      <View style={styles.body}>
        <View style={styles.topSection}>
          <Image source={require("../assets/zedneylogo.jpg")} />
        </View>

        <View
          // colors={["#192f6a", "#4c669f"]}
          style={styles.bottomSection}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <View style={{ width: "80%", marginBottom: 20 }}>
              <Text
                style={{
                  color: "#BFBDBA",
                  fontSize: 40,
                  marginTop: 10,
                  marginBottom: 30,
                }}
              >
                Connectez{"\n"}vous
              </Text>
              <TextInput
                style={{
                  height: 52,
                  width: "100%",
                  color: "white",
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "white",
                  paddingLeft: 10,
                }}
                value={email}
                placeholderTextColor="#BFBDBA"
                placeholder="Adresse e-mail"
                onChangeText={(text) =>{
                   setEmail(text)
                  console.log(text);}}
              />
              
              <TextInput
                secureTextEntry={true}
                style={{
                  height: 52,
                  width: "100%",
                  color: "white",
                  borderRadius: 10,
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: "white",
                  paddingLeft: 10,
                }}
                value={motDePasse}
                placeholderTextColor="#BFBDBA"
                placeholder="Mot de passe"
                onChangeText={(text) => setMotDePasse(text)}
              />
            </View>
            <TouchableOpacity
              style={{
                height: 52,
                width: "60%",
                color: "white",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "white",
              }}
              // onPress={() => navigation.navigate("Tabs")}
              onPress={()=>{loginAuth()}}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#F2D22E",
                    paddingHorizontal: "31%",
                    paddingTop: "5%",
                  },
                ]}
              >
                Se connecter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  marginTop: 20,
                  color: "#F2D22E",
                  textDecorationLine: "underline",
                }}
                
              >
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
    alignItems: "center",
    justifyContent: "center",
    height: "27%",
    backgroundColor: "white",
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bottomSection: {
    width: "100%",
    height: "70%",
    backgroundColor: '#2A558C',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
