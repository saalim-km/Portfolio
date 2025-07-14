import { workExperiences } from "../utils/workExperienceData";
import WorkExperienceSection from "./WorkExperience";

function WorkExperiencePage() {
  return <WorkExperienceSection experiences={workExperiences} />;
}

export default WorkExperiencePage;
