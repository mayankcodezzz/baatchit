import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>{'BAATCHIT'}</Text>
      <Text style={styles.logosubtitle}>{'finds the True Emotions'}</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5756D6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 45,
    color: 'white',
    textAlign: 'center',
  },
  logosubtitle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
});
