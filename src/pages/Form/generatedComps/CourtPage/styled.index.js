import styled, { css } from 'styled-components'
import { colors } from 'oolib'

const { greyColor40, invertRed, lightRed, greyColor5 } = colors;

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
    margin-top: 2rem;
    border-collapse: collapse;
`

export const StyledTableHead = styled.th`
    border: 1px solid #FBB7AD;
    position: sticky;
    top: 0;
    padding: 2rem;
    background: #FEF6F5;
    /* height: 10rem; */
`

export const StyledTableData = styled.td`
    border: 1px solid ${greyColor40};
    padding: ${({numOfContainers}) => numOfContainers > 2 ? '2rem' : '3rem'};
    max-width: 32rem;
    /* height: 15rem; */
`
export const StyledTableRow = styled.tr`
  
  &:nth-child(even) {
    background-color: ${greyColor5};
  }
`
//
export const StyledNCLTBlock = styled.div`
    display: flex;
    gap: 1rem;
    background-color: #FFFAE6;
    padding: 1rem;
    align-items: center;
`

export const StyledTabbarWrapper = styled.div`
    padding: 0.5rem;
    background: ${greyColor5};
    width: max-content;
`

export const StyledUl = styled.ul`
    padding-left: 1px;
  li {
    margin-left: 3rem;
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;

    &:before {
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #000;
    }
  }

`

export const StyledBoldSpan = styled.span`
  font-weight: bold;
`