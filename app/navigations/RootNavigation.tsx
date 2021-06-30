import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RootNavigation = () => {
    return (
        <View style={styles.container}>
            <Text>Root</Text>
        </View>
    )
}

export default RootNavigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
})
