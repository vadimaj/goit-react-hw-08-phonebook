"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[954],{954:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var a=n(439),c=n(791),r=n(434),o={"contact-form":"ContactForm_contact-form__Rf8VS","contact-form-wrap":"ContactForm_contact-form-wrap__iEjVa","form-input":"ContactForm_form-input__IIwUc","contact-title":"ContactForm_contact-title__ab6lK","contact-btn":"ContactForm_contact-btn__2kRMJ"},s=n(632),i=n(329),l=function(){var t=(0,c.useState)(""),e=(0,a.Z)(t,2),n=e[0],l=e[1],u=(0,c.useState)(""),m=(0,a.Z)(u,2),d=m[0],h=m[1],f=(0,r.v9)(s.el.K),_=(0,r.I0)(),p=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":return l(a);case"number":return h(a);default:return}},b=function(){l(""),h("")};return(0,i.jsx)("div",{className:o["contact-container"],children:(0,i.jsxs)("form",{className:o["contact-form"],onSubmit:function(t){if(t.preventDefault(),f.some((function(t){return n.toLowerCase()===t.name.toLowerCase()})))return alert(n+" is already in contacts");var e={name:n,number:d};_(s.mh.addContact(e)),b()},children:[(0,i.jsx)("h2",{className:o["contact-title"],children:"Add new contact"}),(0,i.jsxs)("div",{className:o["contact-form-wrap"],children:[(0,i.jsx)("input",{type:"text",name:"name",className:o["form-input"],value:n,placeholder:"Enter contact name",onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,i.jsx)("input",{type:"tel",name:"number",className:o["form-input"],value:d,onChange:p,placeholder:"Enter contact phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,i.jsx)("button",{type:"submit",className:o["contact-btn"],children:"Add contact"})]})]})})},u={"contacts-list":"ContactList_contacts-list__GXsMn","contact-list-item":"ContactList_contact-list-item__cTqoJ","contacts-wrapper":"ContactList_contacts-wrapper__jIEf0","btn-delete":"ContactList_btn-delete__rkGcg"};var m=n.p+"static/media/delete-icon.0d717939ff9a77a4c30e539d50309c04.svg",d=function(){var t=(0,r.I0)(),e=(0,r.v9)(s.el.K),n=(0,r.v9)((function(t){return t.filter}));(0,c.useEffect)((function(){t(s.mh.fetchContacts())}),[t]);return(0,i.jsx)("div",{className:u["contacts-list"],children:e.length>0&&(0,i.jsx)("ul",{children:function(){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}().map((function(e){return(0,i.jsxs)("div",{className:u["contacts-wrapper"],children:[(0,i.jsxs)("li",{className:u["contact-list-item"],children:[e.name," : ",e.number]}),(0,i.jsx)("button",{type:"button",className:u["btn-delete"],onClick:function(){return n=e.id,void t(s.mh.removeContact(n));var n},title:"Delete",children:(0,i.jsx)("img",{src:"".concat(m),className:u.icon,alt:"delete button",width:8,height:8})})]},e.id)}))})})},h="Filter_filter__ESc4Y",f="Filter_form-input__qaO6L",_="Filter_label__hOULN",p=n(895),b=function(){var t=(0,r.v9)((function(t){return t.filter})),e=(0,r.I0)();return(0,i.jsxs)("div",{className:h,children:[(0,i.jsx)("label",{className:_,children:"Find contacts by name"}),(0,i.jsx)("input",{type:"text",name:"query",placeholder:"search by name",className:f,value:t,onChange:function(t){e((0,p.M6)(t.currentTarget.value))}})]})},v="Phonebook_phonebook-container__wD-HE",x="Phonebook_contacts-wrap__JFXR7",C=function(){return(0,i.jsxs)("div",{className:v,children:[(0,i.jsx)(l,{}),(0,i.jsxs)("div",{className:x,children:[(0,i.jsx)(b,{}),(0,i.jsx)(d,{})]})]})}}}]);
//# sourceMappingURL=954.3d54933e.chunk.js.map