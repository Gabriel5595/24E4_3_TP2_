import { View, StyleSheet } from 'react-native';
import Item from './Item';

export default function Lista({ items }) {
    return (
        <View style={styles.listaContainer}>
            {items.map((item, index) => (
                <Item key={index} label={item} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    listaContainer: {
        padding: 20,
    },
});
