import React from 'react';
import { AppearanceProvider } from 'react-native-appearance'
import RootNavigation from './app/navigations/RootNavigation'
import { ThemeProvider } from './app/styles/theme/ThemeProvider';

const App = () => {
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <RootNavigation />
      </ThemeProvider>
    </AppearanceProvider>
  )
}

export default App