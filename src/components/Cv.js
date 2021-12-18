import React from 'react';
import About from './cv/About';
import Education from './cv/Education';
import Experience from './cv/Experience';

const Cv = React.forwardRef((props, ref) => {
  let info = props.info;
  return (
    <div className="page2" ref={ref}>
      <About info={info.aboutInfo} profileImage={info.image} />
      <Education info={info.educationInfo} />
      <Experience info={info.experienceInfo} />
    </div>
  );
});

// function Cv(props) {
//   let info = props.info;
//   return (
//     <div className="page2">
//       <About info={info.aboutInfo} profileImage={info.image} />
//       <Education info={info.educationInfo} />
//       <Experience info={info.experienceInfo} />
//     </div>
//   );
// }

export default Cv;
