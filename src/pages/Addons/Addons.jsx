import Back from "../../Components/Back/Back";
import Container from "../../Components/Container/Container";
import NavigationHOC from "../../Components/Navigation/NavigationHOC";
import SubTitle from "../../Components/SubTitle/SubTitle";
import Submit from "../../Components/Submit/Submit";
import Title from "../../Components/Title/Title";
import AddonsForm from "./AddonsForm/AddonsForm";

const Addons = () => {
  return (
    <>
      <Container>
        <Title>Pick add-ons</Title>
        <SubTitle>Add-ons help enhance your gaming experince.</SubTitle>
        <AddonsForm />
        <NavigationHOC>
          <Back path={"/select-plan"} value={"Go Back"} />
          <Submit value={"Next Step"} form={"add-ons"} />
        </NavigationHOC>
      </Container>
    </>
  );
};

export default Addons;
