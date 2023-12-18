import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

const pieData = [
  {
    name: 'Bitcoin',
    population: 63,
    color: 'orange'
  },
  {
    name: 'Dogecoin',
    population: 9,
    color: 'gold'
  },
  {
    name: 'Ethereum',
    population: 19,
    color: 'darkblue'
  },
  {
    name: 'Tether',
    population: 6,
    color: 'green'
  },
  {
    name: 'Polygon',
    population: 3,
    color: 'purple'
  },
];

const MyLineChart = () => {
  return (
    <>
      <LineChart
        data={{
          labels: ['12/9', '12/10', '12/11', '12/12', '12/13', '12/14', '12/15'],
          datasets: [
            {
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //point color and line color
              data: [1, 2, 0, 3, 2, 5,],
              strokeWidth: 2, //chart line thickness
            },
          ],
          legend: ["1 - Sad, 2 - Mad, 3 - Meh, 4 - Happy, 5 - Excited"],
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

const MyPiChart = () => {
  return (<>
    <PieChart
      data={[
        {
          name: 'Angry',
          population: 5,
          color: '#FF7171',
        },
        {
          name: 'Sad',
          population: 18,
          color: 'lightblue'
        },
        {
          name: 'Meh',
          population: 5,
          color: 'yellow'
        },
        {
          name: 'Happy',
          population: 2,
          color: 'lightgreen'
        },
        {
          name: 'Excited',
          population: 1,
          color: 'gold'
        }]}

        width={Dimensions.get('window').width}
        height={200}
        chartConfig={{
            color: (opacity = 3) => `rgba(255, 255, 255, ${opacity})`
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
        />
  </>
  );
};

const App = () => {
  return (

    <View style={styles.container}>
      <View>
        <MyLineChart />
        <MyPiChart />
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