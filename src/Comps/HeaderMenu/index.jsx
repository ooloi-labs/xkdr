import { Link } from 'react-router-dom'
import xkdrLogo from '../../../public/xkdr-logo.svg'
import { StyledLi, StyledLogo, StyledNav, StyledUl } from './styled.index'
import { SANS_2, SANS_4_5 } from 'oolib'
 
export const HeaderMenu = () => {
  return (
    <StyledNav>
         <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
            <StyledLogo src={xkdrLogo}></StyledLogo>
        </Link>
        
        <StyledUl>
          <StyledLi>
            <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>
              <SANS_4_5>About</SANS_4_5>
            </Link>
          </StyledLi>

          <StyledLi>
            <Link to="/previewCourtPage" style={{textDecoration: 'none', color: 'inherit'}}>
            <SANS_4_5>
              Dashboard
            </SANS_4_5>
            </Link>
          </StyledLi>
          
          <StyledLi>
            <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>
              <SANS_4_5>
                How this data was computed
              </SANS_4_5>
            </Link>  
          </StyledLi>
        
        </StyledUl>
    
    </StyledNav>
  )
}
