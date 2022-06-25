import{_ as b,d as k,o as n,c as l,b as p,k as d,K as o,Q as $,N as S,u as s,t as f,g,F as x,h as C,R as w}from"./app.bac93db2.js";const _={class:"hidden sm:block absolute top-0 right-0 pt-4 pr-4"},j=p("span",{class:"sr-only"},"Close",-1),F=p("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),V=[j,F],I=k({emits:["close"],setup(e){return(t,i)=>(n(),l("div",_,[p("button",{type:"button",onClick:i[0]||(i[0]=c=>t.$emit("close")),class:"bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},V)]))}});var Q=b(I,[["__file","/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/CloseButton.vue"]]);const A=["for"],B=["id","name","value","aria-invalid","aria-describedby"],D=["value"],U=["id"],L=k({props:{status:{type:null,required:!1},id:{type:String,required:!0},modelValue:{type:String,required:!1},label:{type:String,required:!1},options:{type:null,required:!1},values:{type:Array,required:!1}},setup(e){const t=e,i=r=>r.value,c=d(()=>{var r;return(r=t.label)!=null?r:o.humanize(o.toPascalCase(t.id))}),h=d(()=>o.omit($(),[...Object.keys(t)]));let v=S("ApiState",void 0);const u=d(()=>{var r;return o.errorResponse.call({responseStatus:(r=t.status)!=null?r:v==null?void 0:v.error.value},t.id)}),y=d(()=>t.values?t.values.map(r=>({key:r,value:r})):t.options?Object.keys(t.options).map(r=>({key:r,value:t.options[r]})):[]);return(r,a)=>(n(),l(x,null,[s(c)?(n(),l("label",{key:0,for:e.id,class:"block text-sm font-medium text-gray-700"},f(s(c)),9,A)):g("v-if",!0),p("select",w({id:e.id,name:e.id,class:["mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none border-gray-300 sm:text-sm rounded-md",s(u)?"text-red-900 focus:ring-red-500 focus:border-red-500":"text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"],value:e.modelValue,onInput:a[0]||(a[0]=m=>r.$emit("update:modelValue",i(m.target))),"aria-invalid":s(u)!=null,"aria-describedby":`${e.id}-error`},s(h)),[(n(!0),l(x,null,C(s(y),m=>(n(),l("option",{value:m.key},f(m.value),9,D))),256))],16,B),s(u)?(n(),l("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${e.id}-error`},f(s(u)),9,U)):g("v-if",!0)],64))}});var W=b(L,[["__file","/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/SelectInput.vue"]]);const N=["for"],O={class:"mt-1 relative rounded-md shadow-sm"},P=["name","id","placeholder","aria-invalid","aria-describedby"],z=["id"],R=["id"],T=k({props:{status:{type:null,required:!1},id:{type:String,required:!0},label:{type:String,required:!1},help:{type:String,required:!1},placeholder:{type:String,required:!1},modelValue:{type:String,required:!1}},setup(e){const t=e,i=a=>a.value,c=d(()=>{var a;return(a=t.label)!=null?a:o.humanize(o.toPascalCase(t.id))}),h=d(()=>{var a;return(a=t.placeholder)!=null?a:c.value}),v=d(()=>o.omit($(),[...Object.keys(t)]));let u=S("ApiState",void 0);const y=d(()=>{var a;return o.errorResponse.call({responseStatus:(a=t.status)!=null?a:u==null?void 0:u.error.value},t.id)}),r=d(()=>["shadow-sm block w-full sm:text-sm rounded-md",y.value?"text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300":"text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"]);return(a,m)=>(n(),l("div",null,[s(c)?(n(),l("label",{key:0,for:e.id,class:"block text-sm font-medium text-gray-700"},f(s(c)),9,N)):g("v-if",!0),p("div",O,[p("textarea",w({name:e.id,id:e.id,class:s(r),placeholder:s(h),onInput:m[0]||(m[0]=q=>a.$emit("update:modelValue",i(q.target))),"aria-invalid":s(y)!=null,"aria-describedby":`${e.id}-error`},s(v)),f(e.modelValue),17,P)]),s(y)?(n(),l("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${e.id}-error`},f(s(y)),9,z)):e.help?(n(),l("p",{key:2,class:"mt-2 text-sm text-gray-500",id:`${e.id}-description`},f(e.help),9,R)):g("v-if",!0)]))}});var G=b(T,[["__file","/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/components/form/TextAreaInput.vue"]]);const E=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),H=e=>e?E.format(e):"",J=e=>e?o.toDateFmt(e):"",M=e=>o.dateFmt(e).replace(/\//g,"-");function X(e){return e?(Object.keys(e).forEach(t=>{let i=e[t];typeof i=="string"&&i.startsWith("/Date")&&(e[t]=M(o.toDate(i)))}),e):{}}export{Q as C,W as S,G as T,J as a,M as d,H as f,X as s};