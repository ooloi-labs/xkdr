import { colors, toArray } from "oolib";
import { courtTypesConfig2 } from "./config";

  export const getCourtSentence = (courtType) => {
    const courtCount = toArray(courtType).length;
    if (courtCount === 1) {
      return `${courtTypesConfig2[courtType[0]].courtTitle}`;
    } else if (courtCount === 2) {
      const courtTitles = toArray(courtType).map((court) => courtTypesConfig2[court].courtTitle);
      return `${courtTitles.join(' or ')}`;
    } else if (courtCount === 3) {
      const courtTitles = toArray(courtType).map((court) => courtTypesConfig2[court].shortTitle);
      return `${courtTitles.slice(0, -1).join(', ')} or ${courtTitles.slice(-1)}`;
    }
    return '';
};