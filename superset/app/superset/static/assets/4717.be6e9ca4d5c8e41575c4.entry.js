"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4717],{679789:(e,t,i)=>{i.d(t,{Z:()=>s});var l=i(751995),r=i(61988),n=i(313322),a=i(358593),o=i(135944);const s=function({certifiedBy:e,details:t,size:i="l"}){const s=(0,l.Fg)();return(0,o.tZ)(a.u,{id:"certified-details-tooltip",title:(0,o.BX)(o.HY,{children:[e&&(0,o.tZ)("div",{children:(0,o.tZ)("strong",{children:(0,r.t)("Certified by %s",e)})}),(0,o.tZ)("div",{children:t})]}),children:(0,o.tZ)(n.Z.Certified,{iconColor:s.colors.primary.base,iconSize:i})})}},513842:(e,t,i)=>{i.d(t,{dc:()=>a,lU:()=>n,zq:()=>o});var l=i(751995),r=i(135944);const n=()=>{const e=(0,l.Fg)();return(0,r.BX)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.tZ)("path",{d:"M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0Z",fill:e.colors.primary.base}),(0,r.tZ)("path",{d:"M7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z",fill:"white"})]})},a=()=>{const e=(0,l.Fg)();return(0,r.BX)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.tZ)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:e.colors.grayscale.light1}),(0,r.tZ)("path",{d:"M14 10H4V8H14V10Z",fill:"white"})]})},o=()=>{const e=(0,l.Fg)();return(0,r.BX)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.tZ)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:e.colors.grayscale.light2}),(0,r.tZ)("path",{d:"M16 2V16H2V2H16V2Z",fill:"white"})]})}},217198:(e,t,i)=>{i.d(t,{Z:()=>p});var l=i(751995),r=i(61988),n=i(667294),a=i(9875),o=i(774069),s=i(49238),c=i(135944);const d=l.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,h=l.iK.div`
  line-height: ${({theme:e})=>4*e.gridUnit}px;
  padding-top: 16px;
`;function p({description:e,onConfirm:t,onHide:i,open:l,title:p}){const[u,g]=(0,n.useState)(!0),[m,f]=(0,n.useState)(""),b=()=>{f(""),t()};return(0,c.BX)(o.default,{disablePrimaryButton:u,onHide:()=>{f(""),i()},onHandledPrimaryAction:b,primaryButtonName:(0,r.t)("Delete"),primaryButtonType:"danger",show:l,title:p,children:[(0,c.tZ)(h,{children:e}),(0,c.BX)(d,{children:[(0,c.tZ)(s.lX,{htmlFor:"delete",children:(0,r.t)('Type "%s" to confirm',(0,r.t)("DELETE"))}),(0,c.tZ)(a.II,{type:"text",id:"delete",autoComplete:"off",value:m,onChange:e=>{var t;const i=null!=(t=e.target.value)?t:"";g(i.toUpperCase()!==(0,r.t)("DELETE")),f(i)},onPressEnter:()=>{u||b()}})]})]})}},236674:(e,t,i)=>{i.d(t,{Z:()=>h});var l=i(667294),r=i(751995),n=i(211965),a=i(61988),o=i(358593),s=i(313322),c=i(135944);const d=r.iK.a`
  ${({theme:e})=>n.iv`
    font-size: ${e.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*e.gridUnit}px;
  `};
`,h=({itemId:e,isStarred:t,showTooltip:i,saveFaveStar:r,fetchFaveStar:n})=>{(0,l.useEffect)((()=>{null==n||n(e)}),[n,e]);const h=(0,l.useCallback)((i=>{i.preventDefault(),r(e,!!t)}),[t,e,r]),p=(0,c.tZ)(d,{href:"#",onClick:h,className:"fave-unfave-icon",role:"button",children:t?(0,c.tZ)(s.Z.FavoriteSelected,{}):(0,c.tZ)(s.Z.FavoriteUnselected,{})});return i?(0,c.tZ)(o.u,{id:"fave-unfave-tooltip",title:(0,a.t)("Click to favorite/unfavorite"),children:p}):p}},204144:(e,t,i)=>{i.d(t,{Z:()=>s});var l=i(667294),r=i(751995),n=i(68492),a=i(135944);const o=r.iK.div`
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center ${({position:e})=>e};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function s({src:e,fallback:t,isLoading:i,position:r,...s}){const[c,d]=(0,l.useState)(t);return(0,l.useEffect)((()=>(e&&fetch(e).then((e=>e.blob())).then((e=>{if(/image/.test(e.type)){const t=URL.createObjectURL(e);d(t)}})).catch((e=>{n.Z.error(e),d(t)})),()=>{d(t)})),[e,t]),(0,a.tZ)(o,{src:i?t:c,...s,position:r})}},601304:(e,t,i)=>{i.d(t,{Z:()=>o});var l=i(667294),r=i(774069),n=i(835932),a=i(135944);const o=(0,l.forwardRef)(((e,t)=>{const[i,o]=(0,l.useState)(!1),{beforeOpen:s=(()=>{}),onExit:c=(()=>{}),isButton:d=!1,resizable:h=!1,draggable:p=!1,className:u="",tooltip:g,modalFooter:m,triggerNode:f,destroyOnClose:b=!0,modalBody:v,draggableConfig:x={},resizableConfig:y={},modalTitle:F,responsive:C,width:Z,maxWidth:S}=e,k=()=>{o(!1),null==c||c()},w=e=>{e.preventDefault(),null==s||s(),o(!0)};return t&&(t.current={close:k,open:w,showModal:i}),(0,a.BX)(a.HY,{children:[d&&(0,a.tZ)(n.Z,{className:"modal-trigger",tooltip:g,onClick:w,children:f}),!d&&(0,a.tZ)("span",{onClick:w,role:"button",children:f}),(0,a.tZ)(r.default,{className:u,show:i,onHide:k,title:F,footer:m,hideFooter:!m,width:Z,maxWidth:S,responsive:C,resizable:h,resizableConfig:y,draggable:p,draggableConfig:x,destroyOnClose:b,children:v})]})}))},860718:(e,t,i)=>{i.d(t,{m:()=>p});var l=i(431069),r=i(61988),n=i(844818),a=i(115926),o=i.n(a),s=i(165108);const c=new Map,d=(0,s.g)(l.Z.get,c,(({endpoint:e})=>e||"")),h=e=>({value:e.id,label:e.name,key:e.id}),p=async(e,t,i)=>{const l="name",a=o().encode({filters:[{col:l,opr:"ct",value:e},{col:"type",opr:"custom_tag",value:!0}],page:t,page_size:i,order_column:l,order_direction:"asc"});return d({endpoint:`/api/v1/tag/?q=${a}`}).then((e=>({data:e.json.result.map(h),totalCount:e.json.count}))).catch((async e=>{const t=(({error:e,message:t})=>{let i=t||e||(0,r.t)("An error has occurred");return"Forbidden"===t&&(i=(0,r.t)("You do not have permission to read tags")),i})(await(0,n.O$)(e));throw new Error(t)}))}},720818:(e,t,i)=>{i.d(t,{Z:()=>R});var l=i(957557),r=i.n(l),n=i(667294),a=i(9875),o=i(49238),s=i(151127),c=i.n(s),d=i(835932),h=i(104715),p=i(115926),u=i.n(p),g=i(751995),m=i(61988),f=i(281545),b=i(844818),v=i(431069),x=i(355786),y=i(593185),F=i(774069),C=i(749140),Z=i(45697),S=i.n(Z),k=i(676787),w=i(135944);const $={onChange:S().func,labelMargin:S().number,colorScheme:S().string,hasCustomLabelsColor:S().bool};class N extends n.PureComponent{constructor(e){super(e),this.state={hovered:!1},this.categoricalSchemeRegistry=(0,f.Z)(),this.choices=this.categoricalSchemeRegistry.keys().map((e=>[e,e])),this.schemes=this.categoricalSchemeRegistry.getMap()}setHover(e){this.setState({hovered:e})}render(){const{colorScheme:e,labelMargin:t=0,hasCustomLabelsColor:i}=this.props;return(0,w.tZ)(k.Z,{description:(0,m.t)("Any color palette selected here will override the colors applied to this dashboard's individual charts"),labelMargin:t,name:"color_scheme",onChange:this.props.onChange,value:e,choices:this.choices,clearable:!0,schemes:this.schemes,hovered:this.state.hovered,hasCustomLabelsColor:i})}}N.propTypes=$,N.defaultProps={hasCustomLabelsColor:!1,colorScheme:void 0,onChange:()=>{}};const I=N;var T=i(968084),U=i(414114),X=i(848273),E=i(860718),B=i(999547),O=i(83379);const _=(0,g.iK)(o.xJ)`
  margin-bottom: 0;
`,M=(0,g.iK)(C.Ad)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
`;var j={name:"1blj7km",styles:"margin-top:1em"};const R=(0,U.ZP)((({addSuccessToast:e,addDangerToast:t,colorScheme:i,dashboardId:l,dashboardInfo:s,dashboardTitle:p,onHide:g=(()=>{}),onlyApply:Z=!1,onSubmit:S=(()=>{}),show:k=!1})=>{const[$]=h.qz.useForm(),[N,U]=(0,n.useState)(!1),[R,L]=(0,n.useState)(!1),[z,A]=(0,n.useState)(i),[H,q]=(0,n.useState)(""),[D,J]=(0,n.useState)(),[K,V]=(0,n.useState)([]),[P,Y]=(0,n.useState)([]),W=Z?(0,m.t)("Apply"):(0,m.t)("Save"),[Q,G]=(0,n.useState)([]),ee=(0,f.Z)(),te=(0,n.useMemo)((()=>Q.map((e=>({value:e.id,label:e.name})))),[Q.length]),ie=async e=>{const{error:t,statusText:i,message:l}=await(0,b.O$)(e);let r=t||i||(0,m.t)("An error has occurred");"object"==typeof l&&"json_metadata"in l?r=l.json_metadata:"string"==typeof l&&(r=l,"Forbidden"===l&&(r=(0,m.t)("You do not have permission to edit this dashboard"))),F.default.error({title:(0,m.t)("Error"),content:r,okButtonProps:{danger:!0,className:"btn-danger"}})},le=(0,n.useCallback)(((e="owners",t="",i,l)=>{const r=u().encode({filter:t,page:i,page_size:l});return v.Z.get({endpoint:`/api/v1/dashboard/related/${e}?q=${r}`}).then((e=>({data:e.json.result.filter((e=>void 0===e.extra.active||e.extra.active)).map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),re=(0,n.useCallback)((e=>{const{id:t,dashboard_title:i,slug:l,certified_by:n,certification_details:a,owners:o,roles:s,metadata:d,is_managed_externally:h}=e,p={id:t,title:i,slug:l||"",certifiedBy:n||"",certificationDetails:a||"",isManagedExternally:h||!1};$.setFieldsValue(p),J(p),V(o),Y(s),A(d.color_scheme);const u=r()(d,["positions","shared_label_colors","color_scheme_domain"]);q(u?c()(u):"")}),[$]),ne=(0,n.useCallback)((()=>{U(!0),v.Z.get({endpoint:`/api/v1/dashboard/${l}`}).then((e=>{var t;const i=e.json.result,l=null!=(t=i.json_metadata)&&t.length?JSON.parse(i.json_metadata):{};re({...i,metadata:l}),U(!1)}),ie)}),[l,re]),ae=()=>{try{return null!=H&&H.length?JSON.parse(H):{}}catch(e){return{}}},oe=e=>{const t=(0,x.Z)(e).map((e=>({id:e.value,full_name:e.label})));V(t)},se=e=>{const t=(0,x.Z)(e).map((e=>({id:e.value,name:e.label})));Y(t)},ce=()=>(K||[]).map((e=>({value:e.id,label:(0,O.Z)(e)}))),de=(e="",{updateMetadata:t=!0}={})=>{const i=ee.keys(),l=ae();if(e&&!i.includes(e))throw F.default.error({title:(0,m.t)("Error"),content:(0,m.t)("A valid color scheme is required"),okButtonProps:{danger:!0,className:"btn-danger"}}),new Error("A valid color scheme is required");t&&(l.color_scheme=e,l.label_colors=l.label_colors||{},q(c()(l))),A(e)};return(0,n.useEffect)((()=>{k&&(s?re(s):ne()),C.Ad.preload()}),[s,ne,re,k]),(0,n.useEffect)((()=>{p&&D&&D.title!==p&&$.setFieldsValue({...D,title:p})}),[D,p,$]),(0,n.useEffect)((()=>{if((0,y.cr)(y.TT.TaggingSystem))try{(0,X.$3)({objectType:X.g.DASHBOARD,objectId:l,includeTypes:!1},(e=>G(e)),(e=>{t(`Error fetching tags: ${e.text}`)}))}catch(e){ie(e)}}),[l]),(0,w.tZ)(F.default,{show:k,onHide:g,title:(0,m.t)("Dashboard properties"),footer:(0,w.BX)(w.HY,{children:[(0,w.tZ)(d.Z,{htmlType:"button",buttonSize:"small",onClick:g,cta:!0,children:(0,m.t)("Cancel")}),(0,w.tZ)(d.Z,{onClick:$.submit,buttonSize:"small",buttonStyle:"primary",className:"m-r-5",cta:!0,disabled:null==D?void 0:D.isManagedExternally,tooltip:null!=D&&D.isManagedExternally?(0,m.t)("This dashboard is managed externally, and can't be edited in Superset"):"",children:W})]}),responsive:!0,children:(0,w.BX)(h.qz,{form:$,onFinish:()=>{var i,r,n,a;const{title:o,slug:s,certifiedBy:d,certificationDetails:h}=$.getFieldsValue();let p,u=z,f=H;try{if(!f.startsWith("{")||!f.endsWith("}"))throw new Error;p=JSON.parse(f)}catch(e){return void t((0,m.t)("JSON metadata is invalid!"))}const b={...p},x=(0,B.UY)(null==(i=p)?void 0:i.color_namespace);u=(null==(r=p)?void 0:r.color_scheme)||z,null!=(n=p)&&n.shared_label_colors&&delete p.shared_label_colors,null!=(a=p)&&a.color_scheme_domain&&delete p.color_scheme_domain,(0,B.$C)(b,!0),f=c()(p),de(u,{updateMetadata:!1});const F={},C={};(0,y.cr)(y.TT.DashboardRbac)&&(F.roles=P,C.roles=(P||[]).map((e=>e.id))),(0,y.cr)(y.TT.TaggingSystem)&&(C.tags=Q.map((e=>e.id)));const k={id:l,title:o,slug:s,jsonMetadata:f,owners:K,colorScheme:u,colorNamespace:x,certifiedBy:d,certificationDetails:h,...F};Z?(S(k),g(),e((0,m.t)("Dashboard properties updated"))):v.Z.put({endpoint:`/api/v1/dashboard/${l}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({dashboard_title:o,slug:s||null,json_metadata:f||null,owners:(K||[]).map((e=>e.id)),certified_by:d||null,certification_details:d&&h?h:null,...C})}).then((()=>{S(k),g(),e((0,m.t)("The dashboard has been saved"))}),ie)},layout:"vertical",initialValues:D,children:[(0,w.tZ)(h.X2,{children:(0,w.tZ)(h.JX,{xs:24,md:24,children:(0,w.tZ)("h3",{children:(0,m.t)("Basic information")})})}),(0,w.BX)(h.X2,{gutter:16,children:[(0,w.tZ)(h.JX,{xs:24,md:12,children:(0,w.tZ)(o.xJ,{label:(0,m.t)("Name"),name:"title",children:(0,w.tZ)(a.II,{type:"text",disabled:N})})}),(0,w.BX)(h.JX,{xs:24,md:12,children:[(0,w.tZ)(_,{label:(0,m.t)("URL slug"),name:"slug",children:(0,w.tZ)(a.II,{type:"text",disabled:N})}),(0,w.tZ)("p",{className:"help-block",children:(0,m.t)("A readable URL for your dashboard")})]})]}),(0,y.cr)(y.TT.DashboardRbac)?(()=>{const e=ae(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,w.BX)(w.HY,{children:[(0,w.tZ)(h.X2,{children:(0,w.tZ)(h.JX,{xs:24,md:24,children:(0,w.tZ)("h3",{style:{marginTop:"1em"},children:(0,m.t)("Access")})})}),(0,w.BX)(h.X2,{gutter:16,children:[(0,w.BX)(h.JX,{xs:24,md:12,children:[(0,w.tZ)(_,{label:(0,m.t)("Owners"),children:(0,w.tZ)(h.qb,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,m.t)("Owners"),disabled:N,mode:"multiple",onChange:oe,options:(e,t,i)=>le("owners",e,t,i),value:ce()})}),(0,w.tZ)("p",{className:"help-block",children:(0,m.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username.")})]}),(0,w.BX)(h.JX,{xs:24,md:12,children:[(0,w.tZ)(_,{label:(0,m.t)("Roles"),children:(0,w.tZ)(h.qb,{allowClear:!0,ariaLabel:(0,m.t)("Roles"),disabled:N,mode:"multiple",onChange:se,options:(e,t,i)=>le("roles",e,t,i),value:(P||[]).map((e=>({value:e.id,label:`${e.name}`})))})}),(0,w.tZ)("p",{className:"help-block",children:(0,m.t)("Roles is a list which defines access to the dashboard. Granting a role access to a dashboard will bypass dataset level checks. If no roles are defined, regular access permissions apply.")})]})]}),(0,w.tZ)(h.X2,{children:(0,w.tZ)(h.JX,{xs:24,md:12,children:(0,w.tZ)(I,{hasCustomLabelsColor:t,onChange:de,colorScheme:z,labelMargin:4})})})]})})():(()=>{const e=ae(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,w.BX)(h.X2,{gutter:16,children:[(0,w.BX)(h.JX,{xs:24,md:12,children:[(0,w.tZ)("h3",{style:{marginTop:"1em"},children:(0,m.t)("Access")}),(0,w.tZ)(_,{label:(0,m.t)("Owners"),children:(0,w.tZ)(h.qb,{allowClear:!0,ariaLabel:(0,m.t)("Owners"),disabled:N,mode:"multiple",onChange:oe,options:(e,t,i)=>le("owners",e,t,i),value:ce()})}),(0,w.tZ)("p",{className:"help-block",children:(0,m.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username.")})]}),(0,w.BX)(h.JX,{xs:24,md:12,children:[(0,w.tZ)("h3",{style:{marginTop:"1em"},children:(0,m.t)("Colors")}),(0,w.tZ)(I,{hasCustomLabelsColor:t,onChange:de,colorScheme:z,labelMargin:4})]})]})})(),(0,w.tZ)(h.X2,{children:(0,w.tZ)(h.JX,{xs:24,md:24,children:(0,w.tZ)("h3",{children:(0,m.t)("Certification")})})}),(0,w.BX)(h.X2,{gutter:16,children:[(0,w.BX)(h.JX,{xs:24,md:12,children:[(0,w.tZ)(_,{label:(0,m.t)("Certified by"),name:"certifiedBy",children:(0,w.tZ)(a.II,{type:"text",disabled:N})}),(0,w.tZ)("p",{className:"help-block",children:(0,m.t)("Person or group that has certified this dashboard.")})]}),(0,w.BX)(h.JX,{xs:24,md:12,children:[(0,w.tZ)(_,{label:(0,m.t)("Certification details"),name:"certificationDetails",children:(0,w.tZ)(a.II,{type:"text",disabled:N})}),(0,w.tZ)("p",{className:"help-block",children:(0,m.t)("Any additional detail to show in the certification tooltip.")})]})]}),(0,y.cr)(y.TT.TaggingSystem)?(0,w.tZ)(h.X2,{gutter:16,children:(0,w.tZ)(h.JX,{xs:24,md:12,children:(0,w.tZ)("h3",{css:j,children:(0,m.t)("Tags")})})}):null,(0,y.cr)(y.TT.TaggingSystem)?(0,w.tZ)(h.X2,{gutter:16,children:(0,w.BX)(h.JX,{xs:24,md:12,children:[(0,w.tZ)(_,{children:(0,w.tZ)(h.qb,{ariaLabel:"Tags",mode:"multiple",value:te,options:E.m,onChange:e=>{const t=(0,x.Z)(e).map((e=>({id:e.value,name:e.label})));G(t)},allowClear:!0})}),(0,w.tZ)("p",{className:"help-block",children:(0,m.t)("A list of tags that have been applied to this chart.")})]})}):null,(0,w.tZ)(h.X2,{children:(0,w.BX)(h.JX,{xs:24,md:24,children:[(0,w.tZ)("h3",{style:{marginTop:"1em"},children:(0,w.BX)(d.Z,{buttonStyle:"link",onClick:()=>L(!R),children:[(0,w.tZ)("i",{className:"fa fa-angle-"+(R?"down":"right"),style:{minWidth:"1em"}}),(0,m.t)("Advanced")]})}),R&&(0,w.BX)(w.HY,{children:[(0,w.tZ)(_,{label:(0,m.t)("JSON metadata"),children:(0,w.tZ)(M,{showLoadingForImport:!0,name:"json_metadata",value:H,onChange:q,tabSize:2,width:"100%",height:"200px",wrapEnabled:!0})}),(0,w.BX)("p",{className:"help-block",children:[(0,m.t)("This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters."),Z&&(0,w.BX)(w.HY,{children:[" ",(0,m.t)('Please DO NOT overwrite the "filter_scopes" key.')," ",(0,w.tZ)(T.Z,{triggerNode:(0,w.tZ)("span",{className:"alert-link",children:(0,m.t)('Use "%(menuName)s" menu instead.',{menuName:(0,m.t)("Set filter mapping")})})})]})]})]})]})})]})})}))},968084:(e,t,i)=>{i.d(t,{Z:()=>fe});var l=i(667294),r=i(751995),n=i(601304),a=i(828216),o=i(14890),s=i(781395),c=i(909467),d=i(45697),h=i.n(d),p=i(693967),u=i.n(p),g=i(835932),m=i(211965),f=i(61988),b=i(441609),v=i.n(b),x=i(680621),y=i(81255);const F=[y.gn,y.U0];function C({currentNode:e={},components:t={},filterFields:i=[],selectedChartId:l}){if(!e)return null;const{type:r}=e;if(y.dW===r&&e&&e.meta&&e.meta.chartId)return{value:e.meta.chartId,label:e.meta.sliceName||`${r} ${e.meta.chartId}`,type:r,showCheckbox:l!==e.meta.chartId,children:[]};let n=[];if(e.children&&e.children.length&&e.children.forEach((e=>{const r=C({currentNode:t[e],components:t,filterFields:i,selectedChartId:l}),a=t[e].type;F.includes(a)?n.push(r):n=n.concat(r)})),F.includes(r)){let t=null;return t=r===y.U0?(0,f.t)("All charts"):e.meta&&e.meta.text?e.meta.text:`${r} ${e.id}`,{value:e.id,label:t,type:r,children:n}}return n}function Z({components:e={},filterFields:t=[],selectedChartId:i}){return v()(e)?[]:[{...C({currentNode:e[x._4],components:e,filterFields:t,selectedChartId:i})}]}function S(e=[],t=-1){const i=[],l=(e,r)=>{e&&e.children&&(-1===t||r<t)&&(i.push(e.value),e.children.forEach((e=>l(e,r+1))))};return e.length>0&&e.forEach((e=>{l(e,0)})),i}var k=i(309679);function w({activeFilterField:e,checkedFilterFields:t}){return(0,k.o)(e?[e]:t)}var $=i(820194);function N({activeFilterField:e,checkedFilterFields:t}){if(e)return(0,$._)(e).chartId;if(t.length){const{chartId:e}=(0,$._)(t[0]);return t.some((t=>(0,$._)(t).chartId!==e))?null:e}return null}function I({checkedFilterFields:e=[],activeFilterField:t,filterScopeMap:i={},layout:l={}}){const r=w({checkedFilterFields:e,activeFilterField:t}),n=t?[t]:e,a=Z({components:l,filterFields:n,selectedChartId:N({checkedFilterFields:e,activeFilterField:t})}),o=new Set;n.forEach((e=>{(i[e].checked||[]).forEach((t=>{o.add(`${t}:${e}`)}))}));const s=[...o],c=i[r]?i[r].expanded:S(a,1);return{[r]:{nodes:a,nodesFiltered:[...a],checked:s,expanded:c}}}var T=i(594654),U=i.n(T),X=i(283927),E=i.n(X),B=i(958809),O=i.n(B),_=i(108816),M=i.n(_);function j({tabScopes:e,parentNodeValue:t,forceAggregate:i=!1,hasChartSiblings:l=!1,tabChildren:r=[],immuneChartSiblings:n=[]}){if(i||!l&&Object.entries(e).every((([e,{scope:t}])=>t&&t.length&&e===t[0]))){const i=function({tabs:e=[],tabsInScope:t=[]}){const i=[];return e.forEach((({value:e,children:l})=>{l&&!t.includes(e)&&l.forEach((({value:e,children:l})=>{l&&!t.includes(e)&&i.push(...l.filter((({type:e})=>e===y.dW)))}))})),i.map((({value:e})=>e))}({tabs:r,tabsInScope:U()(e,(({scope:e})=>e))}),l=U()(Object.values(e),(({immune:e})=>e));return{scope:[t],immune:[...new Set([...i,...l])]}}const a=Object.values(e).filter((({scope:e})=>e&&e.length));return{scope:U()(a,(({scope:e})=>e)),immune:a.length?U()(a,(({immune:e})=>e)):U()(Object.values(e),(({immune:e})=>e)).concat(n)}}function R({currentNode:e={},filterId:t,checkedChartIds:i=[]}){if(!e)return{};const{value:l,children:r}=e,n=r.filter((({type:e})=>e===y.dW)),a=r.filter((({type:e})=>e===y.gn)),o=n.filter((({value:e})=>t!==e&&!i.includes(e))).map((({value:e})=>e)),s=M()(O()((e=>e.value)),E()((e=>R({currentNode:e,filterId:t,checkedChartIds:i}))))(a);if(!v()(n)&&n.some((({value:e})=>i.includes(e)))){if(v()(a))return{scope:[l],immune:o};const{scope:e,immune:t}=j({tabScopes:s,parentNodeValue:l,forceAggregate:!0,tabChildren:a});return{scope:e,immune:o.concat(t)}}return a.length?j({tabScopes:s,parentNodeValue:l,hasChartSiblings:!v()(n),tabChildren:a,immuneChartSiblings:o}):{scope:[],immune:o}}function L({filterKey:e,nodes:t=[],checkedChartIds:i=[]}){if(t.length){const{chartId:l}=(0,$._)(e);return R({currentNode:t[0],filterId:l,checkedChartIds:i})}return{}}var z=i(643399),A=i(602275),H=i(228388),q=i.n(H),D=i(313322),J=i(135944);const K=(0,r.iK)(D.Z.BarChartOutlined)`
  ${({theme:e})=>`\n    position: relative;\n    top: ${e.gridUnit-1}px;\n    color: ${e.colors.primary.base};\n    margin-right: ${2*e.gridUnit}px;\n  `}
`;function V({currentNode:e={},selectedChartId:t}){if(!e)return null;const{label:i,value:l,type:r,children:n}=e;if(n&&n.length){const a=n.map((e=>V({currentNode:e,selectedChartId:t})));return{...e,label:(0,J.BX)("span",{className:u()(`filter-scope-type ${r.toLowerCase()}`,{"selected-filter":t===l}),children:[r===y.dW&&(0,J.tZ)(K,{}),i]}),children:a}}return{...e,label:(0,J.tZ)("span",{className:u()(`filter-scope-type ${r.toLowerCase()}`,{"selected-filter":t===l}),children:i})}}function P({nodes:e,selectedChartId:t}){return e?e.map((e=>V({currentNode:e,selectedChartId:t}))):[]}var Y=i(513842);const W={check:(0,J.tZ)(Y.lU,{}),uncheck:(0,J.tZ)(Y.zq,{}),halfCheck:(0,J.tZ)(Y.dc,{}),expandClose:(0,J.tZ)("span",{className:"rct-icon rct-icon-expand-close"}),expandOpen:(0,J.tZ)("span",{className:"rct-icon rct-icon-expand-open"}),expandAll:(0,J.tZ)("span",{className:"rct-icon rct-icon-expand-all",children:(0,f.t)("Expand all")}),collapseAll:(0,J.tZ)("span",{className:"rct-icon rct-icon-collapse-all",children:(0,f.t)("Collapse all")}),parentClose:(0,J.tZ)("span",{className:"rct-icon rct-icon-parent-close"}),parentOpen:(0,J.tZ)("span",{className:"rct-icon rct-icon-parent-open"}),leaf:(0,J.tZ)("span",{className:"rct-icon rct-icon-leaf"})},Q={nodes:h().arrayOf(A.ck).isRequired,checked:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,expanded:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,onCheck:h().func.isRequired,onExpand:h().func.isRequired,selectedChartId:h().number},G=()=>{};function ee({nodes:e=[],checked:t=[],expanded:i=[],onCheck:l,onExpand:r,selectedChartId:n}){return(0,J.tZ)(q(),{showExpandAll:!0,expandOnClick:!0,showNodeIcon:!1,nodes:P({nodes:e,selectedChartId:n}),checked:t,expanded:i,onCheck:l,onExpand:r,onClick:G,icons:W})}ee.propTypes=Q,ee.defaultProps={selectedChartId:null};var te=i(49238);const ie={label:h().string.isRequired,isSelected:h().bool.isRequired};function le({label:e,isSelected:t}){return(0,J.tZ)("span",{className:u()("filter-field-item filter-container",{"is-selected":t}),children:(0,J.tZ)(te.lX,{htmlFor:e,children:e})})}function re({nodes:e,activeKey:t}){if(!e)return[];const i=e[0],l=i.children.map((e=>({...e,children:e.children.map((e=>{const{label:i,value:l}=e;return{...e,label:(0,J.tZ)(le,{isSelected:l===t,label:i})}}))})));return[{...i,label:(0,J.tZ)("span",{className:"root",children:i.label}),children:l}]}le.propTypes=ie;const ne={activeKey:h().string,nodes:h().arrayOf(A.ck).isRequired,checked:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,expanded:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,onCheck:h().func.isRequired,onExpand:h().func.isRequired,onClick:h().func.isRequired};function ae({activeKey:e,nodes:t=[],checked:i=[],expanded:l=[],onClick:r,onCheck:n,onExpand:a}){return(0,J.tZ)(q(),{showExpandAll:!0,showNodeIcon:!1,expandOnClick:!0,nodes:re({nodes:t,activeKey:e}),checked:i,expanded:l,onClick:r,onCheck:n,onExpand:a,icons:W})}ae.propTypes=ne,ae.defaultProps={activeKey:null};const oe={dashboardFilters:h().objectOf(A.Er).isRequired,layout:h().object.isRequired,updateDashboardFiltersScope:h().func.isRequired,setUnsavedChanges:h().func.isRequired,onCloseModal:h().func.isRequired},se=r.iK.div`
  ${({theme:e})=>m.iv`
    display: flex;
    flex-direction: column;
    height: 80%;
    margin-right: ${-6*e.gridUnit}px;
    font-size: ${e.typography.sizes.m}px;

    & .nav.nav-tabs {
      border: none;
    }

    & .filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*e.gridUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }

    & .warning-message {
      padding: ${6*e.gridUnit}px;
    }
  `}
`,ce=r.iK.div`
  ${({theme:e})=>m.iv`
    &.filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*e.gridUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }
  `}
`,de=r.iK.div`
  ${({theme:e})=>m.iv`
    height: ${16*e.gridUnit}px;
    border-bottom: 1px solid ${e.colors.grayscale.light2};
    padding-left: ${6*e.gridUnit}px;
    margin-left: ${-6*e.gridUnit}px;

    h4 {
      margin-top: 0;
    }

    .selected-fields {
      margin: ${3*e.gridUnit}px 0 ${4*e.gridUnit}px;
      visibility: hidden;

      &.multi-edit-mode {
        visibility: visible;
      }

      .selected-scopes {
        padding-left: ${e.gridUnit}px;
      }
    }
  `}
`,he=r.iK.div`
  ${({theme:e})=>m.iv`
    &.filters-scope-selector {
      display: flex;
      flex-direction: row;
      position: relative;
      height: 100%;

      a,
      a:active,
      a:hover {
        color: inherit;
        text-decoration: none;
      }

      .react-checkbox-tree .rct-icon.rct-icon-expand-all,
      .react-checkbox-tree .rct-icon.rct-icon-collapse-all {
        font-family: ${e.typography.families.sansSerif};
        font-size: ${e.typography.sizes.m}px;
        color: ${e.colors.primary.base};

        &::before {
          content: '';
        }

        &:hover {
          text-decoration: underline;
        }

        &:focus {
          outline: none;
        }
      }

      .filter-field-pane {
        position: relative;
        width: 40%;
        padding: ${4*e.gridUnit}px;
        padding-left: 0;
        border-right: 1px solid ${e.colors.grayscale.light2};

        .filter-container label {
          font-weight: ${e.typography.weights.normal};
          margin: 0 0 0 ${4*e.gridUnit}px;
          word-break: break-all;
        }

        .filter-field-item {
          height: ${9*e.gridUnit}px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 ${6*e.gridUnit}px;
          margin-left: ${-6*e.gridUnit}px;

          &.is-selected {
            border: 1px solid ${e.colors.text.label};
            border-radius: ${e.borderRadius}px;
            background-color: ${e.colors.grayscale.light4};
            margin-left: ${-6*e.gridUnit}px;
          }
        }

        .react-checkbox-tree {
          .rct-title .root {
            font-weight: ${e.typography.weights.bold};
          }

          .rct-text {
            height: ${10*e.gridUnit}px;
          }
        }
      }

      .filter-scope-pane {
        position: relative;
        flex: 1;
        padding: ${4*e.gridUnit}px;
        padding-right: ${6*e.gridUnit}px;
      }

      .react-checkbox-tree {
        flex-direction: column;
        color: ${e.colors.grayscale.dark1};
        font-size: ${e.typography.sizes.m}px;

        .filter-scope-type {
          padding: ${2*e.gridUnit}px 0;
          display: flex;
          align-items: center;

          &.chart {
            font-weight: ${e.typography.weights.normal};
          }

          &.selected-filter {
            padding-left: ${7*e.gridUnit}px;
            position: relative;
            color: ${e.colors.text.label};

            &::before {
              content: ' ';
              position: absolute;
              left: 0;
              top: 50%;
              width: ${4*e.gridUnit}px;
              height: ${4*e.gridUnit}px;
              border-radius: ${e.borderRadius}px;
              margin-top: ${-2*e.gridUnit}px;
              box-shadow: inset 0 0 0 2px ${e.colors.grayscale.light2};
              background: ${e.colors.grayscale.light3};
            }
          }

          &.root {
            font-weight: ${e.typography.weights.bold};
          }
        }

        .rct-checkbox {
          svg {
            position: relative;
            top: 3px;
            width: ${4.5*e.gridUnit}px;
          }
        }

        .rct-node-leaf {
          .rct-bare-label {
            &::before {
              padding-left: ${e.gridUnit}px;
            }
          }
        }

        .rct-options {
          text-align: left;
          margin-left: 0;
          margin-bottom: ${2*e.gridUnit}px;
        }

        .rct-text {
          margin: 0;
          display: flex;
        }

        .rct-title {
          display: block;
        }

        // disable style from react-checkbox-trees.css
        .rct-node-clickable:hover,
        .rct-node-clickable:focus,
        label:hover,
        label:active {
          background: none !important;
        }
      }

      .multi-edit-mode {
        .filter-field-item {
          padding: 0 ${4*e.gridUnit}px 0 ${12*e.gridUnit}px;
          margin-left: ${-12*e.gridUnit}px;

          &.is-selected {
            margin-left: ${-13*e.gridUnit}px;
          }
        }
      }

      .scope-search {
        position: absolute;
        right: ${4*e.gridUnit}px;
        top: ${4*e.gridUnit}px;
        border-radius: ${e.borderRadius}px;
        border: 1px solid ${e.colors.grayscale.light2};
        padding: ${e.gridUnit}px ${2*e.gridUnit}px;
        font-size: ${e.typography.sizes.m}px;
        outline: none;

        &:focus {
          border: 1px solid ${e.colors.primary.base};
        }
      }
    }
  `}
`,pe=r.iK.div`
  ${({theme:e})=>`\n    height: ${16*e.gridUnit}px;\n\n    border-top: ${e.gridUnit/4}px solid ${e.colors.primary.light3};\n    padding: ${6*e.gridUnit}px;\n    margin: 0 0 0 ${6*-e.gridUnit}px;\n    text-align: right;\n\n    .btn {\n      margin-right: ${4*e.gridUnit}px;\n\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  `}
`;class ue extends l.PureComponent{constructor(e){super(e);const{dashboardFilters:t,layout:i}=e;if(Object.keys(t).length>0){const e=function({dashboardFilters:e={}}){const t=Object.values(e).map((e=>{const{chartId:t,filterName:i,columns:l,labels:r}=e,n=Object.keys(l).map((e=>({value:(0,$.w)({chartId:t,column:e}),label:r[e]||e})));return{value:t,label:i,children:n,showCheckbox:!0}}));return[{value:x.dU,type:y.U0,label:(0,f.t)("All filters"),children:t}]}({dashboardFilters:t}),l=e[0].children;this.allfilterFields=[],l.forEach((({children:e})=>{e.forEach((e=>{this.allfilterFields.push(e.value)}))})),this.defaultFilterKey=l[0].children[0].value;const r=Object.values(t).reduce(((e,{chartId:l,columns:r})=>({...e,...Object.keys(r).reduce(((e,r)=>{const n=(0,$.w)({chartId:l,column:r}),a=Z({components:i,filterFields:[n],selectedChartId:l}),o=S(a,1),s=((0,z.Q1)({filterScope:t[l].scopes[r]})||[]).filter((e=>e!==l));return{...e,[n]:{nodes:a,nodesFiltered:[...a],checked:s,expanded:o}}}),{})})),{}),{chartId:n}=(0,$._)(this.defaultFilterKey),a=[],o=this.defaultFilterKey,s=[x.dU].concat(n),c=I({checkedFilterFields:a,activeFilterField:o,filterScopeMap:r,layout:i});this.state={showSelector:!0,activeFilterField:o,searchText:"",filterScopeMap:{...r,...c},filterFieldNodes:e,checkedFilterFields:a,expandedFilterIds:s}}else this.state={showSelector:!1};this.filterNodes=this.filterNodes.bind(this),this.onChangeFilterField=this.onChangeFilterField.bind(this),this.onCheckFilterScope=this.onCheckFilterScope.bind(this),this.onExpandFilterScope=this.onExpandFilterScope.bind(this),this.onSearchInputChange=this.onSearchInputChange.bind(this),this.onCheckFilterField=this.onCheckFilterField.bind(this),this.onExpandFilterField=this.onExpandFilterField.bind(this),this.onClose=this.onClose.bind(this),this.onSave=this.onSave.bind(this)}onCheckFilterScope(e=[]){const{activeFilterField:t,filterScopeMap:i,checkedFilterFields:l}=this.state,r=w({activeFilterField:t,checkedFilterFields:l}),n=t?[t]:l,a={...i[r],checked:e},o=function({checked:e=[],filterFields:t=[],filterScopeMap:i={}}){const l=e.reduce(((e,t)=>{const[i,l]=t.split(":");return{...e,[l]:(e[l]||[]).concat(parseInt(i,10))}}),{});return t.reduce(((e,t)=>({...e,[t]:{...i[t],checked:l[t]||[]}})),{})}({checked:e,filterFields:n,filterScopeMap:i});this.setState((()=>({filterScopeMap:{...i,...o,[r]:a}})))}onExpandFilterScope(e=[]){const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=this.state,r=w({activeFilterField:t,checkedFilterFields:i}),n={...l[r],expanded:e};this.setState((()=>({filterScopeMap:{...l,[r]:n}})))}onCheckFilterField(e=[]){const{layout:t}=this.props,{filterScopeMap:i}=this.state,l=I({checkedFilterFields:e,activeFilterField:null,filterScopeMap:i,layout:t});this.setState((()=>({activeFilterField:null,checkedFilterFields:e,filterScopeMap:{...i,...l}})))}onExpandFilterField(e=[]){this.setState((()=>({expandedFilterIds:e})))}onChangeFilterField(e={}){const{layout:t}=this.props,i=e.value,{activeFilterField:l,checkedFilterFields:r,filterScopeMap:n}=this.state;if(i===l){const e=I({checkedFilterFields:r,activeFilterField:null,filterScopeMap:n,layout:t});this.setState({activeFilterField:null,filterScopeMap:{...n,...e}})}else if(this.allfilterFields.includes(i)){const e=I({checkedFilterFields:r,activeFilterField:i,filterScopeMap:n,layout:t});this.setState({activeFilterField:i,filterScopeMap:{...n,...e}})}}onSearchInputChange(e){this.setState({searchText:e.target.value},this.filterTree)}onClose(){this.props.onCloseModal()}onSave(){const{filterScopeMap:e}=this.state,t=this.allfilterFields.reduce(((t,i)=>{const{nodes:l}=e[i];return{...t,[i]:L({filterKey:i,nodes:l,checkedChartIds:e[i].checked})}}),{});this.props.updateDashboardFiltersScope(t),this.props.setUnsavedChanges(!0),this.props.onCloseModal()}filterTree(){if(this.state.searchText){const e=e=>{const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=e,r=w({activeFilterField:t,checkedFilterFields:i}),n=l[r].nodes.reduce(this.filterNodes,[]),a=S([...n]),o={...l[r],nodesFiltered:n,expanded:a};return{filterScopeMap:{...l,[r]:o}}};this.setState(e)}else this.setState((e=>{const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=e,r=w({activeFilterField:t,checkedFilterFields:i}),n={...l[r],nodesFiltered:l[r].nodes};return{filterScopeMap:{...l,[r]:n}}}))}filterNodes(e=[],t={}){const{searchText:i}=this.state,l=(t.children||[]).reduce(this.filterNodes,[]);return(t.label.toLocaleLowerCase().indexOf(i.toLocaleLowerCase())>-1||l.length)&&e.push({...t,children:l}),e}renderFilterFieldList(){const{activeFilterField:e,filterFieldNodes:t,checkedFilterFields:i,expandedFilterIds:l}=this.state;return(0,J.tZ)(ae,{activeKey:e,nodes:t,checked:i,expanded:l,onClick:this.onChangeFilterField,onCheck:this.onCheckFilterField,onExpand:this.onExpandFilterField})}renderFilterScopeTree(){const{filterScopeMap:e,activeFilterField:t,checkedFilterFields:i,searchText:l}=this.state,r=w({activeFilterField:t,checkedFilterFields:i}),n=N({activeFilterField:t,checkedFilterFields:i});return(0,J.BX)(J.HY,{children:[(0,J.tZ)("input",{className:"filter-text scope-search multi-edit-mode",placeholder:(0,f.t)("Search..."),type:"text",value:l,onChange:this.onSearchInputChange}),(0,J.tZ)(ee,{nodes:e[r].nodesFiltered,checked:e[r].checked,expanded:e[r].expanded,onCheck:this.onCheckFilterScope,onExpand:this.onExpandFilterScope,selectedChartId:n})]})}renderEditingFiltersName(){const{dashboardFilters:e}=this.props,{activeFilterField:t,checkedFilterFields:i}=this.state,l=[].concat(t||i).map((t=>{const{chartId:i,column:l}=(0,$._)(t);return e[i].labels[l]||l}));return(0,J.BX)("div",{className:"selected-fields multi-edit-mode",children:[0===l.length&&(0,f.t)("No filter is selected."),1===l.length&&(0,f.t)("Editing 1 filter:"),l.length>1&&(0,f.t)("Batch editing %d filters:",l.length),(0,J.tZ)("span",{className:"selected-scopes",children:l.join(", ")})]})}render(){const{showSelector:e}=this.state;return(0,J.BX)(se,{children:[(0,J.BX)(de,{children:[(0,J.tZ)("h4",{children:(0,f.t)("Configure filter scopes")}),e&&this.renderEditingFiltersName()]}),(0,J.tZ)(ce,{className:"filter-scope-body",children:e?(0,J.BX)(he,{className:"filters-scope-selector",children:[(0,J.tZ)("div",{className:u()("filter-field-pane multi-edit-mode"),children:this.renderFilterFieldList()}),(0,J.tZ)("div",{className:"filter-scope-pane multi-edit-mode",children:this.renderFilterScopeTree()})]}):(0,J.tZ)("div",{className:"warning-message",children:(0,f.t)("There are no filters in this dashboard.")})}),(0,J.BX)(pe,{children:[(0,J.tZ)(g.Z,{buttonSize:"small",onClick:this.onClose,children:(0,f.t)("Close")}),e&&(0,J.tZ)(g.Z,{buttonSize:"small",buttonStyle:"primary",onClick:this.onSave,children:(0,f.t)("Save")})]})]})}}ue.propTypes=oe;const ge=(0,a.$j)((function({dashboardLayout:e,dashboardFilters:t}){return{dashboardFilters:t,layout:e.present}}),(function(e){return(0,o.DE)({updateDashboardFiltersScope:s.l6,setUnsavedChanges:c.if},e)}))(ue),me=r.iK.div((({theme:{gridUnit:e}})=>({padding:2*e,paddingBottom:3*e})));class fe extends l.PureComponent{constructor(e){super(e),this.modal=void 0,this.modal=(0,l.createRef)(),this.handleCloseModal=this.handleCloseModal.bind(this)}handleCloseModal(){var e,t;null==this||null==(e=this.modal)||null==(t=e.current)||null==t.close||t.close()}render(){const e={onCloseModal:this.handleCloseModal};return(0,J.tZ)(n.Z,{ref:this.modal,triggerNode:this.props.triggerNode,modalBody:(0,J.tZ)(me,{children:(0,J.tZ)(ge,{...e})}),width:"80%"})}}},482342:(e,t,i)=>{i.d(t,{Z:()=>u});var l=i(667294),r=i(211965),n=i(751995),a=i(61988),o=i(409882),s=i(358593),c=i(49238),d=i(313322),h=i(135944);const p=r.iv`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,u=({name:e,label:t,description:i,validationErrors:u=[],renderTrigger:g=!1,rightNode:m,leftNode:f,onClick:b,hovered:v=!1,tooltipOnClick:x=(()=>{}),warning:y,danger:F})=>{const{gridUnit:C,colors:Z}=(0,n.Fg)(),S=(0,l.useRef)(!1),k=(0,l.useMemo)((()=>(u.length||(S.current=!0),S.current?u.length?Z.error.base:"unset":Z.alert.base)),[Z.error.base,Z.alert.base,u.length]);return t?(0,h.BX)("div",{className:"ControlHeader",children:[(0,h.tZ)("div",{className:"pull-left",children:(0,h.BX)(c.lX,{css:e=>r.iv`
            margin-bottom: ${.5*e.gridUnit}px;
            position: relative;
          `,children:[f&&(0,h.tZ)("span",{children:f}),(0,h.tZ)("span",{role:"button",tabIndex:0,onClick:b,style:{cursor:b?"pointer":""},children:t})," ",y&&(0,h.BX)("span",{children:[(0,h.tZ)(s.u,{id:"error-tooltip",placement:"top",title:y,children:(0,h.tZ)(d.Z.AlertSolid,{iconColor:Z.alert.base,iconSize:"s"})})," "]}),F&&(0,h.BX)("span",{children:[(0,h.tZ)(s.u,{id:"error-tooltip",placement:"top",title:F,children:(0,h.tZ)(d.Z.ErrorSolid,{iconColor:Z.error.base,iconSize:"s"})})," "]}),(null==u?void 0:u.length)>0&&(0,h.BX)("span",{children:[(0,h.tZ)(s.u,{id:"error-tooltip",placement:"top",title:null==u?void 0:u.join(" "),children:(0,h.tZ)(d.Z.ExclamationCircleOutlined,{css:r.iv`
                    ${p};
                    color: ${k};
                  `})})," "]}),v?(0,h.BX)("span",{css:()=>r.iv`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${C}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `,children:[i&&(0,h.BX)("span",{children:[(0,h.tZ)(s.u,{id:"description-tooltip",title:i,placement:"top",children:(0,h.tZ)(d.Z.InfoCircleOutlined,{css:p,onClick:x})})," "]}),g&&(0,h.BX)("span",{children:[(0,h.tZ)(o.V,{label:(0,a.t)("bolt"),tooltip:(0,a.t)("Changing this control takes effect instantly"),placement:"top",icon:"bolt"})," "]})]}):null]})}),m&&(0,h.tZ)("div",{className:"pull-right",children:m}),(0,h.tZ)("div",{className:"clearfix"})]}):null}},676787:(e,t,i)=>{i.d(t,{Z:()=>w});var l=i(189734),r=i.n(l),n=i(623560),a=i.n(n),o=i(667294),s=i(751995),c=i(61988),d=i(285671),h=i(211965),p=i(564749),u=i(482342),g=i(358593),m=i(313322),f=i(747767),b=i(985633),v=i(135944);function x(e){const{id:t,label:i,colors:l}=e,[r,n]=(0,o.useState)(!1),a=(0,o.useRef)(null),s=(0,o.useRef)(null),c=()=>l.map(((e,i)=>(0,v.tZ)("span",{css:t=>h.iv`
          padding-left: ${t.gridUnit/2}px;
          :before {
            content: '';
            display: inline-block;
            background-color: ${e};
            border: 1px solid ${"white"===e?"black":e};
            width: 9px;
            height: 10px;
          }
        `},`${t}-${i}`)));return(0,v.tZ)(g.u,{"data-testid":"tooltip",overlayClassName:"color-scheme-tooltip",title:()=>(0,v.BX)(v.HY,{children:[(0,v.tZ)("span",{children:i}),(0,v.tZ)("div",{children:c()})]}),visible:r,children:(0,v.BX)("span",{className:"color-scheme-option",onMouseEnter:()=>{const e=a.current,t=s.current;e&&t&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight||t.scrollWidth>t.offsetWidth||t.scrollHeight>t.offsetHeight)&&n(!0)},onMouseLeave:()=>{n(!1)},css:h.iv`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `,children:[(0,v.tZ)("span",{className:"color-scheme-label",ref:a,css:e=>h.iv`
            min-width: 125px;
            padding-right: ${2*e.gridUnit}px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          `,children:i}),(0,v.tZ)("span",{ref:s,css:e=>h.iv`
            flex: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding-right: ${e.gridUnit}px;
          `,children:c()})]})},t)}const{Option:y,OptGroup:F}=p.default,C=(0,s.iK)(m.Z.AlertSolid)`
  color: ${({theme:e})=>e.colors.alert.base};
`,Z=(0,c.t)("This color scheme is being overridden by custom label colors.\n    Check the JSON metadata in the Advanced settings"),S=(0,c.t)("The color scheme is determined by the related dashboard.\n        Edit the color scheme in the dashboard properties."),k=({label:e,hasCustomLabelsColor:t,dashboardId:i})=>{if(t||i){const i=t?Z:S;return(0,v.BX)(v.HY,{children:[e," ",(0,v.tZ)(g.u,{title:i,children:(0,v.tZ)(C,{iconSize:"s"})})]})}return(0,v.tZ)(v.HY,{children:e})},w=({hasCustomLabelsColor:e=!1,dashboardId:t,label:i=(0,c.t)("Color scheme"),onChange:l=(()=>{}),value:n,clearable:p=!1,defaultScheme:m,choices:C=[],schemes:Z={},isLinear:w,...$})=>{const N=(0,s.Fg)(),I=(0,o.useMemo)((()=>{if(t)return"dashboard";let e=n||m;if("SUPERSET_DEFAULT"===e){var i;const t=a()(Z)?Z():Z;e=null==t||null==(i=t.SUPERSET_DEFAULT)?void 0:i.id}return e}),[t,m,Z,n]),T=(0,o.useMemo)((()=>{if(t)return[(0,v.tZ)(y,{value:"dashboard",label:(0,c.t)("dashboard"),children:(0,v.tZ)(g.u,{title:S,children:(0,c.t)("Dashboard scheme")})},"dashboard")];const e=a()(Z)?Z():Z,i=a()(C)?C():C,l=[],n=i.filter((e=>{const t=e[0],i="SUPERSET_DEFAULT"!==t&&!l.includes(t);return l.push(t),i})).reduce(((t,[i])=>{var l,r;const n=e[i];let a=[];n&&(a=w?n.getColors(10):n.colors);const o={customLabel:(0,v.tZ)(x,{id:n.id,label:n.label,colors:a}),label:(null==e||null==(l=e[i])?void 0:l.label)||i,value:i};return t[null!=(r=n.group)?r:d.I.Other].options.push(o),t}),{[d.I.Custom]:{title:d.I.Custom,label:(0,c.t)("Custom color palettes"),options:[]},[d.I.Featured]:{title:d.I.Featured,label:(0,c.t)("Featured color palettes"),options:[]},[d.I.Other]:{title:d.I.Other,label:(0,c.t)("Other color palettes"),options:[]}}),o=Object.values(n).filter((e=>e.options.length>0)).map((e=>({...e,options:r()(e.options,(e=>e.label))})));return 1===o.length&&o[0].title===d.I.Other?o[0].options.map(((e,t)=>(0,v.tZ)(y,{value:e.value,label:e.label,children:e.customLabel},t))):o.map(((e,t)=>(0,v.tZ)(F,{label:e.label,children:e.options.map(((e,i)=>(0,v.tZ)(y,{value:e.value,label:e.label,children:e.customLabel},`${t}-${i}`)))},t)))}),[C,t,w,Z]);return(0,v.BX)(v.HY,{children:[(0,v.tZ)(u.Z,{...$,label:(0,v.tZ)(k,{label:i,hasCustomLabelsColor:e,dashboardId:t})}),(0,v.tZ)(f.Qr,{css:h.iv`
          width: 100%;
          & .ant-select-item.ant-select-item-group {
            padding-left: ${N.gridUnit}px;
            font-size: ${N.typography.sizes.m}px;
          }
          & .ant-select-item-option-grouped {
            padding-left: ${3*N.gridUnit}px;
          }
        `,"aria-label":(0,c.t)("Select color scheme"),allowClear:p,disabled:!!t,onChange:e=>l(e),placeholder:(0,c.t)("Select scheme"),value:I,getPopupContainer:e=>e.parentNode,showSearch:!0,filterOption:(e,t)=>(0,b.Dz)(e,t,["label","value"],!0),children:T})]})}},848273:(e,t,i)=>{i.d(t,{$3:()=>c,AN:()=>h,LS:()=>s,Qz:()=>d,g:()=>o});var l=i(431069),r=i(115926),n=i.n(r);const a=Object.freeze(["dashboard","chart","saved_query"]),o=Object.freeze({DASHBOARD:"dashboard",CHART:"chart",QUERY:"saved_query"});function s(e,t,i){l.Z.get({endpoint:`/api/v1/tag/${e}`}).then((({json:e})=>t(e.result))).catch((e=>i(e)))}function c({objectType:e,objectId:t,includeTypes:i=!1},r,n){if(void 0===e||void 0===t)throw new Error("Need to specify objectType and objectId");if(!a.includes(e))throw new Error(`objectType ${e} is invalid`);l.Z.get({endpoint:`/api/v1/${e}/${t}`}).then((({json:e})=>r(e.result.tags.filter((e=>1===e.type))))).catch((e=>n(e)))}function d(e,t,i){const r=e.map((e=>e.name));l.Z.delete({endpoint:`/api/v1/tag/?q=${n().encode(r)}`}).then((({json:e})=>e.message?t(e.message):t("Successfully Deleted Tag"))).catch((e=>{const t=e.message;return i(t||"Error Deleting Tag")}))}function h({tagIds:e=[],types:t},i,r){let n=`/api/v1/tag/get_objects/?tagIds=${e}`;t&&(n+=`&types=${t}`),l.Z.get({endpoint:n}).then((({json:e})=>i(e.result))).catch((e=>r(e)))}},165108:(e,t,i)=>{i.d(t,{g:()=>l});const l=(e,t,i=((...e)=>JSON.stringify([...e])))=>(...l)=>{const r=i(...l);if(t.has(r))return t.get(r);const n=e(...l);return t.set(r,n),n}},83379:(e,t,i)=>{function l(e){return e?e.full_name||`${e.first_name} ${e.last_name}`:""}i.d(t,{Z:()=>l})}}]);
//# sourceMappingURL=4717.be6e9ca4d5c8e41575c4.entry.js.map