// LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation();
    return (
    <View>
      <Text>Halaman Login</Text>
      <Button
        title="Pindah ke Halaman Home"
        onPress={() => navigation.navigate('home')}
      />
    </View>
  );
}

export default LoginScreen;
