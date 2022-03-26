import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { useCallback } from "react";
import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback( () => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
