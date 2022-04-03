import SwitchTheme from "./components/Switch";
import GlobalStyle from "./styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { useCallback } from "react";
import usePersistedState from "./utils/usePersistedState";
import Menu from "./routes/Menu";
import { Container } from "./appStyle";
import { Outlet } from "react-router-dom";


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SwitchTheme toggleTheme={toggleTheme} />
        <Outlet />
      </ThemeProvider>
    </Container>
  );
}

export default App;
