import { useState } from 'react';
import { HourglassHigh } from '@phosphor-icons/react'
import { SANS_3, SANS_4_5, Accordion, OKELink} from 'oolib';
import { StyledCardBodyWrapper, StyledCardContainer, StyledCardHeaderWrapper, StyledCardfFooterWrapper, StyledExpandedCardSection, StyledGhostContainer } from './styled.index'
import { Children } from 'react';

const InfoCard = ({heading, info, children}) => {

  const [expandCard, setExapndCard] = useState(false)

  return (
    <>
        <StyledCardContainer expandCard={expandCard}>
                    <StyledCardHeaderWrapper>
                                    <HourglassHigh size={16}/><SANS_3 semibold>{heading}</SANS_3>
                    </StyledCardHeaderWrapper>
                    <StyledCardBodyWrapper>
                                    <SANS_4_5 semibold>{info}</SANS_4_5>
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