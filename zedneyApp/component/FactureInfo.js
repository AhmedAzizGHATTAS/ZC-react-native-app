import { View, Text,StyleSheet, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen");
const FactureInfo = (props) => {
  return (
     <>
      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.9, marginHorizontal: 5 }}>
            <Text style={styles.cardTitle}>{props.element.NAME}</Text>
            <View style={{ flexDirection: "row",top:'4%' }}>
              <Text style={{marginLeft:10,fontSize:12,fontWeight: "bold",}}>Creé par :</Text>
              <Text style={styles.cardLocation}>{props.element.USER_NAME}</Text>
              </View>
            
            <Text style={styles.cardDescription}>{props.element.DATE_CREATE}</Text>
          </View>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  card: {
    marginVertical: '5%',
    backgroundColor: "#F2F2F2",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: width / 1.1,
    marginHorizontal: 20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    height: height / 7,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    
    
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
    borderBottomWidth:1
  },
  cardLocation: {
    fontSize: 11.5,
    color: "#777",
  },
  cardDescription: {
    fontSize: 12,
    marginVertical: 8,
    marginLeft: 10,
    top:'10%'
  },
})

export default FactureInfo