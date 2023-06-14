import { Link } from 'react-router-dom'
import xkdrLogo from '../../../public/xkdr-logo.svg'
import { StyledLi, StyledLogo, StyledNav, StyledUl } from './styled.index'
import {  SANS_4_5 } from 'oolib'
 
const links = [
  { path: '/about', value: 'About' },
  { path: '/previewCourtPage', value: 'Dashboard' },
  { path: '', value: 'How this data was computed' },
];

export const HeaderMenu = () => {
  return (
    <StyledNav>
         <Link to="/" style={{textDecoration: 'none', color: 'inherit'}} >
            <StyledLogo src={xkdrLogo}></StyledLogo>
        </Link>
        
        <StyledUl>
        {links.map(({ path, value }) => (
            <StyledLi key={value}>
              <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <SANS_4_5>{value}</SANS_4_5>
              </Link>
            </StyledLi>
          ))}
        </StyledUl>
    
    </StyledNav>
  )
}
