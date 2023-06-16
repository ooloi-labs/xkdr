import { toArray, SANS_5_6} from "oolib";
import { courtsData } from "../../../Form/config";
import { StyledBoldSpan } from './styled.index'

export const getCourtSentence = ({courtType, smallCase}) => {

    const courtTitles = toArray(courtType).map((court) => courtsData[court].courtTitle);
    const shortTitles = toArray(courtType).map((court) => courtsData[court].shortTitle);

    const courtCount = toArray(courtType).length;
    if (courtCount === 1) {
      return (
        <>
           {smallCase ? 'the' : 'The'} <StyledBoldSpan>{courtsData[courtType[0]].courtTitle}</StyledBoldSpan>
        </>
      )
    } else if (courtCount === 2) {
      return (
        <>
          the <StyledBoldSpan>{courtTitles[0]}</StyledBoldSpan> or the <StyledBoldSpan>{courtTitles[1]}</StyledBoldSpan> (<StyledBoldSpan>{shortTitles[1]}</StyledBoldSpan>)
        </>
      )
    } else if (courtCount === 3) {
      return (
        <>
          the <StyledBoldSpan>{courtTitles[0]}</StyledBoldSpan>, the <StyledBoldSpan>{courtTitles[1]}</StyledBoldSpan> (<StyledBoldSpan>{shortTitles[1]}</StyledBoldSpan>) or the {<StyledBoldSpan>{courtTitles[2]}</StyledBoldSpan>} (<StyledBoldSpan>{shortTitles[2]}</StyledBoldSpan>)
        </>
      ) 
    }
    return '';
};
