import styled from 'styled-components'
import { SANS_3_4, SANS_5_6, colors } from 'oolib'

const {  greyColor40} = colors

export const StyledTextWrapper = styled.div`
    box-sizing: border-box;
    width: 100%; 
    background: #FEF6F5; 
    height: 30rem; 
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const StyledHeader = styled(SANS_5_6)`
    font-size: 3rem;
    margin-bottom: 1rem;
`

export const StyledInfo = styled(SANS_3_4)`

`

export const StyledFormBlock = styled.div`
    margin-top: 10rem;
    border: 1px solid ${greyColor40};
    padding: 5rem;
`