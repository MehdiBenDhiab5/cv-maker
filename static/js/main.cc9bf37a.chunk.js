(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(9),o=t.n(i),r=t(11),s=t(4),l=t(2),d=t(6),u=t(0);var j=function(e){var n=e.info;return Object(u.jsxs)("div",{className:"about-container",children:[e.profileImage?Object(u.jsx)("img",{src:e.profileImage,alt:"profile_picture",className:"profile-image"}):null,Object(u.jsxs)("div",{className:"name-title-container",children:[Object(u.jsx)("div",{className:"contact-name",children:n.name}),Object(u.jsx)("div",{className:"contact-title",children:n.title})]}),Object(u.jsxs)("div",{className:"contact-container",children:[Object(u.jsx)("div",{className:"contact-info",children:n.contact.phone}),Object(u.jsx)("div",{className:"contact-info",children:n.contact.email}),Object(u.jsx)("div",{className:"contact-info",children:n.contact.location})]})]})};var m=function(e){var n=e.info;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Education"}),Object(u.jsx)("div",{className:"education-container",children:n.map((function(e){return Object(u.jsxs)("div",{className:"education",children:[Object(u.jsx)("a",{className:"title",children:e.title}),Object(u.jsxs)("div",{className:"placeDate-container",children:[Object(u.jsxs)("a",{className:"place",children:[e.university," | "]}),Object(u.jsxs)("a",{className:"date",children:[e.date," "]})]}),Object(u.jsx)("br",{})]},e.id)}))})]})};var b=function(e){var n=e.info;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Experience"}),Object(u.jsx)("div",{className:"education-container",children:n.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"education",children:[Object(u.jsx)("a",{className:"title",children:e.title}),Object(u.jsxs)("div",{className:"placeDate-container",children:[Object(u.jsxs)("a",{className:"place",children:[e.company," | "]}),Object(u.jsx)("a",{className:"date",children:e.date})]})]},e.id),Object(u.jsx)("div",{className:"desc",children:Object(u.jsx)("a",{children:e.description})})]})}))})]})},h=c.a.forwardRef((function(e,n){var t=e.info;return Object(u.jsxs)("div",{className:"page2",ref:n,children:[Object(u.jsx)(j,{info:t.aboutInfo,profileImage:t.image}),Object(u.jsx)(m,{info:t.educationInfo}),Object(u.jsx)(b,{info:t.experienceInfo})]})}));var p=function(e){var n=e.info,t=e.handleChange;return Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)("h3",{children:"Profile picture"}),Object(u.jsx)("input",{type:"file",name:"myImage",onChange:e.onImageChange}),Object(u.jsx)("input",{name:"name",value:n.aboutInfo.name,onChange:t,placeholder:"Name"}),Object(u.jsx)("input",{name:"title",value:n.aboutInfo.title,onChange:t,placeholder:"Title"}),Object(u.jsx)("input",{name:"phone",value:n.aboutInfo.contact.phone,onChange:t,placeholder:"Phone number"}),Object(u.jsx)("input",{name:"email",value:n.aboutInfo.contact.email,onChange:t,placeholder:"Email"}),Object(u.jsx)("input",{name:"location",value:n.aboutInfo.contact.location,onChange:t,placeholder:"Location"})]})};var f=function(e){function n(n){e.handleChange(e.edu.id,n.target.name,n.target.value)}var t=e.edu;return e.handleChange,Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("div",{className:"remove-container",children:[Object(u.jsx)("input",{name:"title",value:t.title,onChange:n,placeholder:"Degree",className:"title-nearRemove"}),Object(u.jsx)("button",{onClick:function(){e.removeEdu(e.edu.id)},children:"Remove"})]}),Object(u.jsx)("input",{name:"university",value:t.university,onChange:n,placeholder:"University"}),Object(u.jsx)("input",{name:"date",value:t.date,onChange:n,placeholder:"Date"})]})};var O=function(e){function n(n){e.handleChange(e.exp.id,n.target.name,n.target.value)}var t=e.exp;return e.handleChange,Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("div",{className:"remove-container",children:[Object(u.jsx)("input",{name:"title",value:t.title,onChange:n,placeholder:"Title",className:"title-nearRemove"}),Object(u.jsx)("button",{onClick:function(){e.removeExp(e.exp.id)},children:"Remove"})]}),Object(u.jsx)("input",{name:"company",value:t.company,onChange:n,placeholder:"Company"}),Object(u.jsx)("input",{name:"date",value:t.date,onChange:n,placeholder:"Date"}),Object(u.jsx)("textarea",{name:"description",value:t.description,onChange:n,placeholder:"Description"})]})};var v=function(e){var n=e.info,t=e.handleChange,a=e.modifyEdu,c=e.modifyExp,i=e.addExp,o=e.addEdu,r=e.onImageChange;return console.log(n),Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("h2",{children:"About"}),Object(u.jsx)(p,{info:n,handleChange:t,onImageChange:r}),Object(u.jsxs)("div",{className:"form-title-container",children:[Object(u.jsx)("h2",{children:"Education"}),Object(u.jsx)("button",{onClick:o,children:"Add"})]}),n.educationInfo.map((function(n){return Object(u.jsx)(f,{edu:n,handleChange:a,removeEdu:e.removeEdu},n.id)})),Object(u.jsxs)("div",{className:"form-title-container",children:[Object(u.jsx)("h2",{children:"Experience"}),Object(u.jsx)("button",{onClick:i,children:"Add"})]}),n.experienceInfo.map((function(n){return Object(u.jsx)(O,{exp:n,handleChange:c,removeExp:e.removeExp},n.id)}))]})},x=t(3),g=t.n(x),N=(t(18),t(10)),C=t.n(N);var y=function(){var e=Object(a.useState)(null),n=Object(d.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)({name:"Mehdi Bsas",title:"Software Engineer",contact:{phone:"+216 55 555 555",email:"myemail@gmail.com",location:"Tunis, Tunisia"}}),o=Object(d.a)(i,2),j=o[0],m=o[1],b=Object(a.useState)([{id:g()(),title:"Masters in Software Engineering",university:"University Name",date:"2020 \u2013 Present"},{id:g()(),title:"Bachelors in Computer Science",university:"University Name",date:"2019 \u2013 Present"}]),p=Object(d.a)(b,2),f=p[0],O=p[1],x=Object(a.useState)([{id:g()(),title:"Software Engineer",company:"Company Name",date:"2018 \u2013 Present",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci sit amet nunc faucibus lobortis. Maecenas quis ultricies massa, id suscipit urna. Nam maximus risus a eros condimentum, vitae maximus libero eleifend."},{id:g()(),title:"Graduate Engineer",company:"Company Name",date:"2017 \u2013 2018",description:"Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud."},{id:g()(),title:"Tutor",company:"Company Name",date:"2015 \u2013 2017",description:"Sed fermentum nisi est, in lobortis libero feugiat nec. Duis mattis nunc a mi lacinia malesuada. Nullam ac risus non leo finibus vestibulum eget nec justo. Pellentesque egestas a enim vel lacinia."}]),N=Object(d.a)(x,2),y=N[0],E=N[1],I={image:t,aboutInfo:j,educationInfo:f,experienceInfo:y},P=Object(a.useRef)();return Object(u.jsxs)("div",{className:"main-page",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)(C.a,{trigger:function(){return Object(u.jsx)("a",{className:"print",href:"#",children:"Print / Export PDF"})},content:function(){return P.current}})}),Object(u.jsxs)("div",{className:"main-content",children:[Object(u.jsx)(v,{info:I,handleChange:function(e){var n=e.target,t=n.name,a=n.value;j.hasOwnProperty(t)?m(Object(l.a)(Object(l.a)({},j),{},Object(s.a)({},t,a))):j.contact.hasOwnProperty(t)&&m(Object(l.a)(Object(l.a)({},j),{},{contact:Object(l.a)(Object(l.a)({},j.contact),{},Object(s.a)({},t,a))}))},modifyEdu:function(e,n,t){O((function(a){return a.map((function(a){return a.id==e?Object(l.a)(Object(l.a)({},a),{},Object(s.a)({},n,t)):a}))}))},modifyExp:function(e,n,t){var a=y.findIndex((function(n){return n.id==e})),c=Object(r.a)(y);c[a]=Object(l.a)(Object(l.a)({},c[a]),{},Object(s.a)({},n,t)),E(c)},addEdu:function(){var e=[{id:g()(),title:"",university:"",date:""}].concat(f);O(e)},addExp:function(){var e=[{id:g()(),title:"",company:"",date:"",description:""}].concat(y);E(e)},removeEdu:function(e){O(f.filter((function(n,t){return n.id!=e})))},removeExp:function(e){E(y.filter((function(n,t){return n.id!=e})))},onImageChange:function(e){if(e.target.files&&e.target.files[0]){var n=e.target.files[0];c(URL.createObjectURL(n))}}}),Object(u.jsx)(h,{info:I,ref:P})]})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cc9bf37a.chunk.js.map