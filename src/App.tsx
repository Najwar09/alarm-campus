import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Login from './pages/Login';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Login/>
      </ScrollView>
    </View>
  );
};

export default App;
