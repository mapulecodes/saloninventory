"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[584],{8584:function(r,s,e){e.r(s),e.d(s,{default:function(){return v}});var a=e(6768),o=e(5130),i=e(4232);const t={class:"login-body"},l={class:"login-container"},n={key:0,class:"error"},d={key:1,class:"error"},u=["disabled"],m={key:0},c={key:1},p={class:"register-link"};function g(r,s,e,g,h,E){return(0,a.uX)(),(0,a.CE)("div",t,[(0,a.Lk)("div",l,[s[8]||(s[8]=(0,a.Lk)("h1",{class:"login-title"},"Login",-1)),(0,a.Lk)("form",{onSubmit:s[4]||(s[4]=(0,o.D$)(((...r)=>E.loginUser&&E.loginUser(...r)),["prevent"]))},[(0,a.bo)((0,a.Lk)("input",{type:"email",placeholder:"Email","onUpdate:modelValue":s[0]||(s[0]=r=>h.user_email=r),onBlur:s[1]||(s[1]=(...r)=>E.validateEmail&&E.validateEmail(...r)),class:(0,i.C4)({"input-error":h.emailError})},null,34),[[o.Jo,h.user_email]]),h.emailError?((0,a.uX)(),(0,a.CE)("span",n,(0,i.v_)(h.emailError),1)):(0,a.Q3)("",!0),(0,a.bo)((0,a.Lk)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":s[2]||(s[2]=r=>h.user_password=r),onBlur:s[3]||(s[3]=(...r)=>E.validatePassword&&E.validatePassword(...r)),class:(0,i.C4)({"input-error":h.passwordError})},null,34),[[o.Jo,h.user_password]]),h.passwordError?((0,a.uX)(),(0,a.CE)("span",d,(0,i.v_)(h.passwordError),1)):(0,a.Q3)("",!0),(0,a.Lk)("button",{type:"submit",class:"btn-text",disabled:h.loading},[h.loading?((0,a.uX)(),(0,a.CE)("span",m,"Logging in...")):((0,a.uX)(),(0,a.CE)("span",c,"Login"))],8,u)],32),(0,a.Lk)("div",p,[(0,a.Lk)("p",null,[s[7]||(s[7]=(0,a.eW)("Don't have an account? ")),(0,a.Lk)("button",{onClick:s[5]||(s[5]=(...r)=>E.goToRegister&&E.goToRegister(...r)),class:"btn-register"},"Register")])]),(0,a.Lk)("button",{onClick:s[6]||(s[6]=(...r)=>E.generateAdminInfoPDF&&E.generateAdminInfoPDF(...r)),class:"btn-text"},"Admin Info")])])}e(4114);var h=e(1749),E=(e(5839),{data(){return{user_email:"",user_password:"",emailError:"",passwordError:"",loading:!1}},methods:{validateEmail(){const r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.user_email?r.test(this.user_email)?this.emailError="":this.emailError="Invalid email format.":this.emailError="Email is required."},validatePassword(){this.user_password?this.user_password.length<6?this.passwordError="Password must be at least 6 characters.":this.passwordError="":this.passwordError="Password is required."},async loginUser(){if(this.validateEmail(),this.validatePassword(),this.emailError||this.passwordError)return;const r="mapule@gmail.com",s="lifechoices";this.loading=!0,setTimeout((()=>{this.loading=!1,this.user_email===r&&this.user_password===s?(alert("Login successful!"),localStorage.setItem("adminLoggedIn",!0),this.$router.push("/dashboard")):alert("Invalid email or password.")}),1500)},goToRegister(){this.$router.push("/register")},generateAdminInfoPDF(){const r=new h["default"];r.text("Admin Login Information",14,16),r.text("Email: mapule@gmail.com",14,30),r.text("Password: lifechoices",14,40),r.save("admin-info.pdf")}}}),w=e(1241);const f=(0,w.A)(E,[["render",g],["__scopeId","data-v-08a8e59e"]]);var v=f}}]);
//# sourceMappingURL=584.3cd13f1c.js.map