import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const MyLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Line Chart</Text>
      <LineChart
        data={{
          labels: ['12/9', '12/10', '12/11', '12/12', '12/13', '12/14', '12/15'],
          datasets: [
            {
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //point color and line color
              data: [1, 2, 0, 3, 2, 5, 0],
              strokeWidth: 2, //chart line thickness
            },
          ],
          legend: ["  1 - Sad 2 - Mad, 3 - Meh, 4 - Happy, 5 - Excited"],
        }}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height - 500}
        chartConfig={{
          backgroundGradientFrom: '#FEF3E7', //for some reason need this, background color and color are useless
          backgroundGradientTo: '#FEF3E7',
          decimalPlaces: 0,                 //after whole value
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})` //dotted line color (also changes text x labels and key)
        }}
        bezier
      />
    </>
  );
};

const App = () => {
  return (

    <View style={styles.container}>
      <View>
        <MyLineChart />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
});