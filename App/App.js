import React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { 
    Provider as PaperProvider, 
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import Main from './src/Main';

const CombinedDefaultTheme = {
    ...PaperDefaultTheme,
    ...DefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        ...DefaultTheme.colors,
        primary: "#D33C2F",
        text: "rgba(28, 28, 30, 0.68)"
    }
};

const CombinedDarkTheme = { 
    ...PaperDarkTheme, 
    ...DarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        ...DarkTheme.colors,
        primary: "#D33C2F",
        text: "rgb(229, 229, 231)",
        background: "#333",
        card: "#272729"
    }
};

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

    function toggleTheme() {
        setIsDarkTheme(isDark => !isDark);
    }
      
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <Main theme={theme} toggleTheme={toggleTheme} />
            </NavigationContainer>
        </PaperProvider>
    )
}

export default App;
