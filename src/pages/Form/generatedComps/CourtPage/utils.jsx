import { toArray } from "oolib";
import { courtsData } from "./config";

export const getCourtSentence = (courtType) => {
    const courtTitles = toArray(courtType).map((court) => courtsData[court].courtTitle);
    const shortTitles = toArray(courtType).map((court) => courtsData[court].shortTitle);

    const courtCount = toArray(courtType).length;
    
    if (courtCount === 1) {
      return `${courtsData[courtType[0]].courtTitle}`;
    } else if (courtCount === 2) {
      return `the ${courtTitles[0]}, the ${courtTitles[1]} (${shortTitles[1]})`;
    } else if (courtCount === 3) {
      return `  the ${courtTitles[0]}, the ${courtTitles[1]} (${shortTitles[1]}) or the ${courtTitles[2]} (${shortTitles[2]})`;
    }
    return '';
};

export const convertMonthsToYearString = (months) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let result = '';

  if (years > 0) {
    result += `${years} ${years === 1 ? 'year' : 'years'}`;
  }

  if (remainingMonths > 0) {
    result += ` ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
  }

  return result.trim();
}

export const generateTableCellText = ({text, key}) => {
  if(key){
    switch(key){
        case 'averageDisposalTime':
        case  "timeTaken":
            return convertMonthsToYearString(text);
            
        case 'numOfHearings':
            return `${text} hearing${text > 1 ? 's' :''}`

        case 'freqOfHearings':
            // eslint-disable-next-line
            let {hearing, inMonths} = text;
            return `${hearing} hearing every ${inMonths} month${inMonths > 1 ? 's' : ''}`
            
        case 'avgFirstHearing':
            return text?.stringRep
        default:
            return text    
    }
  }
}  