(this["webpackJsonpkontak.ku"]=this["webpackJsonpkontak.ku"]||[]).push([[0],{102:function(t,e,a){t.exports={ErrorMessage:"UpdateContactModal_ErrorMessage__1CQbb",CancelButton:"UpdateContactModal_CancelButton__Q1MaX",AddButton:"UpdateContactModal_AddButton__2G1BO"}},144:function(t,e,a){t.exports={ErrorModal:"ErrorModalContainer_ErrorModal__3axTu",Header:"ErrorModalContainer_Header__1ECML"}},205:function(t,e,a){t.exports=a.p+"static/media/kontak-ku-logo.0e00751a.webp"},238:function(t,e,a){t.exports=a(393)},243:function(t,e,a){},244:function(t,e,a){},27:function(t,e,a){t.exports={ContactContainer:"ContactDetailPage_ContactContainer__24Hyf",ContactDetail:"ContactDetailPage_ContactDetail__11e40",Logo:"ContactDetailPage_Logo__3V1S7",Name:"ContactDetailPage_Name__2Zdf5",Age:"ContactDetailPage_Age__2bdQI",Buttons:"ContactDetailPage_Buttons__3I7kN"}},393:function(t,e,a){"use strict";a.r(e);var n,c,o=a(0),r=a.n(o),l=a(30),i=a.n(l),s=(a(243),a(244),a(17)),u=a(8),d=a(204),C=a(406),h=a(228),m=a(408),p=a(61),g=a.n(p),f=a(205),E=a.n(f),T=a(402),b=function(){return r.a.createElement(T.a,{active:!0,inline:"centered"})},O=function(t){return r.a.createElement("div",{className:g.a.ContactContainer},r.a.createElement(h.a,{src:E.a,className:g.a.Logo}),r.a.createElement(C.a,{selection:!0,divided:!0,verticalAlign:"middle",className:g.a.ContactList,size:"big"},t.isFetchingContact?r.a.createElement(b,null):function(){var e,a=[],n=Object(d.a)(t.contacts);try{var c=function(){var n=e.value;a.push(r.a.createElement(C.a.Item,{onClick:function(){return t.handleContactClick(n.id)},key:n.id},r.a.createElement(h.a,{avatar:!0,src:n.photo}),r.a.createElement(C.a.Content,{className:g.a.Name},r.a.createElement(C.a.Header,null,n.firstName," ",n.lastName))))};for(n.s();!(e=n.n()).done;)c()}catch(o){n.e(o)}finally{n.f()}return a}()),r.a.createElement(m.a,{size:"big",circular:!0,color:"violet",icon:"add user",className:g.a.Float,onClick:t.handleAddButtonClick}))},_=a(407);!function(t){t.POST="POST",t.PUT="PUT",t.GET="GET",t.DELETE="DELETE"}(n||(n={})),function(t){t.SENT="SENT",t.SUCCESSFUL="SUCCESSFUL",t.ERROR="ERROR"}(c||(c={}));var N=function(t,e){return{type:"UPDATE_HTTP_CALL_STATUS",payload:{callId:t,status:e}}},U=function(t){return{type:"ADD_NEW_HTTP_CALL",payload:t}},A=function(t,e,a){j(t).then((function(t){if(!t.ok&&a)throw t;return t})).then(y(e)).catch(S(a))},j=function(t){var e={method:t.method,credentials:t.credentials?t.credentials:void 0};return t.headers&&(e=Object.assign({},e,{headers:t.headers})),t.method!==n.POST&&t.method!==n.PUT||!t.requestBody||(e=Object.assign({},e,{body:t.requestBody})),fetch(t.url,e)},y=function(t){return function(e){t(e)}},S=function(t){return function(e){if(!t)throw e;t(e)}},v=function(t){return{type:"UPDATE_ERROR_MODAL",payload:t}},D=function(t){return{type:"UPDATE_FETCHING_CONTACT_STATUS",payload:t}},P=function(t){return{type:"UPDATE_STORING_CONTACT_STATUS",payload:t}},k=function(t){return{type:"UPDATE_FETCHING_CONTACT_DETAIL_STATUS",payload:t}},L=function(t){return{type:"UPDATE_UPDATING_CONTACT_STATUS",payload:t}},F=function(t){return{type:"UPDATE_DELETING_CONTACT_STATUS",payload:t}},R=function(){return function(t){var e=_.a(),a={id:e,method:n.GET,url:"https://simple-contact-crud.herokuapp.com/contact",headers:{"Content-Type":"application/json"}},o={isOpen:!0,title:"Unable to retrieve Contact List."};t(D(!0)),A(a,(function(a){a.body&&a.json().then((function(a){t(N(e,c.SUCCESSFUL)),t({type:"UPDATE_CONTACT_LIST",payload:a.data}),t(D(!1))}))}),(function(a){t(N(e,c.ERROR)),a.body?a.json().then((function(e){o.content=e.message,t(D(!1)),t(v(o))})).catch((function(e){o.content=e.message,t(D(!1)),t(v(o))})):o.content="Unable to retrieve Contact List. Please contact developer.",t(D(!1)),o.content&&t(v(o))}));var r=Object.assign({},a,{status:c.SENT});t(U(r))}},B=function(t){return function(e){var a="https://simple-contact-crud.herokuapp.com/contact/"+t,o=_.a(),r={id:o,method:n.GET,url:a,headers:{"Content-Type":"application/json"}},l={isOpen:!0,title:"Unable to retrieve Contact Detail."};e(k(!0)),A(r,(function(t){t.body&&t.json().then((function(t){e({type:"UPDATE_CURRENT_CONTACT",payload:t.data}),e(N(o,c.SUCCESSFUL)),e(k(!1))}))}),(function(t){e(N(o,c.ERROR)),t.body?t.json().then((function(t){l.content=t.message,e(k(!1)),e(v(l))})).catch((function(t){l.content=t.message,e(k(!1)),e(v(l))})):l.content="Unable to retrieve Contact Detail. Please contact developer.",e(k(!1)),l.content&&e(v(l))}));var i=Object.assign({},r,{status:c.SENT});e(U(i))}},M=a(26),I=a(404),w=a(403),H=a(102),G=a.n(H),z=function(t){return r.a.createElement(I.a,{open:t.updateContactModalOpen,size:"tiny"},r.a.createElement(I.a.Header,null,t.updateActionType," New Contact"),r.a.createElement(I.a.Content,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Input,{fluid:!0,label:"First Name",placeholder:"First Name",value:t.firstName,onChange:t.handleFirstNameChange}),r.a.createElement(w.a.Input,{fluid:!0,label:"Last Name",placeholder:"Last Name",value:t.lastName,onChange:t.handleLastNameChange}),r.a.createElement(w.a.Input,{fluid:!0,label:"Age",placeholder:"Age",type:"number",min:"1",value:t.age,onChange:t.handleAgeChange}),r.a.createElement(w.a.Input,{fluid:!0,label:"Photo (URL)",placeholder:"Last Name",value:t.photoUrl,onChange:t.handlePhotoUrlChange}),r.a.createElement("span",{className:G.a.ErrorMessage},t.errorMessage))),r.a.createElement(I.a.Actions,null,r.a.createElement(m.a,{color:"red",onClick:t.handleCancelButtonClick,className:G.a.CancelButton},"Cancel"),r.a.createElement(m.a,{color:"violet",onClick:t.handleUpdateContactButtonClick,className:G.a.AddButton,loading:t.isUpdatingContact},t.updateActionType)))},x=Object(M.b)((function(t){return{contacts:t.data.contacts,isFetchingContact:t.session.isFetchingContact,isStoringContact:t.session.isStoringContact}}))((function(t){var e=Object(M.c)(),a=t.contacts,l=t.isFetchingContact,i=t.isStoringContact,d=Object(o.useState)(!1),C=Object(s.a)(d,2),h=C[0],m=C[1],p=Object(o.useState)(""),g=Object(s.a)(p,2),f=g[0],E=g[1],T=Object(o.useState)(""),b=Object(s.a)(T,2),j=b[0],y=b[1],S=Object(o.useState)(1),D=Object(s.a)(S,2),k=D[0],L=D[1],F=Object(o.useState)(""),B=Object(s.a)(F,2),I=B[0],w=B[1],H=Object(o.useState)(""),G=Object(s.a)(H,2),x=G[0],W=G[1];Object(o.useEffect)((function(){e(R())}),[e]);var Z=Object(u.f)(),$=Object(o.useCallback)((function(){f.length<3?W("First Name length must be at least 3 characters long."):j.length<3?W("Last Name length must be at least 3 characters long."):/^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(f)?/^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(j)?k<1||k>200?W("Age must be at least 1 and not larger than 200."):0===I.length?W("Photo (URL) is not allowed to be empty."):(e(function(t,e,a,o){return function(r){var l=_.a(),i={id:l,method:n.POST,url:"https://simple-contact-crud.herokuapp.com/contact",headers:{"Content-Type":"application/json"},requestBody:JSON.stringify({firstName:t,lastName:e,age:a,photo:o})},s={isOpen:!0,title:"Unable to store Contact."};r(P(!0)),A(i,(function(t){t.body&&t.json().then((function(){r(R()),r(N(l,c.SUCCESSFUL)),r(P(!1))}))}),(function(t){r(N(l,c.ERROR)),t.body?t.json().then((function(t){s.content=t.message,r(P(!1)),r(v(s))})).catch((function(t){s.content=t.message,r(P(!1)),r(v(s))})):s.content="Unable to add Contact List. Please contact developer.",r(P(!1)),s.content&&r(v(s))}));var u=Object.assign({},i,{status:c.SENT});r(U(u))}}(f,j,k,I)),m(!1)):W("Last Name must only contain alpha-numeric characters."):W("First Name must only contain alpha-numeric characters.")}),[e,f,j,k,I]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{contacts:a,isFetchingContact:l,handleContactClick:function(t){t&&Z.push("/".concat(t))},handleAddButtonClick:function(){m(!0)}}),r.a.createElement(z,{updateContactModalOpen:h,updateActionType:"Add",firstName:f,lastName:j,age:k,photoUrl:I,errorMessage:x,isUpdatingContact:i,handleFirstNameChange:function(t){E(t.currentTarget.value)},handleLastNameChange:function(t){y(t.currentTarget.value)},handleAgeChange:function(t){L(Number(t.currentTarget.value))},handlePhotoUrlChange:function(t){w(t.currentTarget.value)},handleCancelButtonClick:function(){m(!1)},handleUpdateContactButtonClick:$}))})),W=a(409),Z=a(144),$=a.n(Z),q=Object(M.b)((function(t){return{isOpen:t.control.errorModal.isOpen,title:t.control.errorModal.title,content:t.control.errorModal.content}}))((function(t){var e=function(){t.dispatch({type:"UPDATE_ERROR_MODAL",payload:{title:"",content:"",isOpen:!1}})};return r.a.createElement(I.a,{open:t.isOpen,onClose:e,size:"small",className:$.a.ErrorModal},r.a.createElement(W.a,{icon:"close",content:t.title?t.title:"Error",className:$.a.Header}),r.a.createElement(I.a.Content,null,t.content?t.content:"There is an error in the current operation. Please refresh your browser and try again."),r.a.createElement(I.a.Actions,null,r.a.createElement(m.a,{negative:!0,onClick:e},"Close")))})),J=a(27),Q=a.n(J),V=function(t){return r.a.createElement("div",{className:Q.a.ContactContainer},t.isFetchingContactDetail?r.a.createElement(b,null):r.a.createElement("div",{className:Q.a.ContactDetail},r.a.createElement(h.a,{src:t.currentContact.photo,className:Q.a.Logo}),r.a.createElement("span",{className:Q.a.Name},t.currentContact.firstName.concat(" ").concat(t.currentContact.lastName)),r.a.createElement("span",{className:Q.a.Age},t.currentContact.age," years old"),r.a.createElement("div",{className:Q.a.Buttons},r.a.createElement(m.a,{size:"big",className:Q.a.Button,color:"blue",circular:!0,icon:"chevron left",onClick:t.handleButtonBackClick}),r.a.createElement(m.a,{size:"big",className:Q.a.Button,color:"orange",circular:!0,icon:"edit",onClick:t.HandleButtonEditClick}),r.a.createElement(m.a,{loading:t.isDeletingContact,size:"big",className:Q.a.Button,color:"red",circular:!0,icon:"trash",onClick:t.handleButtonDeleteClick}))))},X=Object(M.b)((function(t){return{currentContact:t.control.currentContact,isFetchingContactDetail:t.session.isFetchingContactDetail,isUpdatingContact:t.session.isUpdatingContact,isDeletingContact:t.session.isDeletingContact}}))((function(t){var e=Object(M.c)(),a=Object(u.f)(),l=t.match.params.contactId,i=t.currentContact,d=t.isFetchingContactDetail,C=t.isUpdatingContact,h=t.isDeletingContact,m=Object(o.useState)(!1),p=Object(s.a)(m,2),g=p[0],f=p[1],E=Object(o.useState)(""),T=Object(s.a)(E,2),b=T[0],O=T[1],j=Object(o.useState)(""),y=Object(s.a)(j,2),S=y[0],D=y[1],P=Object(o.useState)(1),k=Object(s.a)(P,2),R=k[0],I=k[1],w=Object(o.useState)(""),H=Object(s.a)(w,2),G=H[0],x=H[1],W=Object(o.useState)(""),Z=Object(s.a)(W,2),$=Z[0],q=Z[1];Object(o.useEffect)((function(){e(B(l))}),[e,l]),Object(o.useEffect)((function(){O(i.firstName),D(i.lastName),I(i.age),x(i.photo)}),[i]);var J=Object(o.useCallback)((function(){b.length<3?q("First Name length must be at least 3 characters long."):S.length<3?q("Last Name length must be at least 3 characters long."):/^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(b)?/^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(S)?R<1||R>100?q("Age must be at least 1 and not larger than 100"):0===G.length?q("Photo (URL) is not allowed to be empty."):(e(function(t,e,a,o,r){return function(l){var i="https://simple-contact-crud.herokuapp.com/contact/"+t,s=_.a(),u={id:s,method:n.PUT,url:i,headers:{"Content-Type":"application/json"},requestBody:JSON.stringify({firstName:e,lastName:a,age:o,photo:r})},d={isOpen:!0,title:"Unable to Edit Contact."};l(L(!0)),A(u,(function(e){e.body&&e.json().then((function(){l(B(t)),l(N(s,c.SUCCESSFUL)),l(L(!1))}))}),(function(t){l(N(s,c.ERROR)),t.body?t.json().then((function(t){d.content=t.message,l(L(!1)),l(v(d))})).catch((function(t){d.content=t.message,l(L(!1)),l(v(d))})):d.content="Unable to edit Contact. Please contact developer.",l(L(!1)),d.content&&l(v(d))}));var C=Object.assign({},u,{status:c.SENT});l(U(C))}}(l,b,S,R,G)),f(!1)):q("Last Name must only contain alpha-numeric characters."):q("First Name must only contain alpha-numeric characters.")}),[e,b,S,R,G,l]),Q=Object(o.useCallback)((function(){a.push("/")}),[a]),X=Object(o.useCallback)((function(){e(function(t,e){return function(a){var o="https://simple-contact-crud.herokuapp.com/contact/"+t,r=_.a(),l={id:r,method:n.DELETE,url:o,headers:{"Content-Type":"application/json"}},i={isOpen:!0,title:"Unable to delete Contact."};a(F(!0)),A(l,(function(t){t.body&&t.json().then((function(){a(N(r,c.SUCCESSFUL)),a(F(!1)),e&&e()}))}),(function(t){a(N(r,c.ERROR)),t.body?t.json().then((function(t){i.content=t.message,a(F(!1)),a(v(i))})).catch((function(t){i.content=t.message,a(F(!1)),a(v(i))})):i.content="Unable to delete Contact. Please contact developer.",a(F(!1)),i.content&&a(v(i)),e&&e()}));var s=Object.assign({},l,{status:c.SENT});a(U(s))}}(l,Q))}),[e,l,Q]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{currentContact:i,isFetchingContactDetail:d,isDeletingContact:h,handleButtonBackClick:function(){a.push("/")},HandleButtonEditClick:function(){f(!0)},handleButtonDeleteClick:X}),r.a.createElement(z,{updateContactModalOpen:g,updateActionType:"Edit",firstName:b,lastName:S,age:R,photoUrl:G,errorMessage:$,isUpdatingContact:C,handleFirstNameChange:function(t){O(t.currentTarget.value)},handleLastNameChange:function(t){D(t.currentTarget.value)},handleAgeChange:function(t){I(Number(t.currentTarget.value))},handlePhotoUrlChange:function(t){x(t.currentTarget.value)},handleCancelButtonClick:function(){f(!1)},handleUpdateContactButtonClick:J}),")")}));var K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:x}),r.a.createElement(u.a,{exact:!0,path:"/:contactId",component:X})),r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(36),tt=a(225),et=a(103),at={contacts:[]},nt={httpCalls:[]},ct={currentContact:{id:"",firstName:"",lastName:"",age:0,photo:""},errorModal:{isOpen:!1},successfulModal:{isOpen:!1,title:"",content:""}},ot={isFetchingContact:!1,isStoringContact:!1,isUpdatingContact:!1,isDeletingContact:!1,isFetchingContactDetail:!1},rt=Object(Y.combineReducers)({data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_CONTACT_LIST":return Object.assign({},t,{contacts:e.payload});default:return t}},control:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_ERROR_MODAL":return Object.assign({},t,{errorModal:e.payload});case"UPDATE_CURRENT_CONTACT":return Object.assign({},t,{currentContact:e.payload});default:return t}},session:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_FETCHING_CONTACT_STATUS":return Object.assign({},t,{isFetchingContact:e.payload});case"UPDATE_STORING_CONTACT_STATUS":return Object.assign({},t,{isStoringContact:e.payload});case"UPDATE_FETCHING_CONTACT_DETAIL_STATUS":return Object.assign({},t,{isFetchingContactDetail:e.payload});case"UPDATE_UPDATING_CONTACT_STATUS":return Object.assign({},t,{isUpdatingContact:e.payload});case"UPDATE_DELETING_CONTACT_STATUS":return Object.assign({},t,{isDeletingContact:e.payload});default:return t}},communication:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_NEW_HTTP_CALL":return Object.assign({},t,{httpCalls:[].concat(Object(et.a)(t.httpCalls),[e.payload])});case"UPDATE_HTTP_CALL_STATUS":var a=t.httpCalls.findIndex((function(t){return t.id===e.payload.callId})),n=Object.assign({},t.httpCalls[a],{status:e.payload.status});return a>=0?Object.assign({},t,{httpCalls:[].concat(Object(et.a)(t.httpCalls.slice(0,a)),[n],Object(et.a)(t.httpCalls.slice(a+1)))}):t;default:return t}}}),lt=a(226),it=a(227),st=a(137),ut=Object(tt.createLogger)({level:"info",collapsed:!0,diff:!0}),dt=Object(it.composeWithDevTools)({})(Object(Y.applyMiddleware)(lt.a,ut)),Ct=Object(Y.createStore)(rt,dt);i.a.render(r.a.createElement(M.a,{store:Ct},r.a.createElement(st.a,{basename:"/kontak-ku"},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},61:function(t,e,a){t.exports={ContactContainer:"HomePage_ContactContainer__20juu",ContactList:"HomePage_ContactList__2BMz8",Float:"HomePage_Float__33wnm",Name:"HomePage_Name__vhNsU",Logo:"HomePage_Logo__1ob_u"}}},[[238,1,2]]]);
//# sourceMappingURL=main.49c33dd4.chunk.js.map