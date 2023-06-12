import {  PaddingBottom20, SANS_3,SANS_2, SANS_3_4, SANS_4_5, SERIF_4_5, SERIF_5_6, colors, toArray, TabBarStyle2, OKELink, Accordion } from "oolib"
import { cardsTitle, chequeBounceInfo, courtInfoHeadersConfig, courtTypesConfig, courtTypesConfig2 } from "./config"
import { getCourtSentence, renderCellData } from "./utils";
import { StyledHeader, StyledInfoBlock, StyledContentWrapper} from "./styled.index"
import { StyledTable, StyledTableHead, StyledTableData} from "./styled.index"
import { useState } from "react";
import InfoCard from "../../comps/InfoCard/InfoCard";

const tabOptions = [
    { display: "Summary", value: "summary" },
    { display: "Data", value: "data" },
  ];

export const CourtPage = ({courtType, answers}) => {

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

    return (
        <>
            <div >
            <SANS_3 bold>
                {getCourtSentence(courtType)} 
            </SANS_3>
            <PaddingBottom20 />
            { answers.bouncedCheque?.value === true && <SANS_3_4>{renderCellData(chequeBounceInfo)}</SANS_3_4> }
            <PaddingBottom20/>
            <TabBarStyle2
                S
                value={activeTab}
                options={tabOptions}
                onChange={(k, v) => setActiveTab(v)}
                saveValueAsString
            />
            {activeTab === 'data' ?
            <StyledTable>
                <thead>
                    <tr>
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
                            {toArray(courtType).map((court) => (
                                <StyledTableData key={court} numOfContainers={numOfContainers}>
                                    <TitleComp color={colors.greyColor80}>
                                        {renderCellData(getCourtData(court)[index])}
                                    </TitleComp>
                                </StyledTableData>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
            : 
            <>
            {Object.keys(cardsTitle).map((key) => (
                <InfoCard key={key} heading={cardsTitle[key]} info="National Company Law Tribunal is the quickest to dispose cases, averaging at 1 year 8 months. DRT takes the longest.">
                    <SANS_3_4>Hello</SANS_3_4>
                </InfoCard> 
            ))}
            </>
            }  
        </div>
        </>
)
}

    



        

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