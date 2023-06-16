import styled from "styled-components"
import { Container, colors, mediaQuery } from 'oolib'

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
  /* justify-content: space-evenly; */
  width: 100%;
  min-height: 100vh;
  ${mediaQuery('md')}{
    padding: 6rem 6rem 40rem 6rem;   
  }
`