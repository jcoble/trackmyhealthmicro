import{_ as B}from"./vue.d3aed02f.js";import{S as N}from"./SrcLink.05f9afe2.js";import{_ as S}from"./pineapple.424fdbd8.js";import{o as d,c as g,b as t,U as L,n as x,k,V as v,W as D,X as H,Y as U,Z as Y,$ as Z,a0 as j,_ as z,d as O,f as T,w as p,a as u,u as l,a1 as R,h as K,O as M,t as $,g as P,F as W,i as f,z as V,a2 as E}from"./app.bac93db2.js";import{A as I}from"./AppPage.decb9beb.js";import{T as Q}from"./TextInput.71a51c5a.js";import"./AppBreadcrumb.7cb16fa5.js";import"./home.f4731c17.js";const X={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},q=t("path",{fill:"currentColor",d:"M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"},null,-1),G=[q];function J(o,e){return d(),g("svg",X,G)}var ee={name:"mdi-trash-can-outline",render:J};const te={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},se=t("path",{fill:"currentColor",d:"M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),oe=[se];function ie(o,e){return d(),g("svg",te,oe)}var ne={name:"mdi-checkbox-blank-circle-outline",render:ie};const ae={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},re=t("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"},null,-1),le=[re];function de(o,e){return d(),g("svg",ae,le)}var ce={name:"mdi-check-circle",render:de};const ue=L("todos",()=>{const o=x([]),e=x(""),c=x("all"),_=x(),a=k(()=>o.value.filter(s=>s.isFinished)),m=k(()=>o.value.filter(s=>!s.isFinished)),w=k(()=>c.value=="finished"?a.value:c.value=="unfinished"?m.value:o.value),h=async s=>{var n;_.value=s;const r=await v.api(new D);r.succeeded&&(o.value=(n=r.response.results)!=null?n:[])};return{error:_,newTodo:e,filter:c,finishedTodos:a,unfinishedTodos:m,filteredTodos:w,refreshTodos:h,addTodo:async()=>{o.value.push(new H({text:e.value}));let s=await v.api(new U({text:e.value}));s.succeeded&&(e.value=""),await h(s.error)},removeTodo:async s=>{o.value=o.value.filter(n=>n.id!=s);let r=await v.api(new Y({id:s}));await h(r.error)},removeFinishedTodos:async()=>{let s=o.value.filter(n=>n.isFinished).map(n=>n.id);if(s.length==0)return;o.value=o.value.filter(n=>!n.isFinished);let r=await v.api(new Z({ids:s}));await h(r.error)},toggleTodo:async s=>{const r=o.value.find(A=>A.id==s);r.isFinished=!r.isFinished;let n=await v.api(new j(r));await h(n.error)},changeFilter:s=>c.value=s}}),he={class:"mb-3"},_e={class:"bg-white shadow overflow-hidden rounded-md"},me={role:"list",class:"divide-y divide-gray-200"},pe=["onClick"],fe={class:"flex items-center h-6"},ve={class:"ml-3 flex-grow"},ge={class:"mt-4 flex justify-between"},xe={class:"text-gray-400 leading-8 mr-4"},Te=t("span",{class:"hidden sm:inline"},"item(s)",-1),we=f(" left "),be={class:"inline-flex shadow-sm rounded-md"},ke=f(" All "),ye=f(" Active "),Ce=f(" Completed "),Fe={class:"leading-8 ml-4"},Me=f(" clear "),$e=t("span",{class:"hidden sm:inline"},"completed",-1),Ve=[Me,$e],Ae={class:"mt-4 text-center text-gray-400 flex justify-center -ml-6"},Be=O({setup(o){const e=ue();e.refreshTodos();const c=(_,a)=>E("a",{href:"#",class:`border-gray-200 text-sm font-medium px-4 py-2 hover:bg-gray-100 
      focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 
      dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white
      ${_.filter==e.filter?"text-blue-700 dark:bg-blue-600":"text-gray-900 hover:text-blue-700 dark:bg-gray-700"}`,onClick:m=>{m.preventDefault(),e.changeFilter(_.filter)}},a.slots);return(_,a)=>{const m=ce,w=ne,h=ee,y=S,b=N,C=B;return d(),T(I,{title:"Todos Application",class:"max-w-xl"},{default:p(()=>[t("div",he,[u(Q,{status:l(e).error,id:"Text",modelValue:l(e).newTodo,"onUpdate:modelValue":a[0]||(a[0]=i=>l(e).newTodo=i),placeholder:"What needs to be done?",label:"",onKeyup:a[1]||(a[1]=R(V(i=>l(e).addTodo(),["stop"]),["enter"]))},null,8,["status","modelValue"])]),t("div",_e,[t("ul",me,[(d(!0),g(W,null,K(l(e).filteredTodos,i=>(d(),g("li",{key:i.id,class:"px-6 py-4"},[t("div",{class:"relative flex items-start",onClick:F=>l(e).toggleTodo(i.id)},[t("div",fe,[i.isFinished?(d(),T(m,{key:0,class:"text-green-600"})):(d(),T(w,{key:1}))]),t("div",ve,[t("label",{class:M({"line-through":i.isFinished})},$(i.text),3)]),t("div",null,[i.isFinished?(d(),T(h,{key:0,class:"cursor-pointer",onClick:F=>l(e).removeTodo(i.id)},null,8,["onClick"])):P("v-if",!0)])],8,pe)]))),128))])]),t("div",ge,[t("div",xe,[f($(l(e).unfinishedTodos.length)+" ",1),Te,we]),t("div",be,[u(c,{class:"rounded-l-lg border",filter:"all"},{default:p(()=>[ke]),_:1}),u(c,{class:"border-t border-b",filter:"unfinished"},{default:p(()=>[ye]),_:1}),u(c,{class:"rounded-r-md border",filter:"finished"},{default:p(()=>[Ce]),_:1})]),t("div",Fe,[t("a",{href:"#",class:M({invisible:l(e).finishedTodos.length===0}),onClick:a[2]||(a[2]=V(i=>l(e).removeFinishedTodos(),["prevent"]))},Ve,2)])]),t("div",Ae,[u(b,{href:"https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/stores/todos.ts"},{default:p(()=>[u(y,{class:"w-5 h-5 inline-flex"})]),_:1}),u(b,{href:"https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/TodoMvc.vue"},{default:p(()=>[u(C,{class:"w-4 h-4 inline-flex"})]),_:1})])]),_:1})}}});var je=z(Be,[["__file","/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/TodoMvc.vue"]]);export{je as default};
