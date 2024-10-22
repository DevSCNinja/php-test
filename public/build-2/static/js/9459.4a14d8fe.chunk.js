"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9459],{63658:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a="import * as React from 'react';\nimport Grid from '@mui/material/Grid';\nimport Paper from '@mui/material/Paper';\nimport Box from '@mui/material/Box';\nimport { createTheme, ThemeProvider, styled } from '@mui/material/styles';\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n  height: 60,\n  lineHeight: '60px',\n}));\n\nconst darkTheme = createTheme({ palette: { mode: 'dark' } });\nconst lightTheme = createTheme({ palette: { mode: 'light' } });\n\nexport default function Elevation() {\n  return (\n    <Grid container spacing={2}>\n      {[lightTheme, darkTheme].map((theme, index) => (\n        <Grid item xs={6} key={index}>\n          <ThemeProvider theme={theme}>\n            <Box\n              sx={{\n                p: 2,\n                bgcolor: 'background.default',\n                display: 'grid',\n                gridTemplateColumns: { md: '1fr 1fr' },\n                gap: 2,\n              }}\n            >\n              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (\n                <Item key={elevation} elevation={elevation}>\n                  {`elevation=${elevation}`}\n                </Item>\n              ))}\n            </Box>\n          </ThemeProvider>\n        </Grid>\n      ))}\n    </Grid>\n  );\n}\n"},65229:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\n\nexport default function SimplePaper() {\n  return (\n    <Box\n      sx={{\n        display: 'flex',\n        flexWrap: 'wrap',\n        '& > :not(style)': {\n          m: 1,\n          width: 128,\n          height: 128,\n        },\n      }}\n    >\n      <Paper elevation={0} />\n      <Paper />\n      <Paper elevation={3} />\n    </Box>\n  );\n}\n"},50119:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\n\nexport default function Variants() {\n  return (\n    <Box\n      sx={{\n        display: 'flex',\n        '& > :not(style)': {\n          m: 1,\n          width: 128,\n          height: 128,\n        },\n      }}\n    >\n      <Paper variant=\"outlined\" />\n      <Paper variant=\"outlined\" square />\n    </Box>\n  );\n}\n"},21306:(e,n,t)=>{t.d(n,{A:()=>P});var a=t(95529),r=t(88124),o=t(87369),i=t(33358),s=t(96915),l=t(88094),c=t(89720),d=t(84178),m=t(83775),h=t(33351),p=t(90777),u=t(71739),x=t(33209),f=t(34057),g=t(91073),j=t(60209),v=t(15678);function y(e){const{children:n,document:t}=e,a=(0,f.A)();l.useEffect((()=>{t.body.dir=a.direction}),[t,a.direction]);const r=l.useMemo((()=>(0,p.A)({key:`iframe-demo-${a.direction}`,prepend:!0,container:t.head,stylisPlugins:"rtl"===a.direction?[h.A]:[]})),[t,a.direction]),o=l.useCallback((()=>t.defaultView),[t]);return(0,v.jsx)(x.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===a.direction?[h.A]:[],children:(0,v.jsxs)(u.C,{value:r,children:[(0,v.jsx)(j.A,{styles:()=>({html:{fontSize:"62.5%"}})}),l.cloneElement(n,{window:o})]})})}const A=(0,g.Ay)("iframe")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function b(e){var n;const{children:t,name:a,...r}=e,o=`${a} demo`,i=l.useRef(null),[s,c]=l.useReducer((()=>!0),!1);l.useEffect((()=>{const e=i.current.contentDocument;null==e||"complete"!==e.readyState||s||c()}),[s]);const d=null===(n=i.current)||void 0===n?void 0:n.contentDocument;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(A,{onLoad:c,ref:i,title:o,...r}),!1!==s?m.createPortal((0,v.jsx)(y,{document:d,children:t}),d.body):null]})}const k=l.memo(b);var w=t(98231);function N(e){const[n,t]=(0,l.useState)(e.currentTabIndex),{component:m,raw:h,iframe:p,className:u,name:x}=e;return(0,v.jsxs)(r.A,{className:(0,s.A)(u,"shadow"),sx:{backgroundColor:e=>(0,c.e$)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)},children:[(0,v.jsx)(d.A,{sx:{backgroundColor:e=>(0,c.e$)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)},children:(0,v.jsxs)(i.A,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:n,onChange:function(e,n){t(n)},textColor:"secondary",indicatorColor:"secondary",children:[m&&(0,v.jsx)(o.A,{classes:{root:"min-w-64"},icon:(0,v.jsx)(w.A,{children:"heroicons-outline:eye"})}),h&&(0,v.jsx)(o.A,{classes:{root:"min-w-64"},icon:(0,v.jsx)(w.A,{children:"heroicons-outline:code"})})]})}),(0,v.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,v.jsx)("div",{className:0===n?"flex flex-1 max-w-full":"hidden",children:m&&(p?(0,v.jsx)(k,{name:x,children:(0,v.jsx)(m,{})}):(0,v.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,v.jsx)(m,{})}))}),(0,v.jsx)("div",{className:1===n?"flex flex-1":"hidden",children:h&&(0,v.jsx)("div",{className:"flex flex-1",children:(0,v.jsx)(a.A,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})})})]})]})}N.defaultProps={name:"",currentTabIndex:0};const P=N},81697:(e,n,t)=>{t.d(n,{A:()=>p});t(88094);var a=t(63347),r=t(26246),o=t(84178),i=t(91073),s=t(72905),l=t(12317),c=t(15678);const d=(0,i.Ay)(r.A)((e=>{let{theme:n}=e;return{...n.typography.body2,textAlign:"center",color:n.palette.text.secondary,height:60,lineHeight:"60px"}})),m=(0,s.A)({palette:{mode:"dark"}}),h=(0,s.A)({palette:{mode:"light"}});function p(){return(0,c.jsx)(a.Ay,{container:!0,spacing:2,children:[h,m].map(((e,n)=>(0,c.jsx)(a.Ay,{item:!0,xs:6,children:(0,c.jsx)(l.A,{theme:e,children:(0,c.jsx)(o.A,{sx:{p:2,bgcolor:"background.default",display:"grid",gridTemplateColumns:{md:"1fr 1fr"},gap:2},children:[0,1,2,3,4,6,8,12,16,24].map((e=>(0,c.jsx)(d,{elevation:e,children:`elevation=${e}`},e)))})})},n)))})}},2986:(e,n,t)=>{t.d(n,{A:()=>i});t(88094);var a=t(84178),r=t(26246),o=t(15678);function i(){return(0,o.jsxs)(a.A,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},children:[(0,o.jsx)(r.A,{elevation:0}),(0,o.jsx)(r.A,{}),(0,o.jsx)(r.A,{elevation:3})]})}},39146:(e,n,t)=>{t.d(n,{A:()=>i});t(88094);var a=t(84178),r=t(26246),o=t(15678);function i(){return(0,o.jsxs)(a.A,{sx:{display:"flex","& > :not(style)":{m:1,width:128,height:128}},children:[(0,o.jsx)(r.A,{variant:"outlined"}),(0,o.jsx)(r.A,{variant:"outlined",square:!0})]})}},89459:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var a=t(21306),r=t(98231),o=t(76880),i=t(78298),s=t(15678);const l=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,s.jsx)(o.A,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/paper",target:"_blank",role:"button",startIcon:(0,s.jsx)(r.A,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,s.jsx)(i.A,{className:"text-40 my-16 font-700",component:"h1",children:"Paper"}),(0,s.jsxs)(i.A,{className:"description",children:["In Material Design, the physical properties of paper are translated to the screen."," "]}),(0,s.jsx)(i.A,{className:"mb-40",component:"div",children:"The background of an application resembles the flat, opaque texture of a sheet of paper, and an application's behavior mimics paper's ability to be re-sized, shuffled, and bound together in multiple sheets."}),(0,s.jsx)(i.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic paper"}),(0,s.jsx)(i.A,{className:"mb-40",component:"div",children:(0,s.jsx)(a.A,{name:"SimplePaper.js",className:"my-24",iframe:!1,component:t(2986).A,raw:t(65229)})}),(0,s.jsx)(i.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Variants"}),(0,s.jsxs)(i.A,{className:"mb-40",component:"div",children:["If you need an outlined surface, use the ",(0,s.jsx)("code",{children:"variant"})," prop."]}),(0,s.jsx)(i.A,{className:"mb-40",component:"div",children:(0,s.jsx)(a.A,{name:"Variants.js",className:"my-24",iframe:!1,component:t(39146).A,raw:t(50119)})}),(0,s.jsx)(i.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Elevation"}),(0,s.jsx)(i.A,{className:"mb-40",component:"div",children:"The elevation can be used to establish a hierarchy between other content. In practical terms, the elevation controls the size of the shadow applied to the surface. In dark mode, raising the elevation also makes the surface lighter."}),(0,s.jsx)(i.A,{className:"mb-40",component:"div",children:(0,s.jsx)(a.A,{name:"Elevation.js",className:"my-24",iframe:!1,component:t(81697).A,raw:t(63658)})}),(0,s.jsxs)(i.A,{className:"mb-40",component:"div",children:["The change of shade in dark mode is done by applying a semi-transparent gradient to the"," ",(0,s.jsx)("code",{children:"background-image"})," property. This can lead to confusion when overriding the styles of ",(0,s.jsx)("code",{children:"Paper"}),", as setting just the ",(0,s.jsx)("code",{children:"background-color"})," property will not affect the elevation-related shading. To ignore the shading and set the background color that is not affected by elevation in dark mode, override the ",(0,s.jsx)("code",{children:"background"})," ","property (or both ",(0,s.jsx)("code",{children:"background-color"})," and ",(0,s.jsx)("code",{children:"background-image"}),")."]})]})}}}]);