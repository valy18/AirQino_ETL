"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8003],{229487:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(211965),o=n(404863),a=n(751995),i=n(313322),s=n(135944);function l(e){const{type:t="info",description:n,showIcon:l=!0,closable:d=!0,roomBelow:c=!1,children:p}=e,u=(0,a.Fg)(),{colors:h,typography:m,gridUnit:g}=u,{alert:b,error:f,info:v,success:y}=h;let $=v,x=i.Z.InfoSolid;return"error"===t?($=f,x=i.Z.ErrorSolid):"warning"===t?($=b,x=i.Z.AlertSolid):"success"===t&&($=y,x=i.Z.CircleCheckSolid),(0,s.tZ)(o.default,{role:"alert",showIcon:l,icon:(0,s.tZ)(x,{"aria-label":`${t} icon`}),closeText:d&&(0,s.tZ)(i.Z.XSmall,{"aria-label":"close icon"}),css:(0,r.iv)({marginBottom:c?4*g:0,padding:`${2*g}px ${3*g}px`,alignItems:"flex-start",border:0,backgroundColor:$.light2,"& .ant-alert-icon":{marginRight:2*g},"& .ant-alert-message":{color:$.dark2,fontSize:m.sizes.m,fontWeight:n?m.weights.bold:m.weights.normal},"& .ant-alert-description":{color:$.dark2,fontSize:m.sizes.m}},"",""),...e,children:p})}},749140:(e,t,n)=>{n.d(t,{Z5:()=>w,ry:()=>x,up:()=>v,Ad:()=>_,cE:()=>y,iO:()=>f,YH:()=>$,uh:()=>m});var r=n(667294),o=n(953239),a=n(967913),i=n(938325),s=n(400057),l=n(751995),d=n(211965),c=n(135944),p=n(214640),u=n(104715);const h=({title:e,icon:t,body:n,meta:r,footer:o})=>(0,c.BX)("div",{className:"tooltip-detail",children:[(0,c.BX)("div",{className:"tooltip-detail-head",children:[(0,c.BX)("div",{className:"tooltip-detail-title",children:[t,e]}),r&&(0,c.tZ)("span",{className:"tooltip-detail-meta",children:(0,c.tZ)(u.Vp,{color:"default",children:r})})]}),n&&(0,c.tZ)("div",{className:"tooltip-detail-body",children:null!=n?n:e}),o&&(0,c.tZ)("div",{className:"tooltip-detail-footer",children:o})]}),m=e=>`${(0,p.renderToStaticMarkup)((0,c.tZ)(h,{...e}))}`;o.config.setModuleUrl("ace/mode/css_worker",s);const g={"mode/sql":()=>n.e(8883).then(n.t.bind(n,248883,23)),"mode/markdown":()=>Promise.all([n.e(9794),n.e(5802),n.e(4832),n.e(6061)]).then(n.t.bind(n,866061,23)),"mode/css":()=>Promise.all([n.e(5802),n.e(4972)]).then(n.t.bind(n,994972,23)),"mode/json":()=>n.e(8750).then(n.t.bind(n,158750,23)),"mode/yaml":()=>n.e(741).then(n.t.bind(n,260741,23)),"mode/html":()=>Promise.all([n.e(9794),n.e(5802),n.e(4832),n.e(1258)]).then(n.t.bind(n,171258,23)),"mode/javascript":()=>Promise.all([n.e(9794),n.e(4579)]).then(n.t.bind(n,754579,23)),"theme/textmate":()=>n.e(2089).then(n.t.bind(n,302089,23)),"theme/github":()=>n.e(440).then(n.t.bind(n,550440,23)),"ext/language_tools":()=>n.e(5335).then(n.t.bind(n,375335,23)),"ext/searchbox":()=>n.e(8656).then(n.t.bind(n,468656,23))};function b(e,{defaultMode:t,defaultTheme:s,defaultTabSize:p=2,fontFamily:u="Menlo, Consolas, Courier New, Ubuntu Mono, source-code-pro, Lucida Console, monospace",placeholder:h}={}){return(0,a.Z)((async()=>{var a,h;const{default:m}=await Promise.resolve().then(n.bind(n,874981));await Promise.all(e.map((e=>g[e]())));const b=t||(null==(a=e.find((e=>e.startsWith("mode/"))))?void 0:a.replace("mode/","")),f=s||(null==(h=e.find((e=>e.startsWith("theme/"))))?void 0:h.replace("theme/",""));return(0,r.forwardRef)((function({keywords:e,mode:t=b,theme:n=f,tabSize:a=p,defaultValue:s="",...h},g){const v=(0,l.Fg)(),y=(0,o.acequire)("ace/ext/language_tools"),$=(0,i.Z)((e=>{const n={getCompletions:(n,r,o,a,i)=>{Number.isNaN(parseInt(a,10))&&r.getMode().$id===`ace/mode/${t}`&&i(null,e)}};y.setCompleters([n])}));return(0,r.useEffect)((()=>{e&&$(e)}),[e,$]),(0,c.BX)(c.HY,{children:[(0,c.tZ)(d.xB,{styles:d.iv`
                .ace_tooltip {
                  margin-left: ${2*v.gridUnit}px;
                  padding: 0px;
                  border: 1px solid ${v.colors.grayscale.light1};
                }

                & .tooltip-detail {
                  background-color: ${v.colors.grayscale.light5};
                  white-space: pre-wrap;
                  word-break: break-all;
                  min-width: ${50*v.gridUnit}px;
                  max-width: ${100*v.gridUnit}px;
                  & .tooltip-detail-head {
                    background-color: ${v.colors.grayscale.light4};
                    color: ${v.colors.grayscale.dark1};
                    display: flex;
                    column-gap: ${v.gridUnit}px;
                    align-items: baseline;
                    justify-content: space-between;
                  }
                  & .tooltip-detail-title {
                    display: flex;
                    column-gap: ${v.gridUnit}px;
                  }
                  & .tooltip-detail-body {
                    word-break: break-word;
                  }
                  & .tooltip-detail-head,
                  & .tooltip-detail-body {
                    padding: ${v.gridUnit}px
                      ${2*v.gridUnit}px;
                  }
                  & .tooltip-detail-footer {
                    border-top: 1px ${v.colors.grayscale.light2}
                      solid;
                    padding: 0 ${2*v.gridUnit}px;
                    color: ${v.colors.grayscale.dark1};
                    font-size: ${v.typography.sizes.xs}px;
                  }
                  & .tooltip-detail-meta {
                    & > .ant-tag {
                      margin-right: 0px;
                    }
                  }
                }
              `}),(0,c.tZ)(m,{ref:g,mode:t,theme:n,tabSize:a,defaultValue:s,setOptions:{fontFamily:u},...h})]})}))}),h)}const f=b(["mode/sql","theme/github","ext/language_tools","ext/searchbox"]),v=b(["mode/sql","theme/github","ext/language_tools","ext/searchbox"],{placeholder:()=>(0,c.BX)("div",{style:{height:"100%"},children:[(0,c.tZ)("div",{style:{width:41,height:"100%",background:"#e8e8e8"}}),(0,c.tZ)("div",{className:"ace_content"})]})}),y=b(["mode/markdown","theme/textmate"]),$=b(["mode/markdown","mode/sql","mode/json","mode/html","mode/javascript","theme/textmate"]),x=b(["mode/css","theme/github"]),_=b(["mode/json","theme/github"]),w=b(["mode/json","mode/yaml","theme/github"])},967913:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(667294),o=n(838703),a=n(135944);function i({width:e,height:t,showLoadingForImport:n=!1,placeholderStyle:r}){return t&&(0,a.tZ)("div",{style:{width:e,height:t,...r},children:n&&(0,a.tZ)(o.Z,{position:"floating"})},"async-asm-placeholder")||null}function s(e,t=i){let n,o;function s(){return n||(n=e instanceof Promise?e:e()),o||n.then((e=>{o=e.default||e})),n}const l=(0,r.forwardRef)((function(e,n){const[i,l]=(0,r.useState)(void 0!==o);(0,r.useEffect)((()=>{let e=!0;return i||s().then((()=>{e&&l(!0)})),()=>{e=!1}}));const d=o||t;return d?(0,a.tZ)(d,{ref:d===o?n:null,...e}):null}));return l.preload=s,l}},843700:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(751995),o=n(46445),a=n(135944);const i=Object.assign((0,r.iK)((({light:e,bigger:t,bold:n,animateArrows:r,...i})=>(0,a.tZ)(o.Z,{...i})))`
    .ant-collapse-item {
      .ant-collapse-header {
        font-weight: ${({bold:e,theme:t})=>e?t.typography.weights.bold:t.typography.weights.normal};
        font-size: ${({bigger:e,theme:t})=>e?4*t.gridUnit+"px":"inherit"};

        .ant-collapse-arrow svg {
          transition: ${({animateArrows:e})=>e?"transform 0.24s":"none"};
        }

        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(90deg) !important;\n            }\n          "}

        ${({light:e,theme:t})=>e&&`\n            color: ${t.colors.grayscale.light4};\n            .ant-collapse-arrow svg {\n              color: ${t.colors.grayscale.light4};\n            }\n          `}

        ${({ghost:e,bordered:t,theme:n})=>e&&t&&`\n            border-bottom: 1px solid ${n.colors.grayscale.light3};\n          `}
      }
      .ant-collapse-content {
        .ant-collapse-content-box {
          .loading.inline {
            margin: ${({theme:e})=>12*e.gridUnit}px auto;
            display: block;
          }
        }
      }
    }
    .ant-collapse-item-active {
      .ant-collapse-header {
        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(-90deg) !important;\n            }\n          "}
      }
    }
  `,{Panel:o.Z.Panel})},804591:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(897538);const o=(0,n(751995).iK)(r.Z.Item)`
  ${({theme:e})=>`\n    .ant-form-item-label {\n      padding-bottom: ${e.gridUnit}px;\n      & > label {\n        text-transform: uppercase;\n        font-size: ${e.typography.sizes.s}px;\n        color: ${e.colors.grayscale.base};\n\n        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {\n          &::before {\n            display: none;\n          }\n          &::after {\n            display: inline-block;\n            color: ${e.colors.error.base};\n            font-size: ${e.typography.sizes.s}px;\n            content: '*';\n          }\n        }\n      }\n    }\n  `}
`},902857:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(751995),o=n(135944);const a=r.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,i=r.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  &::after {
    display: inline-block;
    margin-left: ${({theme:e})=>e.gridUnit}px;
    color: ${({theme:e})=>e.colors.error.base};
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
    content: '*';
  }
`;function s({children:e,htmlFor:t,required:n=!1,className:r}){const s=n?i:a;return(0,o.tZ)(s,{htmlFor:t,className:r,children:e})}},73684:(e,t,n)=>{n.d(t,{Z:()=>k});var r,o=n(477808),a=n(931097),i=n(751995),s=n(211965),l=n(61988),d=n(608272),c=n(313322),p=n(835932),u=n(667294);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(null,arguments)}const m=({title:e,titleId:t,...n},o)=>u.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:o,"aria-labelledby":t},n),e?u.createElement("title",{id:t},e):null,r||(r=u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71M20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69z",clipRule:"evenodd"}))),g=(0,u.forwardRef)(m);var b=n(804591),f=n(902857),v=n(135944);const y=(0,i.iK)(o.Z)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,$=(0,i.iK)(o.Z.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,x=(0,i.iK)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,_=i.iK.div`
  display: flex;
  align-items: center;
`,w=(0,i.iK)(f.Z)`
  margin-bottom: 0;
`,Z=s.iv`
  &.anticon > * {
    line-height: 0;
  }
`,k=({label:e,validationMethods:t,errorMessage:n,helpText:r,required:o=!1,hasTooltip:i=!1,tooltipText:u,id:h,className:m,visibilityToggle:f,get_url:k,description:S,...C})=>(0,v.BX)(x,{className:m,children:[(0,v.BX)(_,{children:[(0,v.tZ)(w,{htmlFor:h,required:o,children:e}),i&&(0,v.tZ)(d.Z,{tooltip:`${u}`})]}),(0,v.BX)(b.Z,{css:e=>((e,t)=>s.iv`
  .ant-form-item-children-icon {
    display: none;
  }
  ${t&&`.ant-form-item-control-input-content {\n      position: relative;\n      &:after {\n        content: ' ';\n        display: inline-block;\n        background: ${e.colors.error.base};\n        mask: url(${g});\n        mask-size: cover;\n        width: ${4*e.gridUnit}px;\n        height: ${4*e.gridUnit}px;\n        position: absolute;\n        right: ${1.25*e.gridUnit}px;\n        top: ${2.75*e.gridUnit}px;\n      }\n    }`}
`)(e,!!n),validateTrigger:Object.keys(t),validateStatus:n?"error":"success",help:n||r,hasFeedback:!!n,children:[f||"password"===C.name?(0,v.tZ)($,{...C,...t,iconRender:e=>e?(0,v.tZ)(a.Z,{title:(0,l.t)("Hide password."),children:(0,v.tZ)(c.Z.EyeInvisibleOutlined,{iconSize:"m",css:Z})}):(0,v.tZ)(a.Z,{title:(0,l.t)("Show password."),children:(0,v.tZ)(c.Z.EyeOutlined,{iconSize:"m",css:Z})}),role:"textbox"}):(0,v.tZ)(y,{...C,...t}),k&&S?(0,v.BX)(p.Z,{type:"link",htmlType:"button",buttonStyle:"default",onClick:()=>(window.open(k),!0),children:["Get ",S]}):(0,v.tZ)("br",{})]})]})},49238:(e,t,n)=>{n.d(t,{l0:()=>s,xJ:()=>l.Z,lX:()=>d.Z,QA:()=>c.Z});var r=n(897538),o=n(751995),a=n(135944);const i=(0,o.iK)(r.Z)`
  &.ant-form label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }
  .ant-form-item {
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }
`;function s(e){return(0,a.tZ)(i,{...e})}var l=n(804591),d=n(902857),c=n(73684)},685931:(e,t,n)=>{n.d(t,{m:()=>i});var r=n(473727),o=n(23525),a=n(135944);const i=({to:e,component:t,replace:n,innerRef:i,children:s,...l})=>"string"==typeof e&&(0,o.TO)(e)?(0,a.tZ)("a",{href:(0,o.en)(e),...l,children:s}):(0,a.tZ)(r.rU,{to:e,component:t,replace:n,innerRef:i,...l,children:s})},608272:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(751995),o=n(358593),a=n(313322),i=n(135944);const s=(0,r.iK)(o.u)`
  cursor: pointer;
`,l=r.iK.span`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,d={fontSize:"12px",lineHeight:"16px"},c="rgba(0,0,0,0.9)";function p({tooltip:e,iconStyle:t={},placement:n="right",trigger:o="hover",overlayStyle:p=d,bgColor:u=c,viewBox:h="0 -1 24 24"}){const m=(0,r.Fg)(),g={...t,color:t.color||m.colors.grayscale.base};return(0,i.tZ)(s,{title:(0,i.tZ)(l,{children:e}),placement:n,trigger:o,overlayStyle:p,color:u,children:(0,i.tZ)(a.Z.InfoSolidSmall,{style:g,viewBox:h})})}},9875:(e,t,n)=>{n.d(t,{II:()=>i,Kx:()=>l,Rn:()=>s});var r=n(751995),o=n(477808),a=n(436795);const i=(0,r.iK)(o.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,s=(0,r.iK)(a.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,l=(0,r.iK)(o.Z.TextArea)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`},737921:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(211965),o=n(104715),a=n(751995),i=n(135944);function s(e){const t=(0,a.Fg)(),{colors:n,transitionTiming:s}=t,{type:l="default",onClick:d,children:c,...p}=e,{alert:u,primary:h,secondary:m,grayscale:g,success:b,warning:f,error:v,info:y}=n;let $=g.light3,x=d?h.light2:g.light3,_=d?g.light2:"transparent",w=d?h.light1:"transparent",Z=g.dark1;if("default"!==l){let e;Z=g.light4,"alert"===l?(Z=g.dark1,e=u):e="success"===l?b:"warning"===l?f:"danger"===l?v:"info"===l?y:"secondary"===l?m:h,$=e.base,x=d?e.dark1:e.base,_=d?e.dark1:"transparent",w=d?e.dark2:"transparent"}return(0,i.tZ)(o.Vp,{onClick:d,role:d?"button":void 0,...p,css:(0,r.iv)({transition:`background-color ${s}s`,whiteSpace:"nowrap",cursor:d?"pointer":"default",overflow:"hidden",textOverflow:"ellipsis",backgroundColor:$,borderColor:_,borderRadius:21,padding:"0.35em 0.8em",lineHeight:1,color:Z,maxWidth:"100%","&:hover":{backgroundColor:x,borderColor:w,opacity:1}},"",""),children:c})}},683862:(e,t,n)=>{n.d(t,{MainNav:()=>m,Menu:()=>h,PI:()=>d,av:()=>i,ef:()=>l,fH:()=>r,xI:()=>s});var r,o=n(751995),a=n(743865);!function(e){e.MenuItem="menu-item",e.SubMenu="submenu",e.SubMenuItem="submenu-item"}(r||(r={}));const i=e=>{var t,n;return void 0!==(null==e||null==(t=e.current)||null==(n=t.props)?void 0:n.parentMenu)},s=e=>{var t;return"Styled(MenuItem)"===(null==e||null==(t=e.type)?void 0:t.displayName)},l=e=>{var t;return 1===(null==e||null==(t=e.type)?void 0:t.isSubMenu)},d=e=>e===r.SubMenu||e===r.SubMenuItem,c=(0,o.iK)(a.Z.Item)`
  > a {
    text-decoration: none;
  }

  &.ant-menu-item {
    height: ${({theme:e})=>8*e.gridUnit}px;
    line-height: ${({theme:e})=>8*e.gridUnit}px;
    a {
      border-bottom: none;
      transition: background-color ${({theme:e})=>e.transitionTiming}s;
      &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 3px;
        opacity: 0;
        transform: translateX(-50%);
        transition: all ${({theme:e})=>e.transitionTiming}s;
        background-color: ${({theme:e})=>e.colors.primary.base};
      }
      &:focus {
        border-bottom: none;
        background-color: transparent;
        @media (max-width: 767px) {
          background-color: ${({theme:e})=>e.colors.primary.light5};
        }
      }
    }
  }

  &.ant-menu-item,
  &.ant-dropdown-menu-item {
    span[role='button'] {
      display: inline-block;
      width: 100%;
    }
    transition-duration: 0s;
  }
`,p=(0,o.iK)(a.Z)`
  line-height: 51px;
  border: none;

  & > .ant-menu-item,
  & > .ant-menu-submenu {
    vertical-align: inherit;
    &:hover {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    &:hover {
      border-bottom: none;
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0px;
  }

  & > .ant-menu-item > a {
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }
`,u=(0,o.iK)(a.Z.SubMenu)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  border-bottom: none;
  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    background-color: ${({theme:e})=>e.colors.primary.light5};
    .ant-menu-submenu-title {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
      background-color: ${({theme:e})=>e.colors.primary.light5};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: calc(100% - 1);
      }
    }
  }
  .ant-menu-submenu-title {
    position: relative;
    top: ${({theme:e})=>-e.gridUnit-3}px;
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      width: 0;
      height: 3px;
      opacity: 0;
      transform: translateX(-50%);
      transition: all ${({theme:e})=>e.transitionTiming}s;
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }
  .ant-menu-submenu-arrow {
    top: 67%;
  }
  & > .ant-menu-submenu-title {
    padding: 0 ${({theme:e})=>6*e.gridUnit}px 0
      ${({theme:e})=>3*e.gridUnit}px !important;
    span[role='img'] {
      position: absolute;
      right: ${({theme:e})=>-e.gridUnit-2}px;
      top: ${({theme:e})=>5.25*e.gridUnit}px;
      svg {
        font-size: ${({theme:e})=>6*e.gridUnit}px;
        color: ${({theme:e})=>e.colors.grayscale.base};
      }
    }
    & > span {
      position: relative;
      top: 7px;
    }
    &:hover {
      color: ${({theme:e})=>e.colors.primary.base};
    }
  }
`,h=Object.assign(a.Z,{Item:c}),m=Object.assign(p,{Item:c,SubMenu:u,Divider:a.Z.Divider,ItemGroup:a.Z.ItemGroup})},287183:(e,t,n)=>{n.d(t,{Y:()=>s});var r=n(751995),o=n(747933);const a=(0,r.iK)(o.ZP)`
  .ant-radio-inner {
    top: -1px;
    left: 2px;
    width: ${({theme:e})=>4*e.gridUnit}px;
    height: ${({theme:e})=>4*e.gridUnit}px;
    border-width: 2px;
    border-color: ${({theme:e})=>e.colors.grayscale.light2};
  }

  .ant-radio.ant-radio-checked {
    .ant-radio-inner {
      border-width: ${({theme:e})=>e.gridUnit+1}px;
      border-color: ${({theme:e})=>e.colors.primary.base};
    }

    .ant-radio-inner::after {
      background-color: ${({theme:e})=>e.colors.grayscale.light5};
      top: 0;
      left: 0;
      width: ${({theme:e})=>e.gridUnit+2}px;
      height: ${({theme:e})=>e.gridUnit+2}px;
    }
  }

  .ant-radio:hover,
  .ant-radio:focus {
    .ant-radio-inner {
      border-color: ${({theme:e})=>e.colors.primary.dark1};
    }
  }
`,i=(0,r.iK)(o.ZP.Group)`
  font-size: inherit;
`,s=Object.assign(a,{Group:i,Button:o.ZP.Button})},112441:(e,t,n)=>{n.d(t,{r:()=>s});var r=n(751995),o=n(840987),a=n(135944);const i=(0,r.iK)(o.Z)`
  .ant-switch-checked {
    background-color: ${({theme:e})=>e.colors.primary.base};
  }
`,s=e=>(0,a.tZ)(i,{...e})},171262:(e,t,n)=>{n.d(t,{Xv:()=>h,cl:()=>g,ZP:()=>b});var r=n(211965),o=n(751995),a=n(901350),i=n(313322),s=n(135944);const l=({animated:e=!1,fullWidth:t=!0,allowOverflow:n=!0,...o})=>(0,s.tZ)(a.Z,{animated:e,...o,css:e=>r.iv`
      overflow: ${n?"visible":"hidden"};

      .ant-tabs-content-holder {
        overflow: ${n?"visible":"auto"};
      }
      .ant-tabs-tab {
        flex: 1 1 auto;
        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: inherit;
        }
        &:hover {
          .anchor-link-container {
            cursor: pointer;
            .fa.fa-link {
              visibility: visible;
            }
          }
        }
        .short-link-trigger.btn {
          padding: 0 ${e.gridUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      ${t&&r.iv`
        .ant-tabs-nav-list {
          width: 100%;
        }
      `};

      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.typography.sizes.s}px;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        .required {
          margin-left: ${e.gridUnit/2}px;
          color: ${e.colors.error.base};
        }
      }
      .ant-tabs-ink-bar {
        background: ${e.colors.secondary.base};
      }
    `}),d=(0,o.iK)(a.Z.TabPane)``,c=Object.assign(l,{TabPane:d}),p=(0,o.iK)(l)`
  ${({theme:e,fullWidth:t})=>`\n    .ant-tabs-content-holder {\n      background: ${e.colors.grayscale.light5};\n    }\n\n    & > .ant-tabs-nav {\n      margin-bottom: 0;\n    }\n\n    .ant-tabs-tab-remove {\n      padding-top: 0;\n      padding-bottom: 0;\n      height: ${6*e.gridUnit}px;\n    }\n\n    ${t?r.iv`
            .ant-tabs-nav-list {
              width: 100%;
            }
          `:""}\n  `}
`,u=(0,o.iK)(i.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,h=Object.assign(p,{TabPane:d});h.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},h.TabPane.defaultProps={closeIcon:(0,s.tZ)(u,{role:"button",tabIndex:0})};const m=(0,o.iK)(h)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;
    padding: ${({theme:e})=>`${3*e.gridUnit}px ${e.gridUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,g=Object.assign(m,{TabPane:d}),b=c},418451:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(828216);function o(){return(0,r.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},839589:(e,t,n)=>{var r,o;n.d(t,{Z:()=>o,g:()=>r}),function(e){e.Charts="CHARTS",e.Dashboards="DASHBOARDS",e.Recents="RECENTS",e.SavedQueries="SAVED_QUERIES"}(r||(r={})),function(e){e.GoogleSheets="gsheets",e.DbConnection="dbconnection",e.DatasetCreation="datasetCreation",e.CSVUpload="csvUpload",e.ExcelUpload="excelUpload",e.ColumnarUpload="columnarUpload"}(o||(o={}))},208911:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(()=>{try{return n(Object(function(){var e=new Error("Cannot find module '../../../superset_text'");throw e.code="MODULE_NOT_FOUND",e}()))||{}}catch(e){return{}}})()},34858:(e,t,n)=>{n.d(t,{LE:()=>g,NE:()=>v,PW:()=>b,Yi:()=>m,_l:()=>U,bR:()=>$,cb:()=>k,fF:()=>y,h1:()=>C,jb:()=>_,rM:()=>x,xx:()=>Z,z:()=>w});var r=n(115926),o=n.n(r),a=n(667294),i=n(431069),s=n(61988),l=n(844818),d=n(522102),c=n(440768),p=n(710222),u=n(208911);const h=e=>"string"==typeof e?e:Object.entries(e).map((([e,t])=>Array.isArray(t)?`(${e}) ${t.join(", ")}`:`(${e}) ${t}`)).join("\n");function m(e,t,n,r=!0,l=[],d,p=!0,u){const[h,m]=(0,a.useState)({count:0,collection:l,loading:p,lastFetchDataConfig:null,permissions:[],bulkSelectEnabled:!1});function g(e){m((t=>({...t,...e})))}(0,a.useEffect)((()=>{r&&i.Z.get({endpoint:`/api/v1/${e}/_info?q=${o().encode({keys:["permissions"]})}`}).then((({json:e={}})=>{g({permissions:e.permissions})}),(0,c.v$)((e=>n((0,s.t)("An error occurred while fetching %s info: %s",t,e)))))}),[]);const b=(0,a.useCallback)((({pageIndex:r,pageSize:a,sortBy:l,filters:p})=>{g({lastFetchDataConfig:{filters:p,pageIndex:r,pageSize:a,sortBy:l},loading:!0});const h=(d||[]).concat(p).map((({id:e,operator:t,value:n})=>({col:e,opr:t,value:n&&"object"==typeof n&&"value"in n?n.value:n}))),m=o().encode_uri({order_column:l[0].id,order_direction:l[0].desc?"desc":"asc",page:r,page_size:a,...h.length?{filters:h}:{},...null!=u&&u.length?{select_columns:u}:{}});return i.Z.get({endpoint:`/api/v1/${e}/?q=${m}`}).then((({json:e={}})=>{g({collection:e.result,count:e.count,lastFetched:(new Date).toISOString()})}),(0,c.v$)((e=>n((0,s.t)("An error occurred while fetching %ss: %s",t,e))))).finally((()=>{g({loading:!1})}))}),[d]);return{state:{loading:h.loading,resourceCount:h.count,resourceCollection:h.collection,bulkSelectEnabled:h.bulkSelectEnabled,lastFetched:h.lastFetched},setResourceCollection:e=>g({collection:e}),hasPerm:function(e){return!!h.permissions.length&&Boolean(h.permissions.find((t=>t===e)))},fetchData:b,toggleBulkSelect:function(){g({bulkSelectEnabled:!h.bulkSelectEnabled})},refreshData:e=>h.lastFetchDataConfig?b(h.lastFetchDataConfig):e?b(e):null}}function g(e,t,n,r=""){const[o,l]=(0,a.useState)({loading:!1,resource:null,error:null});function d(e){l((t=>({...t,...e})))}return{state:o,setResource:e=>d({resource:e}),fetchResource:(0,a.useCallback)((o=>{d({loading:!0});const a=`/api/v1/${e}/${o}`,l=""!==r?`${a}/${r}`:a;return i.Z.get({endpoint:l}).then((({json:e={}})=>(d({resource:e.result,error:null}),e.result)),(0,c.v$)((e=>{n((0,s.t)("An error occurred while fetching %ss: %s",t,h(e))),d({error:e})}))).finally((()=>{d({loading:!1})}))}),[n,e,t]),createResource:(0,a.useCallback)(((r,o=!1)=>(d({loading:!0}),i.Z.post({endpoint:`/api/v1/${e}/`,body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((({json:e={}})=>(d({resource:{id:e.id,...e.result},error:null}),e.id)),(0,c.v$)((e=>{o||n((0,s.t)("An error occurred while creating %ss: %s",t,h(e))),d({error:e})}))).finally((()=>{d({loading:!1})})))),[n,e,t]),updateResource:(0,a.useCallback)(((r,o,a=!1,l=!0)=>(l&&d({loading:!0}),i.Z.put({endpoint:`/api/v1/${e}/${r}`,body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then((({json:e={}})=>(d({resource:{...e.result,id:e.id},error:null}),e.result)),(0,c.v$)((e=>(a||n((0,s.t)("An error occurred while fetching %ss: %s",t,JSON.stringify(e))),d({error:e}),e)))).finally((()=>{l&&d({loading:!1})})))),[n,e,t]),clearError:()=>d({error:null})}}function b(e,t,n){const[r,o]=(0,a.useState)({loading:!1,passwordsNeeded:[],alreadyExists:[],sshPasswordNeeded:[],sshPrivateKeyNeeded:[],sshPrivateKeyPasswordNeeded:[],failed:!1});function d(e){o((t=>({...t,...e})))}return{state:r,importResource:(0,a.useCallback)(((r,o={},a={},p={},u={},h=!1)=>{d({loading:!0,failed:!1});const m=new FormData;m.append("formData",r);const g=(0,s.t)("Please re-export your file and try importing again");return o&&m.append("passwords",JSON.stringify(o)),h&&m.append("overwrite","true"),a&&m.append("ssh_tunnel_passwords",JSON.stringify(a)),p&&m.append("ssh_tunnel_private_keys",JSON.stringify(p)),u&&m.append("ssh_tunnel_private_key_passwords",JSON.stringify(u)),i.Z.post({endpoint:`/api/v1/${e}/import/`,body:m,headers:{Accept:"application/json"}}).then((()=>(d({passwordsNeeded:[],alreadyExists:[],sshPasswordNeeded:[],sshPrivateKeyNeeded:[],sshPrivateKeyPasswordNeeded:[],failed:!1}),!0))).catch((e=>(0,l.O$)(e).then((e=>(d({failed:!0}),e.errors?((0,c.Er)(e.errors)?n((0,s.t)("An error occurred while importing %s: %s",t,[...e.errors.map((e=>e.message)),g].join(".\n"))):d({passwordsNeeded:(0,c.$u)(e.errors),sshPasswordNeeded:(0,c.dK)(e.errors),sshPrivateKeyNeeded:(0,c.ru)(e.errors),sshPrivateKeyPasswordNeeded:(0,c.z9)(e.errors),alreadyExists:(0,c.cE)(e.errors)}),!1):(n((0,s.t)("An error occurred while importing %s: %s",t,e.message||e.error)),!1)))))).finally((()=>{d({loading:!1})}))}),[])}}const f={chart:(0,d.Z)({requestType:"rison",method:"GET",endpoint:"/api/v1/chart/favorite_status/"}),dashboard:(0,d.Z)({requestType:"rison",method:"GET",endpoint:"/api/v1/dashboard/favorite_status/"}),tag:(0,d.Z)({requestType:"rison",method:"GET",endpoint:"/api/v1/tag/favorite_status/"})};function v(e,t,n){const[r,o]=(0,a.useState)({}),l=e=>o((t=>({...t,...e})));return(0,a.useEffect)((()=>{t.length&&f[e](t).then((({result:e})=>{const t=e.reduce(((e,t)=>(e[t.id]=t.value,e)),{});l(t)}),(0,c.v$)((e=>n((0,s.t)("There was an error fetching the favorite status: %s",e)))))}),[t,e,n]),[(0,a.useCallback)(((t,r)=>{const o=`/api/v1/${e}/${t}/favorites/`;(r?i.Z.delete({endpoint:o}):i.Z.post({endpoint:o})).then((()=>{l({[t]:!r})}),(0,c.v$)((e=>n((0,s.t)("There was an error saving the favorite status: %s",e)))))}),[e]),r]}const y=(e,t)=>{const[n,r]=(0,a.useState)(null);return{sliceCurrentlyEditing:n,handleChartUpdated:function(n){const r=t.map((e=>e.id===n.id?{...e,...n}:e));e(r)},openChartEditModal:function(e){r({slice_id:e.id,slice_name:e.slice_name,description:e.description,cache_timeout:e.cache_timeout,certified_by:e.certified_by,certification_details:e.certification_details,is_managed_externally:e.is_managed_externally})},closeChartEditModal:function(){r(null)}}},$=(e,t,n)=>{(0,p.Z)((()=>Promise.resolve(`${window.location.origin}/sqllab?savedQueryId=${e}`))).then((()=>{n((0,s.t)("Link Copied!"))})).catch((()=>{t((0,s.t)("Sorry, your browser does not support copying."))}))},x=()=>u.Z.DB_IMAGES,_=()=>u.Z.DB_CONNECTION_ALERTS,w=()=>u.Z.DB_CONNECTION_DOC_LINKS,Z=(e,t,n)=>{i.Z.post({endpoint:"api/v1/database/test_connection/",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((()=>{n((0,s.t)("Connection looks good!"))}),(0,c.v$)((e=>{t((0,s.t)("ERROR: %s",h(e)))})))};function k(){const[e,t]=(0,a.useState)(null);return[e,(0,a.useCallback)((()=>{i.Z.get({endpoint:"/api/v1/database/available/"}).then((({json:e})=>{t(e)}))}),[t])]}const S=e=>e&&Array.isArray(null==e?void 0:e.catalog)?{...e,catalog:Object.assign({},...e.catalog.map((e=>({[e.name]:e.value}))))}:e;function C(){const[e,t]=(0,a.useState)(null);return[e,(0,a.useCallback)(((e,n=!1)=>{var r;return null!=e&&null!=(r=e.parameters)&&r.ssh?(t(null),[]):i.Z.post({endpoint:"/api/v1/database/validate_parameters/",body:JSON.stringify(S(e)),headers:{"Content-Type":"application/json"}}).then((()=>{t(null)})).catch((e=>{if("function"==typeof e.json)return e.json().then((({errors:e=[]})=>{const r=e.filter((e=>!["CONNECTION_MISSING_PARAMETERS_ERROR","CONNECTION_ACCESS_DENIED_ERROR"].includes(e.error_type)||n)).reduce(((e,{error_type:t,extra:n,message:r})=>{var o,a;return n.catalog?n.catalog.name?{...e,error_type:t,[n.catalog.idx]:{name:r}}:n.catalog.url?{...e,error_type:t,[n.catalog.idx]:{url:r}}:{...e,error_type:t,[n.catalog.idx]:{name:r,url:r}}:n.invalid?{...e,[n.invalid[0]]:r,error_type:t}:n.missing?{...e,error_type:t,...Object.assign({},...n.missing.map((e=>({[e]:"This is a required field"}))))}:null!=(o=n.issue_codes)&&o.length?{...e,error_type:t,description:r||(null==(a=n.issue_codes[0])?void 0:a.message)}:e}),{});return t(r),r}));console.error(e)}))}),[t]),t]}const U=(e,t,n)=>{var r;return n?null==(r=e.reports[t])?void 0:r[n]:null}},400012:(e,t,n)=>{var r,o;n.d(t,{F:()=>r,J:()=>o}),function(e){e.Favorite="Favorite",e.Mine="Mine",e.Other="Other",e.Viewed="Viewed",e.Created="Created",e.Edited="Edited"}(r||(r={})),function(e){e.Id="id",e.ChangedOn="changed_on",e.ChangedBy="changed_by",e.Database="database",e.DatabaseName="database.database_name",e.Schema="schema",e.Sql="sql",e.ExecutedSql="executed_sql",e.SqlTables="sql_tables",e.Status="status",e.TabName="tab_name",e.User="user",e.UserFirstName="user.first_name",e.StartTime="start_time",e.EndTime="end_time",e.Rows="rows",e.TmpTableName="tmp_table_name",e.TrackingUrl="tracking_url"}(o||(o={}))},440768:(e,t,n)=>{n.d(t,{$u:()=>D,B1:()=>_,Er:()=>X,Gm:()=>C,IB:()=>E,IV:()=>y,Iu:()=>U,Ld:()=>x,Mc:()=>V,ZB:()=>T,_L:()=>j,cE:()=>B,dK:()=>A,eX:()=>f,if:()=>G,iv:()=>N,mq:()=>O,ru:()=>F,tm:()=>Z,v$:()=>S,wk:()=>k,xF:()=>w,xL:()=>R,z9:()=>q});var r=n(225325),o=n.n(r),a=n(751995),i=n(431069),s=n(61988),l=n(844818),d=n(68492),c=n(211965),p=n(115926),u=n.n(p),h=n(208911),m=n(212617),g=n(839589),b=n(400012);(()=>{const e=u(),t=[];for(let e=0;e<16;e+=1)for(let n=0;n<16;n+=1){if(e+n===0)continue;const r=String.fromCharCode(16*e+n);/\w|[-_./~]/.test(r)||t.push(`\\u00${e.toString(16)}${n.toString(16)}`)}e.not_idchar=t.join(""),e.not_idstart="-0123456789";const n=`[^${e.not_idstart}${e.not_idchar}][^${e.not_idchar}]*`;e.id_ok=new RegExp(`^${n}$`),e.next_id=new RegExp(n,"g")})();const f=a.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,v=e=>(t,n,r,o)=>async(r="",a,s)=>{var l;const d=`/api/v1/${t}/${e}/${n}`,c=u().encode_uri({filter:r,page:a,page_size:s}),{json:p={}}=await i.Z.get({endpoint:`${d}?q=${c}`});let h=!1;const m=o?{label:`${o.firstName} ${o.lastName}`,value:o.userId}:void 0,g=[];return null==p||null==(l=p.result)||l.filter((({text:e})=>e.trim().length>0)).forEach((({text:e,value:t})=>{m&&t===m.value&&e===m.label?h=!0:g.push({label:e,value:t})})),!m||r&&!h||g.unshift(m),{data:g,totalCount:null==p?void 0:p.count}},y=5,$=(e,t)=>{const n={order_column:"changed_on_delta_humanized",order_direction:"desc",page:0,page_size:y,filters:e,select_columns:t};return e||delete n.filters,t||delete n.select_columns,u().encode(n)},x=e=>{const t={edited:[{col:"changed_by",opr:"rel_o_m",value:`${e}`}]},n=[i.Z.get({endpoint:`/api/v1/dashboard/?q=${$(t.edited)}`}),i.Z.get({endpoint:`/api/v1/chart/?q=${$(t.edited)}`})];return Promise.all(n).then((([e,t])=>{var n,r;return{editedDash:null==(n=t.json)?void 0:n.result.slice(0,3),editedChart:null==(r=e.json)?void 0:r.result.slice(0,3)}})).catch((e=>e))},_=(e,t,n=[{col:"owners",opr:"rel_m_m",value:`${e}`}],r)=>i.Z.get({endpoint:`/api/v1/${t}/?q=${$(n,r)}`}).then((e=>{var t;return null==(t=e.json)?void 0:t.result})),w=(e,t,n,r)=>i.Z.get({endpoint:t}).then((e=>{const t={};return((e,t,n,r)=>{const o=[i.Z.get({endpoint:`/api/v1/chart/?q=${$(t,void 0)}`}),i.Z.get({endpoint:`/api/v1/dashboard/?q=${$(t,void 0)}`})];return Promise.all(o).then((([e,t])=>({other:[...e.json.result,...t.json.result]}))).catch((t=>(e((0,s.t)("There was an error fetching the filtered charts and dashboards:"),t),{other:[]})))})(n,r).then((({other:n})=>(t.other=n,t.viewed=e.json.result,t)))})),Z=v("related"),k=v("distinct");function S(e){return async t=>{const n=await(0,l.O$)(t),r=null==n?void 0:n.errors,o=await h.Z;null!=r&&r.length&&null!=o&&o.ERRORS&&r[0].error_type in o.ERRORS&&(n.message=o.ERRORS[r[0].error_type]),d.Z.error(t),e(n.message||n.error)}}function C({id:e,slice_name:t},n,r,o,a,l){const d={pageIndex:0,pageSize:y,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:[{id:"created_by",operator:"rel_o_m",value:`${l}`}]};i.Z.delete({endpoint:`/api/v1/chart/${e}`}).then((()=>{"Mine"===a?o(d):o(),n((0,s.t)("Deleted: %s",t))}),(()=>{r((0,s.t)("There was an issue deleting: %s",t))}))}function U({id:e,dashboard_title:t},n,r,o,a,l){return i.Z.delete({endpoint:`/api/v1/dashboard/${e}`}).then((()=>{"Mine"===a?n({pageIndex:0,pageSize:y,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:[{id:"owners",operator:"rel_m_m",value:`${l}`}]}):n(),r((0,s.t)("Deleted: %s",t))}),S((e=>o((0,s.t)("There was an issue deleting %s: %s",t,e)))))}function E(e,t){let n=e.split("\n");return n.length>=t&&(n=n.slice(0,t),n.push("...")),n.join("\n")}const N=5,O=[576,768,992,1200].map((e=>`@media (max-width: ${e}px)`)),j=a.iK.div`
  ${({showThumbnails:e,theme:t})=>`\n    overflow: hidden;\n    display: grid;\n    grid-gap: ${12*t.gridUnit}px ${4*t.gridUnit}px;\n    grid-template-columns: repeat(auto-fit, 300px);\n    max-height: ${e?"314":"148"}px;\n    margin-top: ${-6*t.gridUnit}px;\n    padding: ${e?`${8*t.gridUnit+3}px ${9*t.gridUnit}px`:`${8*t.gridUnit+1}px ${9*t.gridUnit}px`};\n  `}
`,T=a.iK.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }
  .ant-card-cover > div {
    /* Height is calculated based on 300px width, to keep the same aspect ratio as the 800*450 thumbnails */
    height: 168px;
  }
`,R=e=>c.iv`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,I=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a password for the database"===e)))},z=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a password for the ssh tunnel"===e)))},P=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a private key for the ssh tunnel"===e)))},M=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a private key password for the ssh tunnel"===e)))},K=e=>"string"==typeof e&&e.includes("already exists and `overwrite=true` was not passed"),D=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>I(e))).map((([e])=>e)))).flat(),A=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>z(e))).map((([e])=>e)))).flat(),F=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>P(e))).map((([e])=>e)))).flat(),q=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>M(e))).map((([e])=>e)))).flat(),B=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>K(e))).map((([e])=>e)))).flat(),X=e=>e.some((e=>{const t=Object.entries(e.extra).filter((([e])=>"issue_codes"!==e));return 0===t.length||!t.every((([,e])=>I(e)||K(e)||z(e)||P(e)||M(e)))})),L=(e,t)=>void 0!==e&&o()(e,t).length>0,V=(e,t,n,r,o)=>{const a=(0,m.R)("can_csv_upload","Database",e)&&L(t,o),i=L(n,o)&&(0,m.R)("can_columnar_upload","Database",e),s=L(r,o)&&(0,m.R)("can_excel_upload","Database",e);return{canUploadCSV:a,canUploadColumnar:i,canUploadExcel:s,canUploadData:a||i||s}};function G(e,t,n,r){return e===b.F.Created||t===g.g.SavedQueries&&e===b.F.Mine?[{id:"created_by",operator:"rel_o_m",value:`${null==n?void 0:n.userId}`}]:t===g.g.SavedQueries&&e===b.F.Favorite?[{id:"id",operator:"saved_query_is_fav",value:!0}]:e===b.F.Mine&&n?[{id:"owners",operator:"rel_m_m",value:`${n.userId}`}]:e===b.F.Favorite&&[g.g.Dashboards,g.g.Charts].includes(t)?[{id:"id",operator:t===g.g.Dashboards?"dashboard_is_favorite":"chart_is_favorite",value:!0}]:e===b.F.Other?(r||[]).map((e=>({id:e.col,operator:e.opr,value:e.value}))):[]}}}]);
//# sourceMappingURL=8003.0569ad74f05404f8dcda.entry.js.map