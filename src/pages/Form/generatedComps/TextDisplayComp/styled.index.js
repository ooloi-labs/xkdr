import styled from 'styled-components'
import { SANS_3, SANS_4, SANS_5_6, SANS_7_8, SERIF_6_7, colors } from 'oolib'

const { red, lightRed, invertRed,  } = colors

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
export const StyledHeader = styled(SERIF_6_7)`
    color: ${red};
    font-size: 3rem;
    margin-bottom: 1rem;
`

export const StyledInfo = styled(SANS_4)`
    color: ${red};
`