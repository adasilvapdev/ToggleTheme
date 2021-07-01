import React from 'react';
import { useColorScheme } from 'react-native-appearance';
import {
    lightColors,
    darkColors,
    Colors
} from './ColorThemes';

export interface Theme {
    isDark: boolean;
    theme: Colors;
    setScheme: (val: 'dark' | 'light') => void;
}

export const ThemeContext = React.createContext<Theme>({
    isDark: false,
    theme: lightColors,
    setScheme: () => { },
});



export const ThemeProvider: React.FC<{}> = (props) => {
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = React.useState<boolean>(colorScheme === "dark");

    React.useEffect(() => {
        setIsDark(colorScheme === "dark");
    }, [colorScheme]);


    const defaultTheme: Theme = {
        isDark,
        theme: isDark ? darkColors : lightColors,
        setScheme: (scheme) => setIsDark(scheme === "dark"),
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
