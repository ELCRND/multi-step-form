import Back from "../../Components/Back/Back";
import Container from "../../Components/Container/Container";
import NavigationHOC from "../../Components/Navigation/NavigationHOC";
import SubTitle from "../../Components/SubTitle/SubTitle";
import Submit from "../../Components/Submit/Submit";
import Title from "../../Components/Title/Title";
import SummaryForm from "./SummaryForm/SummaryForm";

const Summary = () => {
  return (
    <Container>
      <Title>Finishing up</Title>
      <SubTitle>Double-check everything looks OK before comming.</SubTitle>
      <SummaryForm />
      <NavigationHOC>
        <Back path={"/addons"} value={"Go Back"} />
        <Submit value={"Confirm"} form={"finish"} />
      </NavigationHOC>
    </Container>
  );
};

export default Summary;
