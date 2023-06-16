import { useState } from 'react';
import { SANS_3, Accordion, OKELink, PaddingBottom20, toArray} from 'oolib';
import { StyledCardBodyWrapper, StyledCardContainer, StyledCardHeaderWrapper, StyledCardfFooterWrapper, StyledExpandedCardSection } from './styled.index'
import { generateSentences } from './utils';
import { CalenderX, HourGlassHigh, HourGlassHorizontal, WaveCurve, WaveTriangle } from '../../../../assets/icons/CustomIcons'

const InfoCard = ({heading, info, children, courtType, cardsTitle}) => {

  const icons = { CalenderX, HourGlassHigh, HourGlassHorizontal, WaveCurve, WaveTriangle}
  const Icon = icons[cardsTitle[heading.key].icon];
  
  const [expandCard, setExapndCard] = useState(false)
  return (
    <>
        <StyledCardContainer expandCard={expandCard}>
                    <StyledCardHeaderWrapper>
                                    <Icon/>
                                    <SANS_3 semibold>{heading.title}</SANS_3>
                    </StyledCardHeaderWrapper>
                    <StyledCardBodyWrapper expandCard={expandCard}>
                                      {generateSentences(heading, info)}
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