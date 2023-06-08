import styled from 'styled-components'
import { SANS_2, SANS_3, colors } from 'oolib'

const { greyColor40, invertRed, lightRed, greyColor80 } = colors;

export const StyledHeader = styled.div`
    width: 100%;
    /* max-width: 32rem; */
    height: 10rem;
    /* margin: 1rem 0rem; */
    border: 1px solid ${ invertRed };
    background: ${ lightRed };
    display: flex;
    color: #F54C31;
    text-align: center;
    justify-content: center;
    align-items: center;
    /* border-radius: 1rem; */
`
export const StyledInfoBlock = styled.div`
    width: 100%;
    /* max-width: 32rem; */
    height: 15rem;
    max-height: max-content;
    /* margin: 1rem 0rem; */
    border: 1px solid ${ greyColor40 };
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    /* border-radius: 1rem; */
    padding-left: ${({numOfContainers}) => numOfContainers > 2 ? '2rem' : '3rem'};
    padding-right: ${({numOfContainers}) => numOfContainers > 2 ? '2rem' : '3rem'};
`

export const BlockHeading = styled(SANS_2)`
    position: absolute; 
    top: -1rem;
    left: 2rem;
    padding-left: 1rem;
    padding-right: 2rem;
    background-color: white;
    color: ${greyColor80};
`

export const StyledContentWrapper = styled.div`
    display: flex; 
    justify-content: flex-start; 
    /* margin-bottom: 1rem; */
`
export const StyledInfoTitle = styled(SANS_3)`
    margin-top: 1rem; 
    margin-bottom: .5rem;   
`