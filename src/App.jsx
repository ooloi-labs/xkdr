import { GlobalStyles, TypoClassesProvider } from "oolib";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";

function App() {
  return (
    <div>
      <ThemeProvider theme={{}}>
        <TypoClassesProvider>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </TypoClassesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
