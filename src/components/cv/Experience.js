import React from 'react';

function Experience(props) {
  let info = props.info;
  return (
    <div>
      <h2>Experience</h2>
      <div className="education-container">
        {info.map((x) => {
          return (
            <div>
              <div className="education" key={x.id}>
                <a className="title">{x.title}</a>
                <div className="placeDate-container">
                  <a className="place">{x.company} | </a>
                  <a className="date">{x.date}</a>
                </div>
              </div>
              <div className="desc">
                <a>{x.description}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// class Experience extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let info = this.props.info;
//     return (
//       <div>
//         <h2>Experience</h2>
//         <div className="education-container">
//           {info.map((x) => {
//             return (
//               <div>
//                 <div className="education" key={x.id}>
//                   <a className="title">{x.title}</a>
//                   <div className="placeDate-container">
//                     <a className="place">{x.company} | </a>
//                     <a className="date">{x.date}</a>
//                   </div>
//                 </div>
//                 <div className="desc">
//                   <a>{x.description}</a>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

export default Experience;
