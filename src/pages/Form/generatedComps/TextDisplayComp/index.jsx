import { ButtonPrimary, OKELink, PaddingTop20, PhoneInput, SANS_3, SANS_7_8, TextInput } from "oolib"
import { StyledTextWrapper, StyledHeader, StyledInfo, StyledFormBlock } from "./styled.index"
import { formConfig } from "./config"
import { useState } from "react";


export const TextDisplayComp = ({text, header, showContactForm, bottomText, link}) => {

    const [formData, setFormData] = useState({});

    const handleInputChange = (key , value) => {

        setFormData((prevData) => ({
        ...prevData,
        [key]: value
        }));
    };

    const handleSubmit = () => {
        console.log({formData: formData});
    };
    
    return (
        <div>
            <StyledTextWrapper>
                <div>
                <StyledHeader bold>{header}</StyledHeader>
                <StyledInfo>{text}</StyledInfo>
                </div>
                <div>
                <StyledInfo>{bottomText}</StyledInfo>
                <SANS_3 semibold><OKELink invertUnderline to={`${link?.url}`} color={'red'}>
                    {link?.linkText}
                    </OKELink></SANS_3>
                </div>
            </StyledTextWrapper>


        { // Feedback form
            showContactForm && (
                    <StyledFormBlock>
                            <SANS_7_8>Tell us more about yourself and what you’ve got on your mind</SANS_7_8>
                                <PaddingTop20/>
                                    <SANS_3>If you’re interested in learning more please fill out this form</SANS_3>
                                    {
                                    formConfig.map((field) => {
                                    const InputComp = field.name === 'contactNumber' ? PhoneInput : TextInput;
                                    
                                    return(
                                        <>
                                        <InputComp
                                            key={field.name}
                                            name={field.name}
                                            label={field.label}
                                            placeholder={field.placeholder}
                                            value={formData[field.name] || ''}
                                            onChange={(e, v) => handleInputChange(field.name, v)}
                                            />
                                        <PaddingTop20/>
                                        </>
                                    )})

                                    }
                                <PaddingTop20/>    
                            <ButtonPrimary onClick={() => handleSubmit()} >Submit</ButtonPrimary>
                    </StyledFormBlock>
            )
        }
        
        </div>
    )
}