import SkillsPanel from "./components/SkillsPanel";
import Projects from "./components/Projects";
import PersonalDetails from "./components/PersonalDetails";

function MainPage() {

  const numberOfBoxes = 400;

  return (
    <div className="container">
      <div className="bgAnimation">
        {Array.from({ length: numberOfBoxes }, (_, index) => (
          <div key={index} className="colorBox">
          </div>
        ))}
      </div>
        <div className="grid-container">
          <div className="column">
            <div><SkillsPanel /></div>
            <div><Projects /></div>
          </div>
          <div className="column" >
            <div className="pDetails"><PersonalDetails /></div>
          </div>
        </div>
    </div>
  );
}

export default MainPage;
