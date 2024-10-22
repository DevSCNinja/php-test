"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[326],{68215:(e,s,t)=>{t.d(s,{A:()=>x});var o=t(78298),l=t(46521),r=t(98231),n=t(96915),c=t(89720),i=t(4929),a=t(83107),d=t(47637),m=t(13965),p=t(15678);const u=function(e){let{slug:s}=e;const t=(0,a.d4)(m.Jk),o=d.A.find(t,{slug:s});return(0,p.jsx)(i.A,{className:"font-semibold text-12",label:null===o||void 0===o?void 0:o.title,sx:{color:e=>"light"===e.palette.mode?(0,c.e$)(null===o||void 0===o?void 0:o.color,.4):(0,c.a)(null===o||void 0===o?void 0:o.color,.8),backgroundColor:e=>"light"===e.palette.mode?(0,c.a)(null===o||void 0===o?void 0:o.color,.8):(0,c.e$)(null===o||void 0===o?void 0:o.color,.1)},size:"small"})};const x=function(e){let{course:s,className:t}=e;return s?(0,p.jsxs)("div",{className:(0,n.A)("w-full",t),children:[(0,p.jsxs)("div",{className:"flex items-center justify-between mb-16",children:[(0,p.jsx)(u,{slug:s.category}),s.progress.completed>0&&(0,p.jsx)(r.A,{className:"text-green-600",size:20,children:"heroicons-solid:badge-check"})]}),(0,p.jsx)(o.A,{className:"text-16 font-medium",children:s.title}),(0,p.jsx)(o.A,{className:"text-13 mt-2 line-clamp-2",color:"text.secondary",children:s.description}),(0,p.jsx)(l.A,{className:"w-48 my-24 border-1",light:!0}),(0,p.jsxs)(o.A,{className:"flex items-center space-x-6 text-13",color:"text.secondary",children:[(0,p.jsx)(r.A,{color:"disabled",size:20,children:"heroicons-solid:clock"}),(0,p.jsx)("span",{className:"whitespace-nowrap leading-none",children:`${s.duration} minutes`})]}),(0,p.jsxs)(o.A,{className:"flex items-center space-x-6 text-13 mt-8",color:"text.secondary",children:[(0,p.jsx)(r.A,{color:"disabled",size:20,children:"heroicons-solid:academic-cap"}),(0,p.jsxs)("span",{className:"whitespace-nowrap leading-none",children:[1===s.progress.completed&&"Completed once",2===s.progress.completed&&"Completed twice",s.progress.completed>2&&`Completed ${s.progress.completed} times`,s.progress.completed<=0&&"Never completed"]})]})]}):null}},88863:(e,s,t)=>{t.d(s,{A:()=>n});var o=t(47779),l=t(96915),r=t(15678);const n=function(e){let{course:s,className:t}=e;return(0,r.jsx)(o.A,{className:(0,l.A)("w-full h-2",t),variant:"determinate",value:100*s.progress.currentStep/s.totalSteps,color:"secondary"})}},70326:(e,s,t)=>{t.r(s),t.d(s,{default:()=>$});var o=t(24980),l=t(34057),r=t(44355),n=t(62189),c=t(26246),i=t(28143),a=t(66607),d=t(88094),m=t(83107),p=t(90844),u=t(78689),x=t(15747),h=t(89538),f=t(80984),j=t(88231),A=t(69334),g=t(46521),w=t(76880),N=t(98231),b=t(11723),v=t(78298),y=t(50544),k=t(19054),S=t(15055),C=t(65257),z=t(68215),I=t(88863),M=t(15678);const $=(0,a.A)("academyApp",S.A)((function(e){const s=(0,m.wA)(),t=(0,m.d4)(C.qy),a=(0,k.A)((e=>e.breakpoints.down("lg"))),S=(0,l.A)(),[$,_]=(0,d.useState)(!a),E=(0,p.g)(),{courseId:J}=E,T=(0,d.useRef)(null);if((0,x.Ij)((()=>{s((0,C.E0)(J))}),[s,E]),(0,d.useEffect)((()=>{t&&0===t.progress.currentStep&&s((0,C.J4)({progress:{currentStep:1}}))}),[s,t]),(0,d.useEffect)((()=>{_(!a)}),[a]),!t)return null;const{currentStep:q}=t.progress;function D(e){e>t.totalSteps||e<0||s((0,C.J4)({progress:{currentStep:e}}))}function L(){D(q+1)}function O(){D(q-1)}function U(e){D(e+1)}const B=0!==q?q:1;return(0,M.jsx)(o.A,{content:(0,M.jsxs)("div",{className:"w-full",children:[(0,M.jsx)(r.A,{lgDown:!0,children:(0,M.jsx)(I.A,{className:"sticky top-0 z-10",course:t})}),(0,M.jsx)(r.A,{lgUp:!0,children:(0,M.jsxs)(c.A,{className:"flex sticky top-0 z-10 items-center w-full px-16 py-8 border-b-1 shadow-0",square:!0,children:[(0,M.jsx)(n.A,{to:"/apps/academy/courses",component:u.N_,className:"",children:(0,M.jsx)(N.A,{children:"ltr"===S.direction?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"})}),(0,M.jsx)(v.A,{className:"text-13 font-medium tracking-tight mx-10",children:t.title})]})}),(0,M.jsx)(h.Ay,{index:B-1,enableMouseEvents:!0,onChangeIndex:U,children:t.steps.map(((e,s)=>(0,M.jsx)("div",{className:"flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64",children:(0,M.jsx)(c.A,{className:"w-full max-w-lg mx-auto sm:my-8 lg:mt-16 p-24 sm:p-40 sm:py-48 rounded-16 shadow overflow-hidden",children:(0,M.jsx)("div",{className:"prose prose-sm dark:prose-invert w-full max-w-full",dangerouslySetInnerHTML:{__html:e.content},dir:S.direction})})},s)))}),(0,M.jsx)(r.A,{lgDown:!0,children:(0,M.jsx)("div",{className:"flex justify-center w-full sticky bottom-0 p-16 pb-32 z-10",children:(0,M.jsxs)(b.A,{variant:"contained","aria-label":"",className:"rounded-full",color:"secondary",children:[(0,M.jsx)(w.A,{className:"min-h-56 rounded-full",size:"large",startIcon:(0,M.jsx)(N.A,{children:"heroicons-outline:arrow-narrow-left"}),onClick:O,children:"Prev"}),(0,M.jsx)(w.A,{className:"pointer-events-none min-h-56",size:"large",children:`${B}/${t.totalSteps}`}),(0,M.jsx)(w.A,{className:"min-h-56 rounded-full",size:"large",endIcon:(0,M.jsx)(N.A,{children:"heroicons-outline:arrow-narrow-right"}),onClick:L,children:"Next"})]})})}),(0,M.jsx)(r.A,{lgUp:!0,children:(0,M.jsxs)(y.A,{sx:{backgroundColor:"background.paper"},className:"flex sticky bottom-0 z-10 items-center w-full p-16 border-t-1",children:[(0,M.jsx)(n.A,{onClick:e=>_(!0),"aria-label":"open left sidebar",size:"large",children:(0,M.jsx)(N.A,{children:"heroicons-outline:view-list"})}),(0,M.jsx)(v.A,{className:"mx-8",children:`${B}/${t.totalSteps}`}),(0,M.jsx)(I.A,{className:"flex flex-1 mx-8",course:t}),(0,M.jsx)(n.A,{onClick:O,children:(0,M.jsx)(N.A,{children:"heroicons-outline:arrow-narrow-left"})}),(0,M.jsx)(n.A,{onClick:L,children:(0,M.jsx)(N.A,{children:"heroicons-outline:arrow-narrow-right"})})]})})]}),leftSidebarOpen:$,leftSidebarOnClose:()=>{_(!1)},leftSidebarWidth:300,leftSidebarContent:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("div",{className:"p-32",children:[(0,M.jsx)(w.A,{to:"/apps/academy/courses",component:u.N_,className:"mb-24",color:"secondary",variant:"text",startIcon:(0,M.jsx)(N.A,{size:20,children:"ltr"===S.direction?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"}),children:"Back to courses"}),(0,M.jsx)(z.A,{course:t})]}),(0,M.jsx)(g.A,{}),(0,M.jsx)(i.A,{classes:{root:"p-32"},activeStep:B-1,orientation:"vertical",children:t.steps.map(((e,s)=>(0,M.jsxs)(f.A,{sx:{"& .MuiStepLabel-root, & .MuiStepContent-root":{cursor:"pointer!important"},"& .MuiStepContent-root":{color:"text.secondary",fontSize:13}},onClick:()=>U(e.order),expanded:!0,children:[(0,M.jsx)(j.A,{className:"font-medium",sx:{"& .MuiSvgIcon-root":{color:"background.default","& .MuiStepIcon-text":{fill:e=>e.palette.text.secondary},"&.Mui-completed":{color:"secondary.main","& .MuiStepIcon-text ":{fill:e=>e.palette.secondary.contrastText}},"&.Mui-active":{color:"secondary.main","& .MuiStepIcon-text ":{fill:e=>e.palette.secondary.contrastText}}}},children:e.title}),(0,M.jsx)(A.A,{children:e.subtitle})]},s)))})]}),scroll:"content",ref:T})}))}}]);