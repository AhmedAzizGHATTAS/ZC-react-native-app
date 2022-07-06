import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
export default function FirstPage() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getFacture = async () => {
    try {
      const response = await fetch(
        'https://zc-group.bitrix24.com/rest/31/iq51kc1s03elmphp/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=35',
      );
      const json = await response.json();
      setData(json.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFacture();
    // console.log("<;>",data);
  }, []);

  const displayName = () => data.map(item => item.NAME);

  const displayPrice = () => {
    let array = data.map(item => item.PROPERTY_139);
    let x = []; // x returns ["250|EUR", "400|EUR", "550|EUR", "700|EUR"]
    let y = []; // y returns [["250", ""], ["400", ""], ["550", ""], ["700", ""]]
    let z = []; // z returns ["250", "400", "550", "700"]
    for (let i = 0; i < array.length; i++) {
      x.push(Object.values(array[i])[0]);
    }

    for (let o = 0; o < x.length; o++) {
      y.push(x[o].split('|EUR'));
    }
    for (let w = 0; w < y.length; w++) {
      z.push(y[w][0]);
    }
    return z;
  };

  return (
    <>
      {/* <ImageBackground style={styles.ImageBackground} source={require('../assets/pixeltrue-icons-receipt-1.png')}> */}
      <StatusBar backgroundColor="#2A558C" barStyle="dark-content" />
      <View style={styles.body}>
        <View /*colors={['#057894', '#2490c2']}*/ style={styles.topSection}>
          <Text
            style={{
              color: '#F2E2C4',
              fontSize: 40,
              marginTop: 10,
              marginBottom: 30,
            }}>
            2ème interface
          </Text>
        </View>
        <ScrollView>
          <View>
            <Text
              style={{
                color: '#06080D',
                fontSize: 20,
                marginLeft: 20,
                marginTop: 20,
                marginBottom: 20,
              }}>
              Voici la somme des factures{' '}
            </Text>
          </View>
          <View style={styles.lineChart}>
            <LineChart
              data={{
                // labels:['a', 'b', 'c', 'd','e'],
                labels:displayName(),
                datasets: [
                  {
                    data: displayPrice(),
                    // data: [250, 300, 120, 400,265],
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              yAxisLabel="€"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: 'white',
                backgroundGradientFrom: '#6997BF',
                backgroundGradientTo: '#A3B4BF',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
          <View style={styles.about}>
            <Text style={styles.aboutTitle}>About</Text>
            <Text style={styles.aboutP}>
              Une société de services d’ingénierie informatique (SSII) fondée en
              2011 et présente en Tunisie, France et le Moyen Orient ( L'Arabie
              Saudite).Depuis notre création, nous avons de cesse de développer
              nos compétences dans le but de proposer des services innovants à
              mêmes d’anticiper l’évolution de vos besoins
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topSection: {
    backgroundColor: '#2A558C',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 20,
  },
  body: {
    flex: 1,
    // backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomSection: {
    width: '100%',
    height: '70%',
  },
  sousTitre: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: '5%',
    marginTop: '5%',
  },
  nombreDeFact: {
    fontWeight: 'normal',
    fontSize: 15,
    marginLeft: '10%',
    marginTop: '2%',
  },
  about: {
    marginBottom: '10%',
    marginTop: '15%',
    marginLeft: 10,
  },
  aboutTitle: {
    color: '#06080D',
    fontSize: 20,
    marginBottom: 10,
    marginTop: -10,
  },
  aboutP: {
    color: 'black',
  },
});
