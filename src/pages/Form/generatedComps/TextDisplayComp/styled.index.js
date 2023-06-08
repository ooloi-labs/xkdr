import styled from 'styled-components'
import { SANS_4,  SERIF_4_5,  SERIF_6_7, colors } from 'oolib'

const { red, lightRed, greyColor40} = colors

export const StyledTextWrapper = styled.div`
    box-sizing: border-box;
    width: 100%; 
    background: ${lightRed}; 
    height: 30rem; 
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const StyledHeader = styled(SERIF_4_5)`
    color: ${red};
    font-size: 3rem;
    margin-bottom: 1rem;
`

export const StyledInfo = styled(SANS_4)`
    color: ${red};
`

export const StyledFormBlock = styled.div`
    margin-top: 10rem;
    border: 1px solid ${greyColor40};
    padding: 5rem;
`