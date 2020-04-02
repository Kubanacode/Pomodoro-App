import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Main';

const App = () => (
    <PaperProvider>
        <NavigationContainer>
            <Main />
        </NavigationContainer>
    </PaperProvider>
)

export default App;
