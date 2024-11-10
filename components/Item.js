import { View, Text, StyleSheet } from 'react-native';

export default function Item({ label }) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        marginVertical: 5,
        width: 100,
        alignItems: 'center',
        borderRadius: 5,
    },
    itemText: {
        fontSize: 16,
    },
});
