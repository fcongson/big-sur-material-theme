import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import useDarkMode from "use-dark-mode";
import lightTheme from "../styles/theme";
import darkTheme from "../styles/theme.dark";

const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeContextProvider: React.FunctionComponent = ({ children }) => {
  const { value, toggle: toggleTheme } = useDarkMode(false, {
    onChange: () => setTheme(() => (value ? darkTheme : lightTheme)),
  });
  const [theme, setTheme] = React.useState(value ? darkTheme : lightTheme);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );

  return !mounted ? <div style={{ visibility: "hidden" }}>{body}</div> : body;
};

export const useThemeContext = () => React.useContext(ThemeContext);
