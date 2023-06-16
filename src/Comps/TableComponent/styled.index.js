import styled from "styled-components"
import { colors } from 'oolib'

const { greyColor40, invertRed, lightRed, greyColor5 } = colors;

export const StyledTable = styled.table`
    margin-top: 2rem;
    border-collapse: collapse;
    width: inherit;
    overflow-x: scroll;

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
    /* padding: ${({numOfContainers}) => numOfContainers > 2 ? '2rem' : '3rem'}; */
    padding: 2rem;
    max-width: 32rem;
    /* height: 15rem; */
`
//

export const StyledTableRow = styled.tr`
  
  &:nth-child(even) {
    background-color: ${greyColor5};
  }
`

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