import SwitchTheme from "./components/Switch";
import GlobalStyle from "./styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { useCallback } from "react";
import usePersistedState from "./utils/usePersistedState";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./routes/Menu";
import {Container} from "./appStyle"

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);

  return (
    <Router>
      <Container>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <SwitchTheme toggleTheme={toggleTheme} />
          <Menu />
        </ThemeProvider>
      </Container>
    </Router>
  );
}

export default App;
