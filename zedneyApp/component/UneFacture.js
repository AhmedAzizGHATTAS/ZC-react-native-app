import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";
const UneFacture = (props) => {
  return (
    <View>
      
      <Text>{props.name}</Text>
    </View>
//     <View>
      
//       <LineChart
//     data={{
//       labels: [props.element.NAME],
//       datasets: [
//         {
//           data: [
//            50,80,120,30,96,77
//           ]
//         }
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     yAxisLabel="$"
//     yAxisSuffix="k"
//     yAxisInterval={1} // optional, defaults to 1
//     chartConfig={{
//       backgroundColor: "#e26a00",
//       backgroundGradientFrom: "#fb8c00",
//       backgroundGradientTo: "#ffa726",
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16
//       },
//       propsForDots: {
//         r: "6",
//         strokeWidth: "2",
//         stroke: "#ffa726"
//       }
//     }}
//     bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   />
//     </View>
  )
}

export default UneFacture

// const styles = StyleSheet.create({})