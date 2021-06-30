import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigation } from './sections/home';
const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false, headerBackTitleVisible: false }}>

                <Stack.Screen
                    name="HomeNavigation"
                    component={HomeNavigation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
