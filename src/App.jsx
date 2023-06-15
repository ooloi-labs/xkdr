import { Container, GlobalStyles, TypoClassesProvider, Wrapper800,colors  } from "oolib";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";
import { CourtPage } from "./pages/Form/generatedComps/CourtPage";
import { HeaderMenu } from "./Comps/HeaderMenu";
import { DataInsights } from "./pages/DataInsights";

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
      <ThemeProvider theme={{theme}}>
        <TypoClassesProvider>
          <GlobalStyles />
          <BrowserRouter>
          <HeaderMenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/about" element={<About />} />
              <Route path="/dataInsights" element={<DataInsights />} />
              <Route path="/previewCourtPage" element={
                <Container style={{background: colors.greyColor5}}>
                  <Wrapper800>
                    <div style={{padding: "6rem 6rem 40rem 6rem", background: 'white' }}>
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
