export const generateSentences = (heading, info) => {
    const courtNames = {
      DRT: 'Debts Recovery Tribunal',
      NCLT: 'National Company Law Tribunal',
      bombayHC: 'Bombay High Court',
    };
    console.log({heading: info})
    let summarySentence = '';
  
    switch (heading.key) {  
    case 'averageDisposalTime':
      // eslint-disable-next-line
      const disposalTimeSortedInfo = info.sort((a, b) => a.value - b.value);

      if (disposalTimeSortedInfo.length > 1) {
        const quickestCourt = disposalTimeSortedInfo[0].courtName;
        const longestCourt = disposalTimeSortedInfo[disposalTimeSortedInfo.length - 1].courtName;

        const quickestTime = disposalTimeSortedInfo[0].value;
        const longestTime = disposalTimeSortedInfo[disposalTimeSortedInfo.length - 1].value;

        const quickestYears = Math.floor(quickestTime / 12);
        const quickestMonths = quickestTime % 12;

        const longestYears = Math.floor(longestTime / 12);
        const longestMonths = longestTime % 12;

        summarySentence = `${courtNames[quickestCourt]} is the quickest to dispose cases, averaging at ${quickestYears} year${quickestYears > 1 ? 's' : ''} ${quickestMonths} month${quickestMonths > 1 ? 's' : ''}. ${courtNames[longestCourt]} takes the longest.`;
        // averaging at ${longestYears} year${longestYears > 1 ? 's' : ''} ${longestMonths} month${longestMonths > 1 ? 's' : ''}.
      } else if (disposalTimeSortedInfo.length === 1) {
        const court = disposalTimeSortedInfo[0].courtName;
        const time = disposalTimeSortedInfo[0].value;

        const years = Math.floor(time / 12);
        const months = time % 12;

        summarySentence = `${courtNames[court]} takes an average of ${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''} for disposal from the date of filing.`;
      }
      break;

    case 'timeTaken':
      // eslint-disable-next-line
      const timeTakenSortedInfo = info.sort((a, b) => a.value - b.value);

      if (timeTakenSortedInfo.length > 1) {
        const quickestCourt = timeTakenSortedInfo[0].courtName;
        const longestCourt = timeTakenSortedInfo[timeTakenSortedInfo.length - 1].courtName;

        const quickestTime = timeTakenSortedInfo[0].value;
        const longestTime = timeTakenSortedInfo[timeTakenSortedInfo.length - 1].value;

        const quickestYears = Math.floor(quickestTime / 12);
        const quickestMonths = quickestTime % 12;

        const longestYears = Math.floor(longestTime / 12);
        const longestMonths = longestTime % 12;

        summarySentence = `${courtNames[quickestCourt]} takes the least amount of time for 50% of cases, averaging at ${quickestYears} year${quickestYears > 1 ? 's' : ''} ${quickestMonths} month${quickestMonths > 1 ? 's' : ''}. ${courtNames[longestCourt]} takes the longest.`;
        // averaging at ${longestYears} year${longestYears > 1 ? 's' : ''} ${longestMonths} month${longestMonths > 1 ? 's' : ''}.
    } else if (timeTakenSortedInfo.length === 1) {
        const court = timeTakenSortedInfo[0].courtName;
        const time = timeTakenSortedInfo[0].value;

        const years = Math.floor(time / 12);
        const months = time % 12;

        summarySentence = `${courtNames[court]} takes an average of ${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''} for 50% of cases filed.`;
      }
      break;

      case 'numOfHearings':
        // eslint-disable-next-line
        const numOfHearingsSortedInfo = info.sort((a, b) =>  a.value - b.value);
  
        if (numOfHearingsSortedInfo.length > 1) {
          const highestHearingsCourt = numOfHearingsSortedInfo[0].courtName;
          const highestHearings = numOfHearingsSortedInfo[0].value;
  
          summarySentence = `${courtNames[highestHearingsCourt]} has the lowest average of hearings with ${highestHearings} hearings.`;
        } else if (numOfHearingsSortedInfo.length === 1) {
          const court = numOfHearingsSortedInfo[0].courtName;
          const hearings = numOfHearingsSortedInfo[0].value;
  
          summarySentence = `On average, the ${courtNames[court]} requires ${hearings} hearings to resolve a case.`;
        }
        break;
  
      case 'freqOfHearings':
        // eslint-disable-next-line
        const freqOfHearingsSortedInfo = info.sort((a, b) => b.value - a.value);
  
        if (freqOfHearingsSortedInfo.length > 1) {
          const highestFreqCourt = freqOfHearingsSortedInfo[0].courtName;
          const highestFreq = freqOfHearingsSortedInfo[0].value.inMonths;
  
          summarySentence = `${courtNames[highestFreqCourt]} takes the highest average with 1 hearing every ${highestFreq} months.`;
        } else if (freqOfHearingsSortedInfo.length === 1) {
          const court = freqOfHearingsSortedInfo[0].courtName;
          const freq = freqOfHearingsSortedInfo[0].value.inMonths;
  
          summarySentence = `${courtNames[court]} takes an average of 1 hearing every ${freq} months for a case to be disposed.`;
        }
        break;
  
      case 'avgFirstHearing':
        // eslint-disable-next-line
        const avgFirstHearingSortedInfo = info.sort((a, b) => a.value - b.value);
  
        if (avgFirstHearingSortedInfo.length > 1) {
          const fastestFirstHearingCourt = avgFirstHearingSortedInfo[0].courtName;
          const fastestFirstHearingYear = avgFirstHearingSortedInfo[0].value.year
          const fastestFirstHearingDays = avgFirstHearingSortedInfo[0].value.days
          const fastestFirstHearingMonths = avgFirstHearingSortedInfo[0].value.months
  
          summarySentence = `${courtNames[fastestFirstHearingCourt]} has the fastest average of ${fastestFirstHearingYear ? fastestFirstHearingYear : ''} ${fastestFirstHearingYear ? `year` : ''} ${fastestFirstHearingMonths} ${fastestFirstHearingMonths ? 'months' : ''} ${ (fastestFirstHearingMonths && fastestFirstHearingDays || fastestFirstHearingYear && fastestFirstHearingDays) ? 'and' : ''} ${fastestFirstHearingDays ? fastestFirstHearingDays : ''} ${fastestFirstHearingDays ? 'days' : ''} until the first hearing from the date of filing.`;
        } else if (avgFirstHearingSortedInfo.length === 1) {
          const court = avgFirstHearingSortedInfo[0].courtName;
          const firstHearingYear = avgFirstHearingSortedInfo[0].value.year;
          const firstHearingMonths = avgFirstHearingSortedInfo[0].value.months;
          
          summarySentence = `On average, the ${courtNames[court]} takes ${firstHearingYear ? firstHearingYear : ''} ${firstHearingYear ? `year` : ''} ${firstHearingMonths ? firstHearingMonths : ''} ${firstHearingMonths ? 'months' : ''} until the first hearing from the date of filing.`;
        }
        break;
  
      default:
        break;
    }
  
    return summarySentence;
  };
