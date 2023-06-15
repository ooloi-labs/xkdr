import { toArray } from "oolib";
import { courtTypesConfig2 } from "./config";

export const getCourtSentence = (courtType) => {
    const courtTitles = toArray(courtType).map((court) => courtTypesConfig2[court].courtTitle);
    const shortTitles = toArray(courtType).map((court) => courtTypesConfig2[court].shortTitle);

    const courtCount = toArray(courtType).length;
    
    if (courtCount === 1) {
      return `${courtTypesConfig2[courtType[0]].courtTitle}`;
    } else if (courtCount === 2) {
      return `the ${courtTitles[0]}, the ${courtTitles[1]} (${shortTitles[1]})`;
    } else if (courtCount === 3) {
      return `  the ${courtTitles[0]}, the ${courtTitles[1]} (${shortTitles[1]}) or the ${courtTitles[2]} (${shortTitles[2]})`;
    }
    return '';
};