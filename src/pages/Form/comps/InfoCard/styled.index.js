import { colors } from 'oolib'
import styled from 'styled-components'

const { greyColor15 } = colors;

export const StyledCardContainer = styled.div`
    width: 100%;
    margin-bottom: 2rem;
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
    border-right: 1px solid ${greyColor15};
    border-left: 1px solid ${greyColor15};
    padding: ${({expandCard}) => expandCard ? '2rem 3rem 0rem 3rem' : '2rem 3rem'};
`

export const StyledCardfFooterWrapper = styled.div`
    min-height: 1rem;
    padding-left: 3rem;
    border: 1px solid ${greyColor15};
    border-top: none;
    border-radius: 0 0 1rem 1rem;
`

export const StyledExpandedCardSection = styled.div`
    border-left: 1px solid ${greyColor15};
    border-right: 1px solid ${greyColor15};
    /* height: 30rem; */
    /* padding-left: 3rem; */
`

export const StyledBoldSpan = styled.span`
    font-weight: 600;
    /* font-weight: bold; */
`