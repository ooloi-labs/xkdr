import { colors, toArray } from "oolib";
import { courtTypesConfig2 } from "./config";

export const renderCellData = (text) => {
    const quoteRegex = /"(.*?)"/g;
    const colonRegex = /:(.*)/g;
    const result = [];
  
    let lastIndex = 0;
    let match;
    while ((match = quoteRegex.exec(text)) !== null) {
      const startIndex = match.index;
      const endIndex = quoteRegex.lastIndex;
  
      result.push(text.slice(lastIndex, startIndex));
      result.push(<span key={startIndex} style={{ fontWeight: 'bold', color: colors.greyColor100 }}>{match[1]}</span>);
  
      lastIndex = endIndex;
    }
  
    result.push(text.slice(lastIndex));
  
    let finalResult = [];
    result.forEach((part, index) => {
      const partString = part.toString(); // Convert part to a string
      const colonMatch = partString.match(colonRegex);
        finalResult.push(part);
    });
  
    return finalResult;
  };

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