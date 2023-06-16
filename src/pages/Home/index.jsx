
import {
  ButtonPrimary,
  Container,
  PaddingBottom20,
  SERIF_6_7,
  Wrapper650,
} from "oolib";
import { useNavigate } from "react-router-dom";



export const Home = () => {

  const navigate = useNavigate()

  return (
    //   <RadioList
    //   label={"Test Radio Button"}
    //   options={[
    //     { display: "Option 1", value: "option1" },
    //     { display: "Option 2", value: "option2" },
    //   ]}
    // />
    <Container>
      <Wrapper650>
        <div
          style={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SERIF_6_7>
            {/* This website is designed to help you understand court performance as
            it might relate to cases regarding debt recovery. It should help you */}
            If you are involved in a legal dispute regarding debt recovery, this website will help you make choices among the legal remedies that are available.
          </SERIF_6_7>
          <PaddingBottom20 />
          <div>
            <ButtonPrimary
              onClick={() => {
                navigate('/form')
              }}
              children="Click here to get started"
              iconAfter={"CaretRight"}
            />
          </div>
        </div>
      </Wrapper650>
    </Container>
  );
};
