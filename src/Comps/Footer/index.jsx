import { StyledFooterContainer, StyledLogo, StyledSection } from "./Styled.index"
import { SANS_0, SANS_2,colors, SANS_3_4, PaddingBottom40, PaddingBottom20,OKELink} from 'oolib'
import { NavLink } from 'react-router-dom'
import xkdrLogo from '../../../public/xkdr-logo.svg'
import ooloiLogo from '../../../public/Logo.svg'
import pucarLogo from '../../../public/pucar.png'

const { greyColor50 } = colors;

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledSection>
        <NavLink to="/about" style={{textDecoration: 'none', color: 'inherit'}} >
            <StyledLogo src={xkdrLogo}></StyledLogo>
        </NavLink>
        <PaddingBottom20 />
        <SANS_0 uppercase bold color={greyColor50}>About</SANS_0>
        <SANS_3_4>XKDR Forum is a platform where a research community comes together, comprising full time staff and external researchers
          <br/>
          <PaddingBottom40 />
          Our interdisciplinary approach implies that on any question, there are many points of view in the discussion, and insights from diverse disciplines are brought into play. The team has curiosity, creativity and enthusiasm in making a difference.</SANS_3_4>
          <PaddingBottom40 />
          <SANS_0 uppercase bold color={greyColor50}>  In partnership with </SANS_0>  
        <div style={{display: 'flex', gap: '5rem', marginLeft: '0.5rem'}}>
          
        <NavLink to="/about" style={{textDecoration: 'none', color: 'inherit'}} >
            <StyledLogo src={pucarLogo}></StyledLogo>
        </NavLink>
        <NavLink to="/about" style={{textDecoration: 'none', color: 'inherit'}} >
            <StyledLogo src={ooloiLogo}></StyledLogo>
        </NavLink>
        </div>  
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