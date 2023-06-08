import {  SANS_3, SERIF_4_5, SERIF_5_6, colors, toArray } from "oolib"
import { chequeBounceInfo, courtTypesConfig } from "./config"
// import { BlockHeading, StyledHeader, StyledInfoBlock, StyledContentWrapper, StyledInfoTitle} from "./styled.index"

export const CourtPage = ({courtType, answers}) => {

    const courtTypes = Object.keys(courtTypesConfig).map(key => ({
        courtTitle: courtTypesConfig[key].courtTitle,
        data: courtTypesConfig[key].data
    }));

    // const numOfContainers = Math.min(toArray(courtType).length, 3);
    // const TitleComp = numOfContainers > 2 ? SERIF_4_5 : SERIF_5_6
    const renderDataCell = (text) => {
        const quoteRegex = /"(.*?)"/g;
        const colonRegex = /:(.*)/g;
        const result = [];
      
        let lastIndex = 0;
        let match;
        while ((match = quoteRegex.exec(text)) !== null) {
          const startIndex = match.index;
          const endIndex = quoteRegex.lastIndex;
      
          result.push(text.slice(lastIndex, startIndex));
          result.push(<span key={startIndex} style={{ color: 'red', fontWeight: 'bold' }}>{match[1]}</span>);
      
          lastIndex = endIndex;
        }
      
        result.push(text.slice(lastIndex));
      
        let finalResult = [];
        result.forEach((part, index) => {
          const partString = part.toString(); // Convert part to a string
          const colonMatch = partString.match(colonRegex);
          if (colonMatch) {
            const colonIndex = partString.indexOf(':');
            const nonHighlightedText = partString.slice(0, colonIndex);
            const nextLineText = colonMatch[1];
      
            finalResult.push(<span key={index}>{nonHighlightedText} : </span>);
            finalResult.push(<br key={`${index}-br`} />);
            finalResult.push(<span key={`${index}-nextLineText`}>{nextLineText}</span>);
          } else {
            finalResult.push(part);
          }
        });
      
        return finalResult;
      };

    return (
        <>
            <div style={{paddingTop: '2rem'}}>
            <SANS_3 bold>
                You can approach the Mumbai bench of the DRT, the NCLT or the Bombay HC. 
            </SANS_3>
            <table style={{borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                    {courtTypes.map(court => (
                        <th key={court.courtTitle} style={{border: '1px solid grey', position: 'sticky', top: 0, background: 'red'}}>
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
                        {courtTypes.map(court => {
                            // console.log({test: renderDataCell(court.data[key])})
                       return( <td key={court.courtTitle} style={{ border: '1px solid grey'}}>
                                    <SANS_3>{renderDataCell(court.data[key])}</SANS_3>
                                </td>);
                            })}
                    </tr>
                    ))}
                </tbody>
            </table>    
            </div>

        { answers.bouncedCheque?.value === true && <SANS_3>{chequeBounceInfo}</SANS_3> }

        </>
        
    )
}


                // <div style={{display: "grid", gridTemplateColumns: `repeat(${numOfContainers}, 1fr)`, position: 'sticky', top: 0, opacity:1, zIndex: 100}}>
                //     {toArray(courtType).map((ct, i) => (         
                //         <StyledContentWrapper key={i}>
                //             <StyledHeader key={i}>
                //                 <TitleComp semibold>{courtTypesConfig[ct].courtTitle}</TitleComp >
                //             </StyledHeader>
                //         </StyledContentWrapper>
                //     ))}
                // </div>


            // {
            //     Object.entries(courtInfoHeadersConfig).map(([key, value]) => {
            //         let headerKey = key;
            //         return (
            //         <>
            //             {/* <StyledInfoTitle key={key}>  { value } </StyledInfoTitle> */}
            //             <div style={{display: "grid", gridTemplateColumns: `repeat(${numOfContainers}, 1fr)`}}>         
            //                 {toArray(courtType).map((ct, i) => (    
            //                     <StyledContentWrapper key={i}>
            //                         <StyledInfoBlock numOfContainers={numOfContainers} key={i}>
            //                             {/* <BlockHeading uppercase semibold>{courtTypesConfig[ct].shortTitle}</BlockHeading> */}
            //                             <TitleComp semibold>{courtTypesConfig[ct].content[headerKey]?.heading}</TitleComp>
            //                             <SANS_3 color={colors.greyColor70}>{courtTypesConfig[ct].content[headerKey]?.subHeading}</SANS_3>
            //                         </StyledInfoBlock>
            //                     </StyledContentWrapper>
            //                 ))}
            //             </div>
            //         </>
            //         )
            //     })
            // }    