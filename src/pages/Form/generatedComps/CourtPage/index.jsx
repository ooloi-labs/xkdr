import { SANS_2, SANS_3, SANS_4_5, toArray } from "oolib"
import { chequeBounceInfo, courtTypesConfig, courtInfoHeadersConfig } from "./config"
import { BlockHeading, StyledHeader, StyledInfoBlock} from "./styled.index"

export const CourtPage = ({courtType, answers}) => {
    console.log({courtType: courtType})
    return (
        <>
            <div style={{paddingTop: '2rem'}}>
            <SANS_3>
                According to your inputs, you can approach these avenues of justice.
            </SANS_3>
                <div style={{display: "grid", gridTemplateColumns: `repeat(${Math.min(toArray(courtType).length, 3)}, 1fr)`}}>
                    {toArray(courtType).map((ct, i) => (         
                        <div key={i} style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                            <StyledHeader key={i}>
                                <SANS_3 bold>{courtTypesConfig[ct].courtTitle}</SANS_3>
                            </StyledHeader>
                        </div>
                    ))}
                </div>
            {
                Object.entries(courtInfoHeadersConfig).map(([key, value]) => {
                    let headerKey = key;
                    return (
                    <>
                        <SANS_3 key={key} bold>{value}</SANS_3>;
                        <div style={{display: "grid", gridTemplateColumns: `repeat(${Math.min(toArray(courtType).length, 3)}, 1fr)`}}>         
                            {toArray(courtType).map((ct, i) => (    
                                <div key={i} style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                                    <StyledInfoBlock>
                                        <BlockHeading uppercase>{courtTypesConfig[ct].shortTitle}</BlockHeading>
                                        <SANS_2>{courtTypesConfig[ct].content[headerKey]?.subHeading}</SANS_2>
                                        <SANS_4_5>{courtTypesConfig[ct].content[headerKey]?.heading}</SANS_4_5>
                                    </StyledInfoBlock>
                                </div>
                            ))}
                        </div>
                    </>
                    )
                })
            }    
            </div>

        { answers.bouncedCheque?.value === true && <SANS_3>{chequeBounceInfo}</SANS_3> }

        </>
        
    )
}