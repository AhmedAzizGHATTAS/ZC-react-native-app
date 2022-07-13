import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ClientList = props => {
  return (
    <View style={styles.clientCard}>
      <View style={{flexDirection: 'row', marginTop: '15%', marginLeft: '8%'}}>
        <Ionicons name="reader-outline" color={'#2A558C'} size={24} />
        <Ionicons
          name="ellipsis-vertical-outline"
          style={{marginLeft: '60%'}}
          color={'grey'}
          size={24}
        />
      </View>
      <View style={{marginTop: '15%'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#2C3540',
            marginLeft: '7%',
          }}>
          {props.data.NAME}
        </Text>
        <Text style={{marginLeft: '10%', marginTop: '5%', color: '#64758C'}}>
          Détenu par {Object.values(props.data.PROPERTY_151)[0]}
        </Text>
      </View>
    </View>
  );
};

export default ClientList;

const styles = StyleSheet.create({
  clientCard: {
    flex: 1,
    margin: 5,
    width: 150,
    height: 150,
    backgroundColor: '#EAE9F2',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: 30,
  },
});
