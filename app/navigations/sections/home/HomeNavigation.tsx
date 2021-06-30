import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../../../screens/home'

const OnBoardingNavigation: React.FC = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}

export default OnBoardingNavigation