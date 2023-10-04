// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Halaman Home</Text>
      <Button
        title="Pindah ke Halaman Login"
        onPress={() => navigation.navigate('login')}
      />
    </View>
  );
}

export default HomeScreen;
