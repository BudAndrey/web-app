import Finder from "./Finder";
import { ThemeSwithcer } from "./ThmeSwithcer";
import React, { useEffect, useState } from "react";

const themes = {
  light: {
    name: 'light',
    backgroundColor: "#eeeeee",
    color: 'black'
  },
  dark: {
    name: 'dark',
    backgroundColor: "#222222",
    color: "white"
  }
};

export const ThemeContext = React.createContext();



function App() {
  const store=localStorage.getItem('theme')
  const [theme,setScheme]=useState(store===null? themes.dark:themes[store])
  
  function ChangeTheme(){
    theme==themes.dark ? setScheme(themes.light):setScheme(themes.dark)
    
  }
  useEffect(()=>localStorage.setItem('theme',theme.name) )

  return (
    <ThemeContext.Provider value={[theme,ChangeTheme]}>
    <div className="text-center" style={theme}>
        <h1 style={theme}>Enter Film</h1>
        <ThemeSwithcer/>
        <Finder/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
