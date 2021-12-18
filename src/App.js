import React, { useRef, useState } from 'react';
import Cv from './components/Cv';
import Edit from './components/Edit';
import uniqid from 'uniqid';
import './styles.css';
import ReactToPrint from 'react-to-print';

function App() {
  const [image, setImage] = useState(null);
  const [aboutInfo, setAboutInfo] = useState({
    name: 'Mehdi Bsas',
    title: 'Software Engineer',
    contact: {
      phone: '+216 55 555 555',
      email: 'myemail@gmail.com',
      location: 'Tunis, Tunisia',
    },
  });
  const [educationInfo, setEducationInfo] = useState([
    {
      id: uniqid(),
      title: 'Masters in Software Engineering',
      university: 'University Name',
      date: '2020 – Present',
    },
    {
      id: uniqid(),
      title: 'Bachelors in Computer Science',
      university: 'University Name',
      date: '2019 – Present',
    },
  ]);
  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: uniqid(),
      title: 'Software Engineer',
      company: 'Company Name',
      date: '2018 – Present',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci sit amet nunc faucibus lobortis. Maecenas quis ultricies massa, id suscipit urna. Nam maximus risus a eros condimentum, vitae maximus libero eleifend.',
    },
    {
      id: uniqid(),
      title: 'Graduate Engineer',
      company: 'Company Name',
      date: '2017 – 2018',
      description:
        'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.',
    },
    {
      id: uniqid(),
      title: 'Tutor',
      company: 'Company Name',
      date: '2015 – 2017',
      description:
        'Sed fermentum nisi est, in lobortis libero feugiat nec. Duis mattis nunc a mi lacinia malesuada. Nullam ac risus non leo finibus vestibulum eget nec justo. Pellentesque egestas a enim vel lacinia.',
    },
  ]);
  let info = {
    image: image,
    aboutInfo: aboutInfo,
    educationInfo: educationInfo,
    experienceInfo: experienceInfo,
  };

  function handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (aboutInfo.hasOwnProperty(name)) {
      setAboutInfo({
        ...aboutInfo,
        [name]: value,
      });
    } else if (aboutInfo.contact.hasOwnProperty(name)) {
      setAboutInfo({
        ...aboutInfo,
        contact: {
          ...aboutInfo.contact,
          [name]: value,
        },
      });
    }
  }
  function modifyEdu(id, name, value) {
    setEducationInfo((prevArr) => {
      return prevArr.map((elem) =>
        elem.id == id ? { ...elem, [name]: value } : elem
      );
      // let newArr = [...prevArr];
      // let ind = newArr.findIndex((elem) => elem.id == id);
      // newArr[ind] = { ...newArr[ind], [name]: value };
      // return newArr;
    });
  }
  function modifyExp(id, name, value) {
    let ind = experienceInfo.findIndex((elem) => elem.id == id);
    let newArr = [...experienceInfo];
    newArr[ind] = { ...newArr[ind], [name]: value };
    setExperienceInfo(newArr);
  }
  function addEdu() {
    let newEdu = {
      id: uniqid(),
      title: '',
      university: '',
      date: '',
    };
    let newArr = [newEdu].concat(educationInfo);
    setEducationInfo(newArr);
  }
  function addExp() {
    let newExp = {
      id: uniqid(),
      title: '',
      company: '',
      date: '',
      description: '',
    };
    let newArr = [newExp].concat(experienceInfo);
    setExperienceInfo(newArr);
  }
  function removeExp(id) {
    setExperienceInfo(experienceInfo.filter((elem, i) => elem.id != id));
  }
  function removeEdu(id) {
    setEducationInfo(educationInfo.filter((elem, i) => elem.id != id));
  }
  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  }

  return (
    <div className="main-page">
      {/* <div className="header">
        <ReactToPrint
          trigger={() => {
            return (
              <a className="print" href="#">
                Print / Download PDF !
              </a>
            );
          }}
          content={() => componentRef}
        />
      </div> */}
      <div className="main-content">
        <Edit
          info={info}
          handleChange={handleInputChange}
          modifyEdu={modifyEdu}
          modifyExp={modifyExp}
          addEdu={addEdu}
          addExp={addExp}
          removeEdu={removeEdu}
          removeExp={removeExp}
          onImageChange={onImageChange}
        />
        <Cv
          info={info}
          // ref={(el) => (componentRef = el)}
        />
      </div>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       image: null,
//       aboutInfo: {
//         name: 'Mehdi Bsas',
//         title: 'Software Engineer',
//         contact: {
//           phone: '+216 55 555 555',
//           email: 'myemail@gmail.com',
//           location: 'Tunis, Tunisia',
//         },
//       },
//       educationInfo: [
//         {
//           id: uniqid(),
//           title: 'Masters in Software Engineering',
//           university: 'University Name',
//           date: '2020 – Present',
//         },
//         {
//           id: uniqid(),
//           title: 'Bachelors in Computer Science',
//           university: 'University Name',
//           date: '2019 – Present',
//         },
//       ],
//       experienceInfo: [
//         {
//           id: uniqid(),
//           title: 'Software Engineer',
//           company: 'Company Name',
//           date: '2018 – Present',
//           description:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci sit amet nunc faucibus lobortis. Maecenas quis ultricies massa, id suscipit urna. Nam maximus risus a eros condimentum, vitae maximus libero eleifend.',
//         },
//         {
//           id: uniqid(),
//           title: 'Graduate Engineer',
//           company: 'Company Name',
//           date: '2017 – 2018',
//           description:
//             'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.',
//         },
//         {
//           id: uniqid(),
//           title: 'Tutor',
//           company: 'Company Name',
//           date: '2015 – 2017',
//           description:
//             'Sed fermentum nisi est, in lobortis libero feugiat nec. Duis mattis nunc a mi lacinia malesuada. Nullam ac risus non leo finibus vestibulum eget nec justo. Pellentesque egestas a enim vel lacinia.',
//         },
//       ],
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.addEdu = this.addEdu.bind(this);
//     this.addExp = this.addExp.bind(this);
//     this.modifyEdu = this.modifyEdu.bind(this);
//     this.modifyExp = this.modifyExp.bind(this);
//     this.removeExp = this.removeExp.bind(this);
//     this.removeEdu = this.removeEdu.bind(this);
//     this.onImageChange = this.onImageChange.bind(this);
//   }
//   //about form
//   handleInputChange(event) {
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;

//     this.setState(
//       (prevState) => {
//         if (prevState.aboutInfo.hasOwnProperty(name)) {
//           return {
//             aboutInfo: {
//               ...prevState.aboutInfo,
//               [name]: value,
//             },
//           };
//         } else if (prevState.aboutInfo.contact.hasOwnProperty(name)) {
//           return {
//             aboutInfo: {
//               ...prevState.aboutInfo,
//               contact: {
//                 ...prevState.aboutInfo.contact,
//                 [name]: value,
//               },
//             },
//           };
//         }
//       },
//       () => {
//         console.log(this.state.aboutInfo);
//       }
//     );
//   }
//   modifyEdu(id, name, value) {
//     this.setState((prevState) => {
//       //get index of element to change
//       let ind = prevState.educationInfo.findIndex((elem) => elem.id == id);
//       //create another array to later insert into state
//       let newArr = prevState.educationInfo;
//       //change the value in the new array
//       newArr[ind] = { ...newArr[ind], [name]: value };
//       return { educationInfo: newArr };
//     });
//   }
//   modifyExp(id, name, value) {
//     this.setState((prevState) => {
//       //get index of element to change
//       let ind = prevState.experienceInfo.findIndex((elem) => elem.id == id);
//       //create another array to later insert into state
//       let newArr = prevState.experienceInfo;
//       //change the value in the new array
//       newArr[ind] = { ...newArr[ind], [name]: value };
//       return { experienceInfo: newArr };
//     });
//   }
//   addEdu() {
//     this.setState((prevState) => {
//       let newEdu = {
//         id: uniqid(),
//         title: '',
//         university: '',
//         date: '',
//       };
//       let newArr = [newEdu].concat(prevState.educationInfo);
//       return {
//         educationInfo: newArr,
//       };
//     });
//   }
//   addExp() {
//     this.setState((prevState) => {
//       let newExp = {
//         id: uniqid(),
//         title: '',
//         company: '',
//         date: '',
//         description: '',
//       };
//       let newArr = [newExp].concat(prevState.experienceInfo);
//       return {
//         experienceInfo: newArr,
//       };
//     });
//   }
//   removeExp(id) {
//     this.setState((prevState) => {
//       return {
//         experienceInfo: prevState.experienceInfo.filter(
//           (elem, i) => elem.id != id
//         ),
//       };
//     });
//   }
//   removeEdu(id) {
//     this.setState((prevState) => {
//       return {
//         educationInfo: prevState.educationInfo.filter(
//           (elem, i) => elem.id != id
//         ),
//       };
//     });
//   }
//   onImageChange(event) {
//     if (event.target.files && event.target.files[0]) {
//       let img = event.target.files[0];
//       this.setState({
//         image: URL.createObjectURL(img),
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="main-page">
//         <div className="header">
//           <ReactToPrint
//             trigger={() => {
//               return (
//                 <a className="print" href="#">
//                   Print / Download PDF !
//                 </a>
//               );
//             }}
//             content={() => this.componentRef}
//           />
//         </div>
//         <div className="main-content">
//           <Edit
//             info={this.state}
//             handleChange={this.handleInputChange}
//             modifyEdu={this.modifyEdu}
//             modifyExp={this.modifyExp}
//             addEdu={this.addEdu}
//             addExp={this.addExp}
//             removeEdu={this.removeEdu}
//             removeExp={this.removeExp}
//             onImageChange={this.onImageChange}
//           />
//           <Cv info={this.state} ref={(el) => (this.componentRef = el)} />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
