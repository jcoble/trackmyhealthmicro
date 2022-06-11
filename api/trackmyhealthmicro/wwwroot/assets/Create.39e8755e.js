import{_ as g}from"./vue.d3aed02f.js";import{_ as V,d as f,D as v,a4 as h,a5 as y,o as k,c as x,b as s,a as n,u as t,w as d,P as S,z as w,a6 as T,i as C}from"./app.bac93db2.js";import{E as N}from"./ErrorSummary.9290109d.js";import{d as D,C as B,S as U,T as E}from"./utils.0da5f501.js";import{T as l}from"./TextInput.71a51c5a.js";import{S as q}from"./SrcLink.05f9afe2.js";const I=["onSubmit"],j={class:"shadow overflow-hidden sm:rounded-md bg-white"},A={class:"relative px-4 py-5 bg-white sm:p-6"},F=s("legend",{class:"text-base font-medium text-gray-900 text-center mb-4"},"New Booking",-1),L={class:"grid grid-cols-6 gap-6"},P={class:"col-span-6 sm:col-span-3"},R={class:"col-span-6 sm:col-span-3"},z={class:"col-span-6 sm:col-span-3"},M={class:"col-span-6 sm:col-span-3"},O={class:"col-span-6 sm:col-span-3"},G={class:"col-span-6 sm:col-span-3"},H={class:"col-span-6"},J={class:"mt-4 px-4 py-3 bg-gray-50 text-right sm:px-6"},K={class:"flex justify-between items-center"},Q=C("Create Booking"),W=f({emits:["done"],setup(X,{emit:m}){const r="name,roomType,roomNumber,bookingStartDate,bookingEndDate,cost,notes",u=T(),p=v(),e=new h({roomType:y.Single,roomNumber:0,cost:0,bookingStartDate:D(new Date)}),c=async b=>{(await p.api(e)).succeeded&&i()},i=()=>m("done");return(b,o)=>{const _=g;return k(),x("form",{onSubmit:w(c,["prevent"])},[s("div",j,[s("div",A,[n(B,{onClose:i}),s("fieldset",null,[F,n(N,{except:r,class:"mb-4"}),s("div",L,[s("div",P,[n(l,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":o[0]||(o[0]=a=>t(e).name=a),required:"",placeholder:"Name for this booking"},null,8,["modelValue"])]),s("div",R,[n(U,{id:"roomType",modelValue:t(e).roomType,"onUpdate:modelValue":o[1]||(o[1]=a=>t(e).roomType=a),options:t(u).enumOptions("RoomType")},null,8,["modelValue","options"])]),s("div",z,[n(l,{type:"number",id:"roomNumber",modelValue:t(e).roomNumber,"onUpdate:modelValue":o[2]||(o[2]=a=>t(e).roomNumber=a),min:"0",required:""},null,8,["modelValue"])]),s("div",M,[n(l,{type:"number",id:"cost",modelValue:t(e).cost,"onUpdate:modelValue":o[3]||(o[3]=a=>t(e).cost=a),min:"0",required:""},null,8,["modelValue"])]),s("div",O,[n(l,{type:"date",id:"bookingStartDate",modelValue:t(e).bookingStartDate,"onUpdate:modelValue":o[4]||(o[4]=a=>t(e).bookingStartDate=a),required:""},null,8,["modelValue"])]),s("div",G,[n(l,{type:"date",id:"bookingEndDate",modelValue:t(e).bookingEndDate,"onUpdate:modelValue":o[5]||(o[5]=a=>t(e).bookingEndDate=a)},null,8,["modelValue"])]),s("div",H,[n(E,{id:"notes",modelValue:t(e).notes,"onUpdate:modelValue":o[6]||(o[6]=a=>t(e).notes=a),placeholder:"Notes about this booking",style:{height:"6rem"}},null,8,["modelValue"])])])])]),s("div",J,[s("div",K,[n(q,{href:"https://github.com/NetCoreTemplates/vue-vite/blob/main/ui/src/pages/bookings-crud/Create.vue"},{default:d(()=>[n(_,{class:"w-5 h-5 inline"})]),_:1}),s("div",null,[n(S,null,{default:d(()=>[Q]),_:1})])])])])],40,I)}}});var se=V(W,[["__file","/Users/jcmac/mainrepos/trackmyhealthmicro/ui/src/pages/bookings-crud/Create.vue"]]);export{se as default};