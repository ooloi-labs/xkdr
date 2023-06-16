import {SANS_3_4} from 'oolib'
import { StyledBoldSpan } from './styled.index';

export const generateSentences = (heading, info) => {
    const courtNames = {
      DRT: {
        title:'Debts Recovery Tribunal',
        shortTitle: 'DRT'
      },
      NCLT: {
        title: 'National Company Law Tribunal',
        shortTitle: 'NCLT'
      },
      bombayHC: {
        title: 'Bombay High Court',
        shortTitle: 'Bombay HC'
      }
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
              <StyledBoldSpan>{courtNames[quickestCourt].title}</StyledBoldSpan> is the quickest to dispose of cases, averaging at{' '}
              <StyledBoldSpan>{quickestYears} year{quickestYears > 1 ? 's' : ''} {quickestMonths}{' '}
              month{quickestMonths > 1 ? 's' : ''}. {courtNames[longestCourt].shortTitle}</StyledBoldSpan> takes the longest.
          </SANS_3_4>
        );
      } else if (disposalTimeSortedInfo.length === 1) {
        const court = disposalTimeSortedInfo[0].courtName;
        const time = disposalTimeSortedInfo[0].value;

        const years = Math.floor(time / 12);
        const months = time % 12;
        summaryJSXSentence = (
          <SANS_3_4>
            <StyledBoldSpan>{courtNames[court].title}{" "}</StyledBoldSpan>takes an average of 
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
        // The median time for disposal of cases at the DRT is the lowest, that is, 50% of the cases in DRT get disposed of within 1 year 3 months. The median time for disposal of cases at the BHC is the longest.
        summaryJSXSentence = (
          <SANS_3_4>
            The median time for disposal of cases at the <StyledBoldSpan>{courtNames[quickestCourt].title}{' '}</StyledBoldSpan> is the lowest, that is, 50% of the cases in <StyledBoldSpan>{courtNames[quickestCourt].shortTitle}{' '}</StyledBoldSpan> get disposed of within <StyledBoldSpan>{quickestYears} year{quickestYears > 1 ? 's' : ''} {quickestMonths} month{quickestMonths > 1 ? 's' : ''}. </StyledBoldSpan>The median time for disposal of cases at the <StyledBoldSpan>{courtNames[longestCourt].shortTitle}</StyledBoldSpan> is the longest.
          </SANS_3_4>
        )
    } else if (timeTakenSortedInfo.length === 1) {
        const court = timeTakenSortedInfo[0].courtName;
        const time = timeTakenSortedInfo[0].value;

        const years = Math.floor(time / 12);
        const months = time % 12;
        summaryJSXSentence = (
          <SANS_3_4>
            <StyledBoldSpan>{courtNames[court].title}{' '}</StyledBoldSpan> takes an average of <StyledBoldSpan>{years} year{years > 1 ? 's' : ''} {months} month{months > 1 ? 's' : ''} </StyledBoldSpan>for 50% of cases filed.
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
              <StyledBoldSpan>{courtNames[highestHearingsCourt].title}{' '}</StyledBoldSpan> has the lowest average of hearings with <StyledBoldSpan>{highestHearings} hearings.</StyledBoldSpan> 
            </SANS_3_4>
          )
        } else if (numOfHearingsSortedInfo.length === 1) {
          const court = numOfHearingsSortedInfo[0].courtName;
          const hearings = numOfHearingsSortedInfo[0].value;
          summaryJSXSentence = (
            <SANS_3_4>
              On average, the <StyledBoldSpan>{courtNames[court].title}{' '}</StyledBoldSpan> requires <StyledBoldSpan>{hearings} hearings</StyledBoldSpan> to resolve a case.
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
              <StyledBoldSpan>{courtNames[highestFreqCourt].title}{' '}</StyledBoldSpan> takes the highest average with <StyledBoldSpan>1 hearing every {highestFreq} months.</StyledBoldSpan> 
            </SANS_3_4>
          )
        } else if (freqOfHearingsSortedInfo.length === 1) {
          const court = freqOfHearingsSortedInfo[0].courtName;
          const freq = freqOfHearingsSortedInfo[0].value.inMonths;
          summaryJSXSentence = (
            <SANS_3_4>
              <StyledBoldSpan>{courtNames[court].title}{' '}</StyledBoldSpan> takes an average of  <StyledBoldSpan>1 hearing every {freq} months</StyledBoldSpan> for a case to be disposed.
            </SANS_3_4>
          )
        }
        break;
  
      case 'avgFirstHearing':
        // eslint-disable-next-line
        const avgFirstHearingSortedInfo = info.sort((a, b) => {
          if (a.value.year !== b.value.year) {
            return a.value.year - b.value.year;
          } else if (a.value.months !== b.value.months) {
            return a.value.months - b.value.months;
          } else {
            return a.value.days - b.value.days;
          }
        });
        if (avgFirstHearingSortedInfo.length > 1) {
          const fastestFirstHearingCourt = avgFirstHearingSortedInfo[0].courtName;
          const slowesHearingCourtName = avgFirstHearingSortedInfo[avgFirstHearingSortedInfo.length - 1].courtName
          const fastestFirstHearingYear = avgFirstHearingSortedInfo[0].value.year
          // const fastestFirstHearingDays = avgFirstHearingSortedInfo[0].value.days
          const fastestFirstHearingMonths = avgFirstHearingSortedInfo[0].value.months
          
          const slowestFirstHearingYear = avgFirstHearingSortedInfo[avgFirstHearingSortedInfo.length -1].value.year
          // const slowestFirstHearingDays = avgFirstHearingSortedInfo[avgFirstHearingSortedInfo.length -1].value.days
          const slowestFirstHearingMonths = avgFirstHearingSortedInfo[avgFirstHearingSortedInfo.length -1].value.months

          summaryJSXSentence = (
            <SANS_3_4>
              <StyledBoldSpan>{courtNames[fastestFirstHearingCourt].title}</StyledBoldSpan> is the quickest to hold a first hearing. An average case at the{' '} <StyledBoldSpan>{courtNames[fastestFirstHearingCourt].shortTitle}</StyledBoldSpan> 
               {' '}is heard for the first time within 
               {' '}<StyledBoldSpan>{fastestFirstHearingYear ? fastestFirstHearingYear : ''} {fastestFirstHearingYear ? 'year' : ''}{fastestFirstHearingYear > 1 ? 's' : ''} {fastestFirstHearingMonths} month{fastestFirstHearingMonths ? 's' : ''}</StyledBoldSpan> from the date of its filing.
               {' '}<StyledBoldSpan>{courtNames[slowesHearingCourtName].shortTitle}</StyledBoldSpan> takes the longest.
               An average case at the {courtNames[slowesHearingCourtName].shortTitle} is heard for the first time within <StyledBoldSpan>{slowestFirstHearingYear ? slowestFirstHearingYear : ''} {slowestFirstHearingYear ? 'year' : ''}{slowestFirstHearingYear > 1 ? 's' : ''} {slowestFirstHearingMonths ? slowestFirstHearingMonths : ''} month{slowestFirstHearingMonths ? 's' : ''} </StyledBoldSpan> from the date of its filing. 
            </SANS_3_4>
          )
        } else if (avgFirstHearingSortedInfo.length === 1) {
          const court = avgFirstHearingSortedInfo[0].courtName;
          const firstHearingYear = avgFirstHearingSortedInfo[0].value.year;
          const firstHearingMonths = avgFirstHearingSortedInfo[0].value.months;
          
          summaryJSXSentence = (
            <SANS_3_4>
              On average, the <StyledBoldSpan>{courtNames[court].title}{' '}</StyledBoldSpan> takes <StyledBoldSpan>{firstHearingYear ? firstHearingYear : ''} {firstHearingYear ? `year` : ''} {firstHearingMonths ? firstHearingMonths : ''} {firstHearingMonths ? 'months' : ''}</StyledBoldSpan> until the first hearing from the date of filing.
            </SANS_3_4>
          )
        }
        break;
  
      default:
        break;
      }
      return summaryJSXSentence;
  
  };
