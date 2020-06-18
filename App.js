import React , {useState} from 'react';
import { StyleSheet, Text,Image, View, Button } from 'react-native';

export default function App() {
  const [outputText,setOutputText] = useState('Welcome to my first react native app.')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>        
      <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}} style={{width: 200, height: 200}}/>
      <Button title="Click Me!" onPress={()=> setOutputText('Boom! You are awesome.')} />
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
});
