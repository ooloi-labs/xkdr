import styled from 'styled-components'
import { SANS_3, colors } from 'oolib'

const { greyColor40, invertRed, lightRed } = colors;

export const StyledHeader = styled.div`
    width: 90%;
    height: 8rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid ${ invertRed };
    background: ${ lightRed };
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyledInfoBlock = styled.div`
    width: 90%;
    height: 15rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid ${ greyColor40 };
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    text-align: center;
`

export const BlockHeading = styled(SANS_3)`
    position: absolute; 
    top: -1rem;
    left: 2rem;
    padding-left: 1rem;
    padding-right: 2rem;
    background-color: white;
    color: ${greyColor40};
`