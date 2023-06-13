import styled from "styled-components";
import { colors } from 'oolib'

const { greyColor15 } = colors;

export const StyledTable = styled.table`
    margin-top: 2rem;
    border-collapse: collapse;
`
export const StyledSurveyTableHead = styled.thead`

`
export const StyledTableHead = styled.th`
    border: 1px solid ${greyColor15};
    padding: 2rem 1rem;
    text-align: start;
`
export const StyledTableData = styled.td`
    border: 1px solid ${greyColor15};
    padding: 2rem;
    text-align: center;
`