import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import lightTheme from "../styles/theme";
import darkTheme from "../styles/theme.dark";

const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeContextProvider: React.FunctionComponent = ({ children }) => {
  const [theme, setTheme] = React.useState(lightTheme);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(() => (theme.palette.type === "light" ? darkTheme : lightTheme));
  };

  const body = (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );

  return !mounted ? <div style={{ visibility: "hidden" }}>{body}</div> : body;
};

export const useThemeContext = () => React.useContext(ThemeContext);
