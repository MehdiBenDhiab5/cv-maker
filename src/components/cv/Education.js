import React from 'react';

function Education(props) {
  let info = props.info;
  return (
    <div>
      <h2>Education</h2>
      <div className="education-container">
        {info.map((x) => {
          return (
            <div className="education" key={x.id}>
              <a className="title">{x.title}</a>
              <div className="placeDate-container">
                <a className="place">{x.university} | </a>
                <a className="date">{x.date} </a>
              </div>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// class Education extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let info = this.props.info;
//     return (
//       <div>
//         <h2>Education</h2>
//         <div className="education-container">
//           {info.map((x) => {
//             return (
//               <div className="education" key={x.id}>
//                 <a className="title">{x.title}</a>
//                 <div className="placeDate-container">
//                   <a className="place">{x.university} | </a>
//                   <a className="date">{x.date} </a>
//                 </div>
//                 <br></br>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

export default Education;
