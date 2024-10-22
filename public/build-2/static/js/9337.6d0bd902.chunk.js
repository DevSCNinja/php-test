"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9337],{36404:(e,n,r)=>{r.r(n),r.d(n,{default:()=>l});const l='import { Controller, useForm } from \'react-hook-form\';\nimport Button from \'@mui/material/Button\';\nimport TextField from \'@mui/material/TextField\';\nimport Checkbox from \'@mui/material/Checkbox\';\nimport Select from \'@mui/material/Select\';\nimport MenuItem from \'@mui/material/MenuItem\';\nimport Switch from \'@mui/material/Switch\';\nimport RadioGroup from \'@mui/material/RadioGroup\';\nimport FormControlLabel from \'@mui/material/FormControlLabel\';\nimport Radio from \'@mui/material/Radio\';\nimport Typography from \'@mui/material/Typography\';\nimport Autocomplete from \'@mui/material/Autocomplete\';\nimport * as yup from \'yup\';\nimport { yupResolver } from \'@hookform/resolvers/yup\';\nimport _ from \'@lodash\';\nimport clsx from \'clsx\';\nimport FormControl from \'@mui/material/FormControl\';\nimport FormLabel from \'@mui/material/FormLabel\';\nimport FormHelperText from \'@mui/material/FormHelperText\';\nimport { DateTimePicker } from \'@mui/lab\';\n\nlet renderCount = 0;\n\nconst options = [\n  {\n    value: \'chocolate\',\n    label: \'Chocolate\',\n  },\n  {\n    value: \'strawberry\',\n    label: \'Strawberry\',\n  },\n  {\n    value: \'vanilla\',\n    label: \'Vanilla\',\n  },\n];\n\nconst defaultValues = {\n  Native: \'\',\n  TextField: \'\',\n  Select: \'\',\n  Autocomplete: [],\n  Checkbox: false,\n  Switch: false,\n  RadioGroup: \'\',\n  DateTimePicker: \'\',\n};\n\n/**\n * Form Validation Schema\n */\nconst schema = yup.object().shape({\n  TextField: yup.string().required(\'You must enter a value\'),\n  Native: yup.string().required(\'You must enter a value\'),\n  Select: yup.string().required(\'You must select a value\').oneOf([\'20\', \'30\'], \'Select 20 or 30.\'),\n  Checkbox: yup.boolean().oneOf([true], \'You must check.\'),\n  Switch: yup.boolean().oneOf([true], \'You must turn it on.\'),\n  RadioGroup: yup.string().oneOf([\'female\'], \'You must select female.\'),\n  Autocomplete: yup.array().min(2, \'Select at least two.\'),\n  DateTimePicker: yup.string().nullable().required(\'You must select a date\'),\n});\n\nfunction SimpleFormExample() {\n  const { handleSubmit, register, reset, control, watch, formState } = useForm({\n    defaultValues,\n    mode: \'all\',\n    resolver: yupResolver(schema),\n  });\n\n  const { isValid, dirtyFields, errors, touchedFields } = formState;\n\n  renderCount += 1;\n\n  const data = watch();\n\n  return (\n    <div className="flex w-full max-w-screen-md justify-start items-start">\n      <form className="w-1/2" onSubmit={handleSubmit((_data) => console.info(_data))}>\n        <div className="mt-48 mb-16">\n          <Typography className="mb-24 font-medium text-14">Native Input:</Typography>\n\n          <input\n            className={clsx(\'border-1 outline-none rounded-8 p-8\', !!errors.Native && \'border-red\')}\n            {...register(\'Native\')}\n            required\n          />\n\n          {!!errors.Native && (\n            <Typography className="px-4 py-8 font-medium text-14" color="error">\n              {errors?.Native?.message}\n            </Typography>\n          )}\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Controller\n            name="Checkbox"\n            type="checkbox"\n            control={control}\n            render={({ field: { onChange, value, onBlur, ref } }) => (\n              <FormControl error={!!errors.Checkbox} required>\n                <FormLabel className="font-medium text-14" component="legend">\n                  MUI Checkbox\n                </FormLabel>\n                <FormControlLabel\n                  label="I agree"\n                  control={\n                    <Checkbox\n                      checked={value}\n                      onBlur={onBlur}\n                      onChange={(ev) => onChange(ev.target.checked)}\n                      inputRef={ref}\n                      required\n                    />\n                  }\n                />\n                <FormHelperText>{errors?.Checkbox?.message}</FormHelperText>\n              </FormControl>\n            )}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Controller\n            render={({ field }) => (\n              <FormControl error={!!errors.RadioGroup} required>\n                <FormLabel className="font-medium text-14" component="legend">\n                  Radio Group\n                </FormLabel>\n                <RadioGroup {...field} aria-label="gender" name="gender1">\n                  <FormControlLabel value="female" control={<Radio />} label="Female" />\n                  <FormControlLabel value="male" control={<Radio />} label="Male" />\n                </RadioGroup>\n                <FormHelperText>{errors?.RadioGroup?.message}</FormHelperText>\n              </FormControl>\n            )}\n            name="RadioGroup"\n            control={control}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Controller\n            render={({ field }) => (\n              <TextField\n                {...field}\n                label="MUI TextField"\n                variant="outlined"\n                error={!!errors.TextField}\n                helperText={errors?.TextField?.message}\n                required\n                fullWidth\n              />\n            )}\n            name="TextField"\n            control={control}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Controller\n            render={({ field }) => (\n              <FormControl error={!!errors.Select} required fullWidth>\n                <FormLabel className="font-medium text-14" component="legend">\n                  MUI Select\n                </FormLabel>\n                <Select {...field} variant="outlined" fullWidth>\n                  <MenuItem value="10">Ten (10)</MenuItem>\n                  <MenuItem value="20">Twenty (20)</MenuItem>\n                  <MenuItem value="30">Thirty (30)</MenuItem>\n                </Select>\n                <FormHelperText>{errors?.Select?.message}</FormHelperText>\n              </FormControl>\n            )}\n            name="Select"\n            control={control}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Controller\n            name="Switch"\n            type="checkbox"\n            control={control}\n            render={({ field: { onChange, value, ref, onBlur } }) => (\n              <FormControl required error={!!errors.Switch}>\n                <FormLabel className="font-medium text-14" component="legend">\n                  MUI Switch\n                </FormLabel>\n                <Switch\n                  checked={value}\n                  onBlur={onBlur}\n                  onChange={(ev) => onChange(ev.target.checked)}\n                  inputRef={ref}\n                  required\n                />\n                <FormHelperText>{errors?.Switch?.message}</FormHelperText>\n              </FormControl>\n            )}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Typography className="mb-24 font-medium text-14">Autocomplete</Typography>\n          <Controller\n            name="Autocomplete"\n            control={control}\n            defaultValue={[]}\n            render={({ field: { onChange, value, onBlur, ref } }) => (\n              <Autocomplete\n                className="mt-8 mb-16"\n                multiple\n                freeSolo\n                options={options}\n                value={value}\n                onChange={(event, newValue) => {\n                  onChange(newValue);\n                }}\n                renderInput={(params) => (\n                  <TextField\n                    {...params}\n                    placeholder="Select multiple tags"\n                    label="Tags"\n                    variant="outlined"\n                    InputLabelProps={{\n                      shrink: true,\n                    }}\n                    error={!!errors.Autocomplete}\n                    helperText={errors?.Autocomplete?.message}\n                    onBlur={onBlur}\n                    inputRef={ref}\n                  />\n                )}\n              />\n            )}\n          />\n        </div>\n\n        <div className="mt-48 mb-16">\n          <Typography className="mb-24 font-medium text-14">DateTimePicker</Typography>\n\n          <Controller\n            name="DateTimePicker"\n            control={control}\n            render={({ field: { onChange, value, onBlur } }) => (\n              <DateTimePicker\n                value={value}\n                onChange={onChange}\n                required\n                renderInput={(_props) => (\n                  <TextField\n                    className="w-full"\n                    {..._props}\n                    onBlur={onBlur}\n                    error={!!errors.DateTimePicker}\n                    helperText={errors?.DateTimePicker?.message}\n                  />\n                )}\n                className="w-full"\n              />\n            )}\n          />\n        </div>\n\n        <div className="flex my-48 items-center">\n          <Button\n            className="mx-8"\n            variant="contained"\n            color="secondary"\n            type="submit"\n            disabled={_.isEmpty(dirtyFields) || !isValid}\n          >\n            Submit\n          </Button>\n\n          <Button\n            className="mx-8"\n            type="button"\n            onClick={() => {\n              reset(defaultValues);\n            }}\n          >\n            Reset Form\n          </Button>\n        </div>\n      </form>\n\n      <div className="w-1/2 my-48 p-24">\n        <div className="mb-12">\n          <Typography>Is Valid: {isValid ? \'true\' : \'false\'}</Typography>\n        </div>\n\n        <div className="mb-12">\n          <Typography>Form data</Typography>\n        </div>\n\n        <div className="mb-12">\n          <pre className="language-js p-24 w-400">{JSON.stringify(data, null, 2)}</pre>\n        </div>\n\n        <div className="mb-12">\n          <Typography>Touched fields</Typography>\n\n          <pre className="language-js p-24 w-400">{JSON.stringify(touchedFields, null, 2)}</pre>\n        </div>\n\n        <div className="mb-12">\n          <Typography className="mt-16 font-medium text-12 italic" color="text.secondary">\n            Render Count: {renderCount}\n          </Typography>\n        </div>\n      </div>\n    </div>\n  );\n}\n\nexport default SimpleFormExample;\n'},21306:(e,n,r)=>{r.d(n,{A:()=>F});var l=r(95529),t=r(88124),o=r(87369),a=r(33358),i=r(96915),s=r(88094),m=r(89720),c=r(84178),d=r(83775),u=r(33351),p=r(90777),h=r(71739),x=r(33209),f=r(34057),v=r(91073),b=r(60209),j=r(15678);function g(e){const{children:n,document:r}=e,l=(0,f.A)();s.useEffect((()=>{r.body.dir=l.direction}),[r,l.direction]);const t=s.useMemo((()=>(0,p.A)({key:`iframe-demo-${l.direction}`,prepend:!0,container:r.head,stylisPlugins:"rtl"===l.direction?[u.A]:[]})),[r,l.direction]),o=s.useCallback((()=>r.defaultView),[r]);return(0,j.jsx)(x.StyleSheetManager,{target:r.head,stylisPlugins:"rtl"===l.direction?[u.A]:[],children:(0,j.jsxs)(h.C,{value:t,children:[(0,j.jsx)(b.A,{styles:()=>({html:{fontSize:"62.5%"}})}),s.cloneElement(n,{window:o})]})})}const y=(0,v.Ay)("iframe")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function N(e){var n;const{children:r,name:l,...t}=e,o=`${l} demo`,a=s.useRef(null),[i,m]=s.useReducer((()=>!0),!1);s.useEffect((()=>{const e=a.current.contentDocument;null==e||"complete"!==e.readyState||i||m()}),[i]);const c=null===(n=a.current)||void 0===n?void 0:n.contentDocument;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(y,{onLoad:m,ref:a,title:o,...t}),!1!==i?d.createPortal((0,j.jsx)(g,{document:c,children:r}),c.body):null]})}const A=s.memo(N);var C=r(98231);function T(e){const[n,r]=(0,s.useState)(e.currentTabIndex),{component:d,raw:u,iframe:p,className:h,name:x}=e;return(0,j.jsxs)(t.A,{className:(0,i.A)(h,"shadow"),sx:{backgroundColor:e=>(0,m.e$)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)},children:[(0,j.jsx)(c.A,{sx:{backgroundColor:e=>(0,m.e$)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)},children:(0,j.jsxs)(a.A,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:n,onChange:function(e,n){r(n)},textColor:"secondary",indicatorColor:"secondary",children:[d&&(0,j.jsx)(o.A,{classes:{root:"min-w-64"},icon:(0,j.jsx)(C.A,{children:"heroicons-outline:eye"})}),u&&(0,j.jsx)(o.A,{classes:{root:"min-w-64"},icon:(0,j.jsx)(C.A,{children:"heroicons-outline:code"})})]})}),(0,j.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,j.jsx)("div",{className:0===n?"flex flex-1 max-w-full":"hidden",children:d&&(p?(0,j.jsx)(A,{name:x,children:(0,j.jsx)(d,{})}):(0,j.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,j.jsx)(d,{})}))}),(0,j.jsx)("div",{className:1===n?"flex flex-1":"hidden",children:u&&(0,j.jsx)("div",{className:"flex flex-1",children:(0,j.jsx)(l.A,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:u.default})})})]})]})}T.defaultProps={name:"",currentTabIndex:0};const F=T},99337:(e,n,r)=>{r.r(n),r.d(n,{default:()=>s});var l=r(21306),t=r(76880),o=r(78298),a=r(98231),i=r(15678);const s=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex w-full items-center justify-between mb-24",children:[(0,i.jsx)(o.A,{variant:"h4",className:"",children:"React Hook Form"}),(0,i.jsx)(t.A,{variant:"contained",color:"secondary",component:"a",href:"http://react-hook-form.com",target:"_blank",role:"button",startIcon:(0,i.jsx)(a.A,{children:"heroicons-outline:external-link"}),children:"Reference"})]}),(0,i.jsx)(o.A,{className:"mb-16",component:"p",children:"Performant, flexible and extensible forms with easy to use validation."}),(0,i.jsx)("hr",{}),(0,i.jsx)(o.A,{className:"text-24 mt-32 mb-16",component:"h4",children:"Example usage with Material-UI elements and form validation"}),(0,i.jsx)(l.A,{className:"mb-64",component:r(43223).A,raw:r(36404)}),(0,i.jsx)(o.A,{className:"text-32 mt-32 mb-8",component:"h2",children:"Examples"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"mb-8",children:"src/app/main/sign-in/SignInPage.js"}),(0,i.jsx)("li",{className:"mb-8",children:"src/app/main/sign-up/SignUpPage.js"}),(0,i.jsx)("li",{className:"mb-8",children:"."}),(0,i.jsx)("li",{className:"mb-8",children:"."}),(0,i.jsx)("li",{className:"mb-8",children:"."})]})]})}},43223:(e,n,r)=>{r.d(n,{A:()=>S});var l=r(26751),t=r(76880),o=r(89418),a=r(96285),i=r(62214),s=r(53237),m=r(59319),c=r(54751),d=r(96826),u=r(3162),p=r(78298),h=r(46211),x=r(4464),f=r(4676),v=r(47637),b=r(96915),j=r(12540),g=r(16029),y=r(82867),N=r(15993),A=r(15678);let C=0;const T=[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],F={Native:"",TextField:"",Select:"",Autocomplete:[],Checkbox:!1,Switch:!1,RadioGroup:"",DateTimePicker:""},k=x.Ik().shape({TextField:x.Yj().required("You must enter a value"),Native:x.Yj().required("You must enter a value"),Select:x.Yj().required("You must select a value").oneOf(["20","30"],"Select 20 or 30."),Checkbox:x.zM().oneOf([!0],"You must check."),Switch:x.zM().oneOf([!0],"You must turn it on."),RadioGroup:x.Yj().oneOf(["female"],"You must select female."),Autocomplete:x.YO().min(2,"Select at least two."),DateTimePicker:x.Yj().nullable().required("You must select a date")});const S=function(){var e;const{handleSubmit:n,register:r,reset:x,control:S,watch:w,formState:I}=(0,l.mN)({defaultValues:F,mode:"all",resolver:(0,f.t)(k)}),{isValid:R,dirtyFields:q,errors:B,touchedFields:M}=I;C+=1;const P=w();return(0,A.jsxs)("div",{className:"flex w-full max-w-screen-md justify-start items-start",children:[(0,A.jsxs)("form",{className:"w-1/2",onSubmit:n((e=>console.info(e))),children:[(0,A.jsxs)("div",{className:"mt-48 mb-16",children:[(0,A.jsx)(p.A,{className:"mb-24 font-medium text-14",children:"Native Input:"}),(0,A.jsx)("input",{className:(0,b.A)("border-1 outline-none rounded-8 p-8",!!B.Native&&"border-red"),...r("Native"),required:!0}),!!B.Native&&(0,A.jsx)(p.A,{className:"px-4 py-8 font-medium text-14",color:"error",children:null===B||void 0===B||null===(e=B.Native)||void 0===e?void 0:e.message})]}),(0,A.jsx)("div",{className:"mt-48 mb-16",children:(0,A.jsx)(l.xI,{name:"Checkbox",type:"checkbox",control:S,render:e=>{var n;let{field:{onChange:r,value:l,onBlur:t,ref:o}}=e;return(0,A.jsxs)(j.A,{error:!!B.Checkbox,required:!0,children:[(0,A.jsx)(g.A,{className:"font-medium text-14",component:"legend",children:"MUI Checkbox"}),(0,A.jsx)(d.A,{label:"I agree",control:(0,A.jsx)(a.A,{checked:l,onBlur:t,onChange:e=>r(e.target.checked),inputRef:o,required:!0})}),(0,A.jsx)(y.A,{children:null===B||void 0===B||null===(n=B.Checkbox)||void 0===n?void 0:n.message})]})}})}),(0,A.jsx)("div",{className:"mt-48 mb-16",children:(0,A.jsx)(l.xI,{render:e=>{var n;let{field:r}=e;return(0,A.jsxs)(j.A,{error:!!B.RadioGroup,required:!0,children:[(0,A.jsx)(g.A,{className:"font-medium text-14",component:"legend",children:"Radio Group"}),(0,A.jsxs)(c.A,{...r,"aria-label":"gender",name:"gender1",children:[(0,A.jsx)(d.A,{value:"female",control:(0,A.jsx)(u.A,{}),label:"Female"}),(0,A.jsx)(d.A,{value:"male",control:(0,A.jsx)(u.A,{}),label:"Male"})]}),(0,A.jsx)(y.A,{children:null===B||void 0===B||null===(n=B.RadioGroup)||void 0===n?void 0:n.message})]})},name:"RadioGroup",control:S})}),(0,A.jsx)("div",{className:"mt-48 mb-16",children:(0,A.jsx)(l.xI,{render:e=>{var n;let{field:r}=e;return(0,A.jsx)(o.A,{...r,label:"MUI TextField",variant:"outlined",error:!!B.TextField,helperText:null===B||void 0===B||null===(n=B.TextField)||void 0===n?void 0:n.message,required:!0,fullWidth:!0})},name:"TextField",control:S})}),(0,A.jsx)("div",{className:"mt-48 mb-16",children:(0,A.jsx)(l.xI,{render:e=>{var n;let{field:r}=e;return(0,A.jsxs)(j.A,{error:!!B.Select,required:!0,fullWidth:!0,children:[(0,A.jsx)(g.A,{className:"font-medium text-14",component:"legend",children:"MUI Select"}),(0,A.jsxs)(i.A,{...r,variant:"outlined",fullWidth:!0,children:[(0,A.jsx)(s.A,{value:"10",children:"Ten (10)"}),(0,A.jsx)(s.A,{value:"20",children:"Twenty (20)"}),(0,A.jsx)(s.A,{value:"30",children:"Thirty (30)"})]}),(0,A.jsx)(y.A,{children:null===B||void 0===B||null===(n=B.Select)||void 0===n?void 0:n.message})]})},name:"Select",control:S})}),(0,A.jsx)("div",{className:"mt-48 mb-16",children:(0,A.jsx)(l.xI,{name:"Switch",type:"checkbox",control:S,render:e=>{var n;let{field:{onChange:r,value:l,ref:t,onBlur:o}}=e;return(0,A.jsxs)(j.A,{required:!0,error:!!B.Switch,children:[(0,A.jsx)(g.A,{className:"font-medium text-14",component:"legend",children:"MUI Switch"}),(0,A.jsx)(m.A,{checked:l,onBlur:o,onChange:e=>r(e.target.checked),inputRef:t,required:!0}),(0,A.jsx)(y.A,{children:null===B||void 0===B||null===(n=B.Switch)||void 0===n?void 0:n.message})]})}})}),(0,A.jsxs)("div",{className:"mt-48 mb-16",children:[(0,A.jsx)(p.A,{className:"mb-24 font-medium text-14",children:"Autocomplete"}),(0,A.jsx)(l.xI,{name:"Autocomplete",control:S,defaultValue:[],render:e=>{let{field:{onChange:n,value:r,onBlur:l,ref:t}}=e;return(0,A.jsx)(h.A,{className:"mt-8 mb-16",multiple:!0,freeSolo:!0,options:T,value:r,onChange:(e,r)=>{n(r)},renderInput:e=>{var n;return(0,A.jsx)(o.A,{...e,placeholder:"Select multiple tags",label:"Tags",variant:"outlined",InputLabelProps:{shrink:!0},error:!!B.Autocomplete,helperText:null===B||void 0===B||null===(n=B.Autocomplete)||void 0===n?void 0:n.message,onBlur:l,inputRef:t})}})}})]}),(0,A.jsxs)("div",{className:"mt-48 mb-16",children:[(0,A.jsx)(p.A,{className:"mb-24 font-medium text-14",children:"DateTimePicker"}),(0,A.jsx)(l.xI,{name:"DateTimePicker",control:S,render:e=>{let{field:{onChange:n,value:r,onBlur:l}}=e;return(0,A.jsx)(N.K,{value:r,onChange:n,required:!0,renderInput:e=>{var n;return(0,A.jsx)(o.A,{className:"w-full",...e,onBlur:l,error:!!B.DateTimePicker,helperText:null===B||void 0===B||null===(n=B.DateTimePicker)||void 0===n?void 0:n.message})},className:"w-full"})}})]}),(0,A.jsxs)("div",{className:"flex my-48 items-center",children:[(0,A.jsx)(t.A,{className:"mx-8",variant:"contained",color:"secondary",type:"submit",disabled:v.A.isEmpty(q)||!R,children:"Submit"}),(0,A.jsx)(t.A,{className:"mx-8",type:"button",onClick:()=>{x(F)},children:"Reset Form"})]})]}),(0,A.jsxs)("div",{className:"w-1/2 my-48 p-24",children:[(0,A.jsx)("div",{className:"mb-12",children:(0,A.jsxs)(p.A,{children:["Is Valid: ",R?"true":"false"]})}),(0,A.jsx)("div",{className:"mb-12",children:(0,A.jsx)(p.A,{children:"Form data"})}),(0,A.jsx)("div",{className:"mb-12",children:(0,A.jsx)("pre",{className:"language-js p-24 w-400",children:JSON.stringify(P,null,2)})}),(0,A.jsxs)("div",{className:"mb-12",children:[(0,A.jsx)(p.A,{children:"Touched fields"}),(0,A.jsx)("pre",{className:"language-js p-24 w-400",children:JSON.stringify(M,null,2)})]}),(0,A.jsx)("div",{className:"mb-12",children:(0,A.jsxs)(p.A,{className:"mt-16 font-medium text-12 italic",color:"text.secondary",children:["Render Count: ",C]})})]})]})}}}]);