import React, { useEffect } from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../styles/theme/ThemeProvider';

const Toggle = () => {
    // We're also pulling setScheme here!
    const { setScheme, isDark } = useTheme();

    const toggleScheme = () => {
        /*
        * setScheme will change the state of the context
        * thus will cause childrens inside the context provider to re-render
        * with the new color scheme
        */
        isDark ? setScheme('light') : setScheme('dark');
    }

    useEffect(() => {
        console.log('isDark: ', isDark)
    }, [isDark])

    return (
        <View style={[
            styles.container,
            isDark ?
                styles.emojiDarkView
                :
                styles.emojiLightView
        ]}>
            {isDark &&
                <Text
                    onPress={toggleScheme}
                    style={[styles.emoji, styles.sunEmoji]}
                >☀️</Text>
            }
            <Switch
                style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
                value={isDark}
                thumbColor={'white'}
                trackColor={{ true: '#ff00cf', false: '#ff00cf' }}
            />
            {isDark ||
                <Text
                    onPress={toggleScheme}
                    style={[styles.emoji, styles.moonEmoji]}
                >🌙</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#ff00cf",
        backgroundColor: "#ff00cf",
        flexDirection: 'row',
        paddingTop: '1%',
        paddingBottom: '1%',


    },
    emojiDarkView: {
        paddingLeft: '3%',
        paddingRight: '1%',
    },
    emojiLightView: {
        paddingLeft: '1%',
        paddingRight: '3%',
    },
    emoji: {
        fontSize: 20
    },
    sunEmoji: {
        top: 1,
        right: '8%',
        position: 'absolute',
        zIndex: 1,
    },
    moonEmoji: {
        top: 2,
        left: '8%',
        position: 'absolute',
        zIndex: 1,
    },
})

export default Toggle