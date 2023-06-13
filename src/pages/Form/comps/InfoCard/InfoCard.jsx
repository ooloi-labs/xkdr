import { useState } from 'react';
import { HourglassHigh } from '@phosphor-icons/react'

import { SANS_3, Accordion, OKELink, SANS_3_4, PaddingBottom20, toArray} from 'oolib';

import { StyledCardBodyWrapper, StyledCardContainer, StyledCardHeaderWrapper, StyledCardfFooterWrapper, StyledExpandedCardSection } from './styled.index'
import { generateSentences } from './utils';

const InfoCard = ({heading, info, children, courtType}) => {

  const [expandCard, setExapndCard] = useState(false)
  return (
    <>
        <StyledCardContainer expandCard={expandCard}>
                    <StyledCardHeaderWrapper>
                                    <HourglassHigh size={20}/><SANS_3 semibold>{heading.title}</SANS_3>
                    </StyledCardHeaderWrapper>
                    <StyledCardBodyWrapper>
                                    <SANS_3_4 semibold>{generateSentences(heading, info)}</SANS_3_4>
                    </StyledCardBodyWrapper>
                    <Accordion
                        expand={expandCard}
                        noHeader   
                    >
                        <StyledExpandedCardSection>{children}</StyledExpandedCardSection>
                    </Accordion>
                    <StyledCardfFooterWrapper expandCard={expandCard}>
                                    {toArray(courtType).length > 1 &&
                                    <>
                                      <OKELink onClick={() => setExapndCard(prev => !prev)}>
                                          <SANS_3>{expandCard ? "Show Less" : "Show more"}</SANS_3>
                                      </OKELink>
                                      <PaddingBottom20 />
                                    </>
                                    }
                    </StyledCardfFooterWrapper>                
        </StyledCardContainer>
    </>
  )
}

export default InfoCard