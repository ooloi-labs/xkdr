import {  PaddingBottom20, SANS_3, SANS_3_4, SANS_4_5, SANS_5_6, colors, toArray, TabBarStyle2, Tooltip, BarChart, OKELink } from "oolib"
import { cardsTitle, courtTypesConfig2, cardInfoConfig, courtInfoHeadersConfig, } from "./config"
import { getCourtSentence } from "./utils";
import {  StyledNCLTBlock} from "./styled.index"
import { StyledTable, StyledTableHead, StyledTableData} from "./styled.index"
import { useState } from "react";
import InfoCard from "../../comps/InfoCard/InfoCard";
import { SurveyTable } from "../../comps/SurveyTable";

const tabOptions = [
    { display: "Summary", value: "summary" },
    { display: "Data", value: "data" },
    { display: "People's Experience", value: "survey" },
  ];

export const CourtPage = ({courtType, answers = {}}) => {

    const [ activeTab, setActiveTab] = useState("summary")

    const numOfContainers = Math.min(toArray(courtType).length, 3);
    const TitleComp = numOfContainers > 2 ? SANS_3 : SANS_4_5

    const getCourtData = (court) => {
        const courtConfig = courtTypesConfig2[court];
        if (courtConfig) {
            const { data } = courtConfig;
            return Object.values(data);
        }
        return [];
    };

    const getCourtInfo = () => {

        return Object.keys(cardsTitle).reduce((info, key) => {
          let aggregatedValue = toArray(courtType).map((court) => {
            let courtInfo = cardInfoConfig[court];
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
    // console.log({courtInfo, courtType})
    return (
        <>
            <div >
            <SANS_5_6>
                You can approach the Mumbai bench of <span style={{fontWeight: 'bold'}}>{getCourtSentence(courtType)}</span> 
            </SANS_5_6>
            <PaddingBottom20 />
            {/* { answers.bouncedCheque?.value === true &&  */}
                <>
                <SANS_3_4>The matter could be pursued in criminal courts and so we provide more info with a link:</SANS_3_4>
                <SANS_3 semibold>
                    <OKELink invertUnderline to={``}>
                        Click here for more info
                    </OKELink>
                </SANS_3> 
                <PaddingBottom20/>
                </>
            {/* } */}
            {toArray(courtType).includes('NCLT') &&
                <>
                <StyledNCLTBlock>
                    <Tooltip presetTarget={"infoIcon"} text={"Add New Article"} position="left"/>
                    <SANS_3 italic>In case you choose to approach the <span style={{fontWeight: 'bold'}}>NCLT</span>, the proceeding is in the nature of a bankruptcy petition. If your petition is admitted, it will be converted into a collective resolution process.</SANS_3>
                </StyledNCLTBlock>
                <PaddingBottom20/>  
                </>
            }
            {toArray(courtType).length > 1 && 
                <TabBarStyle2
                    S
                    value={activeTab}
                    options={tabOptions}
                    onChange={(k, v) => setActiveTab(v)}
                    saveValueAsString
                />
            }
            {activeTab === "data" ?
                <StyledTable>
                <thead>
                    <tr>
                        <StyledTableHead>
                            <TitleComp color={'#F54C31'} bold>
                                Metrics
                            </TitleComp>
                        </StyledTableHead>
                        {toArray(courtType).map((court) => (
                            <StyledTableHead key={court}>
                                <TitleComp color={'#F54C31'} bold>
                                    {courtTypesConfig2[court].courtTitle}
                                </TitleComp>
                            </StyledTableHead>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from(Array(Math.max(toArray(...courtType).map((court) => getCourtData(court).length)))).map((_, index) => (
                        <tr key={index}>
                                <StyledTableData numOfContainers={numOfContainers}>
                                    <TitleComp>
                                        {Object.values(courtInfoHeadersConfig)[index]}
                                    </TitleComp>
                                </StyledTableData>
                            {toArray(courtType).map((court) => (
                                <StyledTableData key={court} numOfContainers={numOfContainers}>
                                    <TitleComp color={colors.greyColor80} bold>
                                        {getCourtData(court)[index]}
                                    </TitleComp>
                                </StyledTableData>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
            : 
            activeTab === "summary" ? 
            <>
            {Object.keys(cardsTitle).map((key) => (
                <InfoCard key={key} heading={{title:cardsTitle[key].text, key:key}} info={courtInfo[key]} courtType={courtType} cardsTitle={cardsTitle}>
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
                        }
                        categoryValuePath={'courtName'}
                        numberAxisLabel={cardsTitle[key].text}
                        highlight={'min'}
                        numLabelPath={key === 'avgFirstHearing'
                            ? 'value.stringRep'
                            : undefined}
                        />
                </InfoCard>
            ))}
            </>
            : activeTab === "survey" ?
                <SurveyTable />
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