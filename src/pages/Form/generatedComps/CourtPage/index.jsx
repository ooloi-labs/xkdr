import { SANS_3, toArray } from "oolib"
import { chequeBounceInfo, courtTypesConfig } from "./config"


export const CourtPage = ({courtType, answers}) => {
    return (
        <>
        {toArray(courtType).map(ct => (
            <SANS_3>{courtTypesConfig[ct].text}</SANS_3>
        ))}
        { answers.bouncedCheque?.value === true && <SANS_3>{chequeBounceInfo}</SANS_3>}
        </>
        
    )
}