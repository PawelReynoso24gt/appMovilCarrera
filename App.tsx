import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOLA A TODOS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, // Espaciado adicional
  },
});
