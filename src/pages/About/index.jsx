import { Wrapper800, colors, SANS_3_4, SANS_4_5, PaddingBottom10, PaddingBottom20} from "oolib"
import { StyledContainer, StyledPageContentsWrapper } from "./styled.index"

export const About = () => {
    return (
    <StyledContainer>
      <Wrapper800 style={{ backgroundColor: colors.white, height: "100%", display: 'flex', position: 'relative'}}>
        <StyledPageContentsWrapper>
            {/* <SANS_4_5 bold>About XKDR Forum</SANS_4_5> */}
          <PaddingBottom10 />
            <SANS_3_4>
            <spac style={{fontWeight: 'bold'}}>XKDR Forum</spac>  is an inter-disciplinary non-profit research organisation. XKDR synthesises knowledge and capabilities from diverse specialised fields such as economics, law, public administration, engineering, statistics and science, in order to diagnose and solve the great problems of the age.
            </SANS_3_4>
          <PaddingBottom20 />
            <SANS_3_4>
            <spac style={{fontWeight: 'bold'}}>PUCAR</spac> (Public Initiative for Containment, Avoidance and Resolution of Disputes) is a mission to transform the dispute resolution experience of citizens. PUCAR collaboratively creates public goods including blueprints of process re-engineering & technology modules, prototypes & reference solutions as well as open data sets and knowledge. They also work towards their adoption within formal as well as informal dispute resolution institutions.
            </SANS_3_4>

            <PaddingBottom20 />
            <SANS_3_4>
            <spac style={{fontWeight: 'bold'}}>Ooloi Labs</spac> creates solutions for social organisations to help them scale their impact through knowledge sharing
and data accessibility. They work closely with partner organisations to craft touchpoints, learning content, and systems to help meet learning and training needs and support in the design, implementation and scale up of social impact initiatives and programs.
            </SANS_3_4>
        </StyledPageContentsWrapper>
      </Wrapper800>
    </StyledContainer>
    )
}