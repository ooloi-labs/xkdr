import styled from "styled-components";
import { colors } from 'oolib'
import { NavLink } from "react-router-dom";

const { greyColor5, greyColor10} = colors;

export const StyledLogo = styled.img`
    height: 4rem;
`

export const StyledNav = styled.div`
    height: 6rem;
    display: flex;
    align-items: center;
    padding: 0rem 10rem;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    position: sticky;
    top: 0;
    background: white;
    z-index: 10000;
`
export const StyledUl = styled.ul`
    display: flex;
`
export const StyledLi = styled.li`
    display: flex;
    align-items: center;
`

export const StyledNavLink = styled(NavLink)`
    height: 100%;
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    &:hover{
        background: ${greyColor5};
    }
    &:active{
        background-color: ${greyColor10};
    }
`
export const StyledNavLinkCTA = styled(NavLink)`
    height: 100%;
    text-decoration: none;
    color: inherit;
    &:active{
    }
`