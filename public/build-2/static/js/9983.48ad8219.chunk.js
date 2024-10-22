"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9983],{65559:(a,e,t)=>{t.r(e),t.d(e,{default:()=>r});const r="import * as React from 'react';\nimport Avatar from '@mui/material/Avatar';\nimport Stack from '@mui/material/Stack';\n\nfunction stringToColor(string) {\n  let hash = 0;\n  let i;\n\n  /* eslint-disable no-bitwise */\n  for (i = 0; i < string.length; i += 1) {\n    hash = string.charCodeAt(i) + ((hash << 5) - hash);\n  }\n\n  let color = '#';\n\n  for (i = 0; i < 3; i += 1) {\n    const value = (hash >> (i * 8)) & 0xff;\n    color += `00${value.toString(16)}`.slice(-2);\n  }\n  /* eslint-enable no-bitwise */\n\n  return color;\n}\n\nfunction stringAvatar(name) {\n  return {\n    sx: {\n      bgcolor: stringToColor(name),\n    },\n    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,\n  };\n}\n\nexport default function BackgroundLetterAvatars() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <Avatar {...stringAvatar('Kent Dodds')} />\n      <Avatar {...stringAvatar('Jed Watson')} />\n      <Avatar {...stringAvatar('Tim Neutkens')} />\n    </Stack>\n  );\n}\n"},95414:(a,e,t)=>{t.r(e),t.d(e,{default:()=>r});const r="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Badge from '@mui/material/Badge';\nimport Avatar from '@mui/material/Avatar';\nimport Stack from '@mui/material/Stack';\n\nconst StyledBadge = styled(Badge)(({ theme }) => ({\n  '& .MuiBadge-badge': {\n    backgroundColor: '#44b700',\n    color: '#44b700',\n    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,\n    '&::after': {\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      width: '100%',\n      height: '100%',\n      borderRadius: '50%',\n      animation: 'ripple 1.2s infinite ease-in-out',\n      border: '1px solid currentColor',\n      content: '\"\"',\n    },\n  },\n  '@keyframes ripple': {\n    '0%': {\n      transform: 'scale(.8)',\n      opacity: 1,\n    },\n    '100%': {\n      transform: 'scale(2.4)',\n      opacity: 0,\n    },\n  },\n}));\n\nconst SmallAvatar = styled(Avatar)(({ theme }) => ({\n  width: 22,\n  height: 22,\n  border: `2px solid ${theme.palette.background.paper}`,\n}));\n\nexport default function BadgeAvatars() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <StyledBadge\n        overlap=\"circular\"\n        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}\n        variant=\"dot\"\n      >\n        <Avatar alt=\"Remy Sharp\" src=\"/material-ui-static/images/avatar/1.jpg\" />\n      </StyledBadge>\n      <Badge\n        overlap=\"circular\"\n        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}\n        badgeContent={\n          <SmallAvatar alt=\"Remy Sharp\" src=\"/material-ui-static/images/avatar/1.jpg\" />\n        }\n      >\n        <Avatar alt=\"Travis Howard\" src=\"/material-ui-static/images/avatar/2.jpg\" />\n      </Badge>\n    </Stack>\n  );\n}\n"},92469:(a,e,t)=>{t.r(e),t.d(e,{default:()=>r});const r='import * as React from \'react\';\nimport Avatar from \'@mui/material/Avatar\';\nimport Stack from \'@mui/material/Stack\';\nimport { deepOrange } from \'@mui/material/colors\';\n\nexport default function FallbackAvatars() {\n  return (\n    <Stack direction="row" spacing={2}>\n      <Avatar\n        sx={{ bgcolor: deepOrange[500] }}\n        alt="Remy Sharp"\n        src="/broken-image.jpg"\n      >\n        B\n      </Avatar>\n      <Avatar\n        sx={{ bgcolor: deepOrange[500] }}\n        alt="Remy Sharp"\n        src="/broken-image.jpg"\n      />\n      <Avatar src="/broken-image.jpg" />\n    </Stack>\n  );\n}\n'},88242:(a,e,t)=>{t.r(e),t.d(e,{default:()=>r});const r='import * as React from \'react\';\nimport Avatar from \'@mui/material/Avatar\';\nimport AvatarGroup from \'@mui/material/AvatarGroup\';\n\nexport default function GroupAvatars() {\n  return (\n    <AvatarGroup max={4}>\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />\n      <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />\n      <Avatar alt="Agnes Walker" src="/material-ui-static/images/avatar/4.jpg" />\n      <Avatar alt="Trevor Henderson" src="/material-ui-static/images/avatar/5.jpg" />\n    </AvatarGroup>\n  );\n}\n'},73640:(a,e,t)=>{t.r(e),t.d(e,{default:()=>r});const r="import * as React from 'react';\nimport { green, pink } from '@mui/material/colors';\nimport Avatar from '@mui/material/Avatar';\nimport Stack from '@mui/material/Stack';\nimport FolderIcon from '@mui/icons-material/Folder';\nimport PageviewIcon from '@mui/icons-material/Pageview';\nimport AssignmentIcon from '@mui/icons-material/Assignment';\n\nexport default function IconAvatars() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <Avatar>\n        <FolderIcon />\n      </Avatar>\n      <Avatar sx={{ bgcolor: pink[500] }}>\n        <PageviewIcon />\n      </Avatar>\n      <Avatar sx={{ bgcolor: green[500] }}>\n        <AssignmentIcon />\n      </Avatar>\n    </Stack>\n  );\n}\n"},7856:(a,e,t)=>{t.r(e),t.d(e,{default:()=>r});const r='import * as React from \'react\';\nimport Avatar from \'@mui/material/Avatar\';\nimport Stack from \'@mui/material/Stack\';\n\nexport default function ImageAvatars() {\n  return (\n    <Stack direction="row" spacing={2}>\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />\n      <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />\n    </Stack>\n  );\n}\n'},80359:(a,e,t)=>{t.r(e),t.d(e,{default:()=>r});const r="import * as React from 'react';\nimport Avatar from '@mui/material/Avatar';\nimport Stack from '@mui/material/Stack';\nimport { deepOrange, deepPurple } from '@mui/material/colors';\n\nexport default function LetterAvatars() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <Avatar>H</Avatar>\n      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>\n      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>\n    </Stack>\n  );\n}\n"},7028:(a,e,t)=>{t.r(e),t.d(e,{default:()=>r});const r='import * as React from \'react\';\nimport Avatar from \'@mui/material/Avatar\';\nimport Stack from \'@mui/material/Stack\';\n\nexport default function ImageAvatars() {\n  return (\n    <Stack direction="row" spacing={2}>\n      <Avatar\n        alt="Remy Sharp"\n        src="/material-ui-static/images/avatar/1.jpg"\n        sx={{ width: 24, height: 24 }}\n      />\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar\n        alt="Remy Sharp"\n        src="/material-ui-static/images/avatar/1.jpg"\n        sx={{ width: 56, height: 56 }}\n      />\n    </Stack>\n  );\n}\n'},98369:(a,e,t)=>{t.r(e),t.d(e,{default:()=>r});const r='import * as React from \'react\';\nimport Avatar from \'@mui/material/Avatar\';\nimport AvatarGroup from \'@mui/material/AvatarGroup\';\n\nexport default function TotalAvatars() {\n  return (\n    <AvatarGroup total={24}>\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />\n      <Avatar alt="Agnes Walker" src="/material-ui-static/images/avatar/4.jpg" />\n      <Avatar alt="Trevor Henderson" src="/material-ui-static/images/avatar/5.jpg" />\n    </AvatarGroup>\n  );\n}\n'},38876:(a,e,t)=>{t.r(e),t.d(e,{default:()=>r});const r="import * as React from 'react';\nimport Avatar from '@mui/material/Avatar';\nimport Stack from '@mui/material/Stack';\nimport { deepOrange, green } from '@mui/material/colors';\nimport AssignmentIcon from '@mui/icons-material/Assignment';\n\nexport default function VariantAvatars() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <Avatar sx={{ bgcolor: deepOrange[500] }} variant=\"square\">\n        N\n      </Avatar>\n      <Avatar sx={{ bgcolor: green[500] }} variant=\"rounded\">\n        <AssignmentIcon />\n      </Avatar>\n    </Stack>\n  );\n}\n"},21306:(a,e,t)=>{t.d(e,{A:()=>N});var r=t(95529),n=t(88124),i=t(87369),s=t(33358),o=t(96915),c=t(88094),l=t(89720),m=t(84178),d=t(83775),p=t(33351),u=t(90777),A=t(71739),v=t(33209),h=t(34057),g=t(91073),x=t(60209),f=t(15678);function j(a){const{children:e,document:t}=a,r=(0,h.A)();c.useEffect((()=>{t.body.dir=r.direction}),[t,r.direction]);const n=c.useMemo((()=>(0,u.A)({key:`iframe-demo-${r.direction}`,prepend:!0,container:t.head,stylisPlugins:"rtl"===r.direction?[p.A]:[]})),[t,r.direction]),i=c.useCallback((()=>t.defaultView),[t]);return(0,f.jsx)(v.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===r.direction?[p.A]:[],children:(0,f.jsxs)(A.C,{value:n,children:[(0,f.jsx)(x.A,{styles:()=>({html:{fontSize:"62.5%"}})}),c.cloneElement(e,{window:i})]})})}const b=(0,g.Ay)("iframe")((a=>{let{theme:e}=a;return{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:e.shadows[1]}}));function k(a){var e;const{children:t,name:r,...n}=a,i=`${r} demo`,s=c.useRef(null),[o,l]=c.useReducer((()=>!0),!1);c.useEffect((()=>{const a=s.current.contentDocument;null==a||"complete"!==a.readyState||o||l()}),[o]);const m=null===(e=s.current)||void 0===e?void 0:e.contentDocument;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b,{onLoad:l,ref:s,title:i,...n}),!1!==o?d.createPortal((0,f.jsx)(j,{document:m,children:t}),m.body):null]})}const y=c.memo(k);var w=t(98231);function S(a){const[e,t]=(0,c.useState)(a.currentTabIndex),{component:d,raw:p,iframe:u,className:A,name:v}=a;return(0,f.jsxs)(n.A,{className:(0,o.A)(A,"shadow"),sx:{backgroundColor:a=>(0,l.e$)(a.palette.background.paper,"light"===a.palette.mode?.01:.1)},children:[(0,f.jsx)(m.A,{sx:{backgroundColor:a=>(0,l.e$)(a.palette.background.paper,"light"===a.palette.mode?.02:.2)},children:(0,f.jsxs)(s.A,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:e,onChange:function(a,e){t(e)},textColor:"secondary",indicatorColor:"secondary",children:[d&&(0,f.jsx)(i.A,{classes:{root:"min-w-64"},icon:(0,f.jsx)(w.A,{children:"heroicons-outline:eye"})}),p&&(0,f.jsx)(i.A,{classes:{root:"min-w-64"},icon:(0,f.jsx)(w.A,{children:"heroicons-outline:code"})})]})}),(0,f.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,f.jsx)("div",{className:0===e?"flex flex-1 max-w-full":"hidden",children:d&&(u?(0,f.jsx)(y,{name:v,children:(0,f.jsx)(d,{})}):(0,f.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,f.jsx)(d,{})}))}),(0,f.jsx)("div",{className:1===e?"flex flex-1":"hidden",children:p&&(0,f.jsx)("div",{className:"flex flex-1",children:(0,f.jsx)(r.A,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:p.default})})})]})]})}S.defaultProps={name:"",currentTabIndex:0};const N=S},46224:(a,e,t)=>{t.d(e,{A:()=>c});t(88094);var r=t(74896),n=t(69825),i=t(15678);function s(a){let e,t=0;for(e=0;e<a.length;e+=1)t=a.charCodeAt(e)+((t<<5)-t);let r="#";for(e=0;e<3;e+=1){r+=`00${(t>>8*e&255).toString(16)}`.slice(-2)}return r}function o(a){return{sx:{bgcolor:s(a)},children:`${a.split(" ")[0][0]}${a.split(" ")[1][0]}`}}function c(){return(0,i.jsxs)(n.A,{direction:"row",spacing:2,children:[(0,i.jsx)(r.A,{...o("Kent Dodds")}),(0,i.jsx)(r.A,{...o("Jed Watson")}),(0,i.jsx)(r.A,{...o("Tim Neutkens")})]})}},10807:(a,e,t)=>{t.d(e,{A:()=>m});t(88094);var r=t(91073),n=t(95428),i=t(74896),s=t(69825),o=t(15678);const c=(0,r.Ay)(n.A)((a=>{let{theme:e}=a;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:`0 0 0 2px ${e.palette.background.paper}`,"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}})),l=(0,r.Ay)(i.A)((a=>{let{theme:e}=a;return{width:22,height:22,border:`2px solid ${e.palette.background.paper}`}}));function m(){return(0,o.jsxs)(s.A,{direction:"row",spacing:2,children:[(0,o.jsx)(c,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,o.jsx)(i.A,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"})}),(0,o.jsx)(n.A,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:(0,o.jsx)(l,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),children:(0,o.jsx)(i.A,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"})})]})}},77130:(a,e,t)=>{t.d(e,{A:()=>o});t(88094);var r=t(74896),n=t(69825),i=t(90099),s=t(15678);function o(){return(0,s.jsxs)(n.A,{direction:"row",spacing:2,children:[(0,s.jsx)(r.A,{sx:{bgcolor:i.A[500]},alt:"Remy Sharp",src:"/broken-image.jpg",children:"B"}),(0,s.jsx)(r.A,{sx:{bgcolor:i.A[500]},alt:"Remy Sharp",src:"/broken-image.jpg"}),(0,s.jsx)(r.A,{src:"/broken-image.jpg"})]})}},84159:(a,e,t)=>{t.d(e,{A:()=>s});t(88094);var r=t(74896),n=t(99805),i=t(15678);function s(){return(0,i.jsxs)(n.A,{max:4,children:[(0,i.jsx)(r.A,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),(0,i.jsx)(r.A,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),(0,i.jsx)(r.A,{alt:"Cindy Baker",src:"/material-ui-static/images/avatar/3.jpg"}),(0,i.jsx)(r.A,{alt:"Agnes Walker",src:"/material-ui-static/images/avatar/4.jpg"}),(0,i.jsx)(r.A,{alt:"Trevor Henderson",src:"/material-ui-static/images/avatar/5.jpg"})]})}},82743:(a,e,t)=>{t.d(e,{A:()=>d});t(88094);var r=t(50799),n=t(79972),i=t(74896),s=t(69825),o=t(28303),c=t(63357),l=t(45238),m=t(15678);function d(){return(0,m.jsxs)(s.A,{direction:"row",spacing:2,children:[(0,m.jsx)(i.A,{children:(0,m.jsx)(o.A,{})}),(0,m.jsx)(i.A,{sx:{bgcolor:r.A[500]},children:(0,m.jsx)(c.A,{})}),(0,m.jsx)(i.A,{sx:{bgcolor:n.A[500]},children:(0,m.jsx)(l.A,{})})]})}},91017:(a,e,t)=>{t.d(e,{A:()=>s});t(88094);var r=t(74896),n=t(69825),i=t(15678);function s(){return(0,i.jsxs)(n.A,{direction:"row",spacing:2,children:[(0,i.jsx)(r.A,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),(0,i.jsx)(r.A,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),(0,i.jsx)(r.A,{alt:"Cindy Baker",src:"/material-ui-static/images/avatar/3.jpg"})]})}},42500:(a,e,t)=>{t.d(e,{A:()=>c});t(88094);var r=t(74896),n=t(69825),i=t(90099),s=t(79695),o=t(15678);function c(){return(0,o.jsxs)(n.A,{direction:"row",spacing:2,children:[(0,o.jsx)(r.A,{children:"H"}),(0,o.jsx)(r.A,{sx:{bgcolor:i.A[500]},children:"N"}),(0,o.jsx)(r.A,{sx:{bgcolor:s.A[500]},children:"OP"})]})}},60367:(a,e,t)=>{t.d(e,{A:()=>s});t(88094);var r=t(74896),n=t(69825),i=t(15678);function s(){return(0,i.jsxs)(n.A,{direction:"row",spacing:2,children:[(0,i.jsx)(r.A,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg",sx:{width:24,height:24}}),(0,i.jsx)(r.A,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),(0,i.jsx)(r.A,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg",sx:{width:56,height:56}})]})}},33648:(a,e,t)=>{t.d(e,{A:()=>s});t(88094);var r=t(74896),n=t(99805),i=t(15678);function s(){return(0,i.jsxs)(n.A,{total:24,children:[(0,i.jsx)(r.A,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),(0,i.jsx)(r.A,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),(0,i.jsx)(r.A,{alt:"Agnes Walker",src:"/material-ui-static/images/avatar/4.jpg"}),(0,i.jsx)(r.A,{alt:"Trevor Henderson",src:"/material-ui-static/images/avatar/5.jpg"})]})}},39653:(a,e,t)=>{t.d(e,{A:()=>l});t(88094);var r=t(74896),n=t(69825),i=t(90099),s=t(79972),o=t(45238),c=t(15678);function l(){return(0,c.jsxs)(n.A,{direction:"row",spacing:2,children:[(0,c.jsx)(r.A,{sx:{bgcolor:i.A[500]},variant:"square",children:"N"}),(0,c.jsx)(r.A,{sx:{bgcolor:s.A[500]},variant:"rounded",children:(0,c.jsx)(o.A,{})})]})}},99983:(a,e,t)=>{t.r(e),t.d(e,{default:()=>c});var r=t(21306),n=t(98231),i=t(76880),s=t(78298),o=t(15678);const c=function(a){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,o.jsx)(i.A,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/avatars",target:"_blank",role:"button",startIcon:(0,o.jsx)(n.A,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,o.jsx)(s.A,{className:"text-40 my-16 font-700",component:"h1",children:"Avatar"}),(0,o.jsx)(s.A,{className:"description",children:"Avatars are found throughout material design with uses in everything from tables to dialog menus."}),(0,o.jsx)(s.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Image avatars"}),(0,o.jsxs)(s.A,{className:"mb-40",component:"div",children:["Image avatars can be created by passing standard ",(0,o.jsx)("code",{children:"img"})," props ",(0,o.jsx)("code",{children:"src"})," or"," ",(0,o.jsx)("code",{children:"srcSet"})," to the component."]}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:(0,o.jsx)(r.A,{name:"ImageAvatars.js",className:"my-24",iframe:!1,component:t(91017).A,raw:t(7856)})}),(0,o.jsx)(s.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Letter avatars"}),(0,o.jsxs)(s.A,{className:"mb-40",component:"div",children:["Avatars containing simple characters can be created by passing a string as"," ",(0,o.jsx)("code",{children:"children"}),"."]}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:(0,o.jsx)(r.A,{name:"LetterAvatars.js",className:"my-24",iframe:!1,component:t(42500).A,raw:t(80359)})}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:"You can use different background colors for the avatar. The following demo generates the color based on the name of the person."}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:(0,o.jsx)(r.A,{name:"BackgroundLetterAvatars.js",className:"my-24",iframe:!1,component:t(46224).A,raw:t(65559)})}),(0,o.jsx)(s.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Sizes"}),(0,o.jsxs)(s.A,{className:"mb-40",component:"div",children:["You can change the size of the avatar with the ",(0,o.jsx)("code",{children:"height"})," and ",(0,o.jsx)("code",{children:"width"})," ","CSS properties."]}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:(0,o.jsx)(r.A,{name:"SizeAvatars.js",className:"my-24",iframe:!1,component:t(60367).A,raw:t(7028)})}),(0,o.jsx)(s.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Icon avatars"}),(0,o.jsxs)(s.A,{className:"mb-40",component:"div",children:["Icon avatars are created by passing an icon as ",(0,o.jsx)("code",{children:"children"}),"."]}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:(0,o.jsx)(r.A,{name:"IconAvatars.js",className:"my-24",iframe:!1,component:t(82743).A,raw:t(73640)})}),(0,o.jsx)(s.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Variants"}),(0,o.jsxs)(s.A,{className:"mb-40",component:"div",children:["If you need square or rounded avatars, use the ",(0,o.jsx)("code",{children:"variant"})," prop."]}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:(0,o.jsx)(r.A,{name:"VariantAvatars.js",className:"my-24",iframe:!1,component:t(39653).A,raw:t(38876)})}),(0,o.jsx)(s.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Fallbacks"}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:"If there is an error loading the avatar image, the component falls back to an alternative in the following order:"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"the provided children"}),(0,o.jsxs)("li",{children:["the first letter of the ",(0,o.jsx)("code",{children:"alt"})," text"]}),(0,o.jsx)("li",{children:"a generic avatar icon"})]}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:(0,o.jsx)(r.A,{name:"FallbackAvatars.js",className:"my-24",iframe:!1,component:t(77130).A,raw:t(92469)})}),(0,o.jsx)(s.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Grouped"}),(0,o.jsxs)(s.A,{className:"mb-40",component:"div",children:[(0,o.jsx)("code",{children:"AvatarGroup"})," renders its children as a stack. Use the ",(0,o.jsx)("code",{children:"max"})," prop to limit the number of avatars."]}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:(0,o.jsx)(r.A,{name:"GroupAvatars.js",className:"my-24",iframe:!1,component:t(84159).A,raw:t(88242)})}),(0,o.jsx)(s.A,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Total avatars"}),(0,o.jsxs)(s.A,{className:"mb-40",component:"div",children:["If you need to control the total number of avatars not shown, you can use the"," ",(0,o.jsx)("code",{children:"total"})," prop."]}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:(0,o.jsx)(r.A,{name:"TotalAvatars.js",className:"my-24",iframe:!1,component:t(33648).A,raw:t(98369)})}),(0,o.jsx)(s.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"With badge"}),(0,o.jsx)(s.A,{className:"mb-40",component:"div",children:(0,o.jsx)(r.A,{name:"BadgeAvatars.js",className:"my-24",iframe:!1,component:t(10807).A,raw:t(95414)})})]})}},45238:(a,e,t)=>{var r=t(24994);e.A=void 0;var n=r(t(89158)),i=t(15678),s=(0,n.default)((0,i.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment");e.A=s},28303:(a,e,t)=>{var r=t(24994);e.A=void 0;var n=r(t(89158)),i=t(15678),s=(0,n.default)((0,i.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder");e.A=s},63357:(a,e,t)=>{var r=t(24994);e.A=void 0;var n=r(t(89158)),i=t(15678),s=(0,n.default)((0,i.jsx)("path",{d:"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"}),"Pageview");e.A=s},69825:(a,e,t)=>{t.d(e,{A:()=>h});var r=t(98587),n=t(58168),i=t(88094),s=t(13549),o=t(55333),c=t(72812),l=t(59278),m=t(91073),d=t(92443),p=t(15678);const u=["component","direction","spacing","divider","children"];function A(a,e){const t=i.Children.toArray(a).filter(Boolean);return t.reduce(((a,r,n)=>(a.push(r),n<t.length-1&&a.push(i.cloneElement(e,{key:`separator-${n}`})),a)),[])}const v=(0,m.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(a,e)=>[e.root]})((a=>{let{ownerState:e,theme:t}=a,r=(0,n.A)({display:"flex"},(0,s.NI)({theme:t},(0,s.kW)({values:e.direction,breakpoints:t.breakpoints.values}),(a=>({flexDirection:a}))));if(e.spacing){const a=(0,o.LX)(t),n=Object.keys(t.breakpoints.values).reduce(((a,t)=>(null==e.spacing[t]&&null==e.direction[t]||(a[t]=!0),a)),{}),i=(0,s.kW)({values:e.direction,base:n}),c=(0,s.kW)({values:e.spacing,base:n}),m=(t,r)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${n=r?i[r]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]}`]:(0,o._W)(a,t)}};var n};r=(0,l.A)(r,(0,s.NI)({theme:t},c,m))}return r})),h=i.forwardRef((function(a,e){const t=(0,d.A)({props:a,name:"MuiStack"}),i=(0,c.A)(t),{component:s="div",direction:o="column",spacing:l=0,divider:m,children:h}=i,g=(0,r.A)(i,u),x={direction:o,spacing:l};return(0,p.jsx)(v,(0,n.A)({as:s,ownerState:x,ref:e},g,{children:m?A(h,m):h}))}))}}]);