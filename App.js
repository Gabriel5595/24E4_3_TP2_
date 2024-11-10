import { View, StyleSheet } from 'react-native';
import Lista from './components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista items={['Item A', 'Item B', 'Item C']} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
});
