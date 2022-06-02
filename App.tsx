import { Button, Text, TextInput, View } from 'react-native';
import { styles } from "./styles"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}> 
      <TextInput 
      placeholder='new task'
      placeholderTextColor={"#f0f"}
      style={styles.input}
      />
      <Button title='add' onPress={() => null}/>
      </View>
      <View></View>
    </View>
  );
}


