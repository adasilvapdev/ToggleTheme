import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from '../../../styles/theme/ThemeProvider';

const Message: React.FC<{}> = () => {
    const { theme, isDark } = useTheme();

    const text = isDark ? 'Dark mode 🌛🌙' : 'Light mode ☀️🌞';

    const textStyle = {
        fontSize: 18,
        color: theme.text,
    } as TextStyle;

    const containerStyle = {
        margin: 24,
        padding: 12,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: theme.primary,
    } as ViewStyle;

    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{text}</Text>
        </View>
    );
};

export default Message