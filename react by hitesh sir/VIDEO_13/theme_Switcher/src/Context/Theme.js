import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "dark",
    darkmmde: () => {},
    lightMode: () => {}
})

export default function useTheme(){
    return useContext(ThemeContext)
}

export const ThemeProvider = ThemeContext.Provider
