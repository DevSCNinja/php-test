"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[3577],{26426:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Collapse from '@mui/material/Collapse';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SimpleCollapse() {\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box sx={{ height: 300 }}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <Box\n        sx={{\n          '& > :not(style)': {\n            display: 'flex',\n            justifyContent: 'space-around',\n            height: 120,\n            width: 250,\n          },\n        }}\n      >\n        <div>\n          <Collapse in={checked}>{icon}</Collapse>\n          <Collapse in={checked} collapsedSize={40}>\n            {icon}\n          </Collapse>\n        </div>\n        <div>\n          <Box sx={{ width: '50%' }}>\n            <Collapse orientation=\"horizontal\" in={checked}>\n              {icon}\n            </Collapse>\n          </Box>\n          <Box sx={{ width: '50%' }}>\n            <Collapse orientation=\"horizontal\" in={checked} collapsedSize={40}>\n              {icon}\n            </Collapse>\n          </Box>\n        </div>\n      </Box>\n    </Box>\n  );\n}\n"},75279:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Fade from '@mui/material/Fade';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SimpleFade() {\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box sx={{ height: 180 }}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <Box sx={{ display: 'flex' }}>\n        <Fade in={checked}>{icon}</Fade>\n      </Box>\n    </Box>\n  );\n}\n"},73090:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Grow from '@mui/material/Grow';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SimpleGrow() {\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box sx={{ height: 180 }}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <Box sx={{ display: 'flex' }}>\n        <Grow in={checked}>{icon}</Grow>\n        {/* Conditionally applies the timeout prop to change the entry speed. */}\n        <Grow\n          in={checked}\n          style={{ transformOrigin: '0 0 0' }}\n          {...(checked ? { timeout: 1000 } : {})}\n        >\n          {icon}\n        </Grow>\n      </Box>\n    </Box>\n  );\n}\n"},46184:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Slide from '@mui/material/Slide';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SimpleSlide() {\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box sx={{ height: 180 }}>\n      <Box sx={{ width: `calc(100px + 16px)` }}>\n        <FormControlLabel\n          control={<Switch checked={checked} onChange={handleChange} />}\n          label=\"Show\"\n        />\n        <Slide direction=\"up\" in={checked} mountOnEnter unmountOnExit>\n          {icon}\n        </Slide>\n      </Box>\n    </Box>\n  );\n}\n"},60582:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Zoom from '@mui/material/Zoom';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SimpleZoom() {\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box sx={{ height: 180 }}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <Box sx={{ display: 'flex' }}>\n        <Zoom in={checked}>{icon}</Zoom>\n        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>\n          {icon}\n        </Zoom>\n      </Box>\n    </Box>\n  );\n}\n"},47107:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Slide from '@mui/material/Slide';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SlideFromContainer() {\n  const [checked, setChecked] = React.useState(false);\n  const containerRef = React.useRef(null);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box\n      sx={{\n        height: 180,\n        width: 240,\n        display: 'flex',\n        padding: 2,\n        borderRadius: 1,\n        bgcolor: (theme) =>\n          theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',\n        overflow: 'hidden',\n      }}\n      ref={containerRef}\n    >\n      <Box sx={{ width: 200 }}>\n        <FormControlLabel\n          control={<Switch checked={checked} onChange={handleChange} />}\n          label=\"Show from target\"\n        />\n        <Slide direction=\"up\" in={checked} container={containerRef.current}>\n          {icon}\n        </Slide>\n      </Box>\n    </Box>\n  );\n}\n"},2743:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Button from '@mui/material/Button';\nimport Collapse from '@mui/material/Collapse';\nimport IconButton from '@mui/material/IconButton';\nimport List from '@mui/material/List';\nimport ListItem from '@mui/material/ListItem';\nimport ListItemText from '@mui/material/ListItemText';\nimport DeleteIcon from '@mui/icons-material/Delete';\nimport { TransitionGroup } from 'react-transition-group';\n\nconst FRUITS = [\n  '\ud83c\udf4f Apple',\n  '\ud83c\udf4c Banana',\n  '\ud83c\udf4d Pineapple',\n  '\ud83e\udd65 Coconut',\n  '\ud83c\udf49 Watermelon',\n];\n\nfunction renderItem({ item, handleRemoveFruit }) {\n  return (\n    <ListItem\n      secondaryAction={\n        <IconButton\n          edge=\"end\"\n          aria-label=\"delete\"\n          title=\"Delete\"\n          onClick={() => handleRemoveFruit(item)}\n        >\n          <DeleteIcon />\n        </IconButton>\n      }\n    >\n      <ListItemText primary={item} />\n    </ListItem>\n  );\n}\n\nexport default function TransitionGroupExample() {\n  const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));\n\n  const handleAddFruit = () => {\n    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));\n    if (nextHiddenItem) {\n      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);\n    }\n  };\n\n  const handleRemoveFruit = (item) => {\n    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);\n  };\n\n  const addFruitButton = (\n    <Button\n      variant=\"contained\"\n      disabled={fruitsInBasket.length >= FRUITS.length}\n      onClick={handleAddFruit}\n    >\n      Add fruit to basket\n    </Button>\n  );\n\n  return (\n    <div>\n      {addFruitButton}\n      <Box sx={{ mt: 1 }}>\n        <List>\n          <TransitionGroup>\n            {fruitsInBasket.map((item) => (\n              <Collapse key={item}>\n                {renderItem({ item, handleRemoveFruit })}\n              </Collapse>\n            ))}\n          </TransitionGroup>\n        </List>\n      </Box>\n    </div>\n  );\n}\n"},21306:(e,n,t)=>{t.d(n,{A:()=>S});var o=t(95529),i=t(88124),r=t(87369),s=t(33358),a=t(96915),l=t(88094),c=t(89720),d=t(84178),m=t(83775),h=t(33351),p=t(90777),x=t(71739),u=t(33209),f=t(34057),j=t(91073),g=t(60209),v=t(15678);function A(e){const{children:n,document:t}=e,o=(0,f.A)();l.useEffect((()=>{t.body.dir=o.direction}),[t,o.direction]);const i=l.useMemo((()=>(0,p.A)({key:`iframe-demo-${o.direction}`,prepend:!0,container:t.head,stylisPlugins:"rtl"===o.direction?[h.A]:[]})),[t,o.direction]),r=l.useCallback((()=>t.defaultView),[t]);return(0,v.jsx)(u.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===o.direction?[h.A]:[],children:(0,v.jsxs)(x.C,{value:i,children:[(0,v.jsx)(g.A,{styles:()=>({html:{fontSize:"62.5%"}})}),l.cloneElement(n,{window:r})]})})}const w=(0,j.Ay)("iframe")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function b(e){var n;const{children:t,name:o,...i}=e,r=`${o} demo`,s=l.useRef(null),[a,c]=l.useReducer((()=>!0),!1);l.useEffect((()=>{const e=s.current.contentDocument;null==e||"complete"!==e.readyState||a||c()}),[a]);const d=null===(n=s.current)||void 0===n?void 0:n.contentDocument;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{onLoad:c,ref:s,title:r,...i}),!1!==a?m.createPortal((0,v.jsx)(A,{document:d,children:t}),d.body):null]})}const y=l.memo(b);var k=t(98231);function C(e){const[n,t]=(0,l.useState)(e.currentTabIndex),{component:m,raw:h,iframe:p,className:x,name:u}=e;return(0,v.jsxs)(i.A,{className:(0,a.A)(x,"shadow"),sx:{backgroundColor:e=>(0,c.e$)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)},children:[(0,v.jsx)(d.A,{sx:{backgroundColor:e=>(0,c.e$)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)},children:(0,v.jsxs)(s.A,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:n,onChange:function(e,n){t(n)},textColor:"secondary",indicatorColor:"secondary",children:[m&&(0,v.jsx)(r.A,{classes:{root:"min-w-64"},icon:(0,v.jsx)(k.A,{children:"heroicons-outline:eye"})}),h&&(0,v.jsx)(r.A,{classes:{root:"min-w-64"},icon:(0,v.jsx)(k.A,{children:"heroicons-outline:code"})})]})}),(0,v.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,v.jsx)("div",{className:0===n?"flex flex-1 max-w-full":"hidden",children:m&&(p?(0,v.jsx)(y,{name:u,children:(0,v.jsx)(m,{})}):(0,v.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,v.jsx)(m,{})}))}),(0,v.jsx)("div",{className:1===n?"flex flex-1":"hidden",children:h&&(0,v.jsx)("div",{className:"flex flex-1",children:(0,v.jsx)(o.A,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})})})]})]})}C.defaultProps={name:"",currentTabIndex:0};const S=C},55539:(e,n,t)=>{t.d(n,{A:()=>m});var o=t(88094),i=t(84178),r=t(59319),s=t(26246),a=t(59255),l=t(96826),c=t(15678);const d=(0,c.jsx)(s.A,{sx:{m:1},elevation:4,children:(0,c.jsx)(i.A,{component:"svg",sx:{width:100,height:100},children:(0,c.jsx)(i.A,{component:"polygon",sx:{fill:e=>e.palette.common.white,stroke:e=>e.palette.divider,strokeWidth:1},points:"0,100 50,00, 100,100"})})});function m(){const[e,n]=o.useState(!1);return(0,c.jsxs)(i.A,{sx:{height:300},children:[(0,c.jsx)(l.A,{control:(0,c.jsx)(r.A,{checked:e,onChange:()=>{n((e=>!e))}}),label:"Show"}),(0,c.jsxs)(i.A,{sx:{"& > :not(style)":{display:"flex",justifyContent:"space-around",height:120,width:250}},children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(a.A,{in:e,children:d}),(0,c.jsx)(a.A,{in:e,collapsedSize:40,children:d})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(i.A,{sx:{width:"50%"},children:(0,c.jsx)(a.A,{orientation:"horizontal",in:e,children:d})}),(0,c.jsx)(i.A,{sx:{width:"50%"},children:(0,c.jsx)(a.A,{orientation:"horizontal",in:e,collapsedSize:40,children:d})})]})]})]})}},49722:(e,n,t)=>{t.d(n,{A:()=>m});var o=t(88094),i=t(84178),r=t(59319),s=t(26246),a=t(88743),l=t(96826),c=t(15678);const d=(0,c.jsx)(s.A,{sx:{m:1},elevation:4,children:(0,c.jsx)(i.A,{component:"svg",sx:{width:100,height:100},children:(0,c.jsx)(i.A,{component:"polygon",sx:{fill:e=>e.palette.common.white,stroke:e=>e.palette.divider,strokeWidth:1},points:"0,100 50,00, 100,100"})})});function m(){const[e,n]=o.useState(!1);return(0,c.jsxs)(i.A,{sx:{height:180},children:[(0,c.jsx)(l.A,{control:(0,c.jsx)(r.A,{checked:e,onChange:()=>{n((e=>!e))}}),label:"Show"}),(0,c.jsx)(i.A,{sx:{display:"flex"},children:(0,c.jsx)(a.A,{in:e,children:d})})]})}},93347:(e,n,t)=>{t.d(n,{A:()=>m});var o=t(88094),i=t(84178),r=t(59319),s=t(26246),a=t(26117),l=t(96826),c=t(15678);const d=(0,c.jsx)(s.A,{sx:{m:1},elevation:4,children:(0,c.jsx)(i.A,{component:"svg",sx:{width:100,height:100},children:(0,c.jsx)(i.A,{component:"polygon",sx:{fill:e=>e.palette.common.white,stroke:e=>e.palette.divider,strokeWidth:1},points:"0,100 50,00, 100,100"})})});function m(){const[e,n]=o.useState(!1);return(0,c.jsxs)(i.A,{sx:{height:180},children:[(0,c.jsx)(l.A,{control:(0,c.jsx)(r.A,{checked:e,onChange:()=>{n((e=>!e))}}),label:"Show"}),(0,c.jsxs)(i.A,{sx:{display:"flex"},children:[(0,c.jsx)(a.A,{in:e,children:d}),(0,c.jsx)(a.A,{in:e,style:{transformOrigin:"0 0 0"},...e?{timeout:1e3}:{},children:d})]})]})}},56423:(e,n,t)=>{t.d(n,{A:()=>m});var o=t(88094),i=t(84178),r=t(59319),s=t(26246),a=t(47821),l=t(96826),c=t(15678);const d=(0,c.jsx)(s.A,{sx:{m:1},elevation:4,children:(0,c.jsx)(i.A,{component:"svg",sx:{width:100,height:100},children:(0,c.jsx)(i.A,{component:"polygon",sx:{fill:e=>e.palette.common.white,stroke:e=>e.palette.divider,strokeWidth:1},points:"0,100 50,00, 100,100"})})});function m(){const[e,n]=o.useState(!1);return(0,c.jsx)(i.A,{sx:{height:180},children:(0,c.jsxs)(i.A,{sx:{width:"calc(100px + 16px)"},children:[(0,c.jsx)(l.A,{control:(0,c.jsx)(r.A,{checked:e,onChange:()=>{n((e=>!e))}}),label:"Show"}),(0,c.jsx)(a.A,{direction:"up",in:e,mountOnEnter:!0,unmountOnExit:!0,children:d})]})})}},77087:(e,n,t)=>{t.d(n,{A:()=>m});var o=t(88094),i=t(84178),r=t(59319),s=t(26246),a=t(5633),l=t(96826),c=t(15678);const d=(0,c.jsx)(s.A,{sx:{m:1},elevation:4,children:(0,c.jsx)(i.A,{component:"svg",sx:{width:100,height:100},children:(0,c.jsx)(i.A,{component:"polygon",sx:{fill:e=>e.palette.common.white,stroke:e=>e.palette.divider,strokeWidth:1},points:"0,100 50,00, 100,100"})})});function m(){const[e,n]=o.useState(!1);return(0,c.jsxs)(i.A,{sx:{height:180},children:[(0,c.jsx)(l.A,{control:(0,c.jsx)(r.A,{checked:e,onChange:()=>{n((e=>!e))}}),label:"Show"}),(0,c.jsxs)(i.A,{sx:{display:"flex"},children:[(0,c.jsx)(a.A,{in:e,children:d}),(0,c.jsx)(a.A,{in:e,style:{transitionDelay:e?"500ms":"0ms"},children:d})]})]})}},49682:(e,n,t)=>{t.d(n,{A:()=>m});var o=t(88094),i=t(84178),r=t(59319),s=t(26246),a=t(47821),l=t(96826),c=t(15678);const d=(0,c.jsx)(s.A,{sx:{m:1,width:100,height:100},elevation:4,children:(0,c.jsx)(i.A,{component:"svg",sx:{width:100,height:100},children:(0,c.jsx)(i.A,{component:"polygon",sx:{fill:e=>e.palette.common.white,stroke:e=>e.palette.divider,strokeWidth:1},points:"0,100 50,00, 100,100"})})});function m(){const[e,n]=o.useState(!1),t=o.useRef(null);return(0,c.jsx)(i.A,{sx:{height:180,width:240,display:"flex",padding:2,borderRadius:1,bgcolor:e=>"light"===e.palette.mode?"grey.100":"grey.900",overflow:"hidden"},ref:t,children:(0,c.jsxs)(i.A,{sx:{width:200},children:[(0,c.jsx)(l.A,{control:(0,c.jsx)(r.A,{checked:e,onChange:()=>{n((e=>!e))}}),label:"Show from target"}),(0,c.jsx)(a.A,{direction:"up",in:e,container:t.current,children:d})]})})}},70680:(e,n,t)=>{t.d(n,{A:()=>S});var o=t(88094),i=t(84178),r=t(76880),s=t(59255),a=t(62189),l=t(73678),c=t(93209),d=t(99435),m=t(97796),h=t(98587),p=t(58168),x=t(9417),u=t(77387);const f=o.createContext(null);function j(e,n){var t=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,o.isValidElement)(e)?n(e):e}(e)})),t}function g(e,n,t){return null!=t[n]?t[n]:e.props[n]}function v(e,n,t){var i=j(e.children),r=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var o,i=Object.create(null),r=[];for(var s in e)s in n?r.length&&(i[s]=r,r=[]):r.push(s);var a={};for(var l in n){if(i[l])for(o=0;o<i[l].length;o++){var c=i[l][o];a[i[l][o]]=t(c)}a[l]=t(l)}for(o=0;o<r.length;o++)a[r[o]]=t(r[o]);return a}(n,i);return Object.keys(r).forEach((function(s){var a=r[s];if((0,o.isValidElement)(a)){var l=s in n,c=s in i,d=n[s],m=(0,o.isValidElement)(d)&&!d.props.in;!c||l&&!m?c||!l||m?c&&l&&(0,o.isValidElement)(d)&&(r[s]=(0,o.cloneElement)(a,{onExited:t.bind(null,a),in:d.props.in,exit:g(a,"exit",e),enter:g(a,"enter",e)})):r[s]=(0,o.cloneElement)(a,{in:!1}):r[s]=(0,o.cloneElement)(a,{onExited:t.bind(null,a),in:!0,exit:g(a,"exit",e),enter:g(a,"enter",e)})}})),r}var A=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},w=function(e){function n(n,t){var o,i=(o=e.call(this,n,t)||this).handleExited.bind((0,x.A)(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}(0,u.A)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,i,r=n.children,s=n.handleExited;return{children:n.firstRender?(t=e,i=s,j(t.children,(function(e){return(0,o.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:g(e,"appear",t),enter:g(e,"enter",t),exit:g(e,"exit",t)})}))):v(e,r,s),firstRender:!1}},t.handleExited=function(e,n){var t=j(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,p.A)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,i=(0,h.A)(e,["component","childFactory"]),r=this.state.contextValue,s=A(this.state.children).map(t);return delete i.appear,delete i.enter,delete i.exit,null===n?o.createElement(f.Provider,{value:r},s):o.createElement(f.Provider,{value:r},o.createElement(n,i,s))},n}(o.Component);w.propTypes={},w.defaultProps={component:"div",childFactory:function(e){return e}};const b=w;var y=t(15678);const k=["\ud83c\udf4f Apple","\ud83c\udf4c Banana","\ud83c\udf4d Pineapple","\ud83e\udd65 Coconut","\ud83c\udf49 Watermelon"];function C(e){let{item:n,handleRemoveFruit:t}=e;return(0,y.jsx)(c.Ay,{secondaryAction:(0,y.jsx)(a.A,{edge:"end","aria-label":"delete",title:"Delete",onClick:()=>t(n),children:(0,y.jsx)(m.A,{})}),children:(0,y.jsx)(d.A,{primary:n})})}function S(){const[e,n]=o.useState(k.slice(0,3)),t=e=>{n((n=>[...n.filter((n=>n!==e))]))},a=(0,y.jsx)(r.A,{variant:"contained",disabled:e.length>=k.length,onClick:()=>{const t=k.find((n=>!e.includes(n)));t&&n((e=>[t,...e]))},children:"Add fruit to basket"});return(0,y.jsxs)("div",{children:[a,(0,y.jsx)(i.A,{sx:{mt:1},children:(0,y.jsx)(l.A,{children:(0,y.jsx)(b,{children:e.map((e=>(0,y.jsx)(s.A,{children:C({item:e,handleRemoveFruit:t})},e)))})})})]})}},93577:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var o=t(21306),i=t(95529),r=t(98231),s=t(76880),a=t(78298),l=t(15678);const c=function(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,l.jsx)(s.A,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/transitions",target:"_blank",role:"button",startIcon:(0,l.jsx)(r.A,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,l.jsx)(a.A,{className:"text-40 my-16 font-700",component:"h1",children:"Transitions"}),(0,l.jsx)(a.A,{className:"description",children:"Transitions help to make a UI expressive and easy to use."}),(0,l.jsxs)(a.A,{className:"mb-40",component:"div",children:["MUI provides transitions that can be used to introduce some basic"," ",(0,l.jsx)("a",{href:"https://material.io/design/motion/",children:"motion"})," to your applications."]}),(0,l.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Collapse"}),(0,l.jsxs)(a.A,{className:"mb-40",component:"div",children:["Expand from the start edge of the child element. Use the ",(0,l.jsx)("code",{children:"orientation"})," prop if you need a horizontal collapse. The ",(0,l.jsx)("code",{children:"collapsedSize"})," prop can be used to set the minimum width/height when not expanded."]}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:(0,l.jsx)(o.A,{name:"SimpleCollapse.js",className:"my-24",iframe:!1,component:t(55539).A,raw:t(26426)})}),(0,l.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Fade"}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:"Fade in from transparent to opaque."}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:(0,l.jsx)(o.A,{name:"SimpleFade.js",className:"my-24",iframe:!1,component:t(49722).A,raw:t(75279)})}),(0,l.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Grow"}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:"Expands outwards from the center of the child element, while also fading in from transparent to opaque."}),(0,l.jsxs)(a.A,{className:"mb-40",component:"div",children:["The second example demonstrates how to change the ",(0,l.jsx)("code",{children:"transform-origin"}),", and conditionally applies the ",(0,l.jsx)("code",{children:"timeout"})," prop to change the entry speed."]}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:(0,l.jsx)(o.A,{name:"SimpleGrow.js",className:"my-24",iframe:!1,component:t(93347).A,raw:t(73090)})}),(0,l.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Slide"}),(0,l.jsxs)(a.A,{className:"mb-40",component:"div",children:["Slide in from the edge of the screen. The ",(0,l.jsx)("code",{children:"direction"})," prop controls which edge of the screen the transition starts from."]}),(0,l.jsxs)(a.A,{className:"mb-40",component:"div",children:["The Transition component's ",(0,l.jsx)("code",{children:"mountOnEnter"})," prop prevents the child component from being mounted until ",(0,l.jsx)("code",{children:"in"})," is ",(0,l.jsx)("code",{children:"true"}),". This prevents the relatively positioned component from scrolling into view from its off-screen position. Similarly, the"," ",(0,l.jsx)("code",{children:"unmountOnExit"})," prop removes the component from the DOM after it has been transition off-screen."]}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:(0,l.jsx)(o.A,{name:"SimpleSlide.js",className:"my-24",iframe:!1,component:t(56423).A,raw:t(46184)})}),(0,l.jsx)(a.A,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Slide relative to a container"}),(0,l.jsxs)(a.A,{className:"mb-40",component:"div",children:["The Slide component also accepts ",(0,l.jsx)("code",{children:"container"})," prop, which is a reference to a DOM node. If this prop is set, the Slide component will slide from the edge of that DOM node."]}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:(0,l.jsx)(o.A,{name:"SlideFromContainer.js",className:"my-24",iframe:!1,component:t(49682).A,raw:t(47107)})}),(0,l.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Zoom"}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:"Expand outwards from the center of the child element."}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:"This example also demonstrates how to delay the enter transition."}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:(0,l.jsx)(o.A,{name:"SimpleZoom.js",className:"my-24",iframe:!1,component:t(77087).A,raw:t(60582)})}),(0,l.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Child requirement"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Forward the style"}),": To better support server rendering, MUI provides a"," ",(0,l.jsx)("code",{children:"style"})," prop to the children of some transition components (Fade, Grow, Zoom, Slide). The ",(0,l.jsx)("code",{children:"style"})," prop must be applied to the DOM for the animation to work as expected."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Forward the ref"}),": The transition components require the first child element to forward its ref to the DOM node. For more details about ref, check out"," ",(0,l.jsx)("a",{href:"/material-ui/guides/composition/#caveat-with-refs",children:"Caveat with refs"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Single element"}),": The transition components require only one child element (",(0,l.jsx)("code",{children:"React.Fragment"})," is not allowed)."]})]}),(0,l.jsx)(i.A,{component:"pre",className:"language-jsx",children:" \n// The `props` object contains a `style` prop.\n// You need to provide it to the `div` element as shown here.\nconst MyComponent = React.forwardRef((props, ref) {\n  return (\n    <div ref={ref} {...props}>\n      Fade\n    </div>\n  );\n})\n\nexport default Main() {\n  return (\n    <Fade>\n      {/* MyComponent must the only child */}\n      <MyComponent />\n    </Fade>\n  );\n}\n"}),(0,l.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"TransitionGroup"}),(0,l.jsxs)(a.A,{className:"mb-40",component:"div",children:["To animate a component when it is mounted or unmounted, you can use the"," ",(0,l.jsx)("a",{href:"http://reactcommunity.org/react-transition-group/transition-group/",children:(0,l.jsx)("code",{children:"TransitionGroup"})})," ","component from ",(0,l.jsx)("em",{children:"react-transition-group"}),". As components are added or removed, the"," ",(0,l.jsx)("code",{children:"in"})," prop is toggled automatically by ",(0,l.jsx)("code",{children:"TransitionGroup"}),"."]}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:(0,l.jsx)(o.A,{name:"TransitionGroupExample.js",className:"my-24",iframe:!1,component:t(70680).A,raw:t(2743)})}),(0,l.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"TransitionComponent prop"}),(0,l.jsxs)(a.A,{className:"mb-40",component:"div",children:["Some MUI components use these transitions internally. These accept a"," ",(0,l.jsx)("code",{children:"TransitionComponent"})," prop to customize the default transition. You can use any of the above components or your own. It should respect the following conditions:"]}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["Accepts an ",(0,l.jsx)("code",{children:"in"})," prop. This corresponds to the open/close state."]}),(0,l.jsxs)("li",{children:["Call the ",(0,l.jsx)("code",{children:"onEnter"})," callback prop when the enter transition starts."]}),(0,l.jsxs)("li",{children:["Call the ",(0,l.jsx)("code",{children:"onExited"})," callback prop when the exit transition is completed. These two callbacks allow to unmount the children when in a closed state and fully transitioned."]})]}),(0,l.jsxs)(a.A,{className:"mb-40",component:"div",children:["For more information on creating a custom transition, visit the"," ",(0,l.jsx)("em",{children:"react-transition-group"})," ",(0,l.jsxs)("a",{href:"http://reactcommunity.org/react-transition-group/transition/",children:[(0,l.jsx)("code",{children:"Transition"})," documentation"]}),". You can also visit the dedicated sections of some of the components:"]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/material-ui/react-modal/#transitions",children:"Modal"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/material-ui/react-dialog/#transitions",children:"Dialog"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/material-ui/react-popper/#transitions",children:"Popper"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/material-ui/react-snackbar/#transitions",children:"Snackbar"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/material-ui/react-tooltip/#transitions",children:"Tooltip"})})]}),(0,l.jsx)(a.A,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Performance & SEO"}),(0,l.jsxs)(a.A,{className:"mb-40",component:"div",children:["The content of transition component is mounted by default even if"," ",(0,l.jsx)("code",{children:"in={false}"}),". This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your transition it might be a good idea to change this default behavior by enabling the",(0,l.jsx)("code",{children:"unmountOnExit"})," prop:"]}),(0,l.jsx)(i.A,{component:"pre",className:"language-jsx",children:" \n<Fade in={false} unmountOnExit />\n"}),(0,l.jsx)(a.A,{className:"mb-40",component:"div",children:"As with any performance optimization this is not a silver bullet. Be sure to identify bottlenecks first and then try out these optimization strategies."})]})}},97796:(e,n,t)=>{var o=t(24994);n.A=void 0;var i=o(t(89158)),r=t(15678),s=(0,i.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.A=s},5633:(e,n,t)=>{t.d(n,{A:()=>p});var o=t(58168),i=t(98587),r=t(88094),s=t(63453),a=t(34057),l=t(27888),c=t(85214),d=t(15678);const m=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],h={entering:{transform:"none"},entered:{transform:"none"}},p=r.forwardRef((function(e,n){const t=(0,a.A)(),p={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:x,appear:u=!0,children:f,easing:j,in:g,onEnter:v,onEntered:A,onEntering:w,onExit:b,onExited:y,onExiting:k,style:C,timeout:S=p,TransitionComponent:B=s.Ay}=e,E=(0,i.A)(e,m),F=r.useRef(null),N=(0,c.A)(f.ref,n),T=(0,c.A)(F,N),R=e=>n=>{if(e){const t=F.current;void 0===n?e(t):e(t,n)}},I=R(w),P=R(((e,n)=>{(0,l.q)(e);const o=(0,l.c)({style:C,timeout:S,easing:j},{mode:"enter"});e.style.webkitTransition=t.transitions.create("transform",o),e.style.transition=t.transitions.create("transform",o),v&&v(e,n)})),L=R(A),O=R(k),M=R((e=>{const n=(0,l.c)({style:C,timeout:S,easing:j},{mode:"exit"});e.style.webkitTransition=t.transitions.create("transform",n),e.style.transition=t.transitions.create("transform",n),b&&b(e)})),G=R(y);return(0,d.jsx)(B,(0,o.A)({appear:u,in:g,nodeRef:F,onEnter:P,onEntered:L,onEntering:I,onExit:M,onExited:G,onExiting:O,addEndListener:e=>{x&&x(F.current,e)},timeout:S},E,{children:(e,n)=>r.cloneElement(f,(0,o.A)({style:(0,o.A)({transform:"scale(0)",visibility:"exited"!==e||g?void 0:"hidden"},h[e],C,f.props.style),ref:T},n))}))}))}}]);