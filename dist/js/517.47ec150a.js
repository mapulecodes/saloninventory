"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[517],{6517:function(e,t,o){o.r(t),o.d(t,{default:function(){return L}});var n=o(6768),s=o(5130),l=o(4232);const r={class:"schedule-container"},a={key:0,class:"popup-form"},d={class:"form-container"},u={class:"form-group"},i=["value"],h={class:"form-group"},m={class:"form-group"},c=["value"],f={class:"calendar"},p={class:"calendar-grid"};function k(e,t,o,k,v,w){return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=e=>v.showAddUserForm=!0),class:"add-button"},"Add Employee"),v.showAddUserForm?((0,n.uX)(),(0,n.CE)("div",a,[(0,n.Lk)("div",d,[t[10]||(t[10]=(0,n.Lk)("h3",null,"Add Employee Shift",-1)),(0,n.Lk)("form",{onSubmit:t[5]||(t[5]=(0,s.D$)(((...e)=>w.addUser&&w.addUser(...e)),["prevent"]))},[(0,n.Lk)("div",u,[t[6]||(t[6]=(0,n.Lk)("label",{for:"time"},"Set Time:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>v.newShift.time=e),required:""},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(v.timeOptions,(e=>((0,n.uX)(),(0,n.CE)("option",{key:e,value:e},(0,l.v_)(e),9,i)))),128))],512),[[s.u1,v.newShift.time]])]),(0,n.Lk)("div",h,[t[7]||(t[7]=(0,n.Lk)("label",{for:"date"},"Set Date:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"date","onUpdate:modelValue":t[2]||(t[2]=e=>v.newShift.date=e),required:""},null,512),[[s.Jo,v.newShift.date]])]),(0,n.Lk)("div",m,[t[8]||(t[8]=(0,n.Lk)("label",{for:"employee"},"Select Employee:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>v.newShift.employeeId=e),required:""},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.users,(e=>((0,n.uX)(),(0,n.CE)("option",{key:e.ID,value:e.ID},(0,l.v_)(e.UserName),9,c)))),128))],512),[[s.u1,v.newShift.employeeId]])]),t[9]||(t[9]=(0,n.Lk)("button",{type:"submit"},"Add Shift",-1)),(0,n.Lk)("button",{type:"button",onClick:t[4]||(t[4]=e=>v.showAddUserForm=!1)},"Cancel")],32)])])):(0,n.Q3)("",!0),(0,n.Lk)("div",f,[(0,n.Lk)("h2",null,"Shift Schedule for "+(0,l.v_)(w.currentMonth),1),(0,n.Lk)("div",p,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(v.dates,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e,class:"calendar-block"},[(0,n.Lk)("p",null,(0,l.v_)(e),1),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(w.getShiftsForDate(e),(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.employeeId},(0,l.v_)(e.employeeName)+" ("+(0,l.v_)(e.time)+") ",1)))),128))])))),128))])])])}o(4114);var v=o(782),w={name:"ScheduleView",data(){return{dates:this.getMonthDates(),showAddUserForm:!1,newShift:{time:"",date:"",employeeId:null},shifts:[],timeOptions:["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"]}},computed:{...(0,v.aH)(["users"]),...(0,v.L8)(["allUsers"]),currentMonth(){const e=new Date;return e.toLocaleString("default",{month:"long",year:"numeric"})}},methods:{...(0,v.i0)(["fetchUsers"]),getMonthDates(){const e=new Date,t=e.getFullYear(),o=e.getMonth(),n=new Date(t,o+1,0).getDate();return Array.from({length:n},((e,t)=>t+1))},getShiftsForDate(e){return this.shifts.filter((t=>new Date(t.date).getDate()===e))},addUser(){const e=this.users.find((e=>e.ID===this.newShift.employeeId));e&&(this.shifts.push({...this.newShift,employeeName:e.UserName}),this.showAddUserForm=!1,this.newShift={time:"",date:"",employeeId:null})}},mounted(){this.fetchUsers()}},y=o(1241);const S=(0,y.A)(w,[["render",k],["__scopeId","data-v-61522826"]]);var L=S}}]);
//# sourceMappingURL=517.47ec150a.js.map