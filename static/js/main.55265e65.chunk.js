(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(11),o=n.n(c),s=n(9),r=n(7),l=n(2),d=n(3),u=n(6),h=n(5),j=n(4),p=n(0),b=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.info;return Object(p.jsxs)("div",{className:"about-container",children:[Object(p.jsxs)("div",{className:"name-title-container",children:[Object(p.jsx)("div",{className:"contact-name",children:e.name}),Object(p.jsx)("div",{className:"contact-title",children:e.title})]}),Object(p.jsxs)("div",{className:"contact-container",children:[Object(p.jsx)("div",{className:"contact-info",children:e.contact.phone}),Object(p.jsx)("div",{className:"contact-info",children:e.contact.email}),Object(p.jsx)("div",{className:"contact-info",children:e.contact.location})]})]})}}]),n}(i.a.Component),m=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.info;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Education"}),Object(p.jsx)("div",{className:"education-container",children:e.map((function(e){return Object(p.jsxs)("div",{className:"education",children:[Object(p.jsx)("a",{className:"title",children:e.title}),Object(p.jsxs)("div",{className:"placeDate-container",children:[Object(p.jsxs)("a",{className:"place",children:[e.university," | "]}),Object(p.jsxs)("a",{className:"date",children:[e.date," "]})]}),Object(p.jsx)("br",{})]},e.id)}))})]})}}]),n}(i.a.Component),O=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.info;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Experience"}),Object(p.jsx)("div",{className:"education-container",children:e.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"education",children:[Object(p.jsx)("a",{className:"title",children:e.title}),Object(p.jsxs)("div",{className:"placeDate-container",children:[Object(p.jsxs)("a",{className:"place",children:[e.company," | "]}),Object(p.jsx)("a",{className:"date",children:e.date})]})]},e.id),Object(p.jsx)("div",{className:"desc",children:Object(p.jsx)("a",{children:e.description})})]})}))})]})}}]),n}(i.a.Component),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.info;return Object(p.jsxs)("div",{className:"page2",children:[Object(p.jsx)(b,{info:e.aboutInfo}),Object(p.jsx)(m,{info:e.educationInfo}),Object(p.jsx)(O,{info:e.experienceInfo})]})}}]),n}(i.a.Component),v=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.info,t=this.props.handleChange;return Object(p.jsxs)("div",{className:"form-container",children:[Object(p.jsx)("input",{name:"name",value:e.aboutInfo.name,onChange:t,placeholder:"Name"}),Object(p.jsx)("input",{name:"title",value:e.aboutInfo.title,onChange:t,placeholder:"Title"}),Object(p.jsx)("input",{name:"phone",value:e.aboutInfo.contact.phone,onChange:t,placeholder:"Phone number"}),Object(p.jsx)("input",{name:"email",value:e.aboutInfo.contact.email,onChange:t,placeholder:"Email"}),Object(p.jsx)("input",{name:"location",value:e.aboutInfo.contact.location,onChange:t,placeholder:"Location"})]})}}]),n}(i.a.Component),x=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).callOnChangeWithKey=a.callOnChangeWithKey.bind(Object(u.a)(a)),a.callDeleteWithKey=a.callDeleteWithKey.bind(Object(u.a)(a)),a}return Object(d.a)(n,[{key:"callOnChangeWithKey",value:function(e){this.props.handleChange(this.props.edu.id,e.target.name,e.target.value)}},{key:"callDeleteWithKey",value:function(){this.props.removeEdu(this.props.edu.id)}},{key:"render",value:function(){var e=this.props.edu;this.props.handleChange;return Object(p.jsxs)("div",{className:"form-container",children:[Object(p.jsxs)("div",{className:"remove-container",children:[Object(p.jsx)("input",{name:"title",value:e.title,onChange:this.callOnChangeWithKey,placeholder:"Degree",className:"title-nearRemove"}),Object(p.jsx)("button",{onClick:this.callDeleteWithKey,children:"Remove"})]}),Object(p.jsx)("input",{name:"university",value:e.university,onChange:this.callOnChangeWithKey,placeholder:"University"}),Object(p.jsx)("input",{name:"date",value:e.date,onChange:this.callOnChangeWithKey,placeholder:"Date"})]})}}]),n}(i.a.Component),y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).callOnChangeWithKey=a.callOnChangeWithKey.bind(Object(u.a)(a)),a.callDeleteWithKey=a.callDeleteWithKey.bind(Object(u.a)(a)),a}return Object(d.a)(n,[{key:"callOnChangeWithKey",value:function(e){this.props.handleChange(this.props.exp.id,e.target.name,e.target.value)}},{key:"callDeleteWithKey",value:function(){this.props.removeExp(this.props.exp.id)}},{key:"render",value:function(){var e=this.props.exp;this.props.handleChange;return Object(p.jsxs)("div",{className:"form-container",children:[Object(p.jsxs)("div",{className:"remove-container",children:[Object(p.jsx)("input",{name:"title",value:e.title,onChange:this.callOnChangeWithKey,placeholder:"Title",className:"title-nearRemove"}),Object(p.jsx)("button",{onClick:this.callDeleteWithKey,children:"Remove"})]}),Object(p.jsx)("input",{name:"company",value:e.company,onChange:this.callOnChangeWithKey,placeholder:"Company"}),Object(p.jsx)("input",{name:"date",value:e.date,onChange:this.callOnChangeWithKey,placeholder:"Date"}),Object(p.jsx)("textarea",{name:"description",value:e.description,onChange:this.callOnChangeWithKey,placeholder:"Description"})]})}}]),n}(i.a.Component),g=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.info,n=this.props.handleChange,a=this.props.modifyEdu,i=this.props.modifyExp,c=this.props.addExp,o=this.props.addEdu;return Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)("h2",{children:"About"}),Object(p.jsx)(v,{info:t,handleChange:n}),Object(p.jsxs)("div",{className:"form-title-container",children:[Object(p.jsx)("h2",{children:"Education"}),Object(p.jsx)("button",{onClick:o,children:"Add"})]}),t.educationInfo.map((function(t){return Object(p.jsx)(x,{edu:t,handleChange:a,removeEdu:e.props.removeEdu},t.id)})),Object(p.jsxs)("div",{className:"form-title-container",children:[Object(p.jsx)("h2",{children:"Experience"}),Object(p.jsx)("button",{onClick:c,children:"Add"})]}),t.experienceInfo.map((function(t){return Object(p.jsx)(y,{exp:t,handleChange:i,removeExp:e.props.removeExp},t.id)}))]})}}]),n}(i.a.Component),C=n(8),E=n.n(C),N=(n(19),n(12)),I=n.n(N),k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={aboutInfo:{name:"Mehdi Bsas",title:"Software Engineer",contact:{phone:"+216 55 555 555",email:"myemail@gmail.com",location:"Tunis, Tunisia"}},educationInfo:[{id:E()(),title:"Masters in Software Engineering",university:"University Name",date:"2020 \u2013 Present"},{id:E()(),title:"Bachelors in Computer Science",university:"University Name",date:"2019 \u2013 Present"}],experienceInfo:[{id:E()(),title:"Software Engineer",company:"Company Name",date:"2018 \u2013 Present",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci sit amet nunc faucibus lobortis. Maecenas quis ultricies massa, id suscipit urna. Nam maximus risus a eros condimentum, vitae maximus libero eleifend."},{id:E()(),title:"Graduate Engineer",company:"Company Name",date:"2017 \u2013 2018",description:"Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud."},{id:E()(),title:"Tutor",company:"Company Name",date:"2015 \u2013 2017",description:"Sed fermentum nisi est, in lobortis libero feugiat nec. Duis mattis nunc a mi lacinia malesuada. Nullam ac risus non leo finibus vestibulum eget nec justo. Pellentesque egestas a enim vel lacinia."}]},a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.addEdu=a.addEdu.bind(Object(u.a)(a)),a.addExp=a.addExp.bind(Object(u.a)(a)),a.modifyEdu=a.modifyEdu.bind(Object(u.a)(a)),a.modifyExp=a.modifyExp.bind(Object(u.a)(a)),a.removeExp=a.removeExp.bind(Object(u.a)(a)),a.removeEdu=a.removeEdu.bind(Object(u.a)(a)),a}return Object(d.a)(n,[{key:"handleInputChange",value:function(e){var t=this,n=e.target,a=n.name,i=n.value;this.setState((function(e){return e.aboutInfo.hasOwnProperty(a)?{aboutInfo:Object(r.a)(Object(r.a)({},e.aboutInfo),{},Object(s.a)({},a,i))}:e.aboutInfo.contact.hasOwnProperty(a)?{aboutInfo:Object(r.a)(Object(r.a)({},e.aboutInfo),{},{contact:Object(r.a)(Object(r.a)({},e.aboutInfo.contact),{},Object(s.a)({},a,i))})}:void 0}),(function(){console.log(t.state.aboutInfo)}))}},{key:"modifyEdu",value:function(e,t,n){this.setState((function(a){var i=a.educationInfo.findIndex((function(t){return t.id==e})),c=a.educationInfo;return c[i]=Object(r.a)(Object(r.a)({},c[i]),{},Object(s.a)({},t,n)),{educationInfo:c}}))}},{key:"modifyExp",value:function(e,t,n){this.setState((function(a){var i=a.experienceInfo.findIndex((function(t){return t.id==e})),c=a.experienceInfo;return c[i]=Object(r.a)(Object(r.a)({},c[i]),{},Object(s.a)({},t,n)),{experienceInfo:c}}))}},{key:"addEdu",value:function(){this.setState((function(e){return{educationInfo:[{id:E()(),title:"",university:"",date:""}].concat(e.educationInfo)}}))}},{key:"addExp",value:function(){this.setState((function(e){return{experienceInfo:[{id:E()(),title:"",company:"",date:"",description:""}].concat(e.experienceInfo)}}))}},{key:"removeExp",value:function(e){this.setState((function(t){return{experienceInfo:t.experienceInfo.filter((function(t,n){return t.id!=e}))}}))}},{key:"removeEdu",value:function(e){this.setState((function(t){return{educationInfo:t.educationInfo.filter((function(t,n){return t.id!=e}))}}))}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"main-page",children:[Object(p.jsx)("div",{className:"header",children:Object(p.jsx)(I.a,{trigger:function(){return Object(p.jsx)("a",{className:"print",href:"#",children:"Print / Download PDF !"})},content:function(){return e.componentRef}})}),Object(p.jsxs)("div",{className:"main-content",children:[Object(p.jsx)(g,{info:this.state,handleChange:this.handleInputChange,modifyEdu:this.modifyEdu,modifyExp:this.modifyExp,addEdu:this.addEdu,addExp:this.addExp,removeEdu:this.removeEdu,removeExp:this.removeExp}),Object(p.jsx)(f,{info:this.state,ref:function(t){return e.componentRef=t}})]})]})}}]),n}(i.a.Component);o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.55265e65.chunk.js.map