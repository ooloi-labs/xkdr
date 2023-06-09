import {
  SANS_3,
  RadioList,
  Container,
  colors,
  SANS_5_6,
  PaddingBottom30,
  PaddingTop15,
  OKELink,
  toArray,
  mediaQuery,
  Wrapper800
} from "oolib";

import { firstPageId, formConfig } from "./config";
import { useState } from "react";
import { ProgressBar } from "./comps/ProgressBar";
import { FrontBackNav } from "./comps/FrontBackNav";
import { TextDisplayComp } from "./generatedComps/TextDisplayComp";
import { CourtPage } from "./generatedComps/CourtPage";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  background-color: ${colors.white} ;
  min-height: 100vh;

  ${mediaQuery('md')}{
    background-color: ${colors.greyColor5} ;
  }
`

const StyledPageContentsWrapper = styled.div`
  padding: 4rem 0rem 2rem 0rem; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  ${mediaQuery('md')}{
    padding: 6rem 6rem 40rem 6rem;   
  }
`

export const Form = () => {
  const [pageMemory, setPageMemory] = useState({
    activePageId: firstPageId,
    activePageProps: {}
  });
  const [answers, setAnswers] = useState({});

  const Comps = {
    RadioList,
    TextDisplayComp,
    CourtPage
  };

  const generateComp = (activePageId) => {
    const { comp, props, pageType, id } = formConfig[activePageId];
    const Comp = Comps[comp];

    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        {toArray(props.label).map((text, index) => (
            <SANS_5_6 semibold key={index}>{text}</SANS_5_6>
        ))}
        </div>
        <PaddingTop15 />
        <Comp
          answers={answers} // CourtPage needs this
          value={answers[id]}
          onChange={(k, v) => {
            setAnswers((prev) => {
              const newAnswers = {
                ...prev,
                [id]: v,
              };
              return newAnswers;
            });
          }}
          {...(props || {})} // these are defined against THIS page's config
          {...(pageMemory.activePageProps || {})} //these are defined in the previous page's config, that sends the user to this page
          label={undefined}
        />
      </div>
    );
  };

  return (
    <StyledContainer style={{position: 'relative'}}>
      <Wrapper800 style={{ backgroundColor: colors.white, height: "100%", display: 'flex', position: 'relative'}}>
        <StyledPageContentsWrapper>
          <div>
            {/* <ProgressBar /> */}
            <PaddingBottom30 />
            {
                formConfig[pageMemory.activePageId].pageType === 'endPage'
                && 
                <>
                <SANS_3 semibold><OKELink invertUnderline to='/' icon='CaretLeft'>
                    Back to Homepage
                    </OKELink></SANS_3>
                </>
            }
            {generateComp(pageMemory.activePageId)}
          </div>
          <FrontBackNav
            {...{
              setPageMemory,
              answers,
              setAnswers,
              activePageId: pageMemory.activePageId,
              pageType: formConfig[pageMemory.activePageId].pageType,
            }}
          />
        </StyledPageContentsWrapper>
      </Wrapper800>
    </StyledContainer>
  );
};
