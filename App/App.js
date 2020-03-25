import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import AppNavigator from './src/navigation';
import Header from './src/components/Header';

const App = () => {
    return (
        <PaperProvider>
            <Header titleText='Pomodoro Manager' />
            <AppNavigator />
        </PaperProvider>
    );
}

export default App;