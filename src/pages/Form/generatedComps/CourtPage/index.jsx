import { SANS_2, SANS_3, SANS_4_5, toArray } from "oolib"
import { chequeBounceInfo, courtTypesConfig, headerConfig } from "./config"
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
                        <div key={i} style={{display: 'flex', justifyContent: 'center'}}>
                            <StyledHeader key={i}>
                                <SANS_3 >{courtTypesConfig[ct].courtTitle}</SANS_3>
                            </StyledHeader>
                        </div>
                    ))}
                </div>
            {
                Object.entries(headerConfig).map(([key, value]) => {
                    let objectKey = key;
                    return (
                    <>
                        <SANS_3 key={key} bold>{value}</SANS_3>;
                        <div style={{display: "grid", gridTemplateColumns: `repeat(${Math.min(toArray(courtType).length, 3)}, 1fr)`}}>         
                            {toArray(courtType).map((ct, i) => (    
                                <>
                                <div key={i} style={{display: 'flex', justifyContent: 'center'}}>
                                    <StyledInfoBlock>
                                        <BlockHeading uppercase>{courtTypesConfig[ct].shortTitle}</BlockHeading>
                                        <SANS_2>{courtTypesConfig[ct].content[objectKey]?.subHeading}</SANS_2>
                                        <SANS_4_5 >{courtTypesConfig[ct].content[objectKey].heading}</SANS_4_5>
                                    </StyledInfoBlock>
                                </div>
                                </>
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