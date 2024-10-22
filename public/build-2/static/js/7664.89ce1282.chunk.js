"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[7664],{27664:(s,e,r)=>{r.r(e),r.d(e,{default:()=>w});var a=r(4676),o=r(26751),l=r(76880),t=r(89418),n=r(78298),i=r(4464),d=r(47637),m=r(26246),u=r(78689),c=r(15678);const f=i.Ik().shape({password:i.Yj().required("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum."),passwordConfirm:i.Yj().oneOf([i.KR("password"),null],"Passwords must match")}),p={password:"",passwordConfirm:""};const w=function(){const{control:s,formState:e,handleSubmit:r,reset:i}=(0,o.mN)({mode:"onChange",defaultValues:p,resolver:(0,a.t)(f)}),{isValid:w,dirtyFields:x,errors:h}=e;return(0,c.jsx)("div",{className:"flex flex-col flex-auto items-center sm:justify-center min-w-0",children:(0,c.jsx)(m.A,{className:"w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow",children:(0,c.jsxs)("div",{className:"w-full max-w-320 sm:w-320 mx-auto sm:mx-0",children:[(0,c.jsx)("img",{className:"w-48",src:"assets/images/logo/logo.svg",alt:"logo"}),(0,c.jsx)(n.A,{className:"mt-32 text-4xl font-extrabold tracking-tight leading-tight",children:"Reset your password"}),(0,c.jsx)(n.A,{className:"font-medium",children:"Create a new password for your account"}),(0,c.jsxs)("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full mt-32",onSubmit:r((function(){i(p)})),children:[(0,c.jsx)(o.xI,{name:"password",control:s,render:s=>{var e;let{field:r}=s;return(0,c.jsx)(t.A,{...r,className:"mb-24",label:"Password",type:"password",error:!!h.password,helperText:null===h||void 0===h||null===(e=h.password)||void 0===e?void 0:e.message,variant:"outlined",required:!0,fullWidth:!0})}}),(0,c.jsx)(o.xI,{name:"passwordConfirm",control:s,render:s=>{var e;let{field:r}=s;return(0,c.jsx)(t.A,{...r,className:"mb-24",label:"Password (Confirm)",type:"password",error:!!h.passwordConfirm,helperText:null===h||void 0===h||null===(e=h.passwordConfirm)||void 0===e?void 0:e.message,variant:"outlined",required:!0,fullWidth:!0})}}),(0,c.jsx)(l.A,{variant:"contained",color:"secondary",className:" w-full mt-4","aria-label":"Register",disabled:d.A.isEmpty(x)||!w,type:"submit",size:"large",children:"Reset your password"}),(0,c.jsxs)(n.A,{className:"mt-32 text-md font-medium",color:"text.secondary",children:[(0,c.jsx)("span",{children:"Return to"}),(0,c.jsx)(u.N_,{className:"ml-4",to:"/sign-in",children:"sign in"})]})]})]})})})}}}]);