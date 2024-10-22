"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[3676],{28729:(e,s,a)=>{a.d(s,{A:()=>d});var t=a(78298),l=a(96915),r=a(2667),i=a.n(r),n=a(88094),c=a(15678);function o(e){const{onComplete:s}=e,[a]=(0,n.useState)(i().isMoment(e.endDate)?e.endDate:i()(e.endDate)),[r,o]=(0,n.useState)({days:0,hours:0,minutes:0,seconds:0}),d=(0,n.useRef)(),m=(0,n.useCallback)((()=>{window.clearInterval(d.current),s&&s()}),[s]),x=(0,n.useCallback)((()=>{const e=i()(),s=a.diff(e,"seconds");if(s<0)return void m();const t=i().duration(s,"seconds");o({days:t.asDays().toFixed(0),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds()})}),[m,a]);return(0,n.useEffect)((()=>(d.current=setInterval(x,1e3),()=>{clearInterval(d.current)})),[x]),(0,c.jsxs)("div",{className:(0,l.A)("flex items-center",e.className),children:[(0,c.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,c.jsx)(t.A,{variant:"h4",className:"mb-4",children:r.days}),(0,c.jsx)(t.A,{variant:"caption",color:"text.secondary",children:"days"})]}),(0,c.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,c.jsx)(t.A,{variant:"h4",className:"mb-4",children:r.hours}),(0,c.jsx)(t.A,{variant:"caption",color:"text.secondary",children:"hours"})]}),(0,c.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,c.jsx)(t.A,{variant:"h4",className:"mb-4",children:r.minutes}),(0,c.jsx)(t.A,{variant:"caption",color:"text.secondary",children:"minutes"})]}),(0,c.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,c.jsx)(t.A,{variant:"h4",className:"mb-4",children:r.seconds}),(0,c.jsx)(t.A,{variant:"caption",color:"text.secondary",children:"seconds"})]})]})}o.defaultProps={endDate:i()().add(15,"days")};const d=(0,n.memo)(o)},3676:(e,s,a)=>{a.r(s),a.d(s,{default:()=>v});var t=a(4676),l=a(26751),r=a(76880),i=a(89418),n=a(78298),c=a(4464),o=a(47637),d=a(26246),m=a(99805),x=a(74896),u=a(84178),h=a(28729),f=a(15678);const j=c.Ik().shape({email:c.Yj().email("You must enter a valid email").required("You must enter a email")}),p={email:""};const v=function(){const{control:e,formState:s,handleSubmit:a,reset:c}=(0,l.mN)({mode:"onChange",defaultValues:p,resolver:(0,t.t)(j)}),{isValid:v,dirtyFields:g,errors:y}=s;return(0,f.jsx)("div",{className:"flex flex-col flex-auto items-center sm:justify-center min-w-0 md:p-32",children:(0,f.jsxs)(d.A,{className:"flex w-full sm:w-auto min-h-full sm:min-h-auto md:w-full md:max-w-6xl rounded-0 sm:rounded-2xl sm:shadow overflow-hidden",children:[(0,f.jsx)("div",{className:"w-full sm:w-auto py-32 px-16 sm:p-48 md:p-64 ltr:border-r-1 rtl:border-l-1",children:(0,f.jsxs)("div",{className:"w-full max-w-320 sm:w-320 mx-auto sm:mx-0",children:[(0,f.jsx)("img",{className:"w-48",src:"assets/images/logo/logo.svg",alt:"logo"}),(0,f.jsx)(n.A,{className:"mt-32 text-4xl font-extrabold tracking-tight leading-tight",children:"Almost there!"}),(0,f.jsx)(n.A,{className:"mt-2",children:"Do you want to be notified when we are ready? Register below so we can notify you about the launch!"}),(0,f.jsx)("div",{className:"flex flex-col items-center py-48",children:(0,f.jsx)(h.A,{endDate:"2024-09-28"})}),(0,f.jsxs)("form",{name:"comingSoonForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:a((function(){c(p)})),children:[(0,f.jsx)(l.xI,{name:"email",control:e,render:e=>{var s;let{field:a}=e;return(0,f.jsx)(i.A,{...a,className:"mb-24",label:"Email address",type:"email",error:!!y.email,helperText:null===y||void 0===y||null===(s=y.email)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),(0,f.jsx)(r.A,{variant:"contained",color:"secondary",className:" w-full mt-4","aria-label":"Register",disabled:o.A.isEmpty(g)||!v,type:"submit",size:"large",children:"Notify me when you launch"}),(0,f.jsx)(n.A,{className:"mt-32 text-md font-medium",color:"text.secondary",children:"This isn't a newsletter subscription. We will send one email to you when we launch and then you will be removed from the list."})]})]})}),(0,f.jsxs)(u.A,{className:"relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden",sx:{backgroundColor:"primary.main"},children:[(0,f.jsx)("svg",{className:"absolute inset-0 pointer-events-none",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsxs)(u.A,{component:"g",sx:{color:"primary.light"},className:"opacity-20",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[(0,f.jsx)("circle",{r:"234",cx:"196",cy:"23"}),(0,f.jsx)("circle",{r:"234",cx:"790",cy:"491"})]})}),(0,f.jsxs)(u.A,{component:"svg",className:"absolute -top-64 -right-64 opacity-20",sx:{color:"primary.light"},viewBox:"0 0 220 192",width:"220px",height:"192px",fill:"none",children:[(0,f.jsx)("defs",{children:(0,f.jsx)("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:(0,f.jsx)("rect",{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"})})}),(0,f.jsx)("rect",{width:"220",height:"192",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})]}),(0,f.jsxs)("div",{className:"z-10 relative w-full max-w-2xl",children:[(0,f.jsxs)("div",{className:"text-7xl font-bold leading-none text-gray-100",children:[(0,f.jsx)("div",{children:"Welcome to"}),(0,f.jsx)("div",{children:"our community"})]}),(0,f.jsx)("div",{className:"mt-24 text-lg tracking-tight leading-6 text-gray-400",children:"Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today."}),(0,f.jsxs)("div",{className:"flex items-center mt-32",children:[(0,f.jsxs)(m.A,{sx:{"& .MuiAvatar-root":{borderColor:"primary.main"}},children:[(0,f.jsx)(x.A,{src:"assets/images/avatars/female-18.jpg"}),(0,f.jsx)(x.A,{src:"assets/images/avatars/female-11.jpg"}),(0,f.jsx)(x.A,{src:"assets/images/avatars/male-09.jpg"}),(0,f.jsx)(x.A,{src:"assets/images/avatars/male-16.jpg"})]}),(0,f.jsx)("div",{className:"ml-16 font-medium tracking-tight text-gray-400",children:"More than 17k people joined us, it's your turn"})]})]})]})]})})}}}]);