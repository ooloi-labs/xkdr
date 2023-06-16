import {  PaddingBottom20, PaddingBottom40, SANS_3, SANS_3_4, SANS_5_6, toArray, TabBarStyle2, Tooltip, BarChart, PaddingBottom10} from "oolib"
import { cardsTitle, courtDataTableHeadersConfig, surveyConfigHeaders2 } from "./config"
import { courtsData } from "../../config";
import {  getCourtSentence, useRefScrollTo } from "./utils";
import {  StyledNCLTBlock, StyledUl} from "./styled.index"
import { useState } from "react";
import InfoCard from "../../comps/InfoCard/InfoCard";
import { TableComponent } from "../../../../Comps/TableComponent";
import { SurveyTable } from '../../comps/SurveyTable'
import { InfoCard2 } from "../../comps/InfoCard/InfoCard2";

const tabOptions = [
    { display: "Summary", value: "summary" },
    { display: "Data", value: "data" },
    { display: "People's Experience", value: "survey" },
  ];

export const CourtPage = ({courtType, answers = {}}) => {

    const [ activeTab, setActiveTab] = useState("summary")
    const isAnswersEmpty = Object.keys(answers).length === 0

    const refToTop = useRefScrollTo()

    const getCourtInfo = () => {

        return Object.keys(cardsTitle).reduce((info, key) => {
          let aggregatedValue = toArray(courtType).map((court) => {
            let courtInfo = courtsData[court].data;
            let value = courtInfo[key];
    
            return {
              courtName: court,
              value,
            };
          });
    
          return { ...info, [key]: aggregatedValue };
        }, {});
    };

    const courtInfo = getCourtInfo();

    return (
        <>
            <div ref={refToTop}>
            <SANS_5_6> 
            {(isAnswersEmpty || answers?.creditorOrDebtor?.value !== 'debtor')
                    ? <>
                        You can approach {getCourtSentence({courtType, smallCase: true})}
                        </>
                    : <>
                            {getCourtSentence({courtType, smallCase: false})}
                        </>
            }
            </SANS_5_6>
            <PaddingBottom20 />
            {(isAnswersEmpty || answers?.creditorOrDebtor?.value !== 'debtor') &&
                <>
                <SANS_3>If your dispute involves bounced cheque(s), then you could also approach the Metropolitan Magistrate courts.</SANS_3>
                <PaddingBottom20/>
                </>
            }
            {toArray(courtType).includes('NCLT') &&
                <>
                <StyledNCLTBlock>
                    <Tooltip presetTarget={"infoIcon"} text={"Add New Article"} position="left"/>
                    <SANS_3 italic>The proceeding before the <span style={{fontWeight: 'bold'}}>NCLT</span> is in the nature of a bankruptcy proceeding. If your petition is admitted by the NCLT, it will be converted into a resolution process with the other creditors of the debtor</SANS_3>
                </StyledNCLTBlock>
                <PaddingBottom20/>  
                </>
            }
            {/* <SANS_3>We have information on the performance of some of these courts and tribunals in the following locations</SANS_3> */}
            {/* <PaddingBottom20/>   */}
            {toArray(courtType).length > 1 && 
            <>
                <TabBarStyle2
                    S
                    value={activeTab}
                    options={tabOptions}
                    onChange={(k, v) => setActiveTab(v)}
                    saveValueAsString
                    />
                <PaddingBottom20/>
                    </>
            }
            {activeTab === "data" ?
                <TableComponent data={courtsData} config={courtDataTableHeadersConfig} courtType={courtType}/>
            : 
            activeTab === "summary" ? 
            <>
            {Object.keys(cardsTitle).map((key) => (
                <InfoCard key={key} heading={{title:cardsTitle[key].text, key:key}} info={courtInfo[key]} courtType={courtType} cardsTitle={cardsTitle}>
                    <div style={{paddingRight: '3rem'}}>
                    <BarChart
                        id={key}
                        className={key}
                        data={courtInfo[key]}
                        numValuePath={
                            key === 'freqOfHearings' 
                            ? 'value.inMonths' 
                            : key === 'avgFirstHearing'
                                ? 'value.totalValue'
                                : 'value'

            //                     averageDisposalTimeStringRep: '2 Y, 2 M',
            //   timeTakenStringRep: '1 Y, 11 M',
                        }
                        categoryValuePath={'courtName'}
                        numberAxisLabel={cardsTitle[key].text}
                        highlight={'min'}
                        numLabelPath={key === 'avgFirstHearing'
                            ? 'value.stringRep'
                            // : key === 'averageDisposalTime'
                            //     ? 'averageDisposalTimeStringRep'
                            //     : key === 'timeTaken'
                            //         ? 'timeTakenStringRep'
                                    : undefined }
                        width={450}
                        height={100}
                        />
                    </div>
                </InfoCard>
            ))}
            <InfoCard2 setActiveTab={setActiveTab}/>
            </>
            : activeTab === "survey" ?
                <>
                    <SurveyTable />
                    {/* <TableComponent config={surveyConfigHeaders2} data={courtsData}  courtType={courtType}/> */}
                    <PaddingBottom20/>
                    <SANS_3_4 semibold>How to read this Table?</SANS_3_4>
                    <PaddingBottom10/>
                    <StyledUl>
                        <li>
                        <SANS_3>The maximum score for each metric is 1.<br/> Ex: The users gave a score of 0.81 out of 1 (or 81%) for the NCLT’s efficiency.</SANS_3>
                        </li> 
                        <li> 
                        <SANS_3> The maximum total score for each court is 5. <br/>  Ex: The users gave a composite score of 3.59 out of 5 (or 71.2%)  to the NCLT.</SANS_3>
                        </li>
                    </StyledUl>
                </>        
            : null
            } 
        </div>
        </>
)
}

{/* <_BarChart
id='testbarchart'
className='testbarchart'
data={[
  { court: "DRT", avg: 15 },
  { court: "NCLT", avg: 18 },
  { court: "Bombay HC", avg: 23 },
]}
  numValuePath={'avg'}
  categoryValuePath={'court'}
  numberAxisLabel={'Avg. No. of Hearings'}
  /> */}
    



        

    // export const CourtPage = ({courtType, answers}) => {

    //     const numOfContainers = Math.min(toArray(courtType).length, 3);
    //     const TitleComp = numOfContainers > 2 ? SANS_3 : SANS_4_5
    // return (
    //     <>
    //         <div style={{paddingTop: '2rem'}}>
    //         <SANS_3 bold>
    //             According to your inputs, you can approach these avenues of justice.
    //         </SANS_3>
    //             <div style={{display: "grid", gridTemplateColumns: `repeat(${numOfContainers}, 1fr)`, position: 'sticky', top: 0, zIndex: 1, marginTop: '2rem'}}>
    //                 {toArray(courtType).map((ct, i) => (         
    //                     <StyledContentWrapper key={i}>
    //                         <StyledHeader key={i} numOfContainers={numOfContainers}>
    //                             <TitleComp semibold>{courtTypesConfig[ct].courtTitle}</TitleComp >
    //                         </StyledHeader>
    //                     </StyledContentWrapper>
    //                 ))}
    //             </div>
    //         {
    //             Object.entries(courtInfoHeadersConfig).map(([key]) => {
    //                 let headerKey = key;
    //                 return (
    //                 <>
    //                     <div style={{display: "grid", gridTemplateColumns: `repeat(${numOfContainers}, 1fr)`}}>         
    //                         {toArray(courtType).map((ct, i) => (    
    //                             <StyledContentWrapper key={i}>
    //                                 <StyledInfoBlock numOfContainers={numOfContainers} key={i}>
    //                                     <TitleComp color={colors.black_opacity80}>{renderCellData(courtTypesConfig[ct].content[headerKey]?.heading)}</TitleComp>
    //                                 </StyledInfoBlock>
    //                             </StyledContentWrapper>
    //                         ))}
    //                     </div>
    //                 </>
    //                 )
    //             })
    //         }    
    //         </div>

    //     {/* { answers.bouncedCheque?.value === true && <SANS_3>{chequeBounceInfo}</SANS_3> } */}

    //     </>
        
    //     )
    // }