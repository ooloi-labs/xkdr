import { NavLink } from 'react-router-dom'
import xkdrLogo from '../../../public/xkdr-logo.svg'
import { StyledLi, StyledLogo, StyledNav, StyledNavLink, StyledNavLinkCTA, StyledUl } from './styled.index'
import { SANS_2, ButtonPrimary } from 'oolib'
 
const links = [
  { path: '/about', value: 'About' },
  { path: '/dataInsights', value: 'How this data was computed' },
  // { path: '/previewCourtPage', value: 'Dashboard' },
];

export const HeaderMenu = () => {
  return (
    <StyledNav>
         <NavLink to="/" style={{textDecoration: 'none', color: 'inherit'}} >
            <StyledLogo src={xkdrLogo}></StyledLogo>
        </NavLink>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <StyledUl>
        {links.map(({ path, value }) => {
            return (
            <StyledLi key={value}>
              <StyledNavLink to={path}>
                <SANS_2>{value}</SANS_2>
              </StyledNavLink>
            </StyledLi>
            )
        })}
        </StyledUl>
        <ButtonPrimary>
          <StyledNavLinkCTA to={'/previewCourtPage'}>
            Dashboard
          </StyledNavLinkCTA>
        </ButtonPrimary>
        </div>
    </StyledNav>
  )
}
