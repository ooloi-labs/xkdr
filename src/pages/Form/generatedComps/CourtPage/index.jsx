import {  PaddingBottom20, SANS_3, SANS_3_4, SANS_4_5, SERIF_4_5, SERIF_5_6, colors, toArray } from "oolib"
import { chequeBounceInfo, courtInfoHeadersConfig, courtTypesConfig, courtTypesConfig2 } from "./config"
import { getCourtSentence, renderCellData } from "./rednerCellData";
import { StyledHeader, StyledInfoBlock, StyledContentWrapper} from "./styled.index"

    export const CourtPage = ({courtType, answers}) => {

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
                <table style={{borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                            {toArray(courtType).map((court) => (
                                <th key={court} style={{border: '1px solid #F54C31', position: 'sticky', top: 0, padding: '2rem', background: '#FEF6F5', height: '10rem'}}>
                                    <TitleComp color={'#F54C31'} bold>
                                        {courtTypesConfig2[court].courtTitle}
                                    </TitleComp>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(Array(Math.max(toArray(...courtType).map((court) => getCourtData(court).length)))).map((_, index) => (
                            <tr key={index}>
                                {toArray(courtType).map((court) => (
                                    <td key={court} style={{ border: '1px solid grey', padding: numOfContainers > 2 ? '2rem' : '3rem', maxWidth: '32rem', height: '15rem'}}>
                                        <TitleComp color={colors.greyColor80}>
                                            {renderCellData(getCourtData(court)[index])}
                                        </TitleComp>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>    
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