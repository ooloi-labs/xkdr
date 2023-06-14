import { NavLink } from 'react-router-dom'
import xkdrLogo from '../../../public/xkdr-logo.svg'
import { StyledLi, StyledLogo, StyledNav, StyledNavLink, StyledUl } from './styled.index'
import { SANS_2 } from 'oolib'
 
const links = [
  { path: '/about', value: 'About' },
  { path: '/', value: 'Dashboard' },
  { path: '/', value: 'How this data was computed' },
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
                <SANS_2>{value}</SANS_2>
              </StyledNavLink>
            </StyledLi>
          ))}
        </StyledUl>
    
    </StyledNav>
  )
}
