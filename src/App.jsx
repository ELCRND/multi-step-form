import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import SelectPlan from "./pages/SelectPlan/SelectPlan";
import Addons from "./pages/Addons/Addons";
import Summary from "./pages/Summary/Summary";
import ThankYou from "./pages/ThankYou/ThankYou";
const N = () => {
  return (
    <div>
      {" "}
      <Link to={"personal-info"}>start</Link>
    </div>
  );
};
function App() {
  return (
    <>
      <div className="multStepForm">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<N />}></Route>
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="select-plan" element={<SelectPlan />} />
            <Route path="addons" element={<Addons />} />
            <Route path="summary" element={<Summary />} />
            <Route path="finish" element={<ThankYou />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
