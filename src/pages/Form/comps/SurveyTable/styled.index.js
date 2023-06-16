import styled from "styled-components";
import { colors } from 'oolib'

const { greyColor15, greyColor40, greyColor5 } = colors;

export const StyledSurveyTableHead = styled.thead`

`

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: inherit;
    overflow-x: scroll;
    border: 1px solid ${greyColor40};
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
    padding: 2rem;
    /* padding: ${({numOfContainers}) => numOfContainers > 2 ? '2rem' : '3rem'}; */
    max-width: 32rem;
    /* height: 15rem; */
`
export const StyledTableRow = styled.tr`
  
  &:nth-child(even) {
    background-color: ${greyColor5};
  }
`