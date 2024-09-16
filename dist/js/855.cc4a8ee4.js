"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[855],{855:function(e,s,r){r.r(s),r.d(s,{default:function(){return p}});var t=r(6768),o=r(5130);const a={class:"register-body"},n={class:"register-container"},i={class:"login-link"};function l(e,s,r,l,u,d){const c=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",a,[(0,t.Lk)("div",n,[s[9]||(s[9]=(0,t.Lk)("h1",{class:"register-title"},"Register",-1)),(0,t.Lk)("form",{onSubmit:s[4]||(s[4]=(0,o.D$)(((...e)=>d.registerUser&&d.registerUser(...e)),["prevent"]))},[(0,t.bo)((0,t.Lk)("input",{type:"text",placeholder:"Full Name","onUpdate:modelValue":s[0]||(s[0]=e=>u.user_name=e)},null,512),[[o.Jo,u.user_name]]),(0,t.bo)((0,t.Lk)("input",{type:"email",placeholder:"Email","onUpdate:modelValue":s[1]||(s[1]=e=>u.user_email=e)},null,512),[[o.Jo,u.user_email]]),(0,t.bo)((0,t.Lk)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":s[2]||(s[2]=e=>u.user_password=e)},null,512),[[o.Jo,u.user_password]]),(0,t.bo)((0,t.Lk)("input",{type:"password",placeholder:"Confirm Password","onUpdate:modelValue":s[3]||(s[3]=e=>u.user_confirm_password=e)},null,512),[[o.Jo,u.user_confirm_password]]),s[6]||(s[6]=(0,t.Lk)("button",{type:"submit",class:"btn-text"},"Register",-1))],32),(0,t.Lk)("div",i,[s[8]||(s[8]=(0,t.Lk)("span",{style:{color:"black"}},"Already a member?",-1)),(0,t.bF)(c,{to:"/login",class:"btn-text"},{default:(0,t.k6)((()=>s[7]||(s[7]=[(0,t.eW)("Login")]))),_:1})]),(0,t.Lk)("button",{onClick:s[5]||(s[5]=(...e)=>d.loginAsGuest&&d.loginAsGuest(...e)),class:"btn-guest"},"Login as Guest")])])}r(4114);var u={data(){return{user_name:"",user_email:"",user_password:"",user_confirm_password:""}},methods:{async registerUser(){if(this.user_password!==this.user_confirm_password)return void alert("Passwords do not match");const e={name:this.user_name,email:this.user_email,password:this.user_password};try{const s=await fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await s.json();s.ok?this.$router.push("/dashboard"):alert(r.message||"Registration failed")}catch(s){alert("An error occurred during registration")}},loginAsGuest(){localStorage.setItem("isGuest",!0),this.$router.push("/dashboard")}}},d=r(1241);const c=(0,d.A)(u,[["render",l],["__scopeId","data-v-43ac0944"]]);var p=c}}]);
//# sourceMappingURL=855.cc4a8ee4.js.map