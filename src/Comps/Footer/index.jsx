import { StyledFooterContainer, StyledSection } from "./Styled.index"
import { SANS_0, SANS_2,colors, SANS_3_4, PaddingBottom50, OKELink} from 'oolib'

const { greyColor50 } = colors;

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledSection>
        <SANS_0 uppercase bold color={greyColor50}>About</SANS_0>
        <SANS_3_4>XKDR Forum is a platform where a research community comes together, comprising full time staff and external researchers
          <br/>
          <PaddingBottom50 />
          Our interdisciplinary approach implies that on any question, there are many points of view in the discussion, and insights from diverse disciplines are brought into play. The team has curiosity, creativity and enthusiasm in making a difference.</SANS_3_4>
      </StyledSection>
      <StyledSection>
        <div style={{alignSelf: 'flex-end'}}>
        <SANS_3_4 style={{alignSelf: 'flex-end'}}>
          For any queries reach out to : 
        </SANS_3_4>
          <SANS_3_4 style={{alignSelf: 'flex-end'}}>
          <OKELink>
            outreach@xkdr.org 
          </OKELink>
          </SANS_3_4>
        </div>
      </StyledSection>
    </StyledFooterContainer>
  )
}

export default Footer