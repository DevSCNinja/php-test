"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[3104],{94862:(e,n,o)=>{o.r(n),o.d(n,{default:()=>i});const i="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function BasicSpeedDial() {\n  return (\n    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <SpeedDial\n        ariaLabel=\"SpeedDial basic example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon />}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"},74886:(e,n,o)=>{o.r(n),o.d(n,{default:()=>i});const i="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function ControlledOpenSpeedDial() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <SpeedDial\n        ariaLabel=\"SpeedDial controlled open example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon />}\n        onClose={handleClose}\n        onOpen={handleOpen}\n        open={open}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n            onClick={handleClose}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"},99543:(e,n,o)=>{o.r(n),o.d(n,{default:()=>i});const i="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\nimport EditIcon from '@mui/icons-material/Edit';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function OpenIconSpeedDial() {\n  return (\n    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <SpeedDial\n        ariaLabel=\"SpeedDial openIcon example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon openIcon={<EditIcon />} />}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"},51935:(e,n,o)=>{o.r(n),o.d(n,{default:()=>i});const i="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport FormControl from '@mui/material/FormControl';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport FormLabel from '@mui/material/FormLabel';\nimport Radio from '@mui/material/Radio';\nimport RadioGroup from '@mui/material/RadioGroup';\nimport Switch from '@mui/material/Switch';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({\n  position: 'absolute',\n  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {\n    bottom: theme.spacing(2),\n    right: theme.spacing(2),\n  },\n  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {\n    top: theme.spacing(2),\n    left: theme.spacing(2),\n  },\n}));\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function PlaygroundSpeedDial() {\n  const [direction, setDirection] = React.useState('up');\n  const [hidden, setHidden] = React.useState(false);\n\n  const handleDirectionChange = (event) => {\n    setDirection(event.target.value);\n  };\n\n  const handleHiddenChange = (event) => {\n    setHidden(event.target.checked);\n  };\n\n  return (\n    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <FormControlLabel\n        control={\n          <Switch checked={hidden} onChange={handleHiddenChange} color=\"primary\" />\n        }\n        label=\"Hidden\"\n      />\n      <FormControl component=\"fieldset\" sx={{ mt: 1, display: 'flex' }}>\n        <FormLabel component=\"legend\">Direction</FormLabel>\n        <RadioGroup\n          aria-label=\"direction\"\n          name=\"direction\"\n          value={direction}\n          onChange={handleDirectionChange}\n          row\n        >\n          <FormControlLabel value=\"up\" control={<Radio />} label=\"Up\" />\n          <FormControlLabel value=\"right\" control={<Radio />} label=\"Right\" />\n          <FormControlLabel value=\"down\" control={<Radio />} label=\"Down\" />\n          <FormControlLabel value=\"left\" control={<Radio />} label=\"Left\" />\n        </RadioGroup>\n      </FormControl>\n      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>\n        <StyledSpeedDial\n          ariaLabel=\"SpeedDial playground example\"\n          hidden={hidden}\n          icon={<SpeedDialIcon />}\n          direction={direction}\n        >\n          {actions.map((action) => (\n            <SpeedDialAction\n              key={action.name}\n              icon={action.icon}\n              tooltipTitle={action.name}\n            />\n          ))}\n        </StyledSpeedDial>\n      </Box>\n    </Box>\n  );\n}\n"},90825:(e,n,o)=>{o.r(n),o.d(n,{default:()=>i});const i="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Backdrop from '@mui/material/Backdrop';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function SpeedDialTooltipOpen() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <Backdrop open={open} />\n      <SpeedDial\n        ariaLabel=\"SpeedDial tooltip example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon />}\n        onClose={handleClose}\n        onOpen={handleOpen}\n        open={open}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n            tooltipOpen\n            onClick={handleClose}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"},21306:(e,n,o)=>{o.d(n,{A:()=>I});var i=o(95529),a=o(88124),t=o(87369),r=o(33358),l=o(96915),c=o(88094),s=o(89720),m=o(84178),d=o(83775),p=o(33351),h=o(90777),x=o(71739),u=o(33209),f=o(34057),S=o(91073),j=o(60209),A=o(15678);function b(e){const{children:n,document:o}=e,i=(0,f.A)();c.useEffect((()=>{o.body.dir=i.direction}),[o,i.direction]);const a=c.useMemo((()=>(0,h.A)({key:`iframe-demo-${i.direction}`,prepend:!0,container:o.head,stylisPlugins:"rtl"===i.direction?[p.A]:[]})),[o,i.direction]),t=c.useCallback((()=>o.defaultView),[o]);return(0,A.jsx)(u.StyleSheetManager,{target:o.head,stylisPlugins:"rtl"===i.direction?[p.A]:[],children:(0,A.jsxs)(x.C,{value:a,children:[(0,A.jsx)(j.A,{styles:()=>({html:{fontSize:"62.5%"}})}),c.cloneElement(n,{window:t})]})})}const D=(0,S.Ay)("iframe")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function v(e){var n;const{children:o,name:i,...a}=e,t=`${i} demo`,r=c.useRef(null),[l,s]=c.useReducer((()=>!0),!1);c.useEffect((()=>{const e=r.current.contentDocument;null==e||"complete"!==e.readyState||l||s()}),[l]);const m=null===(n=r.current)||void 0===n?void 0:n.contentDocument;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(D,{onLoad:s,ref:r,title:t,...a}),!1!==l?d.createPortal((0,A.jsx)(b,{document:m,children:o}),m.body):null]})}const g=c.memo(v);var y=o(98231);function C(e){const[n,o]=(0,c.useState)(e.currentTabIndex),{component:d,raw:p,iframe:h,className:x,name:u}=e;return(0,A.jsxs)(a.A,{className:(0,l.A)(x,"shadow"),sx:{backgroundColor:e=>(0,s.e$)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)},children:[(0,A.jsx)(m.A,{sx:{backgroundColor:e=>(0,s.e$)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)},children:(0,A.jsxs)(r.A,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:n,onChange:function(e,n){o(n)},textColor:"secondary",indicatorColor:"secondary",children:[d&&(0,A.jsx)(t.A,{classes:{root:"min-w-64"},icon:(0,A.jsx)(y.A,{children:"heroicons-outline:eye"})}),p&&(0,A.jsx)(t.A,{classes:{root:"min-w-64"},icon:(0,A.jsx)(y.A,{children:"heroicons-outline:code"})})]})}),(0,A.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,A.jsx)("div",{className:0===n?"flex flex-1 max-w-full":"hidden",children:d&&(h?(0,A.jsx)(g,{name:u,children:(0,A.jsx)(d,{})}):(0,A.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,A.jsx)(d,{})}))}),(0,A.jsx)("div",{className:1===n?"flex flex-1":"hidden",children:p&&(0,A.jsx)("div",{className:"flex flex-1",children:(0,A.jsx)(i.A,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:p.default})})})]})]})}C.defaultProps={name:"",currentTabIndex:0};const I=C},69417:(e,n,o)=>{o.d(n,{A:()=>h});o(88094);var i=o(84178),a=o(33255),t=o(12823),r=o(16918),l=o(77934),c=o(81922),s=o(57144),m=o(20964),d=o(15678);const p=[{icon:(0,d.jsx)(l.A,{}),name:"Copy"},{icon:(0,d.jsx)(c.A,{}),name:"Save"},{icon:(0,d.jsx)(s.A,{}),name:"Print"},{icon:(0,d.jsx)(m.A,{}),name:"Share"}];function h(){return(0,d.jsx)(i.A,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:(0,d.jsx)(a.A,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:(0,d.jsx)(t.A,{}),children:p.map((e=>(0,d.jsx)(r.A,{icon:e.icon,tooltipTitle:e.name},e.name)))})})}},89043:(e,n,o)=>{o.d(n,{A:()=>x});var i=o(88094),a=o(84178),t=o(33255),r=o(12823),l=o(16918),c=o(77934),s=o(81922),m=o(57144),d=o(20964),p=o(15678);const h=[{icon:(0,p.jsx)(c.A,{}),name:"Copy"},{icon:(0,p.jsx)(s.A,{}),name:"Save"},{icon:(0,p.jsx)(m.A,{}),name:"Print"},{icon:(0,p.jsx)(d.A,{}),name:"Share"}];function x(){const[e,n]=i.useState(!1),o=()=>n(!1);return(0,p.jsx)(a.A,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:(0,p.jsx)(t.A,{ariaLabel:"SpeedDial controlled open example",sx:{position:"absolute",bottom:16,right:16},icon:(0,p.jsx)(r.A,{}),onClose:o,onOpen:()=>n(!0),open:e,children:h.map((e=>(0,p.jsx)(l.A,{icon:e.icon,tooltipTitle:e.name,onClick:o},e.name)))})})}},92802:(e,n,o)=>{o.d(n,{A:()=>x});o(88094);var i=o(84178),a=o(33255),t=o(12823),r=o(16918),l=o(77934),c=o(81922),s=o(57144),m=o(20964),d=o(52671),p=o(15678);const h=[{icon:(0,p.jsx)(l.A,{}),name:"Copy"},{icon:(0,p.jsx)(c.A,{}),name:"Save"},{icon:(0,p.jsx)(s.A,{}),name:"Print"},{icon:(0,p.jsx)(m.A,{}),name:"Share"}];function x(){return(0,p.jsx)(i.A,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:(0,p.jsx)(a.A,{ariaLabel:"SpeedDial openIcon example",sx:{position:"absolute",bottom:16,right:16},icon:(0,p.jsx)(t.A,{openIcon:(0,p.jsx)(d.A,{})}),children:h.map((e=>(0,p.jsx)(r.A,{icon:e.icon,tooltipTitle:e.name},e.name)))})})}},9242:(e,n,o)=>{o.d(n,{A:()=>v});var i=o(88094),a=o(91073),t=o(84178),r=o(12540),l=o(96826),c=o(16029),s=o(3162),m=o(54751),d=o(59319),p=o(33255),h=o(12823),x=o(16918),u=o(77934),f=o(81922),S=o(57144),j=o(20964),A=o(15678);const b=(0,a.Ay)(p.A)((e=>{let{theme:n}=e;return{position:"absolute","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:n.spacing(2),right:n.spacing(2)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:n.spacing(2),left:n.spacing(2)}}})),D=[{icon:(0,A.jsx)(u.A,{}),name:"Copy"},{icon:(0,A.jsx)(f.A,{}),name:"Save"},{icon:(0,A.jsx)(S.A,{}),name:"Print"},{icon:(0,A.jsx)(j.A,{}),name:"Share"}];function v(){const[e,n]=i.useState("up"),[o,a]=i.useState(!1);return(0,A.jsxs)(t.A,{sx:{transform:"translateZ(0px)",flexGrow:1},children:[(0,A.jsx)(l.A,{control:(0,A.jsx)(d.A,{checked:o,onChange:e=>{a(e.target.checked)},color:"primary"}),label:"Hidden"}),(0,A.jsxs)(r.A,{component:"fieldset",sx:{mt:1,display:"flex"},children:[(0,A.jsx)(c.A,{component:"legend",children:"Direction"}),(0,A.jsxs)(m.A,{"aria-label":"direction",name:"direction",value:e,onChange:e=>{n(e.target.value)},row:!0,children:[(0,A.jsx)(l.A,{value:"up",control:(0,A.jsx)(s.A,{}),label:"Up"}),(0,A.jsx)(l.A,{value:"right",control:(0,A.jsx)(s.A,{}),label:"Right"}),(0,A.jsx)(l.A,{value:"down",control:(0,A.jsx)(s.A,{}),label:"Down"}),(0,A.jsx)(l.A,{value:"left",control:(0,A.jsx)(s.A,{}),label:"Left"})]})]}),(0,A.jsx)(t.A,{sx:{position:"relative",mt:3,height:320},children:(0,A.jsx)(b,{ariaLabel:"SpeedDial playground example",hidden:o,icon:(0,A.jsx)(h.A,{}),direction:e,children:D.map((e=>(0,A.jsx)(x.A,{icon:e.icon,tooltipTitle:e.name},e.name)))})})]})}},56418:(e,n,o)=>{o.d(n,{A:()=>u});var i=o(88094),a=o(84178),t=o(82286),r=o(33255),l=o(12823),c=o(16918),s=o(77934),m=o(81922),d=o(57144),p=o(20964),h=o(15678);const x=[{icon:(0,h.jsx)(s.A,{}),name:"Copy"},{icon:(0,h.jsx)(m.A,{}),name:"Save"},{icon:(0,h.jsx)(d.A,{}),name:"Print"},{icon:(0,h.jsx)(p.A,{}),name:"Share"}];function u(){const[e,n]=i.useState(!1),o=()=>n(!1);return(0,h.jsxs)(a.A,{sx:{height:330,transform:"translateZ(0px)",flexGrow:1},children:[(0,h.jsx)(t.A,{open:e}),(0,h.jsx)(r.A,{ariaLabel:"SpeedDial tooltip example",sx:{position:"absolute",bottom:16,right:16},icon:(0,h.jsx)(l.A,{}),onClose:o,onOpen:()=>n(!0),open:e,children:x.map((e=>(0,h.jsx)(c.A,{icon:e.icon,tooltipTitle:e.name,tooltipOpen:!0,onClick:o},e.name)))})]})}},23104:(e,n,o)=>{o.r(n),o.d(n,{default:()=>c});var i=o(21306),a=o(98231),t=o(76880),r=o(78298),l=o(15678);const c=function(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,l.jsx)(t.A,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/speed-dial",target:"_blank",role:"button",startIcon:(0,l.jsx)(a.A,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,l.jsx)(r.A,{className:"text-40 my-16 font-700",component:"h1",children:"Speed dial"}),(0,l.jsx)(r.A,{className:"description",children:"When pressed, a floating action button can display three to six related actions in the form of a speed dial."}),(0,l.jsx)(r.A,{className:"mb-40",component:"div",children:"If more than six actions are needed, something other than a FAB should be used to present them."}),(0,l.jsx)(r.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic speed dial"}),(0,l.jsx)(r.A,{className:"mb-40",component:"div",children:"The floating action button can display related actions."}),(0,l.jsx)(r.A,{className:"mb-40",component:"div",children:(0,l.jsx)(i.A,{name:"BasicSpeedDial.js",className:"my-24",iframe:!1,component:o(69417).A,raw:o(94862)})}),(0,l.jsx)(r.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Playground"}),(0,l.jsx)(r.A,{className:"mb-40",component:"div",children:(0,l.jsx)(i.A,{name:"PlaygroundSpeedDial.js",className:"my-24",iframe:!1,component:o(9242).A,raw:o(51935)})}),(0,l.jsx)(r.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Controlled speed dial"}),(0,l.jsxs)(r.A,{className:"mb-40",component:"div",children:["The open state of the component can be controlled with the ",(0,l.jsx)("code",{children:"open"}),"/",(0,l.jsx)("code",{children:"onOpen"}),"/",(0,l.jsx)("code",{children:"onClose"})," props."]}),(0,l.jsx)(r.A,{className:"mb-40",component:"div",children:(0,l.jsx)(i.A,{name:"ControlledOpenSpeedDial.js",className:"my-24",iframe:!1,component:o(89043).A,raw:o(74886)})}),(0,l.jsx)(r.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Custom close icon"}),(0,l.jsxs)(r.A,{className:"mb-40",component:"div",children:["You can provide an alternate icon for the closed and open states using the ",(0,l.jsx)("code",{children:"icon"})," ","and ",(0,l.jsx)("code",{children:"openIcon"})," props of the ",(0,l.jsx)("code",{children:"SpeedDialIcon"})," component."]}),(0,l.jsx)(r.A,{className:"mb-40",component:"div",children:(0,l.jsx)(i.A,{name:"OpenIconSpeedDial.js",className:"my-24",iframe:!1,component:o(92802).A,raw:o(99543)})}),(0,l.jsx)(r.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Persistent action tooltips"}),(0,l.jsx)(r.A,{className:"mb-40",component:"div",children:"The SpeedDialActions tooltips can be displayed persistently so that users don't have to long-press to see the tooltip on touch devices."}),(0,l.jsxs)(r.A,{className:"mb-40",component:"div",children:["It is enabled here across all devices for demo purposes, but in production it could use the"," ",(0,l.jsx)("code",{children:"isTouch"})," logic to conditionally set the prop."]}),(0,l.jsx)(r.A,{className:"mb-40",component:"div",children:(0,l.jsx)(i.A,{name:"SpeedDialTooltipOpen.js",className:"my-24",iframe:!1,component:o(56418).A,raw:o(90825)})}),(0,l.jsx)(r.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),(0,l.jsx)(r.A,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),(0,l.jsx)(r.A,{className:"text-16 mt-16 mb-10",component:"h4",children:"Required"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["You should provide an ",(0,l.jsx)("code",{children:"ariaLabel"})," for the speed dial component."]}),(0,l.jsxs)("li",{children:["You should provide a ",(0,l.jsx)("code",{children:"tooltipTitle"})," for each speed dial action."]})]}),(0,l.jsx)(r.A,{className:"text-16 mt-16 mb-10",component:"h4",children:"Provided"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["The Fab has ",(0,l.jsx)("code",{children:"aria-haspopup"}),", ",(0,l.jsx)("code",{children:"aria-expanded"})," and"," ",(0,l.jsx)("code",{children:"aria-controls"})," attributes."]}),(0,l.jsxs)("li",{children:["The speed dial actions container has ",(0,l.jsx)("code",{children:'role="menu"'})," and"," ",(0,l.jsx)("code",{children:"aria-orientation"})," set according to the direction."]}),(0,l.jsxs)("li",{children:["The speed dial actions have ",(0,l.jsx)("code",{children:'role="menuitem"'}),", and an"," ",(0,l.jsx)("code",{children:"aria-describedby"})," attribute that references the associated tooltip."]})]}),(0,l.jsx)(r.A,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"The speed dial opens on focus."}),(0,l.jsx)("li",{children:"The Space and Enter keys trigger the selected speed dial action, and toggle the speed dial open state."}),(0,l.jsx)("li",{children:"The cursor keys move focus to the next or previous speed dial action. (Note that any cursor direction can be used initially to open the speed dial. This enables the expected behavior for the actual or perceived orientation of the speed dial, for example for a screen reader user who perceives the speed dial as a drop-down menu.)"}),(0,l.jsx)("li",{children:"The Escape key closes the speed dial and, if a speed dial action was focused, returns focus to the Fab."})]})]})}}}]);