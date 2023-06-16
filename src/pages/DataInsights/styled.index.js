import { Container, colors, mediaQuery} from 'oolib'
import styled from 'styled-components'

const { greyColor5, greyColor40} = colors
export const StyledContainer = styled(Container)`
  background-color: ${colors.white} ;
  min-height: 100vh;

  ${mediaQuery('md')}{
    background-color: ${colors.greyColor5} ;
  }
`

export const StyledPageContentsWrapper = styled.div`
  padding: 4rem 0rem 2rem 0rem; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-evenly;
  width: 100%;
  min-height: 100vh;
  ${mediaQuery('md')}{
    padding: 6rem 6rem 40rem 6rem;   
  }
`
export const StyledBoldSpan = styled.span`
    font-weight: bold;
`

export const StyledInfoBlock = styled.div`
  display: grid;  
  gap: 2rem;
`

export const StyleUl = styled.ul`
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



// Table Commps
export const StyledTable = styled.table`
    margin-top: 2rem;
    border-collapse: collapse;
    width: inherit;
    overflow-x: scroll;
    border: 1px solid ${greyColor40};
`
 
export const StyledTableHead = styled.th`
    border: 1px solid #FBB7AD;
    position: sticky;
    top: 6rem;
    padding: 2rem;
    background: #FEF6F5;
    text-align: left;
    /* height: 10rem; */
`

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${greyColor40};
  &:nth-child(even) {
    background-color: ${greyColor5};
  }

`

export const StyledTableData = styled.td`
    border: 1px solid ${greyColor40};
    padding: 2rem;
    /* padding: ${({numOfContainers}) => numOfContainers > 2 ? '2rem' : '3rem'}; */
    max-width: 32rem;
`

export const StyledTableInsideColumn = styled.div`
    padding: 1rem;
    width: 100%;
    border-bottom: 1px solid ${greyColor40};
    :last-of-type{
      border: none;
    }
    :nth-of-type(odd){
    }
`
