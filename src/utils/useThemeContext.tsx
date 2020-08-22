import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "../styles/theme";

const lightTheme = {
  ...theme,
  palette: { ...theme.palette, type: "light" },
};
const darkTheme = {
  ...theme,
  palette: { ...theme.palette, type: "dark" },
};

const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeContextProvider: React.FunctionComponent = ({ children }) => {
  const [theme, setTheme] = React.useState(lightTheme);

  const toggleTheme = () => {
    setTheme(() => (theme.palette.type === "light" ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);
