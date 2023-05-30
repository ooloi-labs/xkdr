import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, RadioList, TypoClassesProvider } from "oolib";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ThemeProvider theme={{}}>
        <TypoClassesProvider>
          <GlobalStyles />
          <RadioList
            label={"Test Radio Button"}
            options={[
              { display: "Option 1", value: "option1" },
              { display: "Option 2", value: "option2" },
            ]}
          />
        </TypoClassesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
