import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyles/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./GlobalStyles/theme";

function App() {
  const urlCountry = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [options, setOptions] = useState({
  });

  
console.log(countries);

  useEffect(() => {
  fetch(urlCountry)
    .then((res) => res.json())
    .then((result) => setCountries(result));
  }, []);

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <button onClick={themeToggler}>Switch Theme</button>
      <div>
        <img src={options.flag}></img>
      </div>
      <div>
        {/* <button onClick={countryChange}>Select Country</button> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
