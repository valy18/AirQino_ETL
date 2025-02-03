"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9041],{762921:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(61988),l=a(34858),i=a(229487),r=a(211965),o=a(135944);const s=(0,l.z)(),d=s?s.support:"https://superset.apache.org/docs/databases/installing-database-drivers",c=({errorMessage:e,showDbInstallInstructions:t})=>(0,o.tZ)(i.Z,{closable:!1,css:e=>(e=>r.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,o.BX)(o.HY,{children:[(0,o.tZ)("br",{}),(0,n.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,o.tZ)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description",children:(0,n.t)("here")}),"."]}):""})},849576:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(667294),l=a(751995),i=a(313322),r=a(135944);const o=l.iK.label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
`,s=(0,l.iK)(i.Z.CheckboxHalf)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,d=(0,l.iK)(i.Z.CheckboxOff)`
  color: ${({theme:e})=>e.colors.grayscale.base};
  cursor: pointer;
`,c=(0,l.iK)(i.Z.CheckboxOn)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,h=l.iK.input`
  &[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: 3px;
    margin: 0;
    top: 4px;
  }
`,p=l.iK.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
`,u=(0,n.forwardRef)((({indeterminate:e,id:t,checked:a,onChange:l,title:i="",labelText:u=""},m)=>{const g=(0,n.useRef)(),b=m||g;return(0,n.useEffect)((()=>{b.current.indeterminate=e}),[b,e]),(0,r.BX)(r.HY,{children:[(0,r.BX)(p,{children:[e&&(0,r.tZ)(s,{}),!e&&a&&(0,r.tZ)(c,{}),!e&&!a&&(0,r.tZ)(d,{}),(0,r.tZ)(h,{name:t,id:t,type:"checkbox",ref:b,checked:a,onChange:l})]}),(0,r.tZ)(o,{title:i,htmlFor:t,children:u})]})}))},465477:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(667294),l=a(751995),i=a(908420),r=a(135944);const o=l.iK.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,s=({tags:e,editable:t=!1,onDelete:a,maxTags:l})=>{const[s,d]=(0,n.useState)(l),c=e=>{null==a||a(e)},h=(0,n.useMemo)((()=>s?e.length>s:null),[e.length,s]),p=(0,n.useMemo)((()=>"number"==typeof s?e.length-s+1:null),[h,e.length,s]);return(0,r.tZ)(o,{className:"tag-list",children:h&&"number"==typeof s?(0,r.BX)(r.HY,{children:[e.slice(0,s-1).map(((e,a)=>(0,r.tZ)(i.Z,{id:e.id,name:e.name,index:a,onDelete:c,editable:t},e.id))),e.length>s?(0,r.tZ)(i.Z,{name:`+${p}...`,onClick:()=>d(void 0),toolTipTitle:e.map((e=>e.name)).join(", ")}):null]}):(0,r.BX)(r.HY,{children:[e.map(((e,a)=>(0,r.tZ)(i.Z,{id:e.id,name:e.name,index:a,onDelete:c,editable:t},e.id))),l&&e.length>l?(0,r.tZ)(i.Z,{name:"...",onClick:()=>d(l)}):null]})})}},719235:(e,t,a)=>{a.d(t,{Gr:()=>st,ZP:()=>ht});var n=a(478718),l=a.n(n),i=a(441609),r=a.n(i),o=a(175049),s=a(751995),d=a(61988),c=a(667294),h=a(616550),p=a(961337),u=a(171262),m=a(104715),g=a(229487),b=a(774069),v=a(835932),f=a(313322);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y.apply(this,arguments)}const _={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},Z=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"],x=["component","ellipsis","trimRight","className"];function w(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}const C={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},S=Object.keys(C);class $ extends c.Component{constructor(e){super(e),this.state={text:e.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}componentWillUnmount(){this.canvas&&(this.canvas.parentNode.removeChild(this.canvas),this.canvas=null)}setState(e,t){return void 0!==e.clamped&&(this.clamped=e.clamped),super.setState(e,t)}initCanvas(){if(this.canvas)return;const e=this.canvas=document.createElement("div");e.className=`LinesEllipsis-canvas ${this.props.className}`,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(_).forEach((t=>{e.style[t]=_[t]})),document.body.appendChild(e)}copyStyleToCanvas(){const e=window.getComputedStyle(this.target);Z.forEach((t=>{this.canvas.style[t]=e[t]}))}reflow(e){const t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error(`Unsupported options basedOn: ${t}`)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((e=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("");const a=this.putEllipsis(this.calcIndexes()),n=a>-1,l={clamped:n,text:n?this.units.slice(0,a).join(""):e.text};this.setState(l,e.onReflow.bind(this,l))}calcIndexes(){const e=[0];let t=this.canvas.firstElementChild;if(!t)return e;let a=0,n=1,l=t.offsetTop;for(;(t=t.nextElementSibling)&&(t.offsetTop>l&&(n++,e.push(a),l=t.offsetTop),a++,!(n>this.maxLine)););return e}putEllipsis(e){if(e.length<=this.maxLine)return-1;const t=e[this.maxLine],a=this.units.slice(0,t),n=this.canvas.children[t].offsetTop;this.canvas.innerHTML=a.map(((e,t)=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const l=this.canvas.lastElementChild;let i=w(l,2);for(;i&&(l.offsetTop>n||l.offsetHeight>i.offsetHeight||l.offsetTop>i.offsetTop);)this.canvas.removeChild(i),i=w(l,2),a.pop();return a.length}isClamped(){return this.clamped}render(){const{text:e,clamped:t}=this.state,a=this.props,{component:n,ellipsis:l,trimRight:i,className:r}=a,o=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(a,x);return c.createElement(n,y({className:`LinesEllipsis ${t?"LinesEllipsis--clamped":""} ${r}`,ref:e=>this.target=e},function(e,t){if(!e||"object"!=typeof e)return e;const a={};return Object.keys(e).forEach((n=>{t.indexOf(n)>-1||(a[n]=e[n])})),a}(o,S)),t&&i?e.replace(/[\s\uFEFF\xA0]+$/,""):e,c.createElement("wbr",null),t&&c.createElement("span",{className:"LinesEllipsis-ellipsis"},l))}}$.defaultProps=C;var N=a(135944);const k=(0,s.iK)(v.Z)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,E=s.iK.div`
  padding: ${({theme:e})=>4*e.gridUnit}px;
  height: ${({theme:e})=>18*e.gridUnit}px;
  margin: ${({theme:e})=>3*e.gridUnit}px 0;

  .default-db-icon {
    font-size: 36px;
    color: ${({theme:e})=>e.colors.grayscale.base};
    margin-right: 0;
    span:first-of-type {
      margin-right: 0;
    }
  }

  &:first-of-type {
    margin-right: 0;
  }

  img {
    width: ${({theme:e})=>10*e.gridUnit}px;
    height: ${({theme:e})=>10*e.gridUnit}px;
    margin: 0;
    &:first-of-type {
      margin-right: 0;
    }
  }
  svg {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,T=s.iK.div`
  max-height: calc(1.5em * 2);
  white-space: break-spaces;

  &:first-of-type {
    margin-right: 0;
  }

  .LinesEllipsis {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,X=s.iK.div`
  padding: ${({theme:e})=>4*e.gridUnit}px 0;
  border-radius: 0 0 ${({theme:e})=>e.borderRadius}px
    ${({theme:e})=>e.borderRadius}px;
  background-color: ${({theme:e})=>e.colors.grayscale.light4};
  width: 100%;
  line-height: 1.5em;
  overflow: hidden;
  white-space: no-wrap;
  text-overflow: ellipsis;

  &:first-of-type {
    margin-right: 0;
  }
`,U=(0,s.iK)((({icon:e,altText:t,buttonText:a,...n})=>(0,N.BX)(k,{...n,children:[(0,N.BX)(E,{children:[e&&(0,N.tZ)("img",{src:e,alt:t}),!e&&(0,N.tZ)(f.Z.DatabaseOutlined,{className:"default-db-icon","aria-label":"default-icon"})]}),(0,N.tZ)(X,{children:(0,N.tZ)(T,{children:(0,N.tZ)($,{text:a,maxLine:"2",basedOn:"words",trimRight:!0})})})]})))`
  text-transform: none;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
  font-weight: ${({theme:e})=>e.typography.weights.normal};
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  margin: 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.colors.grayscale.light5};
    color: ${({theme:e})=>e.colors.grayscale.dark2};
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    box-shadow: 4px 4px 20px ${({theme:e})=>e.colors.grayscale.light2};
  }
`;var B,P,M=a(608272),D=a(414114),q=a(73684),A=a(272875),L=a(762921),I=a(34858),O=a(418451),R=a(838703);!function(e){e.SqlalchemyUri="sqlalchemy_form",e.DynamicForm="dynamic_form"}(B||(B={})),function(e){e.GSheet="gsheets",e.Snowflake="snowflake"}(P||(P={}));var H=a(211965),F=a(693967),z=a.n(F),j=a(593185),J=a(849576),K=a(843700),V=a(749140);const Y=H.iv`
  margin-bottom: 0;
`,Q=s.iK.header`
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  line-height: ${({theme:e})=>6*e.gridUnit}px;

  .helper-top {
    padding-bottom: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0;
  }

  .subheader-text {
    line-height: ${({theme:e})=>4.25*e.gridUnit}px;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0;
  }

  h4 {
    color: ${({theme:e})=>e.colors.grayscale.dark2};
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
    margin: 0;
    padding: 0;
    line-height: ${({theme:e})=>8*e.gridUnit}px;
  }

  .select-db {
    padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
    .helper {
      margin: 0;
    }

    h4 {
      margin: 0 0 ${({theme:e})=>4*e.gridUnit}px;
    }
  }
`,W=H.iv`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,G=H.iv`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,ee=e=>H.iv`
  margin-bottom: ${5*e.gridUnit}px;
  svg {
    margin-bottom: ${.25*e.gridUnit}px;
  }
`,te=e=>H.iv`
  padding-left: ${2*e.gridUnit}px;
`,ae=e=>H.iv`
  padding: ${4*e.gridUnit}px ${4*e.gridUnit}px 0;
`,ne=e=>H.iv`
  .ant-select-dropdown {
    height: ${40*e.gridUnit}px;
  }

  .ant-modal-header {
    padding: ${4.5*e.gridUnit}px ${4*e.gridUnit}px
      ${4*e.gridUnit}px;
  }

  .ant-modal-close-x .close {
    color: ${e.colors.grayscale.dark1};
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.gridUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.gridUnit}px;
  }
`,le=e=>H.iv`
  border: 1px solid ${e.colors.info.base};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;

  .ant-alert-message {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    font-weight: ${e.typography.weights.bold};
  }

  .ant-alert-description {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    line-height: ${5*e.gridUnit}px;

    a {
      text-decoration: underline;
    }

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`,ie=s.iK.div`
  ${({theme:e})=>H.iv`
    margin: 0 ${4*e.gridUnit}px -${4*e.gridUnit}px;
  `}
`,re=e=>H.iv`
  .required {
    margin-left: ${e.gridUnit/2}px;
    color: ${e.colors.error.base};
  }

  .helper {
    display: block;
    padding: ${e.gridUnit}px 0;
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    text-align: left;
  }
`,oe=e=>H.iv`
  .form-group {
    margin-bottom: ${4*e.gridUnit}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${4*e.gridUnit}px)`};
      & + .form-group-w-50 {
        margin-left: ${8*e.gridUnit}px;
      }
    }
  }
  .control-label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
  }
  .helper {
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    margin-top: ${1.5*e.gridUnit}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 480px;
  }
`,se=e=>H.iv`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
    margin-bottom: 0;
  }
`,de=s.iK.div`
  ${({theme:e})=>H.iv`
    margin-bottom: ${6*e.gridUnit}px;
    &.mb-0 {
      margin-bottom: 0;
    }
    &.mb-8 {
      margin-bottom: ${2*e.gridUnit}px;
    }

    .control-label {
      color: ${e.colors.grayscale.dark1};
      font-size: ${e.typography.sizes.s}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    &.extra-container {
      padding-top: ${2*e.gridUnit}px;
    }

    .input-container {
      display: flex;
      align-items: top;

      label {
        display: flex;
        margin-left: ${2*e.gridUnit}px;
        margin-top: ${.75*e.gridUnit}px;
        font-family: ${e.typography.families.sansSerif};
        font-size: ${e.typography.sizes.m}px;
      }

      i {
        margin: 0 ${e.gridUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    textarea {
      height: 160px;
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${e.colors.grayscale.light1};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${1.5*e.gridUnit}px ${2*e.gridUnit}px;
      border-style: none;
      border: 1px solid ${e.colors.grayscale.light2};
      border-radius: ${e.gridUnit}px;

      &[name='name'] {
        flex: 0 1 auto;
        width: 40%;
      }
    }
    &.expandable {
      height: 0;
      overflow: hidden;
      transition: height 0.25s;
      margin-left: ${8*e.gridUnit}px;
      margin-bottom: 0;
      padding: 0;
      .control-label {
        margin-bottom: 0;
      }
      &.open {
        height: ${108}px;
        padding-right: ${5*e.gridUnit}px;
      }
    }
  `}
`,ce=(0,s.iK)(V.Ad)`
  flex: 1 1 auto;
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,he=s.iK.div`
  padding-top: ${({theme:e})=>e.gridUnit}px;
  .input-container {
    padding-top: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: ${({theme:e})=>e.gridUnit}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({theme:e})=>7*e.gridUnit}px;
    &.open {
      height: ${261}px;
      &.ctas-open {
        height: ${363}px;
      }
    }
  }
`,pe=s.iK.div`
  padding: 0 ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,ue=e=>H.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,me=e=>H.iv`
  font-size: ${3.5*e.gridUnit}px;
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,ge=s.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0px;
  }
`,be=(s.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
`,s.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,s.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.light1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  text-transform: uppercase;
`),ve=s.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,fe=s.iK.div`
  .catalog-type-select {
    margin: 0 0 20px;
  }

  .label-select {
    text-transform: uppercase;
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: 11px;
    margin: 0 5px ${({theme:e})=>2*e.gridUnit}px;
  }

  .label-paste {
    color: ${({theme:e})=>e.colors.grayscale.light1};
    font-size: 11px;
    line-height: 16px;
  }

  .input-container {
    margin: ${({theme:e})=>7*e.gridUnit}px 0;
    display: flex;
    flex-direction: column;
}
  }
  .input-form {
    height: 100px;
    width: 100%;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    resize: vertical;
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    &::placeholder {
      color: ${({theme:e})=>e.colors.grayscale.light1};
    }
  }

  .input-container {
    .input-upload {
      display: none !important;
    }
    .input-upload-current {
      display: flex;
      justify-content: space-between;
    }
    .input-upload-btn {
      width: ${({theme:e})=>32*e.gridUnit}px
    }
  }`,ye=s.iK.div`
  .preferred {
    .superset-button {
      margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${({theme:e})=>4*e.gridUnit}px;
  }

  .preferred-item {
    width: 32%;
    margin-bottom: ${({theme:e})=>2.5*e.gridUnit}px;
  }

  .available {
    margin: ${({theme:e})=>4*e.gridUnit}px;
    .available-label {
      font-size: ${({theme:e})=>e.typography.sizes.l}px;
      font-weight: ${({theme:e})=>e.typography.weights.bold};
      margin: ${({theme:e})=>6*e.gridUnit}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    text-transform: uppercase;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }

  .control-label {
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,_e=(0,s.iK)(v.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,Ze=s.iK.div`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndex.max};
  background: ${({theme:e})=>e.colors.grayscale.light5};
  height: auto;
`,xe=s.iK.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
    font-weight: ${({theme:e})=>e.typography.weights.bold};
    margin: ${({theme:e})=>10*e.gridUnit}px 0 16px;
  }

  .catalog-label {
    margin: 0 0 7px;
  }

  .catalog-name {
    display: flex;
    .catalog-name-input {
      width: 95%;
      margin-bottom: 0px;
    }
  }

  .catalog-name-url {
    margin: 4px 0;
    width: 95%;
  }

  .catalog-add-btn {
    width: 95%;
  }
`,we=s.iK.div`
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`,Ce=({db:e,onInputChange:t,onTextChange:a,onEditorChange:n,onExtraInputChange:l,onExtraEditorChange:i,extraExtension:r})=>{var o,c,h,p,u;const m=!(null==e||!e.expose_in_sqllab),g=!!(null!=e&&e.allow_ctas||null!=e&&e.allow_cvas),b=null==e||null==(o=e.engine_information)?void 0:o.supports_file_upload,v=null==e||null==(c=e.engine_information)?void 0:c.supports_dynamic_catalog,f=JSON.parse((null==e?void 0:e.extra)||"{}",((e,t)=>"engine_params"===e&&"object"==typeof t?JSON.stringify(t):t)),y=(0,s.Fg)(),_=null==r?void 0:r.component,Z=null==r?void 0:r.logo,x=null==r?void 0:r.description,w=!!(0,j.cr)(j.TT.ForceSqlLabRunAsync)||!(null==e||!e.allow_run_async),C=(0,j.cr)(j.TT.ForceSqlLabRunAsync);return(0,N.BX)(K.Z,{expandIconPosition:"right",accordion:!0,css:e=>(e=>H.iv`
  .ant-collapse-header {
    padding-top: ${3.5*e.gridUnit}px;
    padding-bottom: ${2.5*e.gridUnit}px;

    .anticon.ant-collapse-arrow {
      top: calc(50% - ${6}px);
    }
    .helper {
      color: ${e.colors.grayscale.base};
    }
  }
  h4 {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: ${e.gridUnit}px;
  }
  p.helper {
    margin-bottom: 0;
    padding: 0;
  }
`)(e),children:[(0,N.tZ)(K.Z.Panel,{header:(0,N.BX)("div",{children:[(0,N.tZ)("h4",{children:(0,d.t)("SQL Lab")}),(0,N.tZ)("p",{className:"helper",children:(0,d.t)("Adjust how this database will interact with SQL Lab.")})]}),children:(0,N.BX)(de,{css:Y,children:[(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==e||!e.expose_in_sqllab),onChange:t,labelText:(0,d.t)("Expose database in SQL Lab")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Allow this database to be queried in SQL Lab")})]}),(0,N.BX)(he,{className:z()("expandable",{open:m,"ctas-open":g}),children:[(0,N.tZ)(de,{css:Y,children:(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"allow_ctas",indeterminate:!1,checked:!(null==e||!e.allow_ctas),onChange:t,labelText:(0,d.t)("Allow CREATE TABLE AS")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Allow creation of new tables based on queries")})]})}),(0,N.BX)(de,{css:Y,children:[(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"allow_cvas",indeterminate:!1,checked:!(null==e||!e.allow_cvas),onChange:t,labelText:(0,d.t)("Allow CREATE VIEW AS")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Allow creation of new views based on queries")})]}),(0,N.BX)(de,{className:z()("expandable",{open:g}),children:[(0,N.tZ)("div",{className:"control-label",children:(0,d.t)("CTAS & CVAS SCHEMA")}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)("input",{type:"text",name:"force_ctas_schema",placeholder:(0,d.t)("Create or select schema..."),onChange:t,value:(null==e?void 0:e.force_ctas_schema)||""})}),(0,N.tZ)("div",{className:"helper",children:(0,d.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")})]})]}),(0,N.tZ)(de,{css:Y,children:(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"allow_dml",indeterminate:!1,checked:!(null==e||!e.allow_dml),onChange:t,labelText:(0,d.t)("Allow DDL and DML")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Allow the execution of DDL (Data Definition Language: CREATE, DROP, TRUNCATE, etc.) and DML (Data Modification Language: INSERT, UPDATE, DELETE, etc)")})]})}),(0,N.tZ)(de,{css:Y,children:(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"cost_estimate_enabled",indeterminate:!1,checked:!(null==f||!f.cost_estimate_enabled),onChange:l,labelText:(0,d.t)("Enable query cost estimation")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("For Bigquery, Presto and Postgres, shows a button to compute cost before running a query.")})]})}),(0,N.tZ)(de,{css:Y,children:(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"allows_virtual_table_explore",indeterminate:!1,checked:!1!==(null==f?void 0:f.allows_virtual_table_explore),onChange:l,labelText:(0,d.t)("Allow this database to be explored")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("When enabled, users are able to visualize SQL Lab results in Explore.")})]})}),(0,N.tZ)(de,{css:Y,children:(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"disable_data_preview",indeterminate:!1,checked:!(null==f||!f.disable_data_preview),onChange:l,labelText:(0,d.t)("Disable SQL Lab data preview queries")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")})]})}),(0,N.tZ)(de,{children:(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"expand_rows",indeterminate:!1,checked:!(null==f||null==(h=f.schema_options)||!h.expand_rows),onChange:l,labelText:(0,d.t)("Enable row expansion in schemas")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("For Trino, describe full schemas of nested ROW types, expanding them with dotted paths")})]})})]})]})},"1"),(0,N.BX)(K.Z.Panel,{header:(0,N.BX)("div",{children:[(0,N.tZ)("h4",{children:(0,d.t)("Performance")}),(0,N.tZ)("p",{className:"helper",children:(0,d.t)("Adjust performance settings of this database.")})]}),children:[(0,N.BX)(de,{className:"mb-8",children:[(0,N.tZ)("div",{className:"control-label",children:(0,d.t)("Chart cache timeout")}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)("input",{type:"number",name:"cache_timeout",value:(null==e?void 0:e.cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:t})}),(0,N.tZ)("div",{className:"helper",children:(0,d.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined.")})]}),(0,N.BX)(de,{children:[(0,N.tZ)("div",{className:"control-label",children:(0,d.t)("Schema cache timeout")}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)("input",{type:"number",name:"schema_cache_timeout",value:(null==f||null==(p=f.metadata_cache_timeout)?void 0:p.schema_cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:l})}),(0,N.tZ)("div",{className:"helper",children:(0,d.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires.")})]}),(0,N.BX)(de,{children:[(0,N.tZ)("div",{className:"control-label",children:(0,d.t)("Table cache timeout")}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)("input",{type:"number",name:"table_cache_timeout",value:(null==f||null==(u=f.metadata_cache_timeout)?void 0:u.table_cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:l})}),(0,N.tZ)("div",{className:"helper",children:(0,d.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. ")})]}),(0,N.tZ)(de,{css:(0,H.iv)({no_margin_bottom:Y},"",""),children:(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"allow_run_async",indeterminate:!1,checked:w,onChange:t,labelText:(0,d.t)("Asynchronous query execution")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}),C&&(0,N.tZ)(M.Z,{iconStyle:{color:y.colors.error.base},tooltip:(0,d.t)("This option has been disabled by the administrator.")})]})}),(0,N.tZ)(de,{css:(0,H.iv)({no_margin_bottom:Y},"",""),children:(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"cancel_query_on_windows_unload",indeterminate:!1,checked:!(null==f||!f.cancel_query_on_windows_unload),onChange:l,labelText:(0,d.t)("Cancel query on window unload event")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})]})})]},"2"),(0,N.BX)(K.Z.Panel,{header:(0,N.BX)("div",{children:[(0,N.tZ)("h4",{children:(0,d.t)("Security")}),(0,N.tZ)("p",{className:"helper",children:(0,d.t)("Add extra connection information.")})]}),children:[(0,N.BX)(de,{children:[(0,N.tZ)("div",{className:"control-label",children:(0,d.t)("Secure extra")}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)(ce,{name:"masked_encrypted_extra",value:(null==e?void 0:e.masked_encrypted_extra)||"",placeholder:(0,d.t)("Secure extra"),onChange:e=>n({json:e,name:"masked_encrypted_extra"}),width:"100%",height:"160px"})}),(0,N.tZ)("div",{className:"helper",children:(0,N.tZ)("div",{children:(0,d.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")})})]}),(0,N.BX)(de,{children:[(0,N.tZ)("div",{className:"control-label",children:(0,d.t)("Root certificate")}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)("textarea",{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:(0,d.t)("Enter CA_BUNDLE"),onChange:a})}),(0,N.tZ)("div",{className:"helper",children:(0,d.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.")})]}),(0,N.tZ)(de,{css:b?{}:Y,children:(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"impersonate_user",indeterminate:!1,checked:!(null==e||!e.impersonate_user),onChange:t,labelText:(0,d.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")})]})}),b&&(0,N.tZ)(de,{css:null!=e&&e.allow_file_upload?{}:Y,children:(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)(J.Z,{id:"allow_file_upload",indeterminate:!1,checked:!(null==e||!e.allow_file_upload),onChange:t,labelText:(0,d.t)("Allow file uploads to database")})})}),b&&!(null==e||!e.allow_file_upload)&&(0,N.BX)(de,{css:Y,children:[(0,N.tZ)("div",{className:"control-label",children:(0,d.t)("Schemas allowed for File upload")}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)("input",{type:"text",name:"schemas_allowed_for_file_upload",value:((null==f?void 0:f.schemas_allowed_for_file_upload)||[]).join(","),placeholder:"schema1,schema2",onChange:l})}),(0,N.tZ)("div",{className:"helper",children:(0,d.t)("A comma-separated list of schemas that files are allowed to upload to.")})]})]},"3"),r&&_&&x&&(0,N.tZ)(K.Z.Panel,{header:(0,N.BX)("div",{children:[Z&&(0,N.tZ)(Z,{}),(0,N.tZ)("span",{css:e=>({fontSize:e.typography.sizes.l,fontWeight:e.typography.weights.bold}),children:null==r?void 0:r.title}),(0,N.tZ)("p",{className:"helper",children:(0,N.tZ)(x,{})})]}),collapsible:null!=r.enabled&&r.enabled()?"icon":"disabled",children:(0,N.tZ)(de,{css:Y,children:(0,N.tZ)(_,{db:e,onEdit:r.onEdit})})},null==r?void 0:r.title),(0,N.BX)(K.Z.Panel,{header:(0,N.BX)("div",{children:[(0,N.tZ)("h4",{children:(0,d.t)("Other")}),(0,N.tZ)("p",{className:"helper",children:(0,d.t)("Additional settings.")})]}),children:[(0,N.BX)(de,{children:[(0,N.tZ)("div",{className:"control-label",children:(0,d.t)("Metadata Parameters")}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)(ce,{name:"metadata_params",placeholder:(0,d.t)("Metadata Parameters"),onChange:e=>i({json:e,name:"metadata_params"}),width:"100%",height:"160px",value:Object.keys((null==f?void 0:f.metadata_params)||{}).length?null==f?void 0:f.metadata_params:""})}),(0,N.tZ)("div",{className:"helper",children:(0,N.tZ)("div",{children:(0,d.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")})})]}),(0,N.BX)(de,{children:[(0,N.tZ)("div",{className:"control-label",children:(0,d.t)("Engine Parameters")}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)(ce,{name:"engine_params",placeholder:(0,d.t)("Engine Parameters"),onChange:e=>i({json:e,name:"engine_params"}),width:"100%",height:"160px",value:Object.keys((null==f?void 0:f.engine_params)||{}).length?null==f?void 0:f.engine_params:""})}),(0,N.tZ)("div",{className:"helper",children:(0,N.tZ)("div",{children:(0,d.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")})})]}),(0,N.BX)(de,{children:[(0,N.tZ)("div",{className:"control-label",children:(0,d.t)("Version")}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)("input",{type:"text",name:"version",placeholder:(0,d.t)("Version number"),onChange:l,value:(null==f?void 0:f.version)||""})}),(0,N.tZ)("div",{className:"helper",children:(0,d.t)("Specify the database version. This is used with Presto for query cost estimation, and Dremio for syntax changes, among others.")})]}),(0,N.tZ)(de,{css:Y,children:(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"disable_drill_to_detail",indeterminate:!1,checked:!(null==f||!f.disable_drill_to_detail),onChange:l,labelText:(0,d.t)("Disable drill to detail")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Disables the drill to detail feature for this database.")})]})}),v&&(0,N.tZ)(de,{css:Y,children:(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(J.Z,{id:"allow_multi_catalog",indeterminate:!1,checked:!(null==f||!f.allow_multi_catalog),onChange:l,labelText:(0,d.t)("Allow changing catalogs")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Give access to multiple catalogs in a single database connection.")})]})})]},"4")]})};var Se=a(208911);const $e=({db:e,onInputChange:t,testConnection:a,conf:n,testInProgress:l=!1,children:i})=>{var r,o;const s=(null==Se.Z||null==(r=Se.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:r.SQLALCHEMY_DOCS_URL)||"https://docs.sqlalchemy.org/en/13/core/engines.html",c=(null==Se.Z||null==(o=Se.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:o.SQLALCHEMY_DISPLAY_TEXT)||"SQLAlchemy docs";return(0,N.BX)(N.HY,{children:[(0,N.BX)(de,{children:[(0,N.BX)("div",{className:"control-label",children:[(0,d.t)("Display Name"),(0,N.tZ)("span",{className:"required",children:"*"})]}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)("input",{type:"text",name:"database_name",value:(null==e?void 0:e.database_name)||"",placeholder:(0,d.t)("Name your database"),onChange:t})}),(0,N.tZ)("div",{className:"helper",children:(0,d.t)("Pick a name to help you identify this database.")})]}),(0,N.BX)(de,{children:[(0,N.BX)("div",{className:"control-label",children:[(0,d.t)("SQLAlchemy URI"),(0,N.tZ)("span",{className:"required",children:"*"})]}),(0,N.tZ)("div",{className:"input-container",children:(0,N.tZ)("input",{type:"text",name:"sqlalchemy_uri",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(null==e?void 0:e.sqlalchemy_uri_placeholder)||(0,d.t)("dialect+driver://username:password@host:port/database"),onChange:t})}),(0,N.BX)("div",{className:"helper",children:[(0,d.t)("Refer to the")," ",(0,N.tZ)("a",{href:s||(null==n?void 0:n.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer",children:c||(null==n?void 0:n.SQLALCHEMY_DISPLAY_TEXT)||""})," ",(0,d.t)("for more information on how to structure your URI.")]})]}),i,(0,N.tZ)(v.Z,{onClick:a,loading:l,cta:!0,buttonStyle:"link",css:e=>(e=>H.iv`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e),children:(0,d.t)("Test connection")})]})};var Ne=a(49238);const ke={account:{helpText:(0,d.t)("Copy the identifier of the account you are trying to connect to."),placeholder:(0,d.t)("e.g. xy12345.us-east-2.aws")},warehouse:{placeholder:(0,d.t)("e.g. compute_wh"),className:"form-group-w-50"},role:{placeholder:(0,d.t)("e.g. AccountAdmin"),className:"form-group-w-50"}},Ee=({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l,field:i})=>{var r;return(0,N.tZ)(q.Z,{id:i,name:i,required:e,value:null==l||null==(r=l.parameters)?void 0:r[i],validationMethods:{onBlur:a},errorMessage:null==n?void 0:n[i],placeholder:ke[i].placeholder,helpText:ke[i].helpText,label:i,onChange:t.onParametersChange,className:ke[i].className||i})};var Te,Xe=a(902857);!function(e){e[e.JsonUpload=0]="JsonUpload",e[e.CopyPaste=1]="CopyPaste"}(Te||(Te={}));const Ue={gsheets:"service_account_info",bigquery:"credentials_info"};var Be={name:"s5xdrg",styles:"display:flex;align-items:center"};const Pe=({changeMethods:e,isEditMode:t,db:a,editNewDb:n})=>{var l,i,r;const[o,s]=(0,c.useState)(Te.JsonUpload.valueOf()),[h,p]=(0,c.useState)(null),[u,g]=(0,c.useState)(!0),b="gsheets"===(null==a?void 0:a.engine)?!t&&!u:!t,v=t&&"{}"!==(null==a?void 0:a.masked_encrypted_extra),y=(null==a?void 0:a.engine)&&Ue[a.engine],_="object"==typeof(null==a||null==(l=a.parameters)?void 0:l[y])?JSON.stringify(null==a||null==(i=a.parameters)?void 0:i[y]):null==a||null==(r=a.parameters)?void 0:r[y];return(0,N.BX)(fe,{children:["gsheets"===(null==a?void 0:a.engine)&&(0,N.BX)("div",{className:"catalog-type-select",children:[(0,N.tZ)(Xe.Z,{css:e=>(e=>H.iv`
  margin-bottom: ${2*e.gridUnit}px;
`)(e),required:!0,children:(0,d.t)("Type of Google Sheets allowed")}),(0,N.BX)(m.IZ,{style:{width:"100%"},defaultValue:v?"false":"true",onChange:e=>g("true"===e),children:[(0,N.tZ)(m.IZ.Option,{value:"true",children:(0,d.t)("Publicly shared sheets only")},1),(0,N.tZ)(m.IZ.Option,{value:"false",children:(0,d.t)("Public and privately shared sheets")},2)]})]}),b&&(0,N.BX)(N.HY,{children:[(0,N.tZ)(Xe.Z,{required:!0,children:(0,d.t)("How do you want to enter service account credentials?")}),(0,N.BX)(m.IZ,{defaultValue:o,style:{width:"100%"},onChange:e=>s(e),children:[(0,N.tZ)(m.IZ.Option,{value:Te.JsonUpload,children:(0,d.t)("Upload JSON file")}),(0,N.tZ)(m.IZ.Option,{value:Te.CopyPaste,children:(0,d.t)("Copy and Paste JSON credentials")})]})]}),o===Te.CopyPaste||t||n?(0,N.BX)("div",{className:"input-container",children:[(0,N.tZ)(Xe.Z,{required:!0,children:(0,d.t)("Service Account")}),(0,N.tZ)("textarea",{className:"input-form",name:y,value:_,onChange:e.onParametersChange,placeholder:(0,d.t)("Paste content of service credentials JSON file here")}),(0,N.tZ)("span",{className:"label-paste",children:(0,d.t)("Copy and paste the entire service account .json file here")})]}):b&&(0,N.BX)("div",{className:"input-container",css:e=>ee(e),children:[(0,N.BX)("div",{css:Be,children:[(0,N.tZ)(Xe.Z,{required:!0,children:(0,d.t)("Upload Credentials")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Use the JSON file you automatically downloaded when creating your service account."),viewBox:"0 0 24 24"})]}),!h&&(0,N.tZ)(m.C0,{className:"input-upload-btn",onClick:()=>{var e,t;return null==(e=document)||null==(t=e.getElementById("selectedFile"))?void 0:t.click()},children:(0,d.t)("Choose File")}),h&&(0,N.BX)("div",{className:"input-upload-current",children:[h,(0,N.tZ)(f.Z.DeleteFilled,{iconSize:"m",onClick:()=>{p(null),e.onParametersChange({target:{name:y,value:""}})}})]}),(0,N.tZ)("input",{id:"selectedFile",accept:".json",className:"input-upload",type:"file",onChange:async t=>{var a,n;let l;t.target.files&&(l=t.target.files[0]),p(null==(a=l)?void 0:a.name),e.onParametersChange({target:{type:null,name:y,value:await(null==(n=l)?void 0:n.text()),checked:!1}}),document.getElementById("selectedFile").value=null}})]})]})},Me=({clearValidationErrors:e,changeMethods:t,db:a,dbModel:n})=>{var l,i,o;const[s,h]=(0,c.useState)(!1),p=(0,j.cr)(j.TT.SshTunneling),u=(null==n||null==(l=n.engine_information)?void 0:l.disable_ssh_tunneling)||!1,g=p&&!u;return(0,c.useEffect)((()=>{var e;g&&void 0!==(null==a||null==(e=a.parameters)?void 0:e.ssh)&&h(a.parameters.ssh)}),[null==a||null==(i=a.parameters)?void 0:i.ssh,g]),(0,c.useEffect)((()=>{var e;g&&void 0===(null==a||null==(e=a.parameters)?void 0:e.ssh)&&!r()(null==a?void 0:a.ssh_tunnel)&&t.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:!0}})}),[t,null==a||null==(o=a.parameters)?void 0:o.ssh,null==a?void 0:a.ssh_tunnel,g]),g?(0,N.BX)("div",{css:e=>ee(e),children:[(0,N.tZ)(m.KU,{checked:s,onChange:a=>{h(a),t.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:a}}),e()}}),(0,N.tZ)("span",{css:te,children:(0,d.t)("SSH Tunnel")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("SSH Tunnel configuration parameters"),placement:"right",viewBox:"0 -5 24 24"})]}):null};var De;const qe=["host","port","database","default_catalog","default_schema","username","password","access_token","http_path","http_path_field","database_name","credentials_info","service_account_info","catalog","query","encryption","account","warehouse","role","ssh"],Ae={host:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return(0,N.tZ)(q.Z,{id:"host",name:"host",value:null==l||null==(i=l.parameters)?void 0:i.host,required:e,hasTooltip:!0,tooltipText:(0,d.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.host,placeholder:(0,d.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,d.t)("Host"),onChange:t.onParametersChange})},http_path:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i,r;const o=JSON.parse((null==l?void 0:l.extra)||"{}");return(0,N.tZ)(q.Z,{id:"http_path",name:"http_path",required:e,value:null==(i=o.engine_params)||null==(r=i.connect_args)?void 0:r.http_path,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.http_path,placeholder:(0,d.t)("e.g. sql/protocolv1/o/12345"),label:"HTTP Path",onChange:t.onExtraInputChange,helpText:(0,d.t)("Copy the name of the HTTP Path of your cluster.")})},http_path_field:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return console.error(l),(0,N.tZ)(q.Z,{id:"http_path_field",name:"http_path_field",required:e,value:null==l||null==(i=l.parameters)?void 0:i.http_path_field,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.http_path,placeholder:(0,d.t)("e.g. sql/protocolv1/o/12345"),label:"HTTP Path",onChange:t.onParametersChange,helpText:(0,d.t)("Copy the name of the HTTP Path of your cluster.")})},port:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return(0,N.tZ)(N.HY,{children:(0,N.tZ)(q.Z,{id:"port",name:"port",type:"number",required:e,value:null==l||null==(i=l.parameters)?void 0:i.port,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.port,placeholder:(0,d.t)("e.g. 5432"),className:"form-group-w-50",label:(0,d.t)("Port"),onChange:t.onParametersChange})})},database:({required:e,changeMethods:t,getValidation:a,validationErrors:n,placeholder:l,db:i})=>{var r;return(0,N.tZ)(q.Z,{id:"database",name:"database",required:e,value:null==i||null==(r=i.parameters)?void 0:r.database,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.database,placeholder:null!=l?l:(0,d.t)("e.g. world_population"),label:(0,d.t)("Database name"),onChange:t.onParametersChange,helpText:(0,d.t)("Copy the name of the database you are trying to connect to.")})},default_catalog:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return(0,N.tZ)(q.Z,{id:"default_catalog",name:"default_catalog",required:e,value:null==l||null==(i=l.parameters)?void 0:i.default_catalog,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.default_catalog,placeholder:(0,d.t)("e.g. hive_metastore"),label:(0,d.t)("Default Catalog"),onChange:t.onParametersChange,helpText:(0,d.t)("The default catalog that should be used for the connection.")})},default_schema:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return(0,N.tZ)(q.Z,{id:"default_schema",name:"default_schema",required:e,value:null==l||null==(i=l.parameters)?void 0:i.default_schema,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.default_schema,placeholder:(0,d.t)("e.g. default"),label:(0,d.t)("Default Schema"),onChange:t.onParametersChange,helpText:(0,d.t)("The default schema that should be used for the connection.")})},username:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return(0,N.tZ)(q.Z,{id:"username",name:"username",required:e,value:null==l||null==(i=l.parameters)?void 0:i.username,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.username,placeholder:(0,d.t)("e.g. Analytics"),label:(0,d.t)("Username"),onChange:t.onParametersChange})},password:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l,isEditMode:i})=>{var r;return(0,N.tZ)(q.Z,{id:"password",name:"password",required:e,visibilityToggle:!i,value:null==l||null==(r=l.parameters)?void 0:r.password,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.password,placeholder:(0,d.t)("e.g. ********"),label:(0,d.t)("Password"),onChange:t.onParametersChange})},access_token:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l,isEditMode:i,default_value:r,description:o})=>{var s;return(0,N.tZ)(q.Z,{id:"access_token",name:"access_token",required:e,visibilityToggle:!i,value:null==l||null==(s=l.parameters)?void 0:s.access_token,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.access_token,placeholder:(0,d.t)("Paste your access token here"),get_url:"string"==typeof r&&r.includes("https://")?r:null,description:o,label:(0,d.t)("Access token"),onChange:t.onParametersChange})},database_name:({changeMethods:e,getValidation:t,validationErrors:a,db:n})=>(0,N.tZ)(N.HY,{children:(0,N.tZ)(q.Z,{id:"database_name",name:"database_name",required:!0,value:null==n?void 0:n.database_name,validationMethods:{onBlur:t},errorMessage:null==a?void 0:a.database_name,placeholder:"",label:(0,d.t)("Display Name"),onChange:e.onChange,helpText:(0,d.t)("Pick a nickname for how the database will display in Superset.")})}),query:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>(0,N.tZ)(q.Z,{id:"query_input",name:"query_input",required:e,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.query,placeholder:(0,d.t)("e.g. param1=value1&param2=value2"),label:(0,d.t)("Additional Parameters"),onChange:t.onQueryChange,helpText:(0,d.t)("Add additional custom parameters")}),encryption:({isEditMode:e,changeMethods:t,db:a,sslForced:n})=>{var l;return(0,N.BX)("div",{css:e=>ee(e),children:[(0,N.tZ)(m.KU,{disabled:n&&!e,checked:(null==a||null==(l=a.parameters)?void 0:l.encryption)||n,onChange:e=>{t.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,N.tZ)("span",{css:te,children:"SSL"}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)('SSL Mode "require" will be used.'),placement:"right",viewBox:"0 -5 24 24"})]})},credentials_info:Pe,service_account_info:Pe,catalog:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{const i=(null==l?void 0:l.catalog)||[],r=n||{};return(0,N.BX)(xe,{children:[(0,N.tZ)("h4",{className:"gsheet-title",children:(0,d.t)("Connect Google Sheets as tables to this database")}),(0,N.BX)("div",{children:[null==i?void 0:i.map(((n,l)=>{var o,s;return(0,N.BX)(N.HY,{children:[(0,N.tZ)(Xe.Z,{className:"catalog-label",required:!0,children:(0,d.t)("Google Sheet Name and URL")}),(0,N.BX)("div",{className:"catalog-name",children:[(0,N.tZ)(q.Z,{className:"catalog-name-input",required:e,validationMethods:{onBlur:a},errorMessage:null==(o=r[l])?void 0:o.name,placeholder:(0,d.t)("Enter a name for this sheet"),onChange:e=>{t.onParametersChange({target:{type:`catalog-${l}`,name:"name",value:e.target.value}})},value:n.name}),(null==i?void 0:i.length)>1&&(0,N.tZ)(f.Z.CloseOutlined,{css:e=>H.iv`
                    align-self: center;
                    background: ${e.colors.grayscale.light4};
                    margin: 5px 5px 8px 5px;

                    &.anticon > * {
                      line-height: 0;
                    }
                  `,iconSize:"m",onClick:()=>t.onRemoveTableCatalog(l)})]}),(0,N.tZ)(q.Z,{className:"catalog-name-url",required:e,validationMethods:{onBlur:a},errorMessage:null==(s=r[l])?void 0:s.url,placeholder:(0,d.t)("Paste the shareable Google Sheet URL here"),onChange:e=>t.onParametersChange({target:{type:`catalog-${l}`,name:"value",value:e.target.value}}),value:n.value})]})})),(0,N.BX)(_e,{className:"catalog-add-btn",onClick:()=>{t.onAddTableCatalog()},children:["+ ",(0,d.t)("Add sheet")]})]})]})},warehouse:Ee,role:Ee,account:Ee,ssh:null!=(De=(0,o.I)().get("ssh_tunnel.form.switch"))?De:Me},Le=({dbModel:e,db:t,editNewDb:a,getPlaceholder:n,getValidation:l,isEditMode:i=!1,onAddTableCatalog:r,onChange:o,onExtraInputChange:s,onParametersChange:d,onParametersUploadFileChange:c,onQueryChange:h,onRemoveTableCatalog:p,sslForced:u,validationErrors:m,clearValidationErrors:g})=>{const b=null==e?void 0:e.parameters;return(0,N.tZ)(Ne.l0,{children:(0,N.tZ)("div",{css:e=>[ae,se(e)],children:b&&qe.filter((e=>Object.keys(b.properties).includes(e)||"database_name"===e)).map((e=>{var v,f,y;return Ae[e]({required:null==(v=b.required)?void 0:v.includes(e),changeMethods:{onParametersChange:d,onChange:o,onQueryChange:h,onParametersUploadFileChange:c,onAddTableCatalog:r,onRemoveTableCatalog:p,onExtraInputChange:s},validationErrors:m,getValidation:l,clearValidationErrors:g,db:t,key:e,field:e,default_value:null==(f=b.properties[e])?void 0:f.default,description:null==(y=b.properties[e])?void 0:y.description,isEditMode:i,sslForced:u,editNewDb:a,placeholder:n?n(e):void 0})}))})})},Ie=(0,I.z)(),Oe=Ie?Ie.support:"https://superset.apache.org/docs/configuration/databases#installing-database-drivers",Re={postgresql:"https://superset.apache.org",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},He=({isLoading:e,isEditMode:t,useSqlAlchemyForm:a,hasConnectedDb:n,db:l,dbName:i,dbModel:r,editNewDb:o,fileList:s})=>{const c=s&&(null==s?void 0:s.length)>0,h=(0,N.BX)(Q,{children:[(0,N.tZ)(be,{children:null==l?void 0:l.backend}),(0,N.tZ)(ve,{children:i})]}),p=(0,N.BX)(Q,{children:[(0,N.tZ)("p",{className:"helper-top",children:(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})}),(0,N.tZ)("h4",{children:(0,d.t)("Enter Primary Credentials")}),(0,N.BX)("p",{className:"helper-bottom",children:[(0,d.t)("Need help? Learn how to connect your database")," ",(0,N.tZ)("a",{href:(null==Ie?void 0:Ie.default)||Oe,target:"_blank",rel:"noopener noreferrer",children:(0,d.t)("here")}),"."]})]}),u=(0,N.tZ)(Ze,{children:(0,N.BX)(Q,{children:[(0,N.tZ)("p",{className:"helper-top",children:(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:3,stepLast:3})}),(0,N.tZ)("h4",{className:"step-3-text",children:(0,d.t)("Database connected")}),(0,N.tZ)("p",{className:"subheader-text",children:(0,d.t)("Create a dataset to begin visualizing your data as a chart or go to\n          SQL Lab to query your data.")})]})}),m=(0,N.tZ)(Ze,{children:(0,N.BX)(Q,{children:[(0,N.tZ)("p",{className:"helper-top",children:(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:3})}),(0,N.tZ)("h4",{children:(0,d.t)("Enter the required %(dbModelName)s credentials",{dbModelName:r.name})}),(0,N.BX)("p",{className:"helper-bottom",children:[(0,d.t)("Need help? Learn more about")," ",(0,N.BX)("a",{href:(g=null==l?void 0:l.engine,g?Ie?Ie[g]||Ie.default:Re[g]?Re[g]:`https://superset.apache.org/docs/databases/${g}`:null),target:"_blank",rel:"noopener noreferrer",children:[(0,d.t)("connecting to %(dbModelName)s",{dbModelName:r.name}),"."]})]})]})});var g;const b=(0,N.tZ)(Q,{children:(0,N.BX)("div",{className:"select-db",children:[(0,N.tZ)("p",{className:"helper-top",children:(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:1,stepLast:3})}),(0,N.tZ)("h4",{children:(0,d.t)("Select a database to connect")})]})}),v=(0,N.tZ)(Ze,{children:(0,N.BX)(Q,{children:[(0,N.tZ)("p",{className:"helper-top",children:(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})}),(0,N.tZ)("h4",{children:(0,d.t)("Enter the required %(dbModelName)s credentials",{dbModelName:r.name})}),(0,N.tZ)("p",{className:"helper-bottom",children:c?s[0].name:""})]})});return c?v:e?(0,N.tZ)(N.HY,{}):t?h:a?p:n&&!o?u:l||o?m:b};var Fe=a(287183),ze=a(9875),je=a(477808),Je=a(931097),Ke=a(10038),Ve=a(655287);const Ye=s.iK.div`
  padding-top: ${({theme:e})=>2*e.gridUnit}px;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,Qe=(0,s.iK)(m.X2)`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
`,We=(0,s.iK)(m.qz.Item)`
  margin-bottom: 0 !important;
`,Ge=(0,s.iK)(je.Z.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,et=({db:e,onSSHTunnelParametersChange:t,setSSHTunnelLoginMethod:a})=>{var n,l,i,r,o,s;const[h,p]=(0,c.useState)(st.Password);return(0,N.BX)(Ne.l0,{children:[(0,N.BX)(Qe,{gutter:16,children:[(0,N.tZ)(m.JX,{xs:24,md:12,children:(0,N.BX)(Ye,{children:[(0,N.tZ)(Ne.lX,{htmlFor:"server_address",required:!0,children:(0,d.t)("SSH Host")}),(0,N.tZ)(ze.II,{name:"server_address",type:"text",placeholder:(0,d.t)("e.g. 127.0.0.1"),value:(null==e||null==(n=e.ssh_tunnel)?void 0:n.server_address)||"",onChange:t})]})}),(0,N.tZ)(m.JX,{xs:24,md:12,children:(0,N.BX)(Ye,{children:[(0,N.tZ)(Ne.lX,{htmlFor:"server_port",required:!0,children:(0,d.t)("SSH Port")}),(0,N.tZ)(ze.II,{name:"server_port",placeholder:(0,d.t)("22"),type:"number",value:null==e||null==(l=e.ssh_tunnel)?void 0:l.server_port,onChange:t})]})})]}),(0,N.tZ)(Qe,{gutter:16,children:(0,N.tZ)(m.JX,{xs:24,children:(0,N.BX)(Ye,{children:[(0,N.tZ)(Ne.lX,{htmlFor:"username",required:!0,children:(0,d.t)("Username")}),(0,N.tZ)(ze.II,{name:"username",type:"text",placeholder:(0,d.t)("e.g. Analytics"),value:(null==e||null==(i=e.ssh_tunnel)?void 0:i.username)||"",onChange:t})]})})}),(0,N.tZ)(Qe,{gutter:16,children:(0,N.tZ)(m.JX,{xs:24,children:(0,N.BX)(Ye,{children:[(0,N.tZ)(Ne.lX,{htmlFor:"use_password",required:!0,children:(0,d.t)("Login with")}),(0,N.tZ)(We,{name:"use_password",initialValue:h,children:(0,N.BX)(Fe.Y.Group,{onChange:({target:{value:e}})=>{p(e),a(e)},children:[(0,N.tZ)(Fe.Y,{value:st.Password,children:(0,d.t)("Password")}),(0,N.tZ)(Fe.Y,{value:st.PrivateKey,children:(0,d.t)("Private Key & Password")})]})})]})})}),h===st.Password&&(0,N.tZ)(Qe,{gutter:16,children:(0,N.tZ)(m.JX,{xs:24,children:(0,N.BX)(Ye,{children:[(0,N.tZ)(Ne.lX,{htmlFor:"password",required:!0,children:(0,d.t)("SSH Password")}),(0,N.tZ)(Ge,{name:"password",placeholder:(0,d.t)("e.g. ********"),value:(null==e||null==(r=e.ssh_tunnel)?void 0:r.password)||"",onChange:t,iconRender:e=>e?(0,N.tZ)(Je.Z,{title:"Hide password.",children:(0,N.tZ)(Ke.Z,{})}):(0,N.tZ)(Je.Z,{title:"Show password.",children:(0,N.tZ)(Ve.Z,{})}),role:"textbox"})]})})}),h===st.PrivateKey&&(0,N.BX)(N.HY,{children:[(0,N.tZ)(Qe,{gutter:16,children:(0,N.tZ)(m.JX,{xs:24,children:(0,N.BX)(Ye,{children:[(0,N.tZ)(Ne.lX,{htmlFor:"private_key",required:!0,children:(0,d.t)("Private Key")}),(0,N.tZ)(ze.Kx,{name:"private_key",placeholder:(0,d.t)("Paste Private Key here"),value:(null==e||null==(o=e.ssh_tunnel)?void 0:o.private_key)||"",onChange:t,rows:4})]})})}),(0,N.tZ)(Qe,{gutter:16,children:(0,N.tZ)(m.JX,{xs:24,children:(0,N.BX)(Ye,{children:[(0,N.tZ)(Ne.lX,{htmlFor:"private_key_password",required:!0,children:(0,d.t)("Private Key Password")}),(0,N.tZ)(Ge,{name:"private_key_password",placeholder:(0,d.t)("e.g. ********"),value:(null==e||null==(s=e.ssh_tunnel)?void 0:s.private_key_password)||"",onChange:t,iconRender:e=>e?(0,N.tZ)(Je.Z,{title:"Hide password.",children:(0,N.tZ)(Ke.Z,{})}):(0,N.tZ)(Je.Z,{title:"Show password.",children:(0,N.tZ)(Ve.Z,{})}),role:"textbox"})]})})})]})]})},tt=(0,o.I)(),at=JSON.stringify({allows_virtual_table_explore:!0}),nt={[P.GSheet]:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},lt=(0,s.iK)(u.ZP)`
  .ant-tabs-content {
    display: flex;
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-tabpane {
      position: relative;
    }
  }
`,it=s.iK.div`
  ${({theme:e})=>`\n    margin: ${8*e.gridUnit}px ${4*e.gridUnit}px;\n  `};
`,rt=s.iK.div`
  ${({theme:e})=>`\n    padding: 0px ${4*e.gridUnit}px;\n  `};
`;var ot,st;!function(e){e[e.AddTableCatalogSheet=0]="AddTableCatalogSheet",e[e.ConfigMethodChange=1]="ConfigMethodChange",e[e.DbSelected=2]="DbSelected",e[e.EditorChange=3]="EditorChange",e[e.ExtraEditorChange=4]="ExtraEditorChange",e[e.ExtraInputChange=5]="ExtraInputChange",e[e.Fetched=6]="Fetched",e[e.InputChange=7]="InputChange",e[e.ParametersChange=8]="ParametersChange",e[e.QueryChange=9]="QueryChange",e[e.RemoveTableCatalogSheet=10]="RemoveTableCatalogSheet",e[e.Reset=11]="Reset",e[e.TextChange=12]="TextChange",e[e.ParametersSSHTunnelChange=13]="ParametersSSHTunnelChange",e[e.SetSSHTunnelLoginMethod=14]="SetSSHTunnelLoginMethod",e[e.RemoveSSHTunnelConfig=15]="RemoveSSHTunnelConfig"}(ot||(ot={})),function(e){e[e.Password=0]="Password",e[e.PrivateKey=1]="PrivateKey"}(st||(st={}));const dt=s.iK.div`
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  margin-left: ${({theme:e})=>3*e.gridUnit}px;
`;function ct(e,t){var a,n,i,r;const o={...e||{}};let s,d,c={},h="";const p=JSON.parse(o.extra||"{}");switch(t.type){case ot.ExtraEditorChange:try{d=JSON.parse(t.payload.json||"{}")}catch(e){d=t.payload.json}return{...o,extra:JSON.stringify({...p,[t.payload.name]:d})};case ot.ExtraInputChange:return"schema_cache_timeout"===t.payload.name||"table_cache_timeout"===t.payload.name?{...o,extra:JSON.stringify({...p,metadata_cache_timeout:{...null==p?void 0:p.metadata_cache_timeout,[t.payload.name]:t.payload.value}})}:"schemas_allowed_for_file_upload"===t.payload.name?{...o,extra:JSON.stringify({...p,schemas_allowed_for_file_upload:(t.payload.value||"").split(",").filter((e=>""!==e))})}:"http_path"===t.payload.name?{...o,extra:JSON.stringify({...p,engine_params:{connect_args:{[t.payload.name]:null==(u=t.payload.value)?void 0:u.trim()}}})}:"expand_rows"===t.payload.name?{...o,extra:JSON.stringify({...p,schema_options:{...null==p?void 0:p.schema_options,[t.payload.name]:!!t.payload.value}})}:{...o,extra:JSON.stringify({...p,[t.payload.name]:"checkbox"===t.payload.type?t.payload.checked:t.payload.value})};var u;case ot.InputChange:return"checkbox"===t.payload.type?{...o,[t.payload.name]:t.payload.checked}:{...o,[t.payload.name]:t.payload.value};case ot.ParametersChange:if(null!=(a=t.payload.type)&&a.startsWith("catalog")&&void 0!==o.catalog){var m;const e=[...o.catalog],a=null==(m=t.payload.type)?void 0:m.split("-")[1],n=e[a]||{};return n[t.payload.name]=t.payload.value,e.splice(parseInt(a,10),1,n),s=e.reduce(((e,t)=>{const a={...e};return a[t.name]=t.value,a}),{}),{...o,catalog:e,parameters:{...o.parameters,catalog:s}}}return{...o,parameters:{...o.parameters,[t.payload.name]:t.payload.value}};case ot.ParametersSSHTunnelChange:return{...o,ssh_tunnel:{...o.ssh_tunnel,[t.payload.name]:t.payload.value}};case ot.SetSSHTunnelLoginMethod:{let e={};var g,b,v;return null!=o&&o.ssh_tunnel&&(e=l()(o.ssh_tunnel,["id","server_address","server_port","username"])),t.payload.login_method===st.PrivateKey?{...o,ssh_tunnel:{private_key:null==o||null==(g=o.ssh_tunnel)?void 0:g.private_key,private_key_password:null==o||null==(b=o.ssh_tunnel)?void 0:b.private_key_password,...e}}:t.payload.login_method===st.Password?{...o,ssh_tunnel:{password:null==o||null==(v=o.ssh_tunnel)?void 0:v.password,...e}}:{...o}}case ot.RemoveSSHTunnelConfig:return{...o,ssh_tunnel:void 0};case ot.AddTableCatalogSheet:return void 0!==o.catalog?{...o,catalog:[...o.catalog,{name:"",value:""}]}:{...o,catalog:[{name:"",value:""}]};case ot.RemoveTableCatalogSheet:return null==(n=o.catalog)||n.splice(t.payload.indexToDelete,1),{...o};case ot.EditorChange:return{...o,[t.payload.name]:t.payload.json};case ot.QueryChange:return{...o,parameters:{...o.parameters,query:Object.fromEntries(new URLSearchParams(t.payload.value))},query_input:t.payload.value};case ot.TextChange:return{...o,[t.payload.name]:t.payload.value};case ot.Fetched:if(c=(null==(i=t.payload)||null==(r=i.parameters)?void 0:r.query)||{},h=Object.entries(c).map((([e,t])=>`${e}=${t}`)).join("&"),t.payload.masked_encrypted_extra&&t.payload.configuration_method===B.DynamicForm){var f;const e=null==(f={...JSON.parse(t.payload.extra||"{}")}.engine_params)?void 0:f.catalog,a=Object.entries(e||{}).map((([e,t])=>({name:e,value:t})));return{...t.payload,engine:t.payload.backend||o.engine,configuration_method:t.payload.configuration_method,catalog:a,parameters:{...t.payload.parameters||o.parameters,catalog:e},query_input:h}}return{...t.payload,masked_encrypted_extra:t.payload.masked_encrypted_extra||"",engine:t.payload.backend||o.engine,configuration_method:t.payload.configuration_method,parameters:t.payload.parameters||o.parameters,ssh_tunnel:t.payload.ssh_tunnel||o.ssh_tunnel,query_input:h};case ot.DbSelected:return{...t.payload,extra:at,expose_in_sqllab:!0};case ot.ConfigMethodChange:return{...t.payload};case ot.Reset:default:return null}}const ht=(0,D.ZP)((({addDangerToast:e,addSuccessToast:t,onDatabaseAdd:a,onHide:n,show:l,databaseId:i,dbEngine:o})=>{var s,f,y,_;const[Z,x]=(0,c.useReducer)(ct,null),{state:{loading:w,resource:C,error:S},fetchResource:$,createResource:k,updateResource:E,clearError:T}=(0,I.LE)("database",(0,d.t)("database"),e,"connection"),[X,D]=(0,c.useState)("1"),[F,z]=(0,I.cb)(),[j,J,K]=(0,I.h1)(),[V,Y]=(0,c.useState)(!1),[Q,te]=(0,c.useState)(!1),[se,de]=(0,c.useState)(""),[ce,he]=(0,c.useState)(!1),[be,ve]=(0,c.useState)(!1),[fe,xe]=(0,c.useState)(!1),[Se,Ne]=(0,c.useState)({}),[ke,Ee]=(0,c.useState)({}),[Te,Xe]=(0,c.useState)({}),[Ue,Be]=(0,c.useState)({}),[Pe,De]=(0,c.useState)(!1),[qe,Ae]=(0,c.useState)([]),[Ie,Re]=(0,c.useState)(!1),[Fe,ze]=(0,c.useState)(),[je,Je]=(0,c.useState)([]),[Ke,Ve]=(0,c.useState)([]),[Ye,Qe]=(0,c.useState)([]),[We,Ge]=(0,c.useState)([]),[at,st]=(0,c.useState)({}),ht=null!=(s=tt.get("ssh_tunnel.form.switch"))?s:Me,[pt,ut]=(0,c.useState)(void 0);let mt=tt.get("databaseconnection.extraOption");mt&&(mt={...mt,onEdit:e=>{st({...at,...e})}});const gt=(0,O.c)(),bt=(0,I.rM)(),vt=(0,I.jb)(),ft=!!i,yt=vt||!(null==Z||!Z.engine||!nt[Z.engine]),_t=(null==Z?void 0:Z.configuration_method)===B.SqlalchemyUri,Zt=ft||_t,xt=j||S,wt=(0,h.k6)(),Ct=(null==F||null==(f=F.databases)?void 0:f.find((e=>e.engine===(ft?null==Z?void 0:Z.backend:null==Z?void 0:Z.engine)&&e.default_driver===(null==Z?void 0:Z.driver))))||(null==F||null==(y=F.databases)?void 0:y.find((e=>e.engine===(ft?null==Z?void 0:Z.backend:null==Z?void 0:Z.engine))))||{},St=e=>{if("database"===e)return(0,d.t)("e.g. world_population")},$t=(0,c.useCallback)(((e,t)=>{x({type:e,payload:t})}),[]),Nt=(0,c.useCallback)((()=>{K(null)}),[K]),kt=(0,c.useCallback)((({target:e})=>{$t(ot.ParametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})}),[$t]),Et=()=>{x({type:ot.Reset}),Y(!1),Nt(),T(),he(!1),Ae([]),Re(!1),ze(""),Je([]),Ve([]),Qe([]),Ge([]),Ne({}),Ee({}),Xe({}),Be({}),De(!1),ut(void 0),n()},Tt=e=>{wt.push(e)},{state:{alreadyExists:Xt,passwordsNeeded:Ut,sshPasswordNeeded:Bt,sshPrivateKeyNeeded:Pt,sshPrivateKeyPasswordNeeded:Mt,loading:Dt,failed:qt},importResource:At}=(0,I.PW)("database",(0,d.t)("database"),(e=>{ze(e)})),Lt=async()=>{var n,l;let i;if(ve(!0),null==(n=mt)||n.onSave(at,Z).then((({error:t})=>{t&&(i=t,e(t))})),i)return void ve(!1);const o={...Z||{}};if(o.configuration_method===B.DynamicForm){var s,c;null!=o&&null!=(s=o.parameters)&&s.catalog&&(o.extra=JSON.stringify({...JSON.parse(o.extra||"{}"),engine_params:{catalog:o.parameters.catalog}}));const t=await J(o,!0);if(!r()(j)||null!=t&&t.length)return e((0,d.t)("Connection failed, please check your connection settings.")),void ve(!1);const a=ft?null==(c=o.parameters_schema)?void 0:c.properties:null==Ct?void 0:Ct.parameters.properties,n=JSON.parse(o.masked_encrypted_extra||"{}");Object.keys(a||{}).forEach((e=>{var t,l,i,r;a[e]["x-encrypted-extra"]&&null!=(t=o.parameters)&&t[e]&&("object"==typeof(null==(l=o.parameters)?void 0:l[e])?(n[e]=null==(i=o.parameters)?void 0:i[e],o.parameters[e]=JSON.stringify(o.parameters[e])):n[e]=JSON.parse((null==(r=o.parameters)?void 0:r[e])||"{}"))})),o.masked_encrypted_extra=JSON.stringify(n),o.engine===P.GSheet&&(o.impersonate_user=!0)}if(null!=o&&null!=(l=o.parameters)&&l.catalog&&(o.extra=JSON.stringify({...JSON.parse(o.extra||"{}"),engine_params:{catalog:o.parameters.catalog}})),!1===pt&&(o.ssh_tunnel=null),null!=Z&&Z.id){if(await E(Z.id,o,o.configuration_method===B.DynamicForm)){var h;if(a&&a(),null==(h=mt)||h.onSave(at,Z).then((({error:t})=>{t&&(i=t,e(t))})),i)return void ve(!1);ce||(Et(),t((0,d.t)("Database settings updated")))}}else if(Z){if(await k(o,o.configuration_method===B.DynamicForm)){var p;if(Y(!0),a&&a(),null==(p=mt)||p.onSave(at,Z).then((({error:t})=>{t&&(i=t,e(t))})),i)return void ve(!1);Zt&&(Et(),t((0,d.t)("Database connected")))}}else{if(Re(!0),!(qe[0].originFileObj instanceof File))return;await At(qe[0].originFileObj,Se,ke,Te,Ue,Pe)&&(a&&a(),Et(),t((0,d.t)("Database connected")))}te(!0),he(!1),ve(!1)},It=e=>{if("Other"===e)x({type:ot.DbSelected,payload:{database_name:e,configuration_method:B.SqlalchemyUri,engine:void 0,engine_information:{supports_file_upload:!0}}});else{const t=null==F?void 0:F.databases.filter((t=>t.name===e))[0],{engine:a,parameters:n,engine_information:l,default_driver:i,sqlalchemy_uri_placeholder:r}=t,o=void 0!==n;x({type:ot.DbSelected,payload:{database_name:e,engine:a,configuration_method:o?B.DynamicForm:B.SqlalchemyUri,engine_information:l,driver:i,sqlalchemy_uri_placeholder:r}}),a===P.GSheet&&x({type:ot.AddTableCatalogSheet})}},Ot=()=>{C&&$(C.id),te(!1),he(!0)},Rt=()=>{ce&&Y(!1),Ie&&Re(!1),qt&&(Re(!1),ze(""),Je([]),Ve([]),Qe([]),Ge([]),Ne({}),Ee({}),Xe({}),Be({})),x({type:ot.Reset}),Ae([])},Ht=()=>Z?!V||ce?(0,N.BX)(N.HY,{children:[(0,N.tZ)(_e,{onClick:Rt,children:(0,d.t)("Back")},"back"),(0,N.tZ)(_e,{buttonStyle:"primary",onClick:Lt,loading:be,children:(0,d.t)("Connect")},"submit")]}):(0,N.BX)(N.HY,{children:[(0,N.tZ)(_e,{onClick:Ot,children:(0,d.t)("Back")},"back"),(0,N.tZ)(_e,{buttonStyle:"primary",onClick:Lt,loading:be,children:(0,d.t)("Finish")},"submit")]}):Ie?(0,N.BX)(N.HY,{children:[(0,N.tZ)(_e,{onClick:Rt,children:(0,d.t)("Back")},"back"),(0,N.tZ)(_e,{buttonStyle:"primary",onClick:Lt,disabled:!!(Dt||Xt.length&&!Pe||Ut.length&&"{}"===JSON.stringify(Se)||Bt.length&&"{}"===JSON.stringify(ke)||Pt.length&&"{}"===JSON.stringify(Te)||Mt.length&&"{}"===JSON.stringify(Ue)),loading:be,children:(0,d.t)("Connect")},"submit")]}):(0,N.tZ)(N.HY,{}),Ft=(0,c.useRef)(!0);(0,c.useEffect)((()=>{Ft.current?Ft.current=!1:Dt||Xt.length||Ut.length||Bt.length||Pt.length||Mt.length||be||qt||(Et(),t((0,d.t)("Database connected")))}),[Xt,Ut,Dt,qt,Bt,Pt,Mt]),(0,c.useEffect)((()=>{l&&(D("1"),ve(!0),z()),i&&l&&ft&&i&&(w||$(i).catch((t=>e((0,d.t)("Sorry there was an error fetching database information: %s",t.message)))))}),[l,i]),(0,c.useEffect)((()=>{C&&(x({type:ot.Fetched,payload:C}),de(C.database_name))}),[C]),(0,c.useEffect)((()=>{be&&ve(!1),F&&o&&It(o)}),[F]),(0,c.useEffect)((()=>{Ie&&document.getElementsByClassName("ant-upload-list-item-name")[0].scrollIntoView()}),[Ie]),(0,c.useEffect)((()=>{Je([...Ut])}),[Ut]),(0,c.useEffect)((()=>{Ve([...Bt])}),[Bt]),(0,c.useEffect)((()=>{Qe([...Pt])}),[Pt]),(0,c.useEffect)((()=>{Ge([...Mt])}),[Mt]),(0,c.useEffect)((()=>{var e;void 0!==(null==Z||null==(e=Z.parameters)?void 0:e.ssh)&&ut(Z.parameters.ssh)}),[null==Z||null==(_=Z.parameters)?void 0:_.ssh]);const zt=()=>Fe?(0,N.tZ)(ie,{children:(0,N.tZ)(L.Z,{errorMessage:Fe,showDbInstallInstructions:je.length>0})}):null,jt=e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";De(n.toUpperCase()===(0,d.t)("OVERWRITE"))},Jt=()=>{let e=[];var t;return r()(S)?r()(j)||"GENERIC_DB_ENGINE_ERROR"!==(null==j?void 0:j.error_type)||(e=[(null==j?void 0:j.description)||(null==j?void 0:j.message)]):e="object"==typeof S?Object.values(S):"string"==typeof S?[S]:[],e.length?(0,N.tZ)(it,{children:(0,N.tZ)(A.Z,{title:(0,d.t)("Database Creation Error"),description:(0,d.t)('We are unable to connect to your database. Click "See more" for database-provided information that may help troubleshoot the issue.'),subtitle:(null==(t=e)?void 0:t[0])||(null==j?void 0:j.description),copyText:null==j?void 0:j.description})}):(0,N.tZ)(N.HY,{})},Kt=()=>{ve(!0),$(null==C?void 0:C.id).then((e=>{(0,p.LS)(p.dR.Database,e)}))},Vt=()=>(0,N.tZ)(et,{db:Z,onSSHTunnelParametersChange:({target:e})=>{$t(ot.ParametersSSHTunnelChange,{type:e.type,name:e.name,value:e.value}),Nt()},setSSHTunnelLoginMethod:e=>x({type:ot.SetSSHTunnelLoginMethod,payload:{login_method:e}})}),Yt=()=>(0,N.BX)(N.HY,{children:[(0,N.tZ)(Le,{isEditMode:ft,db:Z,sslForced:!1,dbModel:Ct,onAddTableCatalog:()=>{x({type:ot.AddTableCatalogSheet})},onQueryChange:({target:e})=>$t(ot.QueryChange,{name:e.name,value:e.value}),onExtraInputChange:({target:e})=>$t(ot.ExtraInputChange,{name:e.name,value:e.value}),onRemoveTableCatalog:e=>{x({type:ot.RemoveTableCatalogSheet,payload:{indexToDelete:e}})},onParametersChange:kt,onChange:({target:e})=>$t(ot.TextChange,{name:e.name,value:e.value}),getValidation:()=>J(Z),validationErrors:j,getPlaceholder:St,clearValidationErrors:Nt}),pt&&(0,N.tZ)(rt,{children:Vt()})]});if(qe.length>0&&(Xt.length||je.length||Ke.length||Ye.length||We.length))return(0,N.BX)(b.default,{centered:!0,css:e=>[G,ne(e),re(e),oe(e)],footer:Ht(),maskClosable:!1,name:"database",onHide:Et,onHandledPrimaryAction:Lt,primaryButtonName:(0,d.t)("Connect"),show:l,title:(0,N.tZ)("h4",{children:(0,d.t)("Connect a database")}),width:"500px",children:[(0,N.tZ)(He,{db:Z,dbName:se,dbModel:Ct,fileList:qe,hasConnectedDb:V,isEditMode:ft,isLoading:be,useSqlAlchemyForm:_t}),Xt.length?(0,N.BX)(N.HY,{children:[(0,N.tZ)(ie,{children:(0,N.tZ)(g.Z,{closable:!1,css:e=>(e=>H.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"warning",showIcon:!0,message:"",description:(0,d.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})}),(0,N.tZ)(q.Z,{id:"confirm_overwrite",name:"confirm_overwrite",required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==j?void 0:j.confirm_overwrite,label:(0,d.t)('Type "%s" to confirm',(0,d.t)("OVERWRITE")),onChange:jt,css:ae})]}):null,zt(),je.length||Ke.length||Ye.length||We.length?[...new Set([...je,...Ke,...Ye,...We])].map((e=>(0,N.BX)(N.HY,{children:[(0,N.tZ)(ie,{children:(0,N.tZ)(g.Z,{closable:!1,css:e=>le(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,d.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in explore files and should be added manually after the import if they are needed.')})}),(null==je?void 0:je.indexOf(e))>=0&&(0,N.tZ)(q.Z,{id:"password_needed",name:"password_needed",required:!0,value:Se[e],onChange:t=>Ne({...Se,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==j?void 0:j.password_needed,label:(0,d.t)("%s PASSWORD",e.slice(10)),css:ae}),(null==Ke?void 0:Ke.indexOf(e))>=0&&(0,N.tZ)(q.Z,{id:"ssh_tunnel_password_needed",name:"ssh_tunnel_password_needed",required:!0,value:ke[e],onChange:t=>Ee({...ke,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==j?void 0:j.ssh_tunnel_password_needed,label:(0,d.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),css:ae}),(null==Ye?void 0:Ye.indexOf(e))>=0&&(0,N.tZ)(q.Z,{id:"ssh_tunnel_private_key_needed",name:"ssh_tunnel_private_key_needed",required:!0,value:Te[e],onChange:t=>Xe({...Te,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==j?void 0:j.ssh_tunnel_private_key_needed,label:(0,d.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),css:ae}),(null==We?void 0:We.indexOf(e))>=0&&(0,N.tZ)(q.Z,{id:"ssh_tunnel_private_key_password_needed",name:"ssh_tunnel_private_key_password_needed",required:!0,value:Ue[e],onChange:t=>Be({...Ue,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==j?void 0:j.ssh_tunnel_private_key_password_needed,label:(0,d.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),css:ae})]}))):null]});const Qt=ft?(e=>(0,N.BX)(N.HY,{children:[(0,N.tZ)(_e,{onClick:Et,children:(0,d.t)("Close")},"close"),(0,N.tZ)(_e,{buttonStyle:"primary",onClick:Lt,disabled:null==e?void 0:e.is_managed_externally,loading:be,tooltip:null!=e&&e.is_managed_externally?(0,d.t)("This database is managed externally, and can't be edited in Superset"):"",children:(0,d.t)("Finish")},"submit")]}))(Z):Ht();return Zt?(0,N.BX)(b.default,{css:e=>[W,G,ne(e),re(e),oe(e)],name:"database",onHandledPrimaryAction:Lt,onHide:Et,primaryButtonName:ft?(0,d.t)("Save"):(0,d.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,N.tZ)("h4",{children:ft?(0,d.t)("Edit database"):(0,d.t)("Connect a database")}),footer:Qt,maskClosable:!1,children:[(0,N.tZ)(Ze,{children:(0,N.tZ)(ge,{children:(0,N.tZ)(He,{isLoading:be,isEditMode:ft,useSqlAlchemyForm:_t,hasConnectedDb:V,db:Z,dbName:se,dbModel:Ct})})}),(0,N.BX)(lt,{defaultActiveKey:"1",activeKey:X,onTabClick:e=>D(e),animated:{inkBar:!0,tabPane:!0},children:[(0,N.BX)(u.ZP.TabPane,{tab:(0,N.tZ)("span",{children:(0,d.t)("Basic")}),children:[_t?(0,N.BX)(pe,{children:[(0,N.BX)($e,{db:Z,onInputChange:({target:e})=>$t(ot.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),conf:gt,testConnection:()=>{var a;if(null==Z||!Z.sqlalchemy_uri)return void e((0,d.t)("Please enter a SQLAlchemy URI to test"));const n={sqlalchemy_uri:(null==Z?void 0:Z.sqlalchemy_uri)||"",database_name:(null==Z||null==(a=Z.database_name)?void 0:a.trim())||void 0,impersonate_user:(null==Z?void 0:Z.impersonate_user)||void 0,extra:null==Z?void 0:Z.extra,masked_encrypted_extra:(null==Z?void 0:Z.masked_encrypted_extra)||"",server_cert:(null==Z?void 0:Z.server_cert)||void 0,ssh_tunnel:!r()(null==Z?void 0:Z.ssh_tunnel)&&pt?{...Z.ssh_tunnel,server_port:Number(Z.ssh_tunnel.server_port)}:void 0};xe(!0),(0,I.xx)(n,(t=>{xe(!1),e(t)}),(e=>{xe(!1),t(e)}))},testInProgress:fe,children:[(0,N.tZ)(ht,{dbModel:Ct,db:Z,changeMethods:{onParametersChange:kt},clearValidationErrors:Nt}),pt&&Vt()]}),(Gt=(null==Z?void 0:Z.backend)||(null==Z?void 0:Z.engine),void 0!==(null==F||null==(ea=F.databases)||null==(ta=ea.find((e=>e.backend===Gt||e.engine===Gt)))?void 0:ta.parameters)&&!ft&&(0,N.BX)("div",{css:e=>ee(e),children:[(0,N.tZ)(v.Z,{buttonStyle:"link",onClick:()=>x({type:ot.ConfigMethodChange,payload:{database_name:null==Z?void 0:Z.database_name,configuration_method:B.DynamicForm,engine:null==Z?void 0:Z.engine}}),css:e=>(e=>H.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding: ${8*e.gridUnit}px 0 0;
  margin-left: 0px;
`)(e),children:(0,d.t)("Connect this database using the dynamic form instead")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database."),viewBox:"0 -6 24 24"})]}))]}):Yt(),!ft&&(0,N.tZ)(ie,{children:(0,N.tZ)(g.Z,{closable:!1,css:e=>le(e),message:(0,d.t)("Additional fields may be required"),showIcon:!0,description:(0,N.BX)(N.HY,{children:[(0,d.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,N.tZ)("a",{href:Oe,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description",children:(0,d.t)("here")}),"."]}),type:"info"})}),xt&&Jt()]},"1"),(0,N.tZ)(u.ZP.TabPane,{tab:(0,N.tZ)("span",{children:(0,d.t)("Advanced")}),children:(0,N.tZ)(Ce,{extraExtension:mt,db:Z,onInputChange:({target:e})=>$t(ot.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>$t(ot.TextChange,{name:e.name,value:e.value}),onEditorChange:e=>$t(ot.EditorChange,e),onExtraInputChange:({target:e})=>{$t(ot.ExtraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>{$t(ot.ExtraEditorChange,e)}})},"2")]})]}):(0,N.BX)(b.default,{css:e=>[G,ne(e),re(e),oe(e)],name:"database",onHandledPrimaryAction:Lt,onHide:Et,primaryButtonName:V?(0,d.t)("Finish"):(0,d.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,N.tZ)("h4",{children:(0,d.t)("Connect a database")}),footer:Ht(),maskClosable:!1,children:[!be&&V?(0,N.BX)(N.HY,{children:[(0,N.tZ)(He,{isLoading:be,isEditMode:ft,useSqlAlchemyForm:_t,hasConnectedDb:V,db:Z,dbName:se,dbModel:Ct,editNewDb:ce}),Q&&(0,N.BX)(dt,{children:[(0,N.tZ)(v.Z,{buttonStyle:"secondary",onClick:()=>{ve(!0),Kt(),Tt("/dataset/add/")},children:(0,d.t)("CREATE DATASET")}),(0,N.tZ)(v.Z,{buttonStyle:"secondary",onClick:()=>{ve(!0),Kt(),Tt("/sqllab?db=true")},children:(0,d.t)("QUERY DATA IN SQL LAB")})]}),ce?Yt():(0,N.tZ)(Ce,{extraExtension:mt,db:Z,onInputChange:({target:e})=>$t(ot.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>$t(ot.TextChange,{name:e.name,value:e.value}),onEditorChange:e=>$t(ot.EditorChange,e),onExtraInputChange:({target:e})=>{$t(ot.ExtraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>$t(ot.ExtraEditorChange,e)})]}):(0,N.tZ)(N.HY,{children:!be&&(Z?(0,N.BX)(N.HY,{children:[(0,N.tZ)(He,{isLoading:be,isEditMode:ft,useSqlAlchemyForm:_t,hasConnectedDb:V,db:Z,dbName:se,dbModel:Ct}),yt&&(()=>{var e,t,a,n,l;const{hostname:i}=window.location;let r=(null==vt||null==(e=vt.REGIONAL_IPS)?void 0:e.default)||"";const o=(null==vt?void 0:vt.REGIONAL_IPS)||{};return Object.entries(o).forEach((([e,t])=>{const a=new RegExp(e);i.match(a)&&(r=t)})),(null==Z?void 0:Z.engine)&&(0,N.tZ)(ie,{children:(0,N.tZ)(g.Z,{closable:!1,css:e=>le(e),type:"info",showIcon:!0,message:(null==(t=nt[Z.engine])?void 0:t.message)||(null==vt||null==(a=vt.DEFAULT)?void 0:a.message),description:(null==(n=nt[Z.engine])?void 0:n.description)||(null==vt||null==(l=vt.DEFAULT)?void 0:l.description)+r})})})(),Yt(),(0,N.tZ)("div",{css:e=>ee(e),children:Ct.engine!==P.GSheet&&(0,N.BX)(N.HY,{children:[(0,N.tZ)(v.Z,{buttonStyle:"link",onClick:()=>x({type:ot.ConfigMethodChange,payload:{engine:Z.engine,configuration_method:B.SqlalchemyUri,database_name:Z.database_name}}),css:ue,children:(0,d.t)("Connect this database with a SQLAlchemy URI string instead")}),(0,N.tZ)(M.Z,{tooltip:(0,d.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually."),viewBox:"0 -6 24 24"})]})}),xt&&Jt()]}):(0,N.BX)(ye,{children:[(0,N.tZ)(He,{isLoading:be,isEditMode:ft,useSqlAlchemyForm:_t,hasConnectedDb:V,db:Z,dbName:se,dbModel:Ct}),(0,N.tZ)("div",{className:"preferred",children:null==F||null==(Wt=F.databases)?void 0:Wt.filter((e=>e.preferred)).map((e=>(0,N.tZ)(U,{className:"preferred-item",onClick:()=>It(e.name),buttonText:e.name,icon:null==bt?void 0:bt[e.engine]},`${e.name}`)))}),(()=>{var e,t;return(0,N.BX)("div",{className:"available",children:[(0,N.tZ)("h4",{className:"available-label",children:(0,d.t)("Or choose from a list of other databases we support:")}),(0,N.tZ)("div",{className:"control-label",children:(0,d.t)("Supported databases")}),(0,N.BX)(m.IZ,{className:"available-select",onChange:It,placeholder:(0,d.t)("Choose a database..."),showSearch:!0,children:[null==(e=[...(null==F?void 0:F.databases)||[]])?void 0:e.sort(((e,t)=>e.name.localeCompare(t.name))).map(((e,t)=>(0,N.tZ)(m.IZ.Option,{value:e.name,children:e.name},`database-${t}`))),(0,N.tZ)(m.IZ.Option,{value:"Other",children:(0,d.t)("Other")},"Other")]}),(0,N.tZ)(g.Z,{showIcon:!0,closable:!1,css:e=>le(e),type:"info",message:(null==vt||null==(t=vt.ADD_DATABASE)?void 0:t.message)||(0,d.t)("Want to add a new database?"),description:null!=vt&&vt.ADD_DATABASE?(0,N.BX)(N.HY,{children:[(0,d.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,N.tZ)("a",{href:null==vt?void 0:vt.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer",children:null==vt?void 0:vt.ADD_DATABASE.contact_description_link})," ",null==vt?void 0:vt.ADD_DATABASE.description]}):(0,N.BX)(N.HY,{children:[(0,d.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,N.tZ)("a",{href:Oe,target:"_blank",rel:"noopener noreferrer",children:(0,d.t)("here")}),"."]})})]})})(),(0,N.tZ)(we,{children:(0,N.tZ)(m.gq,{name:"databaseFile",id:"databaseFile",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:async e=>{ze(""),Je([]),Ve([]),Qe([]),Ge([]),Ne({}),Ee({}),Xe({}),Be({}),Re(!0),Ae([{...e.file,status:"done"}]),e.file.originFileObj instanceof File&&await At(e.file.originFileObj,Se,ke,Te,Ue,Pe)&&(null==a||a())},onRemove:e=>(Ae(qe.filter((t=>t.uid!==e.uid))),!1),children:(0,N.tZ)(v.Z,{buttonStyle:"link",type:"link",css:me,children:(0,d.t)("Import database from file")})})}),zt()]}))}),be&&(0,N.tZ)(R.Z,{})]});var Wt,Gt,ea,ta}))},493628:(e,t,a)=>{a.d(t,{Z:()=>O});var n=a(667294),l=a(431069),i=a(844818),r=a(61988),o=a(774069),s=a(835932),d=a(112441),c=a(843700),h=a(104715),p=a(484391),u=a(9875),m=a(115926),g=a.n(m),b=a(414114),v=a(49238),f=a(751995),y=a(211965);const _=(0,f.iK)(v.xJ)`
  ${({theme:e})=>y.iv`
    flex: 1;
    margin-top: 0;
    margin-bottom: ${2.5*e.gridUnit}px;
  }
  `}
`,Z=f.iK.div`
  display: flex;
  align-items: center;
  margin-top: 0;
`,x=y.iv`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,w=e=>y.iv`
  .switch-label {
    color: ${e.colors.grayscale.base};
    margin-left: ${4*e.gridUnit}px;
  }
`,C=e=>y.iv`
  .ant-modal-header {
    padding: ${4.5*e.gridUnit}px ${4*e.gridUnit}px
      ${4*e.gridUnit}px;
  }

  .ant-modal-close-x .close {
    color: ${e.colors.grayscale.dark1};
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.gridUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.gridUnit}px;
  }

  .info-solid-small {
    vertical-align: bottom;
  }
`;var S=a(465477),$=a(135944);const N=f.iK.div`
  //margin-top: 10px;
  //margin-bottom: 10px;
`,k=({columns:e,maxColumnsToShow:t=4})=>{const a=e.map((e=>({name:e})));return(0,$.BX)(N,{children:[(0,$.tZ)(h.ZT.Text,{type:"secondary",children:"Columns:"}),0===e.length?(0,$.tZ)("p",{className:"help-block",children:(0,r.t)("Upload file to preview columns")}):(0,$.tZ)(S.Z,{tags:a,maxTags:t})]})};var E=a(608272);const T=({label:e,tip:t,children:a,name:n,rules:l})=>(0,$.tZ)(_,{label:(0,$.BX)("div",{children:[e,(0,$.tZ)(E.Z,{tooltip:t})]}),name:n,rules:l,children:a}),X=["delimiter","skip_initial_space","skip_blank_lines","day_first","column_data_types","column_dates","decimal_character","null_values","index_column","header_row","rows_to_read","skip_rows"],U=["sheet_name","column_dates","decimal_character","null_values","index_column","header_row","rows_to_read","skip_rows"],B=[],P=["rows_to_read","index_column"],M=[...X,...U,...B],D={csv:X,excel:U,columnar:B},q=(e,t)=>D[t].includes(e),A={table_name:"",schema:"",sheet_name:void 0,delimiter:",",already_exists:"fail",skip_initial_space:!1,skip_blank_lines:!1,day_first:!1,decimal_character:".",null_values:[],header_row:"0",rows_to_read:null,skip_rows:"0",column_dates:[],index_column:null,dataframe_index:!1,index_label:"",columns_read:[],column_data_types:""},L={csv:".csv, .tsv",excel:".xls, .xlsx",columnar:".parquet, .zip"},I=({label:e,dataTest:t,children:a,...n})=>(0,$.BX)(Z,{children:[(0,$.tZ)(d.r,{...n}),(0,$.tZ)("div",{className:"switch-label",children:e}),a]}),O=(0,b.ZP)((({addDangerToast:e,addSuccessToast:t,onHide:a,show:d,allowedExtensions:m,type:b="csv"})=>{const[v]=h.qz.useForm(),[f,Z]=(0,n.useState)(0),[S,N]=(0,n.useState)([]),[E,X]=(0,n.useState)([]),[U,B]=(0,n.useState)([]),[O,R]=(0,n.useState)([]),[H,F]=(0,n.useState)(","),[z,j]=(0,n.useState)(!1),[J,K]=(0,n.useState)(),[V,Y]=(0,n.useState)(!1),[Q,W]=(0,n.useState)(!0),[G,ee]=(0,n.useState)(!1),te={csv:"/api/v1/database/csv_metadata/",excel:"/api/v1/database/excel_metadata/",columnar:"/api/v1/database/columnar_metadata/"},ae=(0,n.useMemo)((()=>(e="",t,a)=>{const n=g().encode_uri({filters:[{col:"allow_file_upload",opr:"eq",value:!0}],page:t,page_size:a});return l.Z.get({endpoint:`/api/v1/database/?q=${n}`}).then((e=>({data:e.json.result.map((e=>({value:e.id,label:e.database_name}))),totalCount:e.json.count})))}),[]),ne=(0,n.useMemo)((()=>(e="",t,a)=>f?l.Z.get({endpoint:`/api/v1/database/${f}/schemas/`}).then((e=>({data:e.json.result.map((e=>({value:e,label:e}))),totalCount:e.json.count}))):Promise.resolve({data:[],totalCount:0})),[f]),le=t=>{const a=v.getFieldsValue(),n={...A,...a},r=new FormData;return r.append("file",t),"csv"===b&&r.append("delimiter",n.delimiter),ee(!0),l.Z.post({endpoint:te[b],body:r,headers:{Accept:"application/json"}}).then((e=>{const{items:t}=e.json.result;if(t&&"excel"!==b)X(t[0].column_names);else{const{allSheetNames:e,sheetColumnNamesMap:a}=t.reduce(((e,t)=>(e.allSheetNames.push(t.sheet_name),e.sheetColumnNamesMap[t.sheet_name]=t.column_names,e)),{allSheetNames:[],sheetColumnNamesMap:{}});X(t[0].column_names),B(e),v.setFieldsValue({sheet_name:e[0]}),R(a)}})).catch((t=>(0,i.O$)(t).then((t=>{e(t.error||"Error"),X([]),v.setFieldsValue({sheet_name:void 0}),B([])})))).finally((()=>{ee(!1)}))},ie=()=>{N([]),X([]),K(""),Z(0),B([]),j(!1),F(","),W(!0),ee(!1),R([]),v.resetFields(),a()},re=()=>E.map((e=>({value:e,label:e})));(0,n.useEffect)((()=>{if(E.length>0&&S[0].originFileObj&&S[0].originFileObj instanceof File){if(!Q)return;le(S[0].originFileObj).then((e=>e))}}),[H]);const oe={csv:(0,r.t)("CSV Upload"),excel:(0,r.t)("Excel Upload"),columnar:(0,r.t)("Columnar Upload")};return(0,$.tZ)(o.default,{css:e=>[x,C(e),w(e)],primaryButtonLoading:z,name:"database",onHandledPrimaryAction:v.submit,onHide:ie,width:"500px",primaryButtonName:"Upload",centered:!0,show:d,title:(0,$.tZ)((()=>{const e=oe[b]||(0,r.t)("Upload");return(0,$.tZ)("h4",{children:e})}),{}),children:(0,$.tZ)(h.qz,{form:v,onFinish:()=>{var a;const n=v.getFieldsValue();delete n.database,n.schema=J;const o={...A,...n},s=new FormData,d=null==(a=S[0])?void 0:a.originFileObj;d&&s.append("file",d),((e,t)=>{const a=(()=>{const e=D[b]||[];return[...M].filter((t=>!e.includes(t)))})();Object.entries(t).forEach((([t,n])=>{a.includes(t)||P.includes(t)&&null==n||e.append(t,n)}))})(s,o),j(!0);const c=(h=f,{csv:`/api/v1/database/${h}/csv_upload/`,excel:`/api/v1/database/${h}/excel_upload/`,columnar:`/api/v1/database/${h}/columnar_upload/`})[b];var h;return l.Z.post({endpoint:c,body:s,headers:{Accept:"application/json"}}).then((()=>{t((0,r.t)("Data Imported")),j(!1),ie()})).catch((t=>(0,i.O$)(t).then((t=>{e(t.error||"Error")})))).finally((()=>{j(!1)}))},layout:"vertical",initialValues:A,children:(0,$.BX)(c.Z,{expandIconPosition:"right",accordion:!0,defaultActiveKey:"general",css:e=>(e=>y.iv`
  .ant-collapse-header {
    padding-top: ${3.5*e.gridUnit}px;
    padding-bottom: ${2.5*e.gridUnit}px;
    .anticon.ant-collapse-arrow {
      top: calc(50% - ${6}px);
    }
    .helper {
      color: ${e.colors.grayscale.base};
      font-size: ${e.typography.sizes.s}px;
    }
  }
  h4 {
    font-size: ${e.typography.sizes.l}px;
    margin-top: 0;
    margin-bottom: ${e.gridUnit}px;
  }
  p.helper {
    margin-bottom: 0;
    padding: 0;
  }
`)(e),children:[(0,$.BX)(c.Z.Panel,{header:(0,$.BX)("div",{children:[(0,$.tZ)("h4",{children:(0,r.t)("General information")}),(0,$.tZ)("p",{className:"helper",children:(0,r.t)("Upload a file to a database.")})]}),children:[(0,$.BX)(h.X2,{children:[(0,$.tZ)(h.JX,{span:12,children:(0,$.tZ)(_,{label:(0,r.t)("%(type)s File",{type:b}),name:"file",required:!0,rules:[{validator:(e,t)=>0===S.length?Promise.reject((0,r.t)("Uploading a file is required")):((e,t)=>{const a=e.name.match(/.+\.([^.]+)$/);if(!a)return!1;const n=a[1];return t.includes(n)})(S[0],m)?Promise.resolve():Promise.reject((0,r.t)("Upload a file with a valid extension. Valid: [%s]",m.join(",")))}],children:(0,$.tZ)(h.gq,{name:"modelFile",id:"modelFile",accept:L[b],fileList:S,onChange:async e=>{N([{...e.file,status:"done"}]),Q&&await le(e.file.originFileObj)},onRemove:e=>(N(S.filter((t=>t.uid!==e.uid))),X([]),B([]),v.setFieldsValue({sheet_name:void 0}),!1),customRequest:()=>{},children:(0,$.tZ)(s.Z,{"aria-label":(0,r.t)("Select"),icon:(0,$.tZ)(p.Z,{}),loading:G,children:(0,r.t)("Select")})})})}),(0,$.tZ)(h.JX,{span:12,children:(0,$.tZ)(_,{children:(0,$.tZ)(I,{label:(0,r.t)("Preview uploaded file"),dataTest:"previewUploadedFile",onChange:e=>{W(e)},checked:Q})})})]}),Q&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(k,{columns:E})})}),(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(_,{label:(0,r.t)("Database"),required:!0,name:"database",rules:[{validator:(e,t)=>f?Promise.resolve():Promise.reject((0,r.t)("Selecting a database is required"))}],children:(0,$.tZ)(h.qb,{ariaLabel:(0,r.t)("Select a database"),options:ae,onChange:e=>{Z(null==e?void 0:e.value),K(void 0),v.setFieldsValue({schema:void 0})},allowClear:!0,placeholder:(0,r.t)("Select a database to upload the file to")})})})}),(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(_,{label:(0,r.t)("Schema"),name:"schema",children:(0,$.tZ)(h.qb,{ariaLabel:(0,r.t)("Select a schema"),options:ne,onChange:e=>{K(null==e?void 0:e.value)},allowClear:!0,placeholder:(0,r.t)("Select a schema if the database supports this")})})})}),(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(_,{label:(0,r.t)("Table Name"),name:"table_name",required:!0,rules:[{required:!0,message:"Table name is required"}],children:(0,$.tZ)(u.II,{"aria-label":(0,r.t)("Table Name"),name:"table_name",type:"text",placeholder:(0,r.t)("Name of table to be created")})})})}),q("delimiter",b)&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(T,{label:(0,r.t)("Delimiter"),tip:(0,r.t)("Select a delimiter for this data"),name:"delimiter",children:(0,$.tZ)(h.Ph,{ariaLabel:(0,r.t)("Choose a delimiter"),options:[{value:",",label:'Comma ","'},{value:";",label:'Semicolon ";"'},{value:"\t",label:'Tab "\\t"'},{value:"|",label:"Pipe"}],onChange:e=>{F(e)},allowNewOptions:!0})})})}),q("sheet_name",b)&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(_,{label:(0,r.t)("Sheet name"),name:"sheet_name",children:(0,$.tZ)(h.Ph,{ariaLabel:(0,r.t)("Choose sheet name"),options:U.map((e=>({value:e,label:e}))),onChange:e=>{var t;X(null!=(t=O[e])?t:[])},allowNewOptions:!0,placeholder:(0,r.t)("Select a sheet name from the uploaded file")})})})})]},"general"),(0,$.BX)(c.Z.Panel,{header:(0,$.BX)("div",{children:[(0,$.tZ)("h4",{children:(0,r.t)("File Settings")}),(0,$.tZ)("p",{className:"helper",children:(0,r.t)("Adjust how spaces, blank lines, null values are handled and other file wide settings.")})]}),children:[(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(T,{label:(0,r.t)("If Table Already Exists"),tip:(0,r.t)("What should happen if the table already exists"),name:"already_exists",children:(0,$.tZ)(h.Ph,{ariaLabel:(0,r.t)("Choose already exists"),options:[{value:"fail",label:"Fail"},{value:"replace",label:"Replace"},{value:"append",label:"Append"}],onChange:()=>{}})})})}),q("column_dates",b)&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(_,{label:(0,r.t)("Columns To Be Parsed as Dates"),name:"column_dates",children:(0,$.tZ)(h.Ph,{ariaLabel:(0,r.t)("Choose columns to be parsed as dates"),mode:"multiple",options:re(),allowClear:!0,allowNewOptions:!0,placeholder:(0,r.t)("A comma separated list of columns that should be parsed as dates")})})})}),q("decimal_character",b)&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(T,{label:(0,r.t)("Decimal Character"),tip:(0,r.t)("Character to interpret as decimal point"),name:"decimal_character",children:(0,$.tZ)(u.II,{type:"text"})})})}),q("null_values",b)&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(T,{label:(0,r.t)("Null Values"),tip:(0,r.t)("Choose values that should be treated as null. Warning: Hive database supports only a single value"),name:"null_values",children:(0,$.tZ)(h.Ph,{mode:"multiple",options:[{value:'""',label:'Empty Strings ""'},{value:"None",label:"None"},{value:"nan",label:"nan"},{value:"null",label:"null"},{value:"N/A",label:"N/A"}],allowClear:!0,allowNewOptions:!0})})})}),q("skip_initial_space",b)&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(_,{name:"skip_initial_space",children:(0,$.tZ)(I,{label:(0,r.t)("Skip spaces after delimiter"),dataTest:"skipInitialSpace"})})})}),q("skip_blank_lines",b)&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(_,{name:"skip_blank_lines",children:(0,$.tZ)(I,{label:(0,r.t)("Skip blank lines rather than interpreting them as Not A Number values"),dataTest:"skipBlankLines"})})})}),q("day_first",b)&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(_,{name:"day_first",children:(0,$.tZ)(I,{label:(0,r.t)("DD/MM format dates, international and European format"),dataTest:"dayFirst"})})})})]},"2"),(0,$.BX)(c.Z.Panel,{header:(0,$.BX)("div",{children:[(0,$.tZ)("h4",{children:(0,r.t)("Columns")}),(0,$.tZ)("p",{className:"helper",children:(0,r.t)("Adjust column settings such as specifying the columns to read, how duplicates are handled, column data types, and more.")})]}),children:[(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(_,{label:(0,r.t)("Columns To Read"),name:"columns_read",children:(0,$.tZ)(h.Ph,{ariaLabel:(0,r.t)("Choose columns to read"),mode:"multiple",options:re(),allowClear:!0,allowNewOptions:!0,placeholder:(0,r.t)("List of the column names that should be read")})})})}),q("column_data_types",b)&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(T,{label:(0,r.t)("Column Data Types"),tip:(0,r.t)('A dictionary with column names and their data types if you need to change the defaults. Example: {"user_id":"int"}. Check Python\'s Pandas library for supported data types.'),name:"column_data_types",children:(0,$.tZ)(u.II,{"aria-label":(0,r.t)("Column data types"),type:"text"})})})}),(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(_,{name:"dataframe_index",children:(0,$.tZ)(I,{label:(0,r.t)("Create dataframe index"),dataTest:"dataFrameIndex",onChange:Y})})})}),V&&q("index_column",b)&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(T,{label:(0,r.t)("Index Column"),tip:(0,r.t)("Column to use as the index of the dataframe. If None is given, Index label is used."),name:"index_column",children:(0,$.tZ)(h.Ph,{ariaLabel:(0,r.t)("Choose index column"),options:E.map((e=>({value:e,label:e}))),allowClear:!0,allowNewOptions:!0})})})}),V&&(0,$.tZ)(h.X2,{children:(0,$.tZ)(h.JX,{span:24,children:(0,$.tZ)(T,{label:(0,r.t)("Index Label"),tip:(0,r.t)("Label for the index column. Don't use an existing column name."),name:"index_label",children:(0,$.tZ)(u.II,{"aria-label":(0,r.t)("Index label"),type:"text"})})})})]},"3"),q("header_row",b)&&q("rows_to_read",b)&&q("skip_rows",b)&&(0,$.tZ)(c.Z.Panel,{header:(0,$.BX)("div",{children:[(0,$.tZ)("h4",{children:(0,r.t)("Rows")}),(0,$.tZ)("p",{className:"helper",children:(0,r.t)("Set header rows and the number of rows to read or skip.")})]}),children:(0,$.BX)(h.X2,{children:[(0,$.tZ)(h.JX,{span:8,children:(0,$.tZ)(T,{label:(0,r.t)("Header Row"),tip:(0,r.t)("Row containing the headers to use as column names (0 is first line of data)."),name:"header_row",rules:[{required:!0,message:"Header row is required"}],children:(0,$.tZ)(u.Rn,{"aria-label":(0,r.t)("Header row"),type:"text",min:0})})}),(0,$.tZ)(h.JX,{span:8,children:(0,$.tZ)(T,{label:(0,r.t)("Rows to Read"),tip:(0,r.t)("Number of rows of file to read. Leave empty (default) to read all rows"),name:"rows_to_read",children:(0,$.tZ)(u.Rn,{"aria-label":(0,r.t)("Rows to read"),min:1})})}),(0,$.tZ)(h.JX,{span:8,children:(0,$.tZ)(T,{label:(0,r.t)("Skip Rows"),tip:(0,r.t)("Number of rows to skip at start of file."),name:"skip_rows",rules:[{required:!0,message:"Skip rows is required"}],children:(0,$.tZ)(u.Rn,{"aria-label":(0,r.t)("Skip rows"),min:0})})})]})},"4")]})})})}))},849041:(e,t,a)=>{a.d(t,{Z:()=>ie});var n=a(23279),l=a.n(n),i=a(667294),r=a(751995),o=a(211965),s=a(23525),d=a(104715),c=a(683862),h=a(358593),p=a(616550),u=a(473727),m=a(685931),g=a(313322),b=a(229147),v=a(427600),f=a(441609),y=a.n(f),_=a(115926),Z=a.n(_),x=a(828216),w=a(535755),C=a(175049),S=a(61988),$=a(431069),N=a(737921),k=a(212617),E=a(922318),T=a(719235),X=a(493628),U=a(440768),B=a(135944);const P=({version:e="unknownVersion",sha:t="unknownSHA",build:a="unknownBuild"})=>{const n=`https://apachesuperset.gateway.scarf.sh/pixel/0d3461e1-abb1-4691-a0aa-5ed50de66af0/${e}/${t}/${a}`;return(0,B.tZ)("img",{referrerPolicy:"no-referrer-when-downgrade",src:n,width:0,height:0,alt:""})},{SubMenu:M}=c.MainNav,D=r.iK.div`
  display: flex;
  align-items: center;

  & i {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  & a {
    display: block;
    width: 150px;
    word-wrap: break-word;
    text-decoration: none;
  }
`,q=r.iK.i`
  margin-top: 2px;
`;function A(e){const{locale:t,languages:a,...n}=e;return(0,B.tZ)(M,{"aria-label":"Languages",title:(0,B.tZ)("div",{className:"f16",children:(0,B.tZ)(q,{className:`flag ${a[t].flag}`})}),icon:(0,B.tZ)(g.Z.TriangleDown,{}),...n,children:Object.keys(a).map((e=>(0,B.tZ)(c.MainNav.Item,{style:{whiteSpace:"normal",height:"auto"},children:(0,B.BX)(D,{className:"f16",children:[(0,B.tZ)("i",{className:`flag ${a[e].flag}`}),(0,B.tZ)("a",{href:a[e].url,children:a[e].name})]})},e)))})}var L=a(839589);const I=(0,C.I)(),O=e=>o.iv`
  padding: ${1.5*e.gridUnit}px ${4*e.gridUnit}px
    ${4*e.gridUnit}px ${7*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
  font-size: ${e.typography.sizes.xs}px;
  white-space: nowrap;
`,R=r.iK.div`
  color: ${({theme:e})=>e.colors.primary.dark1};
`,H=e=>o.iv`
  color: ${e.colors.grayscale.light1};
  .ant-menu-item-active {
    color: ${e.colors.grayscale.light1};
    cursor: default;
  }
`,F=r.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({align:e})=>e};
  align-items: center;
  margin-right: ${({theme:e})=>e.gridUnit}px;
  .ant-menu-submenu-title > svg {
    top: ${({theme:e})=>5.25*e.gridUnit}px;
  }
`,z=r.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,j=r.iK.a`
  padding-right: ${({theme:e})=>e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
`,J=e=>o.iv`
  color: ${e.colors.grayscale.light5};
`,K=e=>o.iv`
  &:hover {
    color: ${e.colors.primary.base} !important;
    cursor: pointer !important;
  }
`,{SubMenu:V}=c.MainNav,Y=({align:e,settings:t,navbarRight:a,isFrontendRoute:n,environmentTag:l,setQuery:s})=>{const d=(0,x.v9)((e=>e.user)),p=(0,x.v9)((e=>{var t;return null==(t=e.dashboardInfo)?void 0:t.id})),m=d||{},{roles:b}=m,{CSV_EXTENSIONS:v,COLUMNAR_EXTENSIONS:f,EXCEL_EXTENSIONS:_,ALLOWED_EXTENSIONS:w,HAS_GSHEETS_INSTALLED:C}=(0,x.v9)((e=>e.common.conf)),[M,D]=(0,i.useState)(!1),[q,Y]=(0,i.useState)(!1),[Q,W]=(0,i.useState)(!1),[G,ee]=(0,i.useState)(!1),[te,ae]=(0,i.useState)(""),ne=(0,k.R)("can_sqllab","Superset",b),le=(0,k.R)("can_write","Dashboard",b),ie=(0,k.R)("can_write","Chart",b),re=(0,k.R)("can_write","Database",b),oe=(0,k.R)("can_write","Dataset",b),{canUploadData:se,canUploadCSV:de,canUploadColumnar:ce,canUploadExcel:he}=(0,U.Mc)(b,v,f,_,w),pe=ne||ie||le,[ue,me]=(0,i.useState)(!1),[ge,be]=(0,i.useState)(!1),ve=(0,E.i5)(d),fe=ue||ve,ye=[{label:(0,S.t)("Data"),icon:"fa-database",childs:[{label:(0,S.t)("Connect database"),name:L.Z.DbConnection,perm:re&&!ge},{label:(0,S.t)("Create dataset"),name:L.Z.DatasetCreation,url:"/dataset/add/",perm:oe&&ge},{label:(0,S.t)("Connect Google Sheet"),name:L.Z.GoogleSheets,perm:re&&C},{label:(0,S.t)("Upload CSV to database"),name:L.Z.CSVUpload,perm:de&&fe,disable:ve&&!ue},{label:(0,S.t)("Upload Excel to database"),name:L.Z.ExcelUpload,perm:he&&fe,disable:ve&&!ue},{label:(0,S.t)("Upload Columnar file to database"),name:L.Z.ColumnarUpload,perm:ce&&fe,disable:ve&&!ue}]},{label:(0,S.t)("SQL query"),url:"/sqllab?new=true",icon:"fa-fw fa-search",perm:"can_sqllab",view:"Superset"},{label:(0,S.t)("Chart"),url:Number.isInteger(p)?`/chart/add?dashboard_id=${p}`:"/chart/add",icon:"fa-fw fa-bar-chart",perm:"can_write",view:"Chart"},{label:(0,S.t)("Dashboard"),url:"/dashboard/new",icon:"fa-fw fa-dashboard",perm:"can_write",view:"Dashboard"}],_e=()=>{$.Z.get({endpoint:`/api/v1/database/?q=${Z().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((({json:e})=>{var t;const a=(null==e||null==(t=e.result)?void 0:t.filter((e=>{var t;return null==e||null==(t=e.engine_information)?void 0:t.supports_file_upload})))||[];me((null==a?void 0:a.length)>=1)}))},Ze=()=>{$.Z.get({endpoint:`/api/v1/database/?q=${Z().encode({filters:[{col:"database_name",opr:"neq",value:"examples"}]})}`}).then((({json:e})=>{be(e.count>=1)}))};(0,i.useEffect)((()=>{se&&_e()}),[se]),(0,i.useEffect)((()=>{(re||oe)&&Ze()}),[re,oe]);const xe=e=>(0,B.BX)(B.HY,{children:[(0,B.tZ)("i",{className:`fa ${e.icon}`}),e.label]}),we=(0,S.t)("Enable 'Allow file uploads to database' in any database's settings"),Ce=e=>e.disable?(0,B.tZ)(c.MainNav.Item,{css:H,disabled:!0,children:(0,B.tZ)(h.u,{placement:"top",title:we,children:e.label})},e.name):(0,B.tZ)(c.MainNav.Item,{css:K,children:e.url?(0,B.BX)("a",{href:e.url,children:[" ",e.label," "]}):e.label},e.name),Se=I.get("navbar.right"),$e=I.get("navbar.right-menu.item.icon"),Ne=(0,r.Fg)();return(0,B.BX)(F,{align:e,children:[re&&(0,B.tZ)(T.ZP,{onHide:()=>{ae(""),D(!1)},show:M,dbEngine:te,onDatabaseAdd:()=>s({databaseAdded:!0})}),de&&(0,B.tZ)(X.Z,{onHide:()=>Y(!1),show:q,allowedExtensions:v,type:"csv"}),he&&(0,B.tZ)(X.Z,{onHide:()=>W(!1),show:Q,allowedExtensions:_,type:"excel"}),ce&&(0,B.tZ)(X.Z,{onHide:()=>ee(!1),show:G,allowedExtensions:f,type:"columnar"}),(null==l?void 0:l.text)&&(0,B.tZ)(N.Z,{css:(0,o.iv)({borderRadius:125*Ne.gridUnit+"px"},"",""),color:/^#(?:[0-9a-f]{3}){1,2}$/i.test(l.color)?l.color:l.color.split(".").reduce(((e,t)=>e[t]),Ne.colors),children:(0,B.tZ)("span",{css:J,children:l.text})}),(0,B.BX)(c.MainNav,{selectable:!1,mode:"horizontal",onClick:e=>{e.key===L.Z.DbConnection?D(!0):e.key===L.Z.GoogleSheets?(D(!0),ae("Google Sheets")):e.key===L.Z.CSVUpload?Y(!0):e.key===L.Z.ExcelUpload?W(!0):e.key===L.Z.ColumnarUpload&&ee(!0)},onOpenChange:e=>(e.length>1&&!y()(null==e?void 0:e.filter((e=>{var t;return e.includes(`sub2_${null==ye||null==(t=ye[0])?void 0:t.label}`)})))&&(se&&_e(),(re||oe)&&Ze()),null),children:[Se&&(0,B.tZ)(Se,{}),!a.user_is_anonymous&&pe&&(0,B.tZ)(V,{title:(0,B.tZ)(R,{className:"fa fa-plus"}),icon:(0,B.tZ)(g.Z.TriangleDown,{}),children:null==ye||null==ye.map?void 0:ye.map((e=>{var t;const a=null==(t=e.childs)?void 0:t.some((e=>"object"==typeof e&&!!e.perm));if(e.childs){var l;if(a)return(0,B.tZ)(V,{className:"data-menu",title:xe(e),children:null==e||null==(l=e.childs)||null==l.map?void 0:l.map(((e,t)=>"string"!=typeof e&&e.name&&e.perm?(0,B.BX)(i.Fragment,{children:[3===t&&(0,B.tZ)(c.MainNav.Divider,{}),Ce(e)]},e.name):null))},`sub2_${e.label}`);if(!e.url)return null}return(0,k.R)(e.perm,e.view,b)&&(0,B.tZ)(c.MainNav.Item,{children:n(e.url)?(0,B.BX)(u.rU,{to:e.url||"",children:[(0,B.tZ)("i",{className:`fa ${e.icon}`})," ",e.label]}):(0,B.BX)("a",{href:e.url,children:[(0,B.tZ)("i",{className:`fa ${e.icon}`})," ",e.label]})},e.label)}))}),(0,B.BX)(V,{title:(0,S.t)("Settings"),icon:(0,B.tZ)(g.Z.TriangleDown,{iconSize:"xl"}),children:[null==t||null==t.map?void 0:t.map(((e,a)=>{var l;return[(0,B.tZ)(c.MainNav.ItemGroup,{title:e.label,children:null==e||null==(l=e.childs)||null==l.map?void 0:l.map((e=>{if("string"!=typeof e){const t=$e?(0,B.BX)(z,{children:[e.label,(0,B.tZ)($e,{menuChild:e})]}):e.label;return(0,B.tZ)(c.MainNav.Item,{children:n(e.url)?(0,B.tZ)(u.rU,{to:e.url||"",children:t}):(0,B.tZ)("a",{href:e.url,children:t})},`${e.label}`)}return null}))},`${e.label}`),a<t.length-1&&(0,B.tZ)(c.MainNav.Divider,{},`divider_${a}`)]})),!a.user_is_anonymous&&[(0,B.tZ)(c.MainNav.Divider,{},"user-divider"),(0,B.BX)(c.MainNav.ItemGroup,{title:(0,S.t)("User"),children:[a.user_info_url&&(0,B.tZ)(c.MainNav.Item,{children:(0,B.tZ)("a",{href:a.user_info_url,children:(0,S.t)("Info")})},"info"),(0,B.tZ)(c.MainNav.Item,{onClick:()=>{localStorage.removeItem("redux")},children:(0,B.tZ)("a",{href:a.user_logout_url,children:(0,S.t)("Logout")})},"logout")]},"user-section")],(a.version_string||a.version_sha)&&[(0,B.tZ)(c.MainNav.Divider,{},"version-info-divider"),(0,B.tZ)(c.MainNav.ItemGroup,{title:(0,S.t)("About"),children:(0,B.BX)("div",{className:"about-section",children:[a.show_watermark&&(0,B.tZ)("div",{css:O,children:(0,S.t)("Powered by Apache Superset")}),a.version_string&&(0,B.BX)("div",{css:O,children:[(0,S.t)("Version"),": ",a.version_string]}),a.version_sha&&(0,B.BX)("div",{css:O,children:[(0,S.t)("SHA"),": ",a.version_sha]}),a.build_number&&(0,B.BX)("div",{css:O,children:[(0,S.t)("Build"),": ",a.build_number]})]})},"about-section")]]}),a.show_language_picker&&(0,B.tZ)(A,{locale:a.locale,languages:a.languages})]}),a.documentation_url&&(0,B.BX)(B.HY,{children:[(0,B.tZ)(j,{href:a.documentation_url,target:"_blank",rel:"noreferrer",title:a.documentation_text||(0,S.t)("Documentation"),children:a.documentation_icon?(0,B.tZ)("i",{className:a.documentation_icon}):(0,B.tZ)("i",{className:"fa fa-question"})}),(0,B.tZ)("span",{children:" "})]}),a.bug_report_url&&(0,B.BX)(B.HY,{children:[(0,B.tZ)(j,{href:a.bug_report_url,target:"_blank",rel:"noreferrer",title:a.bug_report_text||(0,S.t)("Report a bug"),children:a.bug_report_icon?(0,B.tZ)("i",{className:a.bug_report_icon}):(0,B.tZ)("i",{className:"fa fa-bug"})}),(0,B.tZ)("span",{children:" "})]}),a.user_is_anonymous&&(0,B.BX)(j,{href:a.user_login_url,children:[(0,B.tZ)("i",{className:"fa fa-fw fa-sign-in"}),(0,S.t)("Login")]}),(0,B.tZ)(P,{version:a.version_string,sha:a.version_sha,build:a.build_number})]})},Q=e=>{const[,t]=(0,w.Kx)({databaseAdded:w.dJ,datasetAdded:w.dJ});return(0,B.tZ)(Y,{setQuery:t,...e})};class W extends i.PureComponent{constructor(...e){super(...e),this.state={hasError:!1},this.noop=()=>{}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,B.tZ)(Y,{setQuery:this.noop,...this.props}):this.props.children}}const G=e=>(0,B.tZ)(W,{...e,children:(0,B.tZ)(Q,{...e})}),ee=r.iK.header`
  ${({theme:e})=>`\n      background-color: ${e.colors.grayscale.light5};\n      margin-bottom: 2px;\n      z-index: 10;\n\n      &:nth-last-of-type(2) nav {\n        margin-bottom: 2px;\n      }\n      .caret {\n        display: none;\n      }\n      .navbar-brand {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        /* must be exactly the height of the Antd navbar */\n        min-height: 50px;\n        padding: ${e.gridUnit}px\n          ${2*e.gridUnit}px\n          ${e.gridUnit}px\n          ${4*e.gridUnit}px;\n        max-width: ${e.gridUnit*e.brandIconMaxWidth}px;\n        img {\n          height: 100%;\n          object-fit: contain;\n        }\n        &:focus {\n          border-color: transparent;\n        }\n        &:focus-visible {\n          border-color: ${e.colors.primary.dark1};\n        }\n      }\n      .navbar-brand-text {\n        border-left: 1px solid ${e.colors.grayscale.light2};\n        border-right: 1px solid ${e.colors.grayscale.light2};\n        height: 100%;\n        color: ${e.colors.grayscale.dark1};\n        padding-left: ${4*e.gridUnit}px;\n        padding-right: ${4*e.gridUnit}px;\n        margin-right: ${6*e.gridUnit}px;\n        font-size: ${4*e.gridUnit}px;\n        float: left;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        span {\n          max-width: ${58*e.gridUnit}px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        @media (max-width: 1127px) {\n          display: none;\n        }\n      }\n      .main-nav .ant-menu-submenu-title > svg {\n        top: ${5.25*e.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .navbar-brand {\n          float: none;\n        }\n      }\n      .ant-menu-horizontal .ant-menu-item {\n        height: 100%;\n        line-height: inherit;\n      }\n      .ant-menu > .ant-menu-item > a {\n        padding: ${4*e.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .ant-menu-item {\n          padding: 0 ${6*e.gridUnit}px 0\n            ${3*e.gridUnit}px !important;\n        }\n        .ant-menu > .ant-menu-item > a {\n          padding: 0px;\n        }\n        .main-nav .ant-menu-submenu-title > svg:nth-of-type(1) {\n          display: none;\n        }\n        .ant-menu-item-active > a {\n          &:hover {\n            color: ${e.colors.primary.base} !important;\n            background-color: transparent !important;\n          }\n        }\n      }\n      .ant-menu-item a {\n        &:hover {\n          color: ${e.colors.grayscale.dark1};\n          background-color: ${e.colors.primary.light5};\n          border-bottom: none;\n          margin: 0;\n          &:after {\n            opacity: 1;\n            width: 100%;\n          }\n        }\n      }\n  `}
`,te=e=>o.iv`
  .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light.ant-menu-submenu-placement-bottomLeft {
    border-radius: 0px;
  }
  .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light {
    border-radius: 0px;
  }
  .ant-menu-vertical > .ant-menu-submenu.data-menu > .ant-menu-submenu-title {
    height: 28px;
    i {
      padding-right: ${2*e.gridUnit}px;
      margin-left: ${1.75*e.gridUnit}px;
    }
  }
  .ant-menu-item-selected {
    background-color: transparent;
    &:not(.ant-menu-item-active) {
      color: inherit;
      border-bottom-color: transparent;
      & > a {
        color: inherit;
      }
    }
  }
  .ant-menu-horizontal > .ant-menu-item:has(> .is-active) {
    color: ${e.colors.primary.base};
    border-bottom-color: ${e.colors.primary.base};
    & > a {
      color: ${e.colors.primary.base};
    }
  }
  .ant-menu-vertical > .ant-menu-item:has(> .is-active) {
    background-color: ${e.colors.primary.light5};
    & > a {
      color: ${e.colors.primary.base};
    }
  }
`,{SubMenu:ae}=c.MainNav,{useBreakpoint:ne}=d.Grid;function le({data:{menu:e,brand:t,navbar_right:a,settings:n,environment_tag:f},isFrontendRoute:y=(()=>!1)}){const[_,Z]=(0,i.useState)("horizontal"),x=ne(),w=(0,b.fG)(),C=(0,r.Fg)();let S;(0,i.useEffect)((()=>{function e(){window.innerWidth<=767?Z("inline"):Z("horizontal")}e();const t=l()((()=>e()),10);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),function(e){e.Explore="/explore",e.Dashboard="/dashboard",e.Chart="/chart",e.Datasets="/tablemodelview"}(S||(S={}));const $=[],[N,k]=(0,i.useState)($),E=(0,p.TH)();return(0,i.useEffect)((()=>{const e=E.pathname;switch(!0){case e.startsWith(S.Dashboard):k(["Dashboards"]);break;case e.startsWith(S.Chart)||e.startsWith(S.Explore):k(["Charts"]);break;case e.startsWith(S.Datasets):k(["Datasets"]);break;default:k($)}}),[E.pathname]),(0,s.eY)(v.KD.standalone)||w.hideNav?(0,B.tZ)(B.HY,{}):(0,B.BX)(ee,{className:"top",id:"main-menu",role:"navigation",children:[(0,B.tZ)(o.xB,{styles:te(C)}),(0,B.BX)(d.X2,{children:[(0,B.BX)(d.JX,{md:16,xs:24,children:[(0,B.tZ)(h.u,{id:"brand-tooltip",placement:"bottomLeft",title:t.tooltip,arrowPointAtCenter:!0,children:y(window.location.pathname)?(0,B.tZ)(m.m,{className:"navbar-brand",to:t.path,children:(0,B.tZ)("img",{src:t.icon,alt:t.alt})}):(0,B.tZ)("a",{className:"navbar-brand",href:t.path,tabIndex:-1,children:(0,B.tZ)("img",{src:t.icon,alt:t.alt})})}),t.text&&(0,B.tZ)("div",{className:"navbar-brand-text",children:(0,B.tZ)("span",{children:t.text})}),(0,B.tZ)(c.MainNav,{mode:_,className:"main-nav",selectedKeys:N,children:e.map(((e,t)=>{var a;return(({label:e,childs:t,url:a,index:n,isFrontendRoute:l})=>a&&l?(0,B.tZ)(c.MainNav.Item,{role:"presentation",children:(0,B.tZ)(u.OL,{role:"button",to:a,activeClassName:"is-active",children:e})},e):a?(0,B.tZ)(c.MainNav.Item,{children:(0,B.tZ)("a",{href:a,children:e})},e):(0,B.tZ)(ae,{title:e,icon:"inline"===_?(0,B.tZ)(B.HY,{}):(0,B.tZ)(g.Z.TriangleDown,{}),children:null==t?void 0:t.map(((t,a)=>"string"==typeof t&&"-"===t&&"Data"!==e?(0,B.tZ)(c.MainNav.Divider,{},`$${a}`):"string"!=typeof t?(0,B.tZ)(c.MainNav.Item,{children:t.isFrontendRoute?(0,B.tZ)(u.OL,{to:t.url||"",exact:!0,activeClassName:"is-active",children:t.label}):(0,B.tZ)("a",{href:t.url,children:t.label})},`${t.label}`):null))},n))({index:t,...e,isFrontendRoute:y(e.url),childs:null==(a=e.childs)?void 0:a.map((e=>"string"==typeof e?e:{...e,isFrontendRoute:y(e.url)}))})}))})]}),(0,B.tZ)(d.JX,{md:8,xs:24,children:(0,B.tZ)(G,{align:x.md?"flex-end":"flex-start",settings:n,navbarRight:a,isFrontendRoute:y,environmentTag:f})})]})]})}function ie({data:e,...t}){const a={...e},n={Data:!0,Security:!0,Manage:!0},l=[],i=[];return a.menu.forEach((e=>{if(!e)return;const t=[],a={...e};e.childs&&(e.childs.forEach((e=>{("string"==typeof e||e.label)&&t.push(e)})),a.childs=t),n.hasOwnProperty(e.name)?i.push(a):l.push(a)})),a.menu=l,a.settings=i,(0,B.tZ)(le,{data:a,...t})}},961337:(e,t,a)=>{var n;function l(e,t){try{const a=localStorage.getItem(e);return null===a?t:JSON.parse(a)}catch{return t}}function i(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function r(e,t){return l(e,t)}function o(e,t){i(e,t)}a.d(t,{I_:()=>i,LS:()=>o,OH:()=>l,dR:()=>n,rV:()=>r}),function(e){e.Database="db",e.ChartSplitSizes="chart_split_sizes",e.ControlsWidth="controls_width",e.DatasourceWidth="datasource_width",e.IsDatapanelOpen="is_datapanel_open",e.HomepageChartFilter="homepage_chart_filter",e.HomepageDashboardFilter="homepage_dashboard_filter",e.HomepageCollapseState="homepage_collapse_state",e.HomepageActivityFilter="homepage_activity_filter",e.DatasetnameSetSuccessful="datasetname_set_successful",e.SqllabIsAutocompleteEnabled="sqllab__is_autocomplete_enabled",e.SqllabIsRenderHtmlEnabled="sqllab__is_render_html_enabled",e.ExploreDataTableOriginalFormattedTimeColumns="explore__data_table_original_formatted_time_columns",e.DashboardCustomFilterBarWidths="dashboard__custom_filter_bar_widths",e.DashboardExploreContext="dashboard__explore_context",e.DashboardEditorShowOnlyMyCharts="dashboard__editor_show_only_my_charts",e.CommonResizableSidebarWidths="common__resizable_sidebar_widths"}(n||(n={}))}}]);
//# sourceMappingURL=9041.3a98d94239d6e96a9ce8.entry.js.map