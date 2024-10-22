"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[4265],{94265:(e,s,l)=>{l.r(s),l.d(s,{default:()=>N});var a=l(4676),t=l(26751),r=l(76880),i=l(96285),o=l(12540),n=l(96826),c=l(89418),d=l(78298),m=l(78689),x=l(4464),u=l(47637),h=l(26246),f=l(98231),j=l(99805),p=l(74896),g=l(84178),v=l(15678);const w=x.Ik().shape({email:x.Yj().email("You must enter a valid email").required("You must enter a email"),password:x.Yj().required("Please enter your password.").min(8,"Password is too short - must be at least 8 chars.")}),b={email:"",password:"",remember:!0};const N=function(){const{control:e,formState:s,handleSubmit:l,reset:x}=(0,t.mN)({mode:"onChange",defaultValues:b,resolver:(0,a.t)(w)}),{isValid:N,dirtyFields:y,errors:A}=s;return(0,v.jsx)("div",{className:"flex flex-col flex-auto items-center sm:justify-center min-w-0 md:p-32",children:(0,v.jsxs)(h.A,{className:"flex w-full sm:w-auto min-h-full sm:min-h-auto md:w-full md:max-w-6xl rounded-0 sm:rounded-2xl sm:shadow overflow-hidden",children:[(0,v.jsxs)(g.A,{className:"relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden",sx:{backgroundColor:"primary.main"},children:[(0,v.jsx)("svg",{className:"absolute inset-0 pointer-events-none",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsxs)(g.A,{component:"g",sx:{color:"primary.light"},className:"opacity-20",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[(0,v.jsx)("circle",{r:"234",cx:"196",cy:"23"}),(0,v.jsx)("circle",{r:"234",cx:"790",cy:"491"})]})}),(0,v.jsxs)(g.A,{component:"svg",className:"absolute -top-64 -right-64 opacity-20",sx:{color:"primary.light"},viewBox:"0 0 220 192",width:"220px",height:"192px",fill:"none",children:[(0,v.jsx)("defs",{children:(0,v.jsx)("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:(0,v.jsx)("rect",{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"})})}),(0,v.jsx)("rect",{width:"220",height:"192",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})]}),(0,v.jsxs)("div",{className:"z-10 relative w-full max-w-2xl",children:[(0,v.jsxs)("div",{className:"text-7xl font-bold leading-none text-gray-100",children:[(0,v.jsx)("div",{children:"Welcome to"}),(0,v.jsx)("div",{children:"our community"})]}),(0,v.jsx)("div",{className:"mt-24 text-lg tracking-tight leading-6 text-gray-400",children:"Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today."}),(0,v.jsxs)("div",{className:"flex items-center mt-32",children:[(0,v.jsxs)(j.A,{sx:{"& .MuiAvatar-root":{borderColor:"primary.main"}},children:[(0,v.jsx)(p.A,{src:"assets/images/avatars/female-18.jpg"}),(0,v.jsx)(p.A,{src:"assets/images/avatars/female-11.jpg"}),(0,v.jsx)(p.A,{src:"assets/images/avatars/male-09.jpg"}),(0,v.jsx)(p.A,{src:"assets/images/avatars/male-16.jpg"})]}),(0,v.jsx)("div",{className:"ml-16 font-medium tracking-tight text-gray-400",children:"More than 17k people joined us, it's your turn"})]})]})]}),(0,v.jsx)("div",{className:"w-full sm:w-auto py-32 px-16 sm:p-48 md:p-64 rtl:border-r-1 ltr:border-l-1",children:(0,v.jsxs)("div",{className:"w-full max-w-320 sm:w-320 mx-auto sm:mx-0",children:[(0,v.jsx)("img",{className:"w-48",src:"assets/images/logo/logo.svg",alt:"logo"}),(0,v.jsx)(d.A,{className:"mt-32 text-4xl font-extrabold tracking-tight leading-tight",children:"Sign in"}),(0,v.jsxs)("div",{className:"flex items-baseline mt-2 font-medium",children:[(0,v.jsx)(d.A,{children:"Don't have an account?"}),(0,v.jsx)(m.N_,{className:"ml-4",to:"/sign-up",children:"Sign up"})]}),(0,v.jsxs)("form",{name:"loginForm",noValidate:!0,className:"flex flex-col justify-center w-full mt-32",onSubmit:l((function(){x(b)})),children:[(0,v.jsx)(t.xI,{name:"email",control:e,render:e=>{var s;let{field:l}=e;return(0,v.jsx)(c.A,{...l,className:"mb-24",label:"Email",autoFocus:!0,type:"email",error:!!A.email,helperText:null===A||void 0===A||null===(s=A.email)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),(0,v.jsx)(t.xI,{name:"password",control:e,render:e=>{var s;let{field:l}=e;return(0,v.jsx)(c.A,{...l,className:"mb-24",label:"Password",type:"password",error:!!A.password,helperText:null===A||void 0===A||null===(s=A.password)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),(0,v.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center sm:justify-between",children:[(0,v.jsx)(t.xI,{name:"remember",control:e,render:e=>{let{field:s}=e;return(0,v.jsx)(o.A,{children:(0,v.jsx)(n.A,{label:"Remember me",control:(0,v.jsx)(i.A,{size:"small",...s})})})}}),(0,v.jsx)(m.N_,{className:"text-md font-medium",to:"/pages/auth/forgot-password",children:"Forgot password?"})]}),(0,v.jsx)(r.A,{variant:"contained",color:"secondary",className:" w-full mt-16","aria-label":"Sign in",disabled:u.A.isEmpty(y)||!N,type:"submit",size:"large",children:"Sign in"}),(0,v.jsxs)("div",{className:"flex items-center mt-32",children:[(0,v.jsx)("div",{className:"flex-auto mt-px border-t"}),(0,v.jsx)(d.A,{className:"mx-8",color:"text.secondary",children:"Or continue with"}),(0,v.jsx)("div",{className:"flex-auto mt-px border-t"})]}),(0,v.jsxs)("div",{className:"flex items-center mt-32 space-x-16",children:[(0,v.jsx)(r.A,{variant:"outlined",className:"flex-auto",children:(0,v.jsx)(f.A,{size:20,color:"action",children:"feather:facebook"})}),(0,v.jsx)(r.A,{variant:"outlined",className:"flex-auto",children:(0,v.jsx)(f.A,{size:20,color:"action",children:"feather:twitter"})}),(0,v.jsx)(r.A,{variant:"outlined",className:"flex-auto",children:(0,v.jsx)(f.A,{size:20,color:"action",children:"feather:github"})})]})]})]})})]})})}}}]);