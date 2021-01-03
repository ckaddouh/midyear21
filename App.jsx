import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <Text>Hello there</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#45bf65', 
  },
});
