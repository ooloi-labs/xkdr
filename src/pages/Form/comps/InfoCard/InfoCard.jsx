import { useState } from 'react';
import { HourglassHigh } from '@phosphor-icons/react'
import { SANS_3, SANS_4_5, Accordion, OKELink, toArray} from 'oolib';
import { StyledCardBodyWrapper, StyledCardContainer, StyledCardHeaderWrapper, StyledCardfFooterWrapper, StyledExpandedCardSection, StyledGhostContainer } from './styled.index'

const InfoCard = ({heading, info, children}) => {

  const [expandCard, setExapndCard] = useState(false)
  

  const generateSentences = (heading, info) => {
    const courtNames = {
      DRT: 'Debts Recovery Tribunal',
      NCLT: 'National Company Law Tribunal',
      BombayHC: 'Bombay High Court',
    };
  
    const sentences = [];
    console.log({info: info})
    toArray(info).forEach((courtInfo) => {
      const courtName = heading.key;
      const value = courtInfo.value;
  
      let sentence = '';
  
      switch (heading.key) {
        case 'averageDisposalTime':
          sentence = `${courtNames[courtName]} takes an average of ${value.year} years, ${value.months} months for disposal from the date of filing.`;
          break;
  
        case 'timeTaken':
          sentence = `${courtNames[courtName]} takes an average of ${value.year} years, ${value.months} months for 50% of cases filed.`;
          break;
  
        case 'numOfHearings':
          sentence = `On average, the ${courtNames[courtName]} requires ${value} hearings to resolve a case.`;
          break;
  
        case 'freqOfHearings':
          sentence = `${courtNames[courtName]} takes an average of 1 hearing every ${value} months for a case to be disposed.`;
          break;
  
        case 'avgFirstHearing':
          const { year, months, days } = value;
          sentence = `On average, the ${courtNames[courtName]} takes ${year} years, ${months} months, and ${days} days until the first hearing from the date of filing.`;
          break;
  
        default:
          break;
      }
  
      sentences.push(sentence);
    });
  
    return sentences;
  };

  return (
    <>
        <StyledCardContainer expandCard={expandCard}>
                    <StyledCardHeaderWrapper>
                                    <HourglassHigh size={16}/><SANS_3 semibold>{heading.title}</SANS_3>
                    </StyledCardHeaderWrapper>
                    <StyledCardBodyWrapper>
                                    <SANS_4_5 semibold>{generateSentences(heading, info)}</SANS_4_5>
                    </StyledCardBodyWrapper>
                    <Accordion
                        expand={expandCard}
                        noHeader   
                    >
                        <StyledExpandedCardSection>{children}</StyledExpandedCardSection>
                    </Accordion>
                    <StyledCardfFooterWrapper expandCard={expandCard}>
                                    <OKELink onClick={() => setExapndCard(prev => !prev)}>
                                        <SANS_3>{expandCard ? "Show Less" : "Show more"}</SANS_3>
                                    </OKELink>
                    </StyledCardfFooterWrapper>                
        </StyledCardContainer>
    <StyledGhostContainer expandCard={expandCard}></StyledGhostContainer> {/* To maintain height when card's height increases */}
    </>
  )
}

export default InfoCard