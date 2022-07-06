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

export default function Logout({ navigation }) {
  const {loginAuth,logout,userToken}=useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false);

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
              
             
            <TouchableOpacity
              style={{
                height: 52,
                width: "60%",
                color: "white",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "white",
                marginLeft:"20%"
              }}
              // onPress={() => navigation.navigate("Tabs")}
              onPress={()=>{logout()}}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#F2D22E",
                    paddingHorizontal: "23%",
                    paddingTop: "7%",
                  },
                ]}
              >
                Se deconnecter
              </Text>
            </TouchableOpacity>
            </View>
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
