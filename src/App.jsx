import { Container, GlobalStyles, TypoClassesProvider, Wrapper800 } from "oolib";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";
import { CourtPage } from "./pages/Form/generatedComps/CourtPage";

const theme = {
  colors: {
    primaryColor100: "#F54C31",
    primaryColor40: "#addbff",
    primaryColor10: "#ebf6ff",
    primaryColorText: "#F54C31"
  }
}

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
              <Route path="/previewCourtPage" element={
                <Container>
                  <Wrapper800>
                    <div style={{padding: "4rem 0rem 2rem 0rem" }}>
                    <CourtPage courtType={['bombayHC', 'DRT', 'NCLT']} />
                  </div>
                </Wrapper800>
                </Container>
              } />
            </Routes>
          </BrowserRouter>
        </TypoClassesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
