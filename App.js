
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

console.log("sks");

  return (
    <View style={styles.container}>
      <Text className=" bg-red-10">Sk.Sulaimans</Text>
      <Text className="text-blue-100">Sk.Sulaimans</Text>
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
