"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[1735],{60123:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Portal from '@mui/material/Portal';\n\nexport default function SimplePortal() {\n  const [show, setShow] = React.useState(false);\n  const container = React.useRef(null);\n\n  const handleClick = () => {\n    setShow(!show);\n  };\n\n  return (\n    <div>\n      <button type=\"button\" onClick={handleClick}>\n        {show ? 'Unmount children' : 'Mount children'}\n      </button>\n      <Box sx={{ p: 1, my: 1, border: '1px solid' }}>\n        It looks like I will render here.\n        {show ? (\n          <Portal container={container.current}>\n            <span>But I actually render here!</span>\n          </Portal>\n        ) : null}\n      </Box>\n      <Box sx={{ p: 1, my: 1, border: '1px solid' }} ref={container} />\n    </div>\n  );\n}\n"},21306:(e,n,t)=>{t.d(n,{A:()=>P});var r=t(95529),o=t(88124),s=t(87369),l=t(33358),a=t(96915),c=t(88094),i=t(89720),d=t(84178),h=t(83775),m=t(33351),u=t(90777),x=t(71739),p=t(33209),f=t(34057),j=t(91073),b=t(60209),A=t(15678);function y(e){const{children:n,document:t}=e,r=(0,f.A)();c.useEffect((()=>{t.body.dir=r.direction}),[t,r.direction]);const o=c.useMemo((()=>(0,u.A)({key:`iframe-demo-${r.direction}`,prepend:!0,container:t.head,stylisPlugins:"rtl"===r.direction?[m.A]:[]})),[t,r.direction]),s=c.useCallback((()=>t.defaultView),[t]);return(0,A.jsx)(p.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===r.direction?[m.A]:[],children:(0,A.jsxs)(x.C,{value:o,children:[(0,A.jsx)(b.A,{styles:()=>({html:{fontSize:"62.5%"}})}),c.cloneElement(n,{window:s})]})})}const w=(0,j.Ay)("iframe")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function v(e){var n;const{children:t,name:r,...o}=e,s=`${r} demo`,l=c.useRef(null),[a,i]=c.useReducer((()=>!0),!1);c.useEffect((()=>{const e=l.current.contentDocument;null==e||"complete"!==e.readyState||a||i()}),[a]);const d=null===(n=l.current)||void 0===n?void 0:n.contentDocument;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(w,{onLoad:i,ref:l,title:s,...o}),!1!==a?h.createPortal((0,A.jsx)(y,{document:d,children:t}),d.body):null]})}const g=c.memo(v);var k=t(98231);function N(e){const[n,t]=(0,c.useState)(e.currentTabIndex),{component:h,raw:m,iframe:u,className:x,name:p}=e;return(0,A.jsxs)(o.A,{className:(0,a.A)(x,"shadow"),sx:{backgroundColor:e=>(0,i.e$)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)},children:[(0,A.jsx)(d.A,{sx:{backgroundColor:e=>(0,i.e$)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)},children:(0,A.jsxs)(l.A,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:n,onChange:function(e,n){t(n)},textColor:"secondary",indicatorColor:"secondary",children:[h&&(0,A.jsx)(s.A,{classes:{root:"min-w-64"},icon:(0,A.jsx)(k.A,{children:"heroicons-outline:eye"})}),m&&(0,A.jsx)(s.A,{classes:{root:"min-w-64"},icon:(0,A.jsx)(k.A,{children:"heroicons-outline:code"})})]})}),(0,A.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,A.jsx)("div",{className:0===n?"flex flex-1 max-w-full":"hidden",children:h&&(u?(0,A.jsx)(g,{name:p,children:(0,A.jsx)(h,{})}):(0,A.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,A.jsx)(h,{})}))}),(0,A.jsx)("div",{className:1===n?"flex flex-1":"hidden",children:m&&(0,A.jsx)("div",{className:"flex flex-1",children:(0,A.jsx)(r.A,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:m.default})})})]})]})}N.defaultProps={name:"",currentTabIndex:0};const P=N},76500:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(88094),o=t(84178),s=t(2371),l=t(15678);function a(){const[e,n]=r.useState(!1),t=r.useRef(null);return(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{type:"button",onClick:()=>{n(!e)},children:e?"Unmount children":"Mount children"}),(0,l.jsxs)(o.A,{sx:{p:1,my:1,border:"1px solid"},children:["It looks like I will render here.",e?(0,l.jsx)(s.A,{container:t.current,children:(0,l.jsx)("span",{children:"But I actually render here!"})}):null]}),(0,l.jsx)(o.A,{sx:{p:1,my:1,border:"1px solid"},ref:t})]})}},91735:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var r=t(21306),o=t(95529),s=t(98231),l=t(76880),a=t(78298),c=t(15678);const i=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,c.jsx)(l.A,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/portal",target:"_blank",role:"button",startIcon:(0,c.jsx)(s.A,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,c.jsx)(a.A,{className:"text-40 my-16 font-700",component:"h1",children:"Portal"}),(0,c.jsx)(a.A,{className:"description",children:'The portal component renders its children into a new "subtree" outside of current DOM hierarchy.'}),(0,c.jsxs)(a.A,{className:"mb-40",component:"div",children:["The children of the portal component will be appended to the ",(0,c.jsx)("code",{children:"container"})," ","specified. The component is used internally by the"," ",(0,c.jsx)("a",{href:"/material-ui/react-modal/",children:(0,c.jsx)("code",{children:"Modal"})})," ","and"," ",(0,c.jsx)("a",{href:"/material-ui/react-popper/",children:(0,c.jsx)("code",{children:"Popper"})})," ","components."]}),(0,c.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Example"}),(0,c.jsx)(a.A,{className:"mb-40",component:"div",children:(0,c.jsx)(r.A,{name:"SimplePortal.js",className:"my-24",iframe:!1,component:t(76500).A,raw:t(60123)})}),(0,c.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Server-side"}),(0,c.jsxs)(a.A,{className:"mb-40",component:"div",children:["React ",(0,c.jsx)("a",{href:"https://github.com/facebook/react/issues/13097",children:"doesn't support"})," the"," ",(0,c.jsx)("a",{href:"https://reactjs.org/docs/portals.html",children:(0,c.jsx)("code",{children:"createPortal()"})})," ","API on the server. You have to wait for the client-side hydration to see the children."]}),(0,c.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Unstyled"}),(0,c.jsx)("ul",{children:(0,c.jsxs)("li",{children:["\ud83d\udce6 ",(0,c.jsx)("a",{href:"https://bundlephobia.com/package/@mui/base@latest",children:"970 B gzipped"})]})}),(0,c.jsx)(a.A,{className:"mb-40",component:"div",children:"As the component does not have any styles, it also comes with the Base package."}),(0,c.jsx)(o.A,{component:"pre",className:"language-js",children:" \nimport Portal from '@mui/base/Portal';\n"})]})}}}]);