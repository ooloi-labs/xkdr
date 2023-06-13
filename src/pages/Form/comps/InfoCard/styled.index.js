import { colors, transition } from 'oolib'
import styled, { css } from 'styled-components'

const { greyColor15 } = colors;

export const StyledCardContainer = styled.div`
    width: 100%;
    /* height: 20rem; */
    margin: 2rem 0;
    border-bottom:none;
    border-radius: 1rem;
`

export const StyledCardHeaderWrapper = styled.div`
    height: 5rem;
    background: #FEF6F5;
    border: 1px solid ${greyColor15};
    border-radius: 1rem 1rem 0 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-left: 3rem;
    `

export const StyledCardBodyWrapper = styled.div`
    min-height: 10rem;
    max-height: max-content;
    display: flex;
    align-items: center;
    border-right: 1px solid ${greyColor15};
    border-left: 1px solid ${greyColor15};
    padding-left: 3rem;    
    padding-right: 3rem;
`

export const StyledCardfFooterWrapper = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    padding-left: 3rem;
    border: 1px solid ${greyColor15};
    border-top: none;
    border-radius: 0 0 1rem 1rem;
    padding-bottom: 1rem;
`

export const StyledExpandedCardSection = styled.div`
    border-left: 1px solid ${greyColor15};
    border-right: 1px solid ${greyColor15};
    height: 30rem;
    padding-left: 3rem;
`