import {SANS_3_4} from 'oolib'
import { StyledBoldSpan } from './styled.index';

export const generateSentences = (heading, info) => {
    const courtNames = {
      DRT: 'Debts Recovery Tribunal',
      NCLT: 'National Company Law Tribunal',
      bombayHC: 'Bombay High Court',
    };

    let summaryJSXSentence = null;

    switch (heading.key) {  
    case 'averageDisposalTime':
      // eslint-disable-next-line
      const disposalTimeSortedInfo = info.sort((a, b) => a.value - b.value);

      if (disposalTimeSortedInfo.length > 1) {
        const quickestCourt = disposalTimeSortedInfo[0].courtName;
        const longestCourt = disposalTimeSortedInfo[disposalTimeSortedInfo.length - 1].courtName;

        const quickestTime = disposalTimeSortedInfo[0].value;
        const quickestYears = Math.floor(quickestTime / 12);
        const quickestMonths = quickestTime % 12;

        summaryJSXSentence = (
          <SANS_3_4>
              <StyledBoldSpan>{courtNames[quickestCourt]}</StyledBoldSpan> is the quickest to dispose of cases, averaging at{' '}
              <StyledBoldSpan>{quickestYears} year{quickestYears > 1 ? 's' : ''} {quickestMonths}{' '}
              month{quickestMonths > 1 ? 's' : ''}. {courtNames[longestCourt]}</StyledBoldSpan> takes the longest.
          </SANS_3_4>
        );
      } else if (disposalTimeSortedInfo.length === 1) {
        const court = disposalTimeSortedInfo[0].courtName;
        const time = disposalTimeSortedInfo[0].value;

        const years = Math.floor(time / 12);
        const months = time % 12;
        summaryJSXSentence = (
          <SANS_3_4>
            <StyledBoldSpan>{courtNames[court]}{" "}</StyledBoldSpan>takes an average of 
              <StyledBoldSpan> {years} year{years > 1 ? 's' : ''} {months}{' '} month{months > 1 ? 's' : ''}{" "} </StyledBoldSpan> for disposal from the date of filing.
          </SANS_3_4>
        );  
      }
      break;

    case 'timeTaken':
      // eslint-disable-next-line
      const timeTakenSortedInfo = info.sort((a, b) => a.value - b.value);

      if (timeTakenSortedInfo.length > 1) {
        const quickestCourt = timeTakenSortedInfo[0].courtName;
        const longestCourt = timeTakenSortedInfo[timeTakenSortedInfo.length - 1].courtName;

        const quickestTime = timeTakenSortedInfo[0].value;

        const quickestYears = Math.floor(quickestTime / 12);
        const quickestMonths = quickestTime % 12;

        summaryJSXSentence = (
          <SANS_3_4>
            <StyledBoldSpan>{courtNames[quickestCourt]}{' '}</StyledBoldSpan> takes the least amount of time for 50% of cases, averaging at <StyledBoldSpan>{quickestYears} year{quickestYears > 1 ? 's' : ''} {quickestMonths} month{quickestMonths > 1 ? 's' : ''}. {courtNames[longestCourt]}</StyledBoldSpan> takes the longest.
          </SANS_3_4>
        )
    } else if (timeTakenSortedInfo.length === 1) {
        const court = timeTakenSortedInfo[0].courtName;
        const time = timeTakenSortedInfo[0].value;

        const years = Math.floor(time / 12);
        const months = time % 12;
        summaryJSXSentence = (
          <SANS_3_4>
            <StyledBoldSpan>{courtNames[court]}{' '}</StyledBoldSpan> takes an average of <StyledBoldSpan>{years} year{years > 1 ? 's' : ''} {months} month{months > 1 ? 's' : ''} </StyledBoldSpan>for 50% of cases filed.
          </SANS_3_4>
        )
      }
      break;

      case 'numOfHearings':
        // eslint-disable-next-line
        const numOfHearingsSortedInfo = info.sort((a, b) =>  a.value - b.value);
        if (numOfHearingsSortedInfo.length > 1) {
          const highestHearingsCourt = numOfHearingsSortedInfo[0].courtName;
          const highestHearings = numOfHearingsSortedInfo[0].value;
  
          summaryJSXSentence = (
            <SANS_3_4>
              <StyledBoldSpan>{courtNames[highestHearingsCourt]}{' '}</StyledBoldSpan> has the lowest average of hearings with <StyledBoldSpan>{highestHearings} hearings.</StyledBoldSpan> 
            </SANS_3_4>
          )
        } else if (numOfHearingsSortedInfo.length === 1) {
          const court = numOfHearingsSortedInfo[0].courtName;
          const hearings = numOfHearingsSortedInfo[0].value;
          summaryJSXSentence = (
            <SANS_3_4>
              On average, the <StyledBoldSpan>{courtNames[court]}{' '}</StyledBoldSpan> requires <StyledBoldSpan>{hearings} hearings</StyledBoldSpan> to resolve a case.
            </SANS_3_4>
          )
        }
        break;
  
        case 'freqOfHearings':
        // eslint-disable-next-line
        const freqOfHearingsSortedInfo = info.sort((a, b) => a.value.inMonths - b.value.inMonths);
        if (freqOfHearingsSortedInfo.length > 1) {
          const highestFreqCourt = freqOfHearingsSortedInfo[0].courtName;
          const highestFreq = freqOfHearingsSortedInfo[0].value.inMonths;
          summaryJSXSentence = (
            <SANS_3_4>
              <StyledBoldSpan>{courtNames[highestFreqCourt]}{' '}</StyledBoldSpan> takes the highest average with <StyledBoldSpan>1 hearing every {highestFreq} months.</StyledBoldSpan> 
            </SANS_3_4>
          )
        } else if (freqOfHearingsSortedInfo.length === 1) {
          const court = freqOfHearingsSortedInfo[0].courtName;
          const freq = freqOfHearingsSortedInfo[0].value.inMonths;
          summaryJSXSentence = (
            <SANS_3_4>
              <StyledBoldSpan>{courtNames[court]}{' '}</StyledBoldSpan> takes an average of  <StyledBoldSpan>1 hearing every {freq} months</StyledBoldSpan> for a case to be disposed.
            </SANS_3_4>
          )
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
          summaryJSXSentence = (
            <SANS_3_4>
              <StyledBoldSpan>{courtNames[fastestFirstHearingCourt]}{' '}</StyledBoldSpan> has the fastest average of <StyledBoldSpan>{fastestFirstHearingYear ? fastestFirstHearingYear : ''} {fastestFirstHearingYear ? `year` : ''} {fastestFirstHearingMonths} {fastestFirstHearingMonths ? 'months' : ''} { (fastestFirstHearingMonths && fastestFirstHearingDays || fastestFirstHearingYear && fastestFirstHearingDays) ? 'and' : ''} {fastestFirstHearingDays ? fastestFirstHearingDays : ''} {fastestFirstHearingDays ? 'days' : ''}</StyledBoldSpan> until the first hearing from the date of filing.
            </SANS_3_4>
          )
        } else if (avgFirstHearingSortedInfo.length === 1) {
          const court = avgFirstHearingSortedInfo[0].courtName;
          const firstHearingYear = avgFirstHearingSortedInfo[0].value.year;
          const firstHearingMonths = avgFirstHearingSortedInfo[0].value.months;
          
          summaryJSXSentence = (
            <SANS_3_4>
              On average, the <StyledBoldSpan>{courtNames[court]}{' '}</StyledBoldSpan> takes <StyledBoldSpan>{firstHearingYear ? firstHearingYear : ''} {firstHearingYear ? `year` : ''} {firstHearingMonths ? firstHearingMonths : ''} {firstHearingMonths ? 'months' : ''}</StyledBoldSpan> until the first hearing from the date of filing.
            </SANS_3_4>
          )
        }
        break;
  
      default:
        break;
    }
  
    return summaryJSXSentence;
  };
