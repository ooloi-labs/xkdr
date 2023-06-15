import { Wrapper800, colors, SANS_3_4, SANS_4_5} from "oolib"
import { StyledContainer, StyledPageContentsWrapper } from "./styled.index"

export const About = () => {
    return (
    <StyledContainer>
      <Wrapper800 style={{ backgroundColor: colors.white, height: "100%", display: 'flex', position: 'relative'}}>
        <StyledPageContentsWrapper>
            <SANS_4_5 bold>About XKDR Forum</SANS_4_5>
            <SANS_3_4>
            XKDR Forum is an inter-disciplinary non-profit research organisation. XKDR synthesises knowledge and capabilities from diverse specialised fields such as economics, law, public administration, engineering, statistics and science, in order to diagnose and solve the great problems of the age.
            </SANS_3_4>

        </StyledPageContentsWrapper>
      </Wrapper800>
    </StyledContainer>
    )
}