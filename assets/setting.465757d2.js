import{d as P,r as _,p as U,o as J,a as $,b as f,s as k,e,f as t,ax as M,w as a,ay as d,E as l,al as h,I as v,az as C,R as c,Q as g,am as r,aA as w,c as L,ak as V,D as E,ao as D,T as z,ad as b,aB as R,y as i}from"./vendor.64da71ad.js";import{p as y,i as G}from"./index.bd9a716c.js";var Q="/pikpak/assets/aria2-tip-1.e9ebfae4.png",H="/pikpak/assets/aria2-tip-2.f3636f8d.png";const K={class:"list-page"},Z=i(" \u7E6B\u7D50telegram "),q=l("p",null,null,-1),W=i("Telegram\u7E6B\u7D50"),X=l("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram\u6A5F\u5668\u4EBA\u5730\u5740",-1),Y=i(" aria2\u8A2D\u5B9A "),uu=i(" \u9078\u64C7\u8CC7\u6599\u593E\u6642\u5132\u5B58\u8CC7\u6599\u593E\u7D50\u69CB "),eu=i(" \u9078\u64C7\u8CC7\u6599\u593E\u6642\u50C5\u5132\u5B58\u6A94\u6848 "),tu=l("img",{src:Q,alt:""},null,-1),au=l("br",null,null,-1),lu=l("br",null,null,-1),ou=l("img",{src:H,alt:""},null,-1),su=i("\u6E2C\u8A66\u4E26\u5132\u5B58"),nu=i(" \u81EA\u52D5\u767B\u9304\u8A2D\u5B9A "),iu=i("\u5132\u5B58"),ru=l("p",null,null,-1),du=i("\u5132\u5B58\u8A2D\u5B9A"),pu=i("\u6062\u5FA9\u9810\u8A2D"),Bu=l("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7DB2\u7AD9",-1),Fu=l("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"\u5B98\u65B9\u4EA4\u6D41\u7FA4",-1),_u=l("a",{href:"https://github.com/tjsky/pikpak",target:"_blank",class:"n-button"},"\u958B\u6E90\u5009\u5EAB",-1),cu=l("a",{href:"https://www.tjsky.net/?p=201",target:"_blank",class:"n-button"},"\u90E8\u7F72\u6559\u7A0B",-1),Au=l("a",{href:"https://t.me/pikpak_userservice",target:"_blank"},"\u554F\u984C\u53CD\u994B",-1),mu=l("br",null,null,-1),gu=l("a",{href:"https://github.com/MotooriKashin/ef2/releases",target:"_blank",class:"n-button"},"\u5730\u5740\u4E00\uFF1A\u4E0B\u8F09\u652F\u63F4\u5916\u639B",-1),fu=l("a",{href:"https://url71.ctfile.com/f/21226171-531688310-489b35",target:"_blank",class:"n-button"},"\u5730\u5740\u4E8C\uFF1A\u4E0B\u8F09\u652F\u63F4\u5916\u639B\uFF08\u5BC6\u78BCpikpak\uFF09",-1),hu=l("a",{href:"https://www.tjsky.net/?p=220#PCIDM",target:"_blank",class:"n-button"},"\u4F7F\u7528\u6559\u7A0B",-1),vu=l("br",null,null,-1),Cu=i("\u5148\u7528\u7B2C\u4E00\u500B\u4E0B\u8F09\u5730\u5740\uFF0C\u5982\u679C\u4F60\u5BE6\u5728\u7121\u6CD5\u8A2A\u554Fgithub\u518D\u4F7F\u7528\u7B2C\u4E8C\u500B\u4E0B\u8F09\u5730\u5740\uFF0C\u547C\u53EBIDM\u4E0B\u8F09\u9700\u8981\u914D\u5408\u300C\u81EA\u5B9A\u7FA9\u83DC\u55AE\u300D\u529F\u80FD\u5BE6\u73FE\uFF0C\u8ACB\u6AA2\u8996\u4E0A\u65B9\u7684\u4F7F\u7528\u6559\u7A0B "),ku=l("br",null,null,-1),bu=P({setup(wu){const x=_(["\u624B\u6A5F\u8A3B\u518A\u767B\u9678","\u65B0\u589E\u63A8\u5EE3\u4E0B\u8F09","\u7E6B\u7D50Telegram","\u76F4\u63A5\u5206\u4EAB\u529F\u80FD\uFF08\u4E0B\u7DDA\uFF09","\u4FEE\u6539\u50B3\u8F38\u81EA\u52D5\u8ACB\u6C42\u65B9\u5F0F","\u50B3\u8F38\u53EA\u986F\u793A\u5132\u5B58\u4E2D","\u81EA\u5B9A\u7FA9\u83DC\u55AE","\u8CC7\u6E90\u5EAB\u5206\u9801\uFF0C\u5206\u4EAB\u79D2\u50B3\u652F\u63F4\u6A94\u6848\u53CA","...."]),o=_({host:"",token:"",dir:!0}),S=()=>{let n={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};o.value.token&&n.params.splice(0,0,"token:"+o.value.token),fetch(o.value.host,{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-Type":"application/json"})}).then(u=>u.json()).then(u=>{u.error&&u.error.message?window.$message.error(u.error.message):u.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(o.value)),window.$message.success("\u5132\u5B58\u6210\u529F"))}).catch(u=>console.error("Error:",u))},A=_(!1),p=_({username:"",password:""}),N=U(),I=()=>{A.value?N.warning({title:"\u8B66\u544A",content:"\u8A18\u4F4F\u767B\u9678\u662F\u6307\u700F\u89BD\u5668\u672C\u5730\u660E\u6587\u5132\u5B58\u4F7F\u7528\u8005\u540D\u7A31\u5BC6\u78BC\u7528\u65BC\u4E0B\u6B21\u81EA\u52D5\u767B\u9678\uFF0C\u8ACB\u52FF\u5728\u975E\u4FE1\u4EFB\u88DD\u7F6E\u9078\u64C7",positiveText:"\u78BA\u5B9A",negativeText:"\u4E0D\u78BA\u5B9A",onPositiveClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(p.value))},onNegativeClick:()=>{}}):window.localStorage.removeItem("pikpakLoginData")},m=_(""),T=()=>{let n=m.value.split(`
`).filter(u=>u!="");window.localStorage.setItem("proxy",JSON.stringify(n)),window.localStorage.setItem("isSettingProxy","true")},j=()=>{window.localStorage.setItem("proxy",JSON.stringify(y)),window.localStorage.removeItem("isSettingProxy"),m.value=y.join(`
`)};J(()=>{let n=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");n.dir===void 0&&(n.dir=!0),n.host&&(o.value=n);let u=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");u.username&&u.password&&(p.value=u,A.value=!0);let F=JSON.parse(window.localStorage.getItem("proxy")||"[]");F.length&&(m.value=F.join(`
`))});const B=_(),O=()=>{let n=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!n&&!n.access_token)return window.$message.error("\u8ACB\u5148\u767B\u9678"),!1;let u=B.value&&decodeURIComponent(B.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(u),!u||!u.length||u.length!=4)return window.$message.error("\u8ACB\u8F38\u5165\u6B63\u78BA\u93C8\u63A5"),!1;G.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:n.access_token,thirdType:"TG",thirdToken:u[2]}).then(F=>{B.value="",F.data.bound?window.$message.success("\u7E6B\u7D50\u6210\u529F"):window.$message.error("\u7E6B\u7D50\u5931\u6557")})};return(n,u)=>{const F=$("n-text");return f(),k("div",K,[e(t(M),{"default-expanded-names":["-1","0","2","3","4"]},{default:a(()=>[e(t(d),{name:"-1"},{header:a(()=>[Z,l("a",{onClick:u[0]||(u[0]=C(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#Telegram",target:"_blank"},[e(t(v),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[e(t(h))]),_:1})])]),default:a(()=>[e(t(c),{value:B.value,"onUpdate:value":u[1]||(u[1]=s=>B.value=s),placeholder:"\u8907\u88FDtelegram\u7E6B\u7D50\u93C8\u63A5\u5230\u9019"},null,8,["value"]),q,e(t(g),{disabled:!B.value,type:"primary",onClick:O},{default:a(()=>[W]),_:1},8,["disabled"]),X]),_:1}),e(t(d),{name:"0",title:"aria2\u8A2D\u5B9A"},{header:a(()=>[Y,l("a",{onClick:u[2]||(u[2]=C(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#arai2",target:"_blank"},[e(t(v),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[e(t(h))]),_:1})])]),default:a(()=>[e(t(D),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:a(()=>[e(t(r),{label:"aria2\u93C8\u63A5\uFF1A"},{default:a(()=>[e(t(c),{value:o.value.host,"onUpdate:value":u[3]||(u[3]=s=>o.value.host=s),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),e(t(r),{label:"aria2Token\uFF1A"},{default:a(()=>[e(t(c),{value:o.value.token,"onUpdate:value":u[4]||(u[4]=s=>o.value.token=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),e(t(r),{label:"\u8CC7\u6599\u593E\u8A2D\u5B9A\uFF1A"},{default:a(()=>[e(t(w),{value:o.value.dir,"onUpdate:value":u[5]||(u[5]=s=>o.value.dir=s)},{checked:a(()=>[uu]),unchecked:a(()=>[eu]),_:1},8,["value"])]),_:1}),o.value.host&&o.value.host.indexOf("https://")===-1&&o.value.host.indexOf("http://localhost")==-1&&o.value.host.indexOf("http://127.0.0.1")===-1?(f(),L(t(V),{key:0,title:"\u7531\u65BC\u700F\u89BD\u5668\u9650\u5236\uFF0C\u8ACB\u6309\u4E0B\u5716\u8A2D\u5B9A\u958B\u59CB\u6DF7\u5408\u6A21\u5F0F",type:"info"},{default:a(()=>[tu,au,lu,ou]),_:1})):E("",!0),e(t(r),null,{default:a(()=>[e(t(g),{type:"primary",onClick:S},{default:a(()=>[su]),_:1})]),_:1})]),_:1})]),_:1}),e(t(d),{name:"1",title:"\u81EA\u52D5\u767B\u9304\u8A2D\u5B9A"},{header:a(()=>[nu,l("a",{onClick:u[6]||(u[6]=C(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#i-6",target:"_blank"},[e(t(v),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[e(t(h))]),_:1})])]),default:a(()=>[e(t(D),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:a(()=>[e(t(r),{label:"\u662F\u5426\u958B\u555F"},{default:a(()=>[e(t(w),{value:A.value,"onUpdate:value":u[7]||(u[7]=s=>A.value=s)},null,8,["value"])]),_:1}),A.value?(f(),k(z,{key:0},[e(t(r),{label:"\u4F7F\u7528\u8005\u540D\u7A31"},{default:a(()=>[e(t(c),{value:p.value.username,"onUpdate:value":u[8]||(u[8]=s=>p.value.username=s),placeholder:"\u4F7F\u7528\u8005\u540D\u7A31"},null,8,["value"])]),_:1}),e(t(r),{label:"\u5BC6\u78BC"},{default:a(()=>[e(t(c),{value:p.value.password,"onUpdate:value":u[9]||(u[9]=s=>p.value.password=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):E("",!0),e(t(r),null,{default:a(()=>[e(t(g),{type:"primary",onClick:I},{default:a(()=>[iu]),_:1})]),_:1})]),_:1})]),_:1}),e(t(d),{name:"3",title:"\u4EE3\u7406\u8A2D\u5B9A"},{default:a(()=>[e(t(c),{type:"textarea",value:m.value,"onUpdate:value":u[10]||(u[10]=s=>m.value=s),rows:"4",placeholder:"\u652F\u63F4\u591A\u500B\u96A8\u6A5F\uFF0C\u4E00\u884C\u4E00\u500B\uFF0C\u70BA\u7A7A\u5247\u4E0D\u4EE3\u7406"},null,8,["value"]),ru,e(t(g),{type:"primary",onClick:T},{default:a(()=>[du]),_:1}),e(F,{onClick:j},{default:a(()=>[pu]),_:1})]),_:1}),e(t(d),{title:"\u95DC\u65BC",name:"2"},{default:a(()=>[e(t(b),null,{default:a(()=>[Bu,Fu,_u,cu,Au]),_:1}),mu]),_:1}),e(t(d),{title:"PC\u7AEFIDM\u652F\u63F4",name:"4"},{default:a(()=>[e(t(b),null,{default:a(()=>[gu,fu,hu,vu,Cu]),_:1}),ku]),_:1}),e(t(d),{title:"\u529F\u80FD\u5217\u8868",name:"3"},{default:a(()=>[e(t(R),{lines:x.value},null,8,["lines"])]),_:1})]),_:1})])}}});export{bu as default};
