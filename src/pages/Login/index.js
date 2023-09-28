import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  const [stb, setStb] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logika login dapat ditambahkan di sini
    if (stb === 'contohstb' && password === 'password123') {
      alert('Login berhasil!');
    } else {
      alert('Login gagal. Cek STB dan password Anda.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <View style={styles.inputContainer}>

        {/* inputan stb */}
        <TextInput
          style={styles.input}
          placeholder="STB (Student ID)"
          onChangeText={(text) => setStb(text)}
          value={stb}
        />

        {/* inputan password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#333',
    padding: 10,
    marginBottom: 20,
    color :'black'
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
