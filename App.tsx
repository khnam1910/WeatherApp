import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import WeatherScreen from './src/screens/WeatherScreen.js';

const App = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={'default'} backgroundColor={'rgba(28,110,233,1)'} />
        <RadialGradient
          style={{ flex: 1, }}
          colors={['rgba(36,255,214,1)', 'rgba(28,110,233,1)']}
          stops={[0, 1]}
          center={[300, 380]}
          radius={350}
        >
          <SafeAreaView style={{ flex: 1 }} >
            <WeatherScreen />

          </SafeAreaView>
        </RadialGradient>

      </View>


    </>
  )
}

export default App