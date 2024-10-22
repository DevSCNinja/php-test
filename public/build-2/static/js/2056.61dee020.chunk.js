"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[2056],{81128:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(47637),n=r(96915),o=r(15678);const c=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];const i=function(e){return(0,o.jsx)("div",{className:(0,n.A)("inline text-12 font-semibold py-4 px-12 rounded-full truncate",a.A.find(c,{name:e.name}).color),children:e.name})}},52056:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var a=r(78497),n=r(66607),o=r(19054),c=r(6234),i=r(20081),s=r(26246),l=r(78298),d=r(28290),p=r(83107),m=r(98231),u=r(36671),h=r(15678);const x=function(e){const t=(0,p.wA)(),r=(0,p.d4)(u.BZ);return(0,h.jsxs)("div",{className:"flex flex-col sm:flex-row flex-1 w-full space-y-8 sm:space-y-0 items-center justify-between py-32 px-24 md:px-32",children:[(0,h.jsx)(l.A,{component:d.P.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"flex text-24 md:text-32 font-extrabold tracking-tight",children:"Orders"}),(0,h.jsx)("div",{className:"flex flex-1 items-center justify-end space-x-8 w-full sm:w-auto",children:(0,h.jsxs)(s.A,{component:d.P.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0",children:[(0,h.jsx)(m.A,{color:"disabled",children:"heroicons-solid:search"}),(0,h.jsx)(i.A,{placeholder:"Search orders",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:r,inputProps:{"aria-label":"Search Orders"},onChange:e=>t((0,u.ZO)(e))})]})})]})};var g=r(17398),A=r(8073),f=r(47637),y=r(96285),w=r(94951),b=r(82532),v=r(34845),j=r(85045),C=r(91026),S=r(88094),P=r(85271),k=r(19738),N=r(81128),I=r(62189),D=r(60979),T=r(99435),O=r(18560),R=r(53237),$=r(83843),z=r(25655),B=r(78505),M=r(50544),Z=r(21925),L=r(89720);const E=[{id:"id",align:"left",disablePadding:!1,label:"ID",sort:!0},{id:"reference",align:"left",disablePadding:!1,label:"Reference",sort:!0},{id:"customer",align:"left",disablePadding:!1,label:"Customer",sort:!0},{id:"total",align:"right",disablePadding:!1,label:"Total",sort:!0},{id:"payment",align:"left",disablePadding:!1,label:"Payment",sort:!0},{id:"status",align:"left",disablePadding:!1,label:"Status",sort:!0},{id:"date",align:"left",disablePadding:!1,label:"Date",sort:!0}];const U=function(e){const{selectedOrderIds:t}=e,r=t.length,[a,n]=(0,S.useState)(null),o=(0,p.wA)();function c(){n(null)}return(0,h.jsx)(Z.A,{children:(0,h.jsxs)(C.A,{className:"h-48 sm:h-64",children:[(0,h.jsxs)(v.A,{padding:"none",className:"w-40 md:w-64 text-center z-99",sx:{backgroundColor:e=>(0,L.e$)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)},children:[(0,h.jsx)(y.A,{indeterminate:r>0&&r<e.rowCount,checked:0!==e.rowCount&&r===e.rowCount,onChange:e.onSelectAllClick}),r>0&&(0,h.jsxs)(M.A,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{backgroundColor:e=>"light"===e.palette.mode?(0,L.a)(e.palette.background.default,.4):(0,L.a)(e.palette.background.default,.02)},children:[(0,h.jsx)(I.A,{"aria-owns":a?"selectedOrdersMenu":null,"aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},size:"large",children:(0,h.jsx)(m.A,{children:"heroicons-outline:dots-horizontal"})}),(0,h.jsx)(O.A,{id:"selectedOrdersMenu",anchorEl:a,open:Boolean(a),onClose:c,children:(0,h.jsx)($.A,{children:(0,h.jsxs)(R.A,{onClick:()=>{o((0,u.AB)(t)),e.onMenuItemClick(),c()},children:[(0,h.jsx)(D.A,{className:"min-w-40",children:(0,h.jsx)(m.A,{children:"heroicons-outline:trash"})}),(0,h.jsx)(T.A,{primary:"Remove"})]})})})]})]}),E.map((t=>{return(0,h.jsx)(v.A,{sx:{backgroundColor:e=>"light"===e.palette.mode?(0,L.a)(e.palette.background.default,.4):(0,L.a)(e.palette.background.default,.02)},className:"p-4 md:p-16",align:t.align,padding:t.disablePadding?"none":"normal",sortDirection:e.order.id===t.id&&e.order.direction,children:t.sort&&(0,h.jsx)(B.A,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300,children:(0,h.jsx)(z.A,{active:e.order.id===t.id,direction:e.order.direction,onClick:(r=t.id,t=>{e.onRequestSort(t,r)}),className:"font-semibold",children:t.label})})},t.id);var r}),this)]})})};const _=(0,P.A)((function(e){const t=(0,p.wA)(),r=(0,p.d4)(u.ee),a=(0,p.d4)(u.BZ),[n,o]=(0,S.useState)(!0),[c,i]=(0,S.useState)([]),[s,m]=(0,S.useState)(r),[x,P]=(0,S.useState)(0),[I,D]=(0,S.useState)(10),[T,O]=(0,S.useState)({direction:"asc",id:null});return(0,S.useEffect)((()=>{t((0,u.WF)()).then((()=>o(!1)))}),[t]),(0,S.useEffect)((()=>{0!==a.length?(m(A.A.filterArrayByString(r,a)),P(0)):m(r)}),[r,a]),n?(0,h.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,h.jsx)(k.A,{})}):0===s.length?(0,h.jsx)(d.P.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:(0,h.jsx)(l.A,{color:"text.secondary",variant:"h5",children:"There are no orders!"})}):(0,h.jsxs)("div",{className:"w-full flex flex-col min-h-full",children:[(0,h.jsx)(g.A,{className:"grow overflow-x-auto",children:(0,h.jsxs)(w.A,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,h.jsx)(U,{selectedOrderIds:c,order:T,onSelectAllClick:function(e){e.target.checked?i(s.map((e=>e.id))):i([])},onRequestSort:function(e,t){const r=t;let a="desc";T.id===t&&"desc"===T.direction&&(a="asc"),O({direction:a,id:r})},rowCount:s.length,onMenuItemClick:function(){i([])}}),(0,h.jsx)(b.A,{children:f.A.orderBy(s,[e=>{switch(T.id){case"id":return parseInt(e.id,10);case"customer":return e.customer.firstName;case"payment":return e.payment.method;case"status":return e.status[0].name;default:return e[T.id]}}],[T.direction]).slice(x*I,x*I+I).map((t=>{const r=-1!==c.indexOf(t.id);return(0,h.jsxs)(C.A,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,onClick:r=>{return a=t,void e.navigate(`/apps/e-commerce/orders/${a.id}`);var a},children:[(0,h.jsx)(v.A,{className:"w-40 md:w-64 text-center",padding:"none",children:(0,h.jsx)(y.A,{checked:r,onClick:e=>e.stopPropagation(),onChange:e=>function(e,t){const r=c.indexOf(t);let a=[];-1===r?a=a.concat(c,t):0===r?a=a.concat(c.slice(1)):r===c.length-1?a=a.concat(c.slice(0,-1)):r>0&&(a=a.concat(c.slice(0,r),c.slice(r+1))),i(a)}(0,t.id)})}),(0,h.jsx)(v.A,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.id}),(0,h.jsx)(v.A,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.reference}),(0,h.jsx)(v.A,{className:"p-4 md:p-16 truncate",component:"th",scope:"row",children:`${t.customer.firstName} ${t.customer.lastName}`}),(0,h.jsxs)(v.A,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[(0,h.jsx)("span",{children:"$"}),t.total]}),(0,h.jsx)(v.A,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.payment.method}),(0,h.jsx)(v.A,{className:"p-4 md:p-16",component:"th",scope:"row",children:(0,h.jsx)(N.A,{name:t.status[0].name})}),(0,h.jsx)(v.A,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.date})]},t.id)}))})]})}),(0,h.jsx)(j.A,{className:"shrink-0 border-t-1",component:"div",count:s.length,rowsPerPage:I,page:x,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,t){P(t)},onRowsPerPageChange:function(e){D(e.target.value)}})]})}));const q=(0,n.A)("eCommerceApp",c.A)((function(){const e=(0,o.A)((e=>e.breakpoints.down("lg")));return(0,h.jsx)(a.A,{header:(0,h.jsx)(x,{}),content:(0,h.jsx)(_,{}),scroll:e?"normal":"content"})}))},6234:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(73422),n=r(26954),o=r(36671),c=r(19143),i=r(33640);const s=(0,a.HY)({products:i.Ay,product:c.Ay,orders:o.Ay,order:n.Ay})},26954:(e,t,r)=>{r.d(t,{Ay:()=>p,PE:()=>d,YP:()=>l,r$:()=>c});var a=r(12214),n=r(3339),o=r.n(n);const c=(0,a.zD)("eCommerceApp/order/getOrder",(async e=>{const t=await o().get(`/api/ecommerce/orders/${e}`),r=await t.data;return void 0===r?null:r})),i=(0,a.zD)("eCommerceApp/order/saveOrder",(async e=>{const t=await o().put("/api/ecommerce/orders",e);return await t.data})),s=(0,a.Z0)({name:"eCommerceApp/order",initialState:null,reducers:{resetOrder:()=>null},extraReducers:{[c.fulfilled]:(e,t)=>t.payload,[i.fulfilled]:(e,t)=>t.payload}}),{resetOrder:l}=s.actions,d=e=>{let{eCommerceApp:t}=e;return t.order},p=s.reducer},36671:(e,t,r)=>{r.d(t,{AB:()=>i,Ay:()=>h,BZ:()=>u,WF:()=>c,ZO:()=>m,ee:()=>l});var a=r(12214),n=r(3339),o=r.n(n);const c=(0,a.zD)("eCommerceApp/orders/getOrders",(async()=>{const e=await o().get("/api/ecommerce/orders");return await e.data})),i=(0,a.zD)("eCommerceApp/orders/removeOrders",(async(e,t)=>{let{dispatch:r,getState:a}=t;return await o().delete("/api/ecommerce/orders",{data:e}),e})),s=(0,a.pU)({}),{selectAll:l,selectById:d}=s.getSelectors((e=>e.eCommerceApp.orders)),p=(0,a.Z0)({name:"eCommerceApp/orders",initialState:s.getInitialState({searchText:""}),reducers:{setOrdersSearchText:{reducer:(e,t)=>{e.searchText=t.payload},prepare:e=>({payload:e.target.value||""})}},extraReducers:{[c.fulfilled]:s.setAll,[i.fulfilled]:(e,t)=>s.removeMany(e,t.payload)}}),{setOrdersSearchText:m}=p.actions,u=e=>{let{eCommerceApp:t}=e;return t.orders.searchText},h=p.reducer},19143:(e,t,r)=>{r.d(t,{Ay:()=>h,C4:()=>u,Pw:()=>m,Tu:()=>l,_6:()=>p,oo:()=>i,qY:()=>s});var a=r(12214),n=r(3339),o=r.n(n),c=r(8073);const i=(0,a.zD)("eCommerceApp/product/getProduct",(async e=>{const t=await o().get(`/api/ecommerce/products/${e}`),r=await t.data;return void 0===r?null:r})),s=(0,a.zD)("eCommerceApp/product/removeProduct",(async(e,t)=>{let{dispatch:r,getState:a}=t;const{id:n}=a().eCommerceApp.product;return await o().delete(`/api/ecommerce/products/${n}`),n})),l=(0,a.zD)("eCommerceApp/product/saveProduct",(async(e,t)=>{let{dispatch:r,getState:a}=t;const{id:n}=a().eCommerceApp,c=await o().put(`/api/ecommerce/products/${n}`,e);return await c.data})),d=(0,a.Z0)({name:"eCommerceApp/product",initialState:null,reducers:{resetProduct:()=>null,newProduct:{reducer:(e,t)=>t.payload,prepare:e=>({payload:{id:c.A.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}})}},extraReducers:{[i.fulfilled]:(e,t)=>t.payload,[l.fulfilled]:(e,t)=>t.payload,[s.fulfilled]:(e,t)=>null}}),{newProduct:p,resetProduct:m}=d.actions,u=e=>{let{eCommerceApp:t}=e;return t.product},h=d.reducer},33640:(e,t,r)=>{r.d(t,{Ay:()=>h,St:()=>u,VW:()=>l,d$:()=>c,kJ:()=>m,lU:()=>i});var a=r(12214),n=r(3339),o=r.n(n);const c=(0,a.zD)("eCommerceApp/products/getProducts",(async()=>{const e=await o().get("/api/ecommerce/products");return await e.data})),i=(0,a.zD)("eCommerceApp/products",(async(e,t)=>{let{dispatch:r,getState:a}=t;return await o().delete("/api/ecommerce/products",{data:e}),e})),s=(0,a.pU)({}),{selectAll:l,selectById:d}=s.getSelectors((e=>e.eCommerceApp.products)),p=(0,a.Z0)({name:"eCommerceApp/products",initialState:s.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:(e,t)=>{e.searchText=t.payload},prepare:e=>({payload:e.target.value||""})}},extraReducers:{[c.fulfilled]:s.setAll,[i.fulfilled]:(e,t)=>s.removeMany(e,t.payload)}}),{setProductsSearchText:m}=p.actions,u=e=>{let{eCommerceApp:t}=e;return t.products.searchText},h=p.reducer},25655:(e,t,r)=>{r.d(t,{A:()=>b});var a=r(98587),n=r(58168),o=r(26140),c=r(3610),i=r(88094),s=r(65475),l=r(74559),d=r(15678);const p=(0,l.A)((0,d.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");var m=r(91073),u=r(92443),h=r(45036),x=r(56302);function g(e){return(0,x.A)("MuiTableSortLabel",e)}const A=(0,r(11894).A)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),f=["active","children","className","direction","hideSortIcon","IconComponent"],y=(0,m.Ay)(s.A,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.active&&t.active]}})((e=>{let{theme:t}=e;return{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":{color:(t.vars||t).palette.text.secondary,[`& .${A.icon}`]:{opacity:.5}},[`&.${A.active}`]:{color:(t.vars||t).palette.text.primary,[`& .${A.icon}`]:{opacity:1,color:(t.vars||t).palette.text.secondary}}}})),w=(0,m.Ay)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.icon,t[`iconDirection${(0,h.A)(r.direction)}`]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,n.A)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===r.direction&&{transform:"rotate(0deg)"},"asc"===r.direction&&{transform:"rotate(180deg)"})})),b=i.forwardRef((function(e,t){const r=(0,u.A)({props:e,name:"MuiTableSortLabel"}),{active:i=!1,children:s,className:l,direction:m="asc",hideSortIcon:x=!1,IconComponent:A=p}=r,b=(0,a.A)(r,f),v=(0,n.A)({},r,{active:i,direction:m,hideSortIcon:x,IconComponent:A}),j=(e=>{const{classes:t,direction:r,active:a}=e,n={root:["root",a&&"active"],icon:["icon",`iconDirection${(0,h.A)(r)}`]};return(0,o.A)(n,g,t)})(v);return(0,d.jsxs)(y,(0,n.A)({className:(0,c.A)(j.root,l),component:"span",disableRipple:!0,ownerState:v,ref:t},b,{children:[s,x&&!i?null:(0,d.jsx)(w,{as:A,className:(0,c.A)(j.icon),ownerState:v})]}))}))}}]);