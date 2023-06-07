import {  SANS_3, SERIF_4_5, SERIF_5_6, colors, toArray } from "oolib"
import { chequeBounceInfo, courtTypesConfig, courtInfoHeadersConfig } from "./config"
import { BlockHeading, StyledHeader, StyledInfoBlock} from "./styled.index"

export const CourtPage = ({courtType, answers}) => {

    const numOfContainers = Math.min(toArray(courtType).length, 3);

    return (
        <>
            <div style={{paddingTop: '2rem'}}>
            <SANS_3>
                According to your inputs, you can approach these avenues of justice.
            </SANS_3>
                <div style={{display: "grid", gridTemplateColumns: `repeat(${numOfContainers}, 1fr)`}}>
                    {toArray(courtType).map((ct, i) => (         
                        <div key={i} style={{display: 'flex', justifyContent: 'flex-start', marginBottom: '1rem'}}>
                            <StyledHeader key={i}>
                                <SERIF_4_5 semibold>{courtTypesConfig[ct].courtTitle}</SERIF_4_5 >
                            </StyledHeader>
                        </div>
                    ))}
                </div>
            {
                Object.entries(courtInfoHeadersConfig).map(([key, value]) => {
                    let headerKey = key;
                    return (
                    <>
                        <SANS_3 key={key} style={{marginTop: '1rem', marginBottom: '.5rem'}}>{value}</SANS_3>
                        <div style={{display: "grid", gridTemplateColumns: `repeat(${numOfContainers}, 1fr)`}}>         
                            {toArray(courtType).map((ct, i) => (    
                                <div key={i} style={{display: 'flex', justifyContent: 'flex-start', marginBottom: '1rem'}}>
                                    <StyledInfoBlock numOfContainers={numOfContainers}>
                                        <BlockHeading uppercase semibold>{courtTypesConfig[ct].shortTitle}</BlockHeading>
                                        <SERIF_5_6 semibold>{courtTypesConfig[ct].content[headerKey]?.heading}</SERIF_5_6>
                                        <SANS_3 color={colors.greyColor70}>{courtTypesConfig[ct].content[headerKey]?.subHeading}</SANS_3>
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