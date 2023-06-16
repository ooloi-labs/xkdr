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
    console.log({key})
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

          case 'percent':
              return `${text} %`    
          default:
              return text    
      }
    }
  }  