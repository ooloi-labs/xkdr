import { NavLink } from 'react-router-dom'
import xkdrLogo from '../../../public/xkdr-logo.svg'
import { StyledLi, StyledLogo, StyledNav, StyledNavLink, StyledUl } from './styled.index'
import {  SANS_4_5 } from 'oolib'
 
const links = [
  { path: '/about', value: 'About' },
  { path: '/previewCourtPage', value: 'Dashboard' },
  { path: '', value: 'How this data was computed' },
];

export const HeaderMenu = () => {
  return (
    <StyledNav>
         <NavLink to="/" style={{textDecoration: 'none', color: 'inherit'}} >
            <StyledLogo src={xkdrLogo}></StyledLogo>
        </NavLink>
        
        <StyledUl>
        {links.map(({ path, value }) => (
            <StyledLi key={value}>
              <StyledNavLink to={path}>
                <SANS_4_5>{value}</SANS_4_5>
              </StyledNavLink>
            </StyledLi>
          ))}
        </StyledUl>
    
    </StyledNav>
  )
}
