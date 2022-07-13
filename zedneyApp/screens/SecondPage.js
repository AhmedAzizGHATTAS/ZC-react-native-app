import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {PieChart, LineChart} from 'react-native-chart-kit';
import SwitchSelector from 'react-native-switch-selector';
import ClientList from '../component/ClientList';
import axios from 'axios';
export default function SecondPage() {
  const [data, setData] = useState([]);
  const [showHideC1, setShowHideC1] = useState(false);
  const [showHideC2, setShowHideC2] = useState(false);

  const filter_regleé_facture_for_CO_1 = () => {
    //the functions for the pie chart
    return data.filter(CO_1 => {
      return (
        Object.values(CO_1.PROPERTY_151)[0] === 'CO_1' &&
        Object.values(CO_1.PROPERTY_153)[0] === '179'
      );
    }).length;
  };
  const filter_non_regleé_facture_for_CO_1 = () => {
    //the functions for the pie chart
    return data.filter(CO_1 => {
      return (
        Object.values(CO_1.PROPERTY_151)[0] === 'CO_1' &&
        Object.values(CO_1.PROPERTY_153)[0] === '177'
      );
    }).length;
  };
  const IZIWEBPie = [
    {
      name: 'Réglée',
      etat: filter_regleé_facture_for_CO_1(),
      color: '#4973F2',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'non Réglée',
      etat: filter_non_regleé_facture_for_CO_1(),
      color: '#F2911B',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const filter_regleé_facture_for_C_5 = () => {
    //the functions for the pie chart
    return data.filter(C_5 => {
      return (
        Object.values(C_5.PROPERTY_151)[0] === 'C_5' &&
        Object.values(C_5.PROPERTY_153)[0] === '179'
      );
    }).length;
  };
  const filter_non_regleé_facture_for_C_5 = () => {
    //the functions for the pie chart
    return data.filter(C_5 => {
      return (
        Object.values(C_5.PROPERTY_151)[0] === 'C_5' &&
        Object.values(C_5.PROPERTY_153)[0] === '177'
      );
    }).length;
  };
  const MAGHROUM_H = [
    {
      name: 'Réglée',
      etat: filter_regleé_facture_for_C_5(),
      color: '#4973F2',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'non Réglée',
      etat: filter_non_regleé_facture_for_C_5(),
      color: '#F2911B',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  const getFacture = async () => {
    try {
      const response = await fetch(
        'https://zc-group.bitrix24.com/rest/31/iq51kc1s03elmphp/lists.element.get.json?IBLOCK_TYPE_ID=lists&IBLOCK_ID=35',
      );
      const json = await response.json();
      setData(json.result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFacture();
  }, []);

  const display_facture_name_CO_1 = () => {
    // function for facture name for line chart
    return data
      .filter(CO_1_name => {
        return Object.values(CO_1_name.PROPERTY_151)[0] === 'CO_1';
      })
      .map(CO_1_name => {
        return CO_1_name.NAME;
      });
  };
  const display_facture_price_CO_1 = () => {
    // function for facture price for line chart
    return data
      .filter(CO_1_price => {
        return Object.values(CO_1_price.PROPERTY_151)[0] === 'CO_1';
      })
      .map(CO_1_price => {
        return Object.values(CO_1_price.PROPERTY_139)[0].replace(/\D/g, ''); //i took the replace from a blog in bobbyhadz.com
      });
  };
  const display_facture_name_C_5 = () => {
    // function for facture name for line chart
    return data
      .filter(C_5_name => {
        return Object.values(C_5_name.PROPERTY_151)[0] === 'C_5';
      })
      .map(C_5_name => {
        return C_5_name.NAME;
      });
  };
  const display_facture_price_C_5 = () => {
    // function for facture price for line chart
    return data
      .filter(C_5_price => {
        return Object.values(C_5_price.PROPERTY_151)[0] === 'C_5';
      })
      .map(C_5_price => {
        return Object.values(C_5_price.PROPERTY_139)[0].replace(/\D/g, ''); //i took the replace from a blog in bobbyhadz.com
      });
  };
  return (
    <>
      <StatusBar backgroundColor="#2A558C" barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.topSection}>
          <Text
            style={{
              color: '#F2E2C4',
              fontSize: 40,
              marginTop: 10,
              marginBottom: 30,
            }}>
            3ème interface
          </Text>
        </View>
        <ScrollView>
          <View style={styles.scrollHorizontal}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                marginLeft: 20,
              }}>
              {/* {data.map(n=>{
                return Object.values(n.PROPERTY_151)[0]
               }).filter((v, i, a) => a.indexOf(v) === i)} */}
              tous les factures
            </Text>
            <ScrollView horizontal={true}>
              <View style={styles.allfacture}>
                {data.map((e, i) => (
                  <ClientList key={i} data={e} />
                ))}
              </View>
            </ScrollView>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginLeft: 20,
              marginTop: 20,
              // marginBottom: 20,
            }}>
            Voici la somme des factures par clients,{'\n'} par état et par année
            de facturation
          </Text>

          <View>
            <Text
              style={{
                fontSize: 15,
                color: 'grey',
                left: '4%',
                top: '2%',
                fontWeight: 'bold',
              }}>
              le client IZIWEB
            </Text>
            <View style={{width: '80%', height: 60, left: '10%', top: '5%'}}>
              <SwitchSelector
                initial={0}
                onPress={value => setShowHideC1(value)}
                textColor={'#4973F2'} //'#7a44cf'
                selectedColor={'white'}
                buttonColor={'#4973F2'}
                borderColor={'#4973F2'}
                backgroundColor={'#EAE9F2'}
                // hasPadding
                options={[
                  {label: 'Etat de factures', value: false},
                  {label: 'la somme des factures', value: true},
                ]}
                testID="gender-switch-selector"
                accessibilityLabel="gender-switch-selector"
                borderRadius={10}
                height={47}
              />
            </View>
            <View>
              {showHideC1 !== true ? (
                <View style={styles.pie}>
                  <PieChart
                    data={IZIWEBPie}
                    width={Dimensions.get('window').width}
                    height={220}
                    chartConfig={{
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                      propsForDots: {
                        r: '6',
                        strokeWidth: '2',
                        stroke: '#ffa726',
                      },
                    }}
                    accessor={'etat'}
                    center={[10, 10]}
                    // absolute
                  />
                </View>
              ) : (
                <View style={styles.lineChart}>
                  <LineChart
                    data={{
                      // labels: [
                      //   'Facture test 1',
                      //   'Facture test 2',
                      //   'Facture test 3',
                      // ],
                      labels: display_facture_name_CO_1(),
                      datasets: [
                        {
                          // data: [250, 400, 550],
                          data: display_facture_price_CO_1(),
                        },
                      ],
                    }}
                    width={Dimensions.get('window').width} // from react-native
                    height={230}
                    yAxisLabel="€"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                      backgroundColor: '#818274',
                      backgroundGradientFrom: '#6997BF',
                      backgroundGradientTo: '#A3B4BF',
                      decimalPlaces: 0, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
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
              )}
            </View>

            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'grey',
                left: '4%',
                top: '2%',
              }}>
              le client MAGHROUM_H
            </Text>
            <View style={{width: '80%', height: 60, left: '10%', top: '5%'}}>
              <SwitchSelector
                initial={0}
                onPress={value => setShowHideC2(value)}
                textColor={'#4973F2'} //'#7a44cf'
                selectedColor={'white'}
                buttonColor={'#4973F2'}
                borderColor={'#4973F2'}
                backgroundColor={'#EAE9F2'}
                // hasPadding
                options={[
                  {label: 'Etat de factures', value: false},
                  {label: 'la somme des factures', value: true},
                ]}
                testID="gender-switch-selector"
                accessibilityLabel="gender-switch-selector"
                borderRadius={10}
                height={47}
              />
            </View>
            <View>
              {showHideC2 !== true ? (
                <View style={styles.pie2}>
                  <PieChart
                    data={MAGHROUM_H}
                    width={Dimensions.get('window').width}
                    height={220}
                    chartConfig={{
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                      propsForDots: {
                        r: '6',
                        strokeWidth: '2',
                        stroke: '#ffa726',
                      },
                    }}
                    accessor={'etat'}
                    center={[10, 10]}
                    // absolute
                  />
                </View>
              ) : (
                <View style={styles.lineChart2}>
                  <LineChart
                    data={{
                      // labels: ['Facture test 4', 'Facture test 5'],
                      labels: display_facture_name_C_5(),
                      datasets: [
                        {
                          // data: [700, 243],
                          data: display_facture_price_C_5(),
                        },
                      ],
                    }}
                    width={Dimensions.get('window').width} // from react-native
                    height={230}
                    yAxisLabel="€"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                      backgroundColor: '#818274',
                      backgroundGradientFrom: '#6997BF',
                      backgroundGradientTo: '#A3B4BF',
                      decimalPlaces: 0, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
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
              )}
            </View>
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
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 20,
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

    // backgroundColor: 'white',
  },
  scrollHorizontal: {
    marginTop: '5%',
    marginBottom: '5%',
  },
  allfacture: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '3%',
    marginLeft: 20,
    marginBottom:'2%'
  },
  sousTitre: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: '5%',
    marginTop: '5%',
  },

  pie: {
    marginTop: '9%',
    marginBottom: '10%',
    height: 230,
    // backgroundColor: "#D9D7D8",
    backgroundColor: '#EAE9F2',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,

    borderRadius: 30,
  },
  pie2: {
    marginTop: '9%',
    marginBottom: '16%',
    height: 230,
    // backgroundColor: "#D9D7D8",
    backgroundColor: '#EAE9F2',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,

    borderRadius: 30,
  },
  lineChart: {
    marginTop: '7%',
    marginBottom: '10%',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderRadius: 30,
  },
  lineChart2: {
    marginTop: '7%',
    marginBottom: '15%',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderRadius: 30,
  },
});
