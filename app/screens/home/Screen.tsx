import React from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../styles/theme/ThemeProvider';
import { Toggle, Toggle2 } from '../../components/organisms/toggles'
import { Message } from '../../components/organisms/messages'
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome5';

const Screen = (props: any) => {
    const { children } = props;

    //* Using the custom hook we made to pull the theme colors
    const { theme, isDark } = useTheme();

    const styles = StyleSheet.create({
        containerStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            /* 
            * the theme.background value will change dynamicly with
            * so if we wanna change its value we can go directly to the pallet
            * this will make super easy to change and maintain mid or end project
            */
            backgroundColor: theme.background,
        },
        text: {
            color: theme.textColor,
            marginTop: '10%',
            marginBottom: '2%',
        }
    })

    return (
        <>
            {/* We can also use the isDark prop to set the statusbar style accordingly */}
            <StatusBar animated barStyle={isDark ? "light-content" : "dark-content"} />
            <View style={styles.containerStyle}>
                <Message />
                <Text style={styles.text}>Toggle</Text>
                <Toggle />
                <Text style={styles.text}>Toggle2</Text>
                <Toggle2 />

                <View style={{
                    flexDirection: 'row',
                    marginTop: '10%',
                }}>
                    <Icon
                        name="sun"
                        size={25}
                        color="#ea9f17"
                        style={{ margin: '5%' }}
                    />

                    <Icon
                        name="moon"
                        size={25}
                        color="#f0c613"
                        style={{ margin: '5%' }}
                    />
                </View>
            </View>
        </>
    );
}

export default Screen