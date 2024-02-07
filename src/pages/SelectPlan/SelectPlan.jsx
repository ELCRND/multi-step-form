import Container from "../../Components/Container/Container";
import SubTitle from "../../Components/SubTitle/SubTitle";
import Title from "../../Components/Title/Title";
import Back from "../../Components/Back/Back";
import SelectPlanForm from "./SelectPlanForm/SelectPlanForm";
import Submit from "../../Components/Submit/Submit";
import NavigationHOC from "../../Components/Navigation/NavigationHOC";

const SelectPlan = () => {
  return (
    <>
      <Container>
        <Title>Select your plan</Title>
        <SubTitle>You have the option of monthly or yearly billing.</SubTitle>
        <SelectPlanForm />
        <NavigationHOC>
          <Back value={"Go Back"} path={"/personal-info"} />
          <Submit value={"Next Step"} form={"selectPlan"} />
        </NavigationHOC>
      </Container>
    </>
  );
};

export default SelectPlan;
