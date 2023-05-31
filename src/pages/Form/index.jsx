import {
  SANS_3,
  RadioList,
  ButtonPrimary,
  Container,
  colors,
  Wrapper1000,
  Wrapper800,
  SANS_5_6,
  PaddingTop10,
  PaddingBottom20,
  PaddingBottom30,
  PaddingTop20,
  PaddingTop15,
  OKELink,
  toArray,
} from "oolib";

import { firstPageId, formConfig } from "./config";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "./comps/ProgressBar";
import { FrontBackNav } from "./comps/FrontBackNav";
import { TextDisplayComp } from "./generatedComps/TextDisplayComp";
import { CourtPage } from "./generatedComps/CourtPage";

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
        {toArray(props.label).map(text => (
            <SANS_5_6 semibold>{text}</SANS_5_6>
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
    <Container style={{ backgroundColor: colors.greyColor5, height: "100vh" }}>
      <Wrapper800 style={{ backgroundColor: colors.white, height: "100%", display: 'flex' }}>
        <div style={{ padding: "6rem 10rem 16rem 10rem", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
          <div>
            <ProgressBar />
            <PaddingBottom30 />
            {
                formConfig[pageMemory.activePageId].pageType === 'endPage'
                && <>
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
        </div>
      </Wrapper800>
    </Container>
  );
};
