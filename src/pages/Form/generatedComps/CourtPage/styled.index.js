import styled from 'styled-components'
import { colors } from 'oolib'

const { greyColor40, invertRed, lightRed } = colors;

export const StyledHeader = styled.div`
    width: 100%;
    height: 10rem;
    border: 1px solid ${ invertRed };
    background: ${ lightRed };
    display: flex;
    color: #F54C31;
    text-align: center;
    justify-content: center;
    align-items: center;
    max-width: ${({numOfContainers}) => numOfContainers === 1 && '32rem'};
`
export const StyledInfoBlock = styled.div`
    width: 100%;
    height: 15rem;
    max-height: max-content;
    border: 1px solid ${ greyColor40 };
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding-left: ${({numOfContainers}) => numOfContainers > 2 ? '2rem' : '3rem'};
    padding-right: ${({numOfContainers}) => numOfContainers > 2 ? '2rem' : '3rem'};
    max-width: ${({numOfContainers}) => numOfContainers === 1 && '32rem'};
`

export const StyledContentWrapper = styled.div`
    display: flex; 
    justify-content: flex-start; 
`


// Table Commps
export const StyledTable = styled.table`
    border-collapse: collapse;
`

export const StyledTableHead = styled.th`
    border: 1px solid #FBB7AD;
    position: sticky;
    top: 0;
    padding: 2rem;
    background: #FEF6F5;
    height: 10rem;
`

export const StyledTableData = styled.td`
    border: 1px solid ${greyColor40};
    padding: ${({numOfContainers}) => numOfContainers > 2 ? '2rem' : '3rem'};
    max-width: 32rem;
    height: 15rem;
`
