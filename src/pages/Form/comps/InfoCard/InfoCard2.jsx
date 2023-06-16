import { UsersThree } from '../../../../assets/icons/CustomIcons'
import { StyledBoldSpan, StyledCardBodyWrapper, StyledCardContainer, StyledCardHeaderWrapper, StyledCardfFooterWrapper } from './styled.index'
import { SANS_3_4, SANS_3, OKELink, PaddingBottom20} from 'oolib'

export const InfoCard2 = ({setActiveTab}) => {
  return (
    <>
        <StyledCardContainer >
                    <StyledCardHeaderWrapper>
                                    <UsersThree />
                                    <SANS_3 semibold>People's Experience</SANS_3>
                    </StyledCardHeaderWrapper>
                    <StyledCardBodyWrapper>
                                    <SANS_3_4>A user experience survey conducted in 2023 shows that users were most satisfied with the <StyledBoldSpan>Bombay High Court</StyledBoldSpan> and least satisfied with the <StyledBoldSpan>Debt Recovery Tribunal</StyledBoldSpan> for the resolution of their disputes involving debt contracts.</SANS_3_4>
                    </StyledCardBodyWrapper>
                    <StyledCardfFooterWrapper >
                                        <OKELink onClick={() => setActiveTab('survey')}>
                                          <SANS_3>Show more</SANS_3>
                                      </OKELink>
                                      <PaddingBottom20 />
                    </StyledCardfFooterWrapper>                
        </StyledCardContainer>
    </>
  )
}
