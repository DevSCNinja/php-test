"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[16],{96347:(r,e,t)=>{var a=t(24994);e.A=void 0;var o=a(t(89158)),n=t(15678),i=(0,o.default)((0,n.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.A=i},81922:(r,e,t)=>{var a=t(24994);e.A=void 0;var o=a(t(89158)),n=t(15678),i=(0,o.default)((0,n.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");e.A=i},33311:(r,e,t)=>{t.d(e,{A:()=>$});var a=t(98587),o=t(58168),n=t(88094),i=t(3610),s=t(26140),l=t(1083),c=t(45036),d=t(92443),u=t(91073),f=t(93099),m=t(15678);const b=["className","color","disableShrink","size","style","thickness","value","variant"];let v,h,p,A,g=r=>r;const k=44,y=(0,l.i7)(v||(v=g`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,l.i7)(h||(h=g`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=(0,u.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,c.A)(t.color)}`]]}})((r=>{let{ownerState:e,theme:t}=r;return(0,o.A)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})}),(r=>{let{ownerState:e}=r;return"indeterminate"===e.variant&&(0,l.AH)(p||(p=g`
      animation: ${0} 1.4s linear infinite;
    `),y)})),x=(0,u.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),C=(0,u.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${(0,c.A)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})((r=>{let{ownerState:e,theme:t}=r;return(0,o.A)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(r=>{let{ownerState:e}=r;return"indeterminate"===e.variant&&!e.disableShrink&&(0,l.AH)(A||(A=g`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S)})),$=n.forwardRef((function(r,e){const t=(0,d.A)({props:r,name:"MuiCircularProgress"}),{className:n,color:l="primary",disableShrink:u=!1,size:v=40,style:h,thickness:p=3.6,value:A=0,variant:g="indeterminate"}=t,y=(0,a.A)(t,b),S=(0,o.A)({},t,{color:l,disableShrink:u,size:v,thickness:p,value:A,variant:g}),$=(r=>{const{classes:e,variant:t,color:a,disableShrink:o}=r,n={root:["root",t,`color${(0,c.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(t)}`,o&&"circleDisableShrink"]};return(0,s.A)(n,f.b,e)})(S),M={},P={},R={};if("determinate"===g){const r=2*Math.PI*((k-p)/2);M.strokeDasharray=r.toFixed(3),R["aria-valuenow"]=Math.round(A),M.strokeDashoffset=`${((100-A)/100*r).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,m.jsx)(w,(0,o.A)({className:(0,i.A)($.root,n),style:(0,o.A)({width:v,height:v},P,h),ownerState:S,ref:e,role:"progressbar"},R,y,{children:(0,m.jsx)(x,{className:$.svg,ownerState:S,viewBox:"22 22 44 44",children:(0,m.jsx)(C,{className:$.circle,style:M,ownerState:S,cx:k,cy:k,r:(k-p)/2,fill:"none",strokeWidth:p})})}))}))},93099:(r,e,t)=>{t.d(e,{A:()=>n,b:()=>o});var a=t(56302);function o(r){return(0,a.A)("MuiCircularProgress",r)}const n=(0,t(11894).A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},47779:(r,e,t)=>{t.d(e,{A:()=>I});var a=t(98587),o=t(58168),n=t(88094),i=t(3610),s=t(26140),l=t(1083),c=t(89720),d=t(45036),u=t(34057),f=t(91073),m=t(92443),b=t(26743),v=t(15678);const h=["className","color","value","valueBuffer","variant"];let p,A,g,k,y,S,w=r=>r;const x=(0,l.i7)(p||(p=w`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),C=(0,l.i7)(A||(A=w`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),$=(0,l.i7)(g||(g=w`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),M=(r,e)=>"inherit"===e?"currentColor":"light"===r.palette.mode?(0,c.a)(r.palette[e].main,.62):(0,c.e$)(r.palette[e].main,.5),P=(0,f.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,d.A)(t.color)}`],e[t.variant]]}})((r=>{let{ownerState:e,theme:t}=r;return(0,o.A)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:M(t,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})})),R=(0,f.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,d.A)(t.color)}`]]}})((r=>{let{ownerState:e,theme:t}=r;const a=M(t,e.color);return(0,o.A)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.AH)(k||(k=w`
    animation: ${0} 3s infinite linear;
  `),$)),B=(0,f.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,d.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((r=>{let{ownerState:e,theme:t}=r;return(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":t.palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})}),(r=>{let{ownerState:e}=r;return("indeterminate"===e.variant||"query"===e.variant)&&(0,l.AH)(y||(y=w`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),x)})),D=(0,f.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,d.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((r=>{let{ownerState:e,theme:t}=r;return(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":t.palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:M(t,e.color),transition:"transform .4s linear"})}),(r=>{let{ownerState:e}=r;return("indeterminate"===e.variant||"query"===e.variant)&&(0,l.AH)(S||(S=w`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),C)})),I=n.forwardRef((function(r,e){const t=(0,m.A)({props:r,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:c,valueBuffer:f,variant:p="indeterminate"}=t,A=(0,a.A)(t,h),g=(0,o.A)({},t,{color:l,variant:p}),k=(r=>{const{classes:e,variant:t,color:a}=r,o={root:["root",`color${(0,d.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,d.A)(a)}`],bar1:["bar",`barColor${(0,d.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,d.A)(a)}`,"buffer"===t&&`color${(0,d.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.A)(o,b.l,e)})(g),y=(0,u.A)(),S={},w={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==c){S["aria-valuenow"]=Math.round(c),S["aria-valuemin"]=0,S["aria-valuemax"]=100;let r=c-100;"rtl"===y.direction&&(r=-r),w.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===p)if(void 0!==f){let r=(f||0)-100;"rtl"===y.direction&&(r=-r),w.bar2.transform=`translateX(${r}%)`}else 0;return(0,v.jsxs)(P,(0,o.A)({className:(0,i.A)(k.root,n),ownerState:g,role:"progressbar"},S,{ref:e},A,{children:["buffer"===p?(0,v.jsx)(R,{className:k.dashed,ownerState:g}):null,(0,v.jsx)(B,{className:k.bar1,ownerState:g,style:w.bar1}),"determinate"===p?null:(0,v.jsx)(D,{className:k.bar2,ownerState:g,style:w.bar2})]}))}))},26743:(r,e,t)=>{t.d(e,{A:()=>n,l:()=>o});var a=t(56302);function o(r){return(0,a.A)("MuiLinearProgress",r)}const n=(0,t(11894).A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"])},69825:(r,e,t)=>{t.d(e,{A:()=>h});var a=t(98587),o=t(58168),n=t(88094),i=t(13549),s=t(55333),l=t(72812),c=t(59278),d=t(91073),u=t(92443),f=t(15678);const m=["component","direction","spacing","divider","children"];function b(r,e){const t=n.Children.toArray(r).filter(Boolean);return t.reduce(((r,a,o)=>(r.push(a),o<t.length-1&&r.push(n.cloneElement(e,{key:`separator-${o}`})),r)),[])}const v=(0,d.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(r,e)=>[e.root]})((r=>{let{ownerState:e,theme:t}=r,a=(0,o.A)({display:"flex"},(0,i.NI)({theme:t},(0,i.kW)({values:e.direction,breakpoints:t.breakpoints.values}),(r=>({flexDirection:r}))));if(e.spacing){const r=(0,s.LX)(t),o=Object.keys(t.breakpoints.values).reduce(((r,t)=>(null==e.spacing[t]&&null==e.direction[t]||(r[t]=!0),r)),{}),n=(0,i.kW)({values:e.direction,base:o}),l=(0,i.kW)({values:e.spacing,base:o}),d=(t,a)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${o=a?n[a]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,s._W)(r,t)}};var o};a=(0,c.A)(a,(0,i.NI)({theme:t},l,d))}return a})),h=n.forwardRef((function(r,e){const t=(0,u.A)({props:r,name:"MuiStack"}),n=(0,l.A)(t),{component:i="div",direction:s="column",spacing:c=0,divider:d,children:h}=n,p=(0,a.A)(n,m),A={direction:s,spacing:c};return(0,f.jsx)(v,(0,o.A)({as:i,ownerState:A,ref:e},p,{children:d?b(h,d):h}))}))}}]);