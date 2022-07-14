
import Align from './ProtfolioComponent/Home/Align';
import Features from './ProtfolioComponent/Features/Features';
import Resume from './ProtfolioComponent/Resume/Resume.js';
import Project from './ProtfolioComponent/Project/Project';
import Contact from './ProtfolioComponent/ContactMe/Contact';
function portfolio(props) {
  return (
    <>
      <Align data={props.data}  />
      <Resume data={props.data}/>
      <Features data={props.data}/>
      <Project />
      <Contact/>
    </>
  );
}

export default portfolio;
