import {  PaddingBottom20, SANS_3, SANS_4_5, SERIF_4_5, SERIF_5_6, colors, toArray } from "oolib"
import { chequeBounceInfo, courtInfoHeadersConfig, courtTypesConfig, courtTypesConfig2 } from "./config"
import { renderCellData } from "./rednerCellData";
import { StyledHeader, StyledInfoBlock, StyledContentWrapper} from "./styled.index"

    export const CourtPage = ({courtType, answers}) => {

        const courtTypes = Object.keys(courtTypesConfig2).map(key => ({
            courtTitle: courtTypesConfig2[key].courtTitle,
            data: courtTypesConfig2[key].data
        }));

        return (
            <>
                <div >
                <SANS_3 bold>
                    You can approach the Mumbai bench of the DRT, the NCLT or the Bombay HC. 
                </SANS_3>
                <PaddingBottom20 />
                <table style={{borderCollapse: 'collapse'}}>
                    <thead >
                        <tr>
                        {courtTypes.map(court => (
                            <th key={court.courtTitle} style={{border: '1px solid grey', position: 'sticky', top: 0, padding: '2rem'}}>
                                <SANS_3>
                                    {court.courtTitle}
                                </SANS_3>
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody style={{height: '80vh'}}>
                        {Object.keys(courtTypes[0].data).map((key, index) => (
                        <tr key={index} >
                            {courtTypes.map(court => (
                                <td key={court.courtTitle} style={{ border: '1px solid grey', padding: '2rem'}}>
                                        <SANS_3>{renderCellData(court.data[key])}</SANS_3>
                                    </td>
                                    )
                                )}
                        </tr>
                        ))}
                    </tbody>
                </table>    
                </div>
                 { answers.bouncedCheque?.value === true && <SANS_3>{chequeBounceInfo}</SANS_3> }
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