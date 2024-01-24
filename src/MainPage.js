import SkillsPanel from "./components/SkillsPanel";
import Projects from "./components/Projects";
import PersonalDetails from "./components/PersonalDetails";



function MainPage() {
  const transformStyle = {
    position: "absolute",
    width: '80%',
    left: '50%',
    transform: 'translate(-50%,0%)'
  };

  return (
    <>
    <div className="grid-container overflow-auto overflow-hidden" style={transformStyle}>
      <div className="">
        <SkillsPanel/>
        <Projects/>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center text-white">
        <PersonalDetails/>
      </div>
    </div>
    </>
  );
}

export default MainPage;
