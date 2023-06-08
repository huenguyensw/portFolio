import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
import PortFolio from './components/PortFolio';


export default function App() {
  const [fontsLoaded] = useFonts({
    'GreatVibes-Regular': require('./assets/fonts/GreatVibes-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <PortFolio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    // alignItems: 'center',
    // justifyContent: 'center',
    // fontFamily: 'GreatVibes-Regular',
    // fontSize: 30,
  },
});
