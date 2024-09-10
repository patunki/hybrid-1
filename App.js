import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [age, LaskeIka] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const sykeRajat = () => {
    if (age && !isNaN(age)) {
      const ageInt = parseInt(age, 10);
      const lower = (220 - ageInt) * 0.65;
      const upper = (220 - ageInt) * 0.85;
      setLowerLimit(lower.toFixed(2));
      setUpperLimit(upper.toFixed(2));
    } else {
      alert('Virhe');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Syötä ikä</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ikä"
          value={age}
          onChangeText={LaskeIka}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={sykeRajat}>
        <Text style={styles.buttonText}>Laske</Text>
      </TouchableOpacity>

      {lowerLimit && upperLimit && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Alaraja: {lowerLimit} bpm</Text>
          <Text style={styles.resultText}>Yläraja: {upperLimit} bpm</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

export default App;
