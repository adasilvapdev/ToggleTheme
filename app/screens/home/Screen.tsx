import React from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../styles/theme/ThemeProvider';
import { Toggle, Message } from '../../components/organisms/toggle';

const Screen = (props: any) => {
    const { children } = props;

    //* Using the custom hook we made to pull the theme colors
    const { colors, isDark } = useTheme();

    const styles = StyleSheet.create({
        containerStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            /* 
            * the colors.background value will change dynamicly with
            * so if we wanna change its value we can go directly to the pallet
            * this will make super easy to change and maintain mid or end project
            */
            backgroundColor: colors.background,
        },
        text: {
            color: colors.textColor
        }
    })

    return (
        <>
            {/* We can also use the isDark prop to set the statusbar style accordingly */}
            <StatusBar animated barStyle={isDark ? "light-content" : "dark-content"} />
            <View style={styles.containerStyle}>
                <Text style={styles.text}>hola</Text>
                {/* {children} */}
                <Toggle />
                <Message />
            </View>
        </>
    );
}

export default Screen