import styled from "styled-components";
import { colors } from 'oolib'

const { greyColor15, greyColor40, greyColor5 } = colors;

// export const StyledTable = styled.table`
//     margin-top: 2rem;
//     border-collapse: collapse;
// `
export const StyledSurveyTableHead = styled.thead`

`
// export const StyledTableHead = styled.th`
//     border: 1px solid ${greyColor15};
//     padding: 2rem 1rem;
//     text-align: start;
//     background: white;
//     position: sticky;
//     top: 0;
// `
// export const StyledTableData = styled.td`
//     border: 1px solid ${greyColor15};
//     padding: 2rem;
//     text-align: center;
// `

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