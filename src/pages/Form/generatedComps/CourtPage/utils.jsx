import { toArray, SANS_5_6} from "oolib";
import { courtsData } from "../../../Form/config";
import { StyledBoldSpan } from './styled.index'

export const getCourtSentence = (courtType) => {
    const courtTitles = toArray(courtType).map((court) => courtsData[court].courtTitle);
    const shortTitles = toArray(courtType).map((court) => courtsData[court].shortTitle);

    const courtCount = toArray(courtType).length;
    if (courtCount === 1) {
      return (
        <SANS_5_6>
           the <StyledBoldSpan>{courtsData[courtType[0]].courtTitle}</StyledBoldSpan>
        </SANS_5_6>
      )
    } else if (courtCount === 2) {
      return (
        <SANS_5_6>
          the <StyledBoldSpan>{courtTitles[0]}</StyledBoldSpan> or the <StyledBoldSpan>{courtTitles[1]}</StyledBoldSpan> (<StyledBoldSpan>{shortTitles[1]}</StyledBoldSpan>)
        </SANS_5_6>
      )
    } else if (courtCount === 3) {
      return (
        <SANS_5_6>
          the <StyledBoldSpan>{courtTitles[0]}</StyledBoldSpan> the <StyledBoldSpan>{courtTitles[1]}</StyledBoldSpan> (<StyledBoldSpan>{shortTitles[1]}</StyledBoldSpan>) or the {<StyledBoldSpan>{courtTitles[2]}</StyledBoldSpan>} (<StyledBoldSpan>{shortTitles[2]}</StyledBoldSpan>)
        </SANS_5_6>
      ) 
    }
    return '';
};
