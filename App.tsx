import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOLA A TODOS NIGGAS 🧑🏿‍🦲</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50, // Cambia el tamaño de la fuente
    fontWeight: 'bold', // Opcional, para un texto más grueso
    textAlign: 'center', // Opcional, centra el texto horizontalmente
  },
});
