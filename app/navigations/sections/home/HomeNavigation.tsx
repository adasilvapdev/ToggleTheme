import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, Screen } from '../../../screens/home'

const OnBoardingNavigation: React.FC = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="Screen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Screen"
                component={Screen}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}

export default OnBoardingNavigation