import Title from "../../Components/Title/Title";
import SubTitle from "../../Components/SubTitle/SubTitle";
import Container from "../../Components/Container/Container";
import Submit from "../../Components/Submit/Submit";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";
import NavigationHOC from "../../Components/Navigation/NavigationHOC";
const PersonalInfo = () => {
  return (
    <Container>
      <Title>Personal Info</Title>
      <SubTitle>
        Please provide your name, email address, and phone number.
      </SubTitle>
      <PersonalInfoForm />
      <NavigationHOC>
        <Submit value={"Next Step"} form={"personalInfo"} />
      </NavigationHOC>
    </Container>
  );
};

export default PersonalInfo;
