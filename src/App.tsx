import About from "./components/About";
import PortfolioHero from "./components/Hero";
import WorkExperiencePage from "./components/WorkExperiencePage";

const App = () => {
  return (
    <>
      <PortfolioHero />
      <WorkExperiencePage />
      <div className="w-full lg:w-2/3 mx-auto px-10 pt-12 bg-black">
        <img
          src="devices.svg"
          alt="Timeline Decoration"
          className="w-full h-full object-cover"
        />
      </div>
      <About/>
    </>
  );
};

export default App;
