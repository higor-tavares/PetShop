import { StatusBar } from 'expo-status-bar';
import {React} from 'react';
import { StyleSheet, View, TouchableHighlight, Text,TextInput, Alert } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>PetShop</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput placeholder='username@gmail.com' style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput placeholder='password'  style={styles.input} secureTextEntry={true}></TextInput>
      <TouchableHighlight title="Entrar" onPress={() => Alert.alert('Usuario ou senha incorreta')} style={styles.button}>
      <Text style={styles.buttonText}>Entrar</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  input: {
    fontSize:18,
    borderWidth: 1,
    borderRadius: 16,
    padding: 8,
    width: 300,
    margin: 8,
    borderColor: 'gray'
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 16,
    margin: 8,
    alignItems: 'center',
    width: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    width: 300,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 36,
    fontFamily: 'OleoScript-Regular, sans-serif', // use 'sans-serif' as a fallback font
  }
});
