import { ButtonPrimary, ButtonSecondary, SANS_2, colors } from "oolib"
import styled from "styled-components";
import { firstPageId } from "../../config";


const StyledNavContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;

    
`
const StyledPageNumberText = styled(SANS_2)`
    color: ${colors.greyColor40}
`

export const FrontBackNav = ({
    setPageMemory,
    answers,
    setAnswers,
    activePageId,
    pageType : thisPageType
}) => {

    const nextButtonExists = thisPageType === "questionPage";
    const backButtonExists = Object.keys(answers).length >= 1 && activePageId !== firstPageId

    const getPrevPageId = () => {
        const allKeys = Object.keys(answers);
        /**
         * now 
         * - if this is an end page, then we simply need to go to the last key in the array i.e len-1
         * - if it is a question page, without an answer being selected yet, then again, last key in ary i.e len-1
         * - if question page, WITH an answer selected, then second last key i.e len-2
         */
        if(
            thisPageType === 'endPage' || // if this is an end page
            !answers[activePageId] // if it is a question page, without an answer being selected yet
        ){ 
            return allKeys[allKeys.length - 1]
        } else { // if question page, WITH an answer selected
            return allKeys[allKeys.length - 2]
        }
        
    }

    const getNextPageIdAndProps = () => {
        if(answers[activePageId].$decide){
            const { decisionKey, answersToResultsMap }= answers[activePageId].$decide
            const ansAgainstDecisionKey = answers[decisionKey];
            
            const drilldown = (answersToResultsMapData, answers) => {
                const {linkTo, linkToProps, $decide} = answersToResultsMapData;
                if($decide){
                    const {answersToResultsMap, decisionKey} = $decide;
                    const ansAgainstDecisionKey = answers[decisionKey];
                    return drilldown(answersToResultsMap[ansAgainstDecisionKey.value], answers)
                }else{
                    return ({
                        activePageId: linkTo, activePageProps: linkToProps
                    })
                }    
            }

            return drilldown(answersToResultsMap[ansAgainstDecisionKey.value], answers)
            
        }else{
            return ({
                activePageId: answers[activePageId].linkTo, activePageProps: answers[activePageId].linkToProps
            })
        }
    }



    return (
        <StyledNavContainer>
            {backButtonExists ? (
            <ButtonSecondary onClick={() => {
                setPageMemory({activePageId: getPrevPageId(), activePageProps: undefined /** cuz back can only take you to a question page, and question pages do not take linkToProps */ })
                if(thisPageType === 'questionPage' && answers[activePageId]){ //then delete the answer against this page
                    setAnswers(prev => {
                        const newAns = {...prev};
                        delete newAns[activePageId];
                        return newAns;
                    })
                }
            }}> 
              Back
            </ButtonSecondary>
          ) : <div/>}
        
        {nextButtonExists && (
            <ButtonPrimary 
                disabled={!answers[activePageId]}
                onClick={() => setPageMemory(getNextPageIdAndProps())}>
              Next
            </ButtonPrimary>
          )}
          </StyledNavContainer>
    )
}