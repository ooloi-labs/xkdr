import { Container, colors, mediaQuery} from 'oolib'
import styled from 'styled-components'

const { primaryColor100 } = colors
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