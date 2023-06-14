import styled from "styled-components";
import { colors, transition } from 'oolib'

const { greyColor10 } = colors;

export const StyledLogo = styled.img`
    height: 4rem;
`

export const StyledNav = styled.div`
    display: flex;
    padding: 0 10rem;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    position: sticky;
    top: 0;
    background: white;
`
export const StyledUl = styled.ul`
    height: 4rem;
    display: flex;
`
export const StyledLi = styled.li`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    &:hover{
        background: ${greyColor10};
    }
    ${transition("background")}
`