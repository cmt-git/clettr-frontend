(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{4826:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/marketplace",function(){return n(7295)}])},7295:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return G}});var s=n(7622),r=n(4637),a=n(5807),i=n.n(a),l=n(6369),c=n.n(l),o=n(6381),d=n(5016),h=n(3510),u=n(7135),x=n(9938),p=n(9496),f=n(3628),g=n(9821),m=n.n(g),v=n(7228),j=n(1413),_=n(9775),w=n(8670),S=n.n(w),y=n(7938),k=n(6541),N=n(2250),b=n.n(N),C=n(665),Z=n(6732),M=n(4194),A=n(7645),T=n(62),H=n(3972),E=new(m())("ws://".concat("development"==M.N?"localhost":"clettr.com",":7545")),P=function(){var t=(0,p.useState)(null),e=(t[0],t[1],(0,p.useState)(null)),n=e[0],s=e[1];(0,p.useEffect)((function(){(0,u.Z)((function(){var t,e,n,r,a;return(0,x.__generator)(this,(function(i){switch(i.label){case 0:return[4,E.eth.net.getId()];case 1:return t=i.sent(),(e=A.networks[t])?(n=A.abi,r=e.address,a=new E.eth.Contract(n,r),s(a)):alert("Smart Contract has not been detected"),[2]}}))}))()}),[]);var a=function(t){return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:b().grey_info_block,style:{marginBottom:"15px"},children:(0,r.jsxs)("p",{className:b().transparent_text,style:{display:"flex",width:"100%",justifyContent:"center"},children:["Type"," ",(0,r.jsx)("span",{style:{marginLeft:"5px"},children:"passive"==t.type?"Passive NFT":"Active NFT"})]})}),(0,r.jsx)(y.Z,{type:t.type,mint:!0,hover:!1}),(0,r.jsxs)("div",{className:"".concat(b().colored_button," ").concat(b().grey_button),style:{marginTop:"15px",justifyContent:"center",height:"50px"},onClick:(0,u.Z)((function(){var e,s,r;return(0,x.__generator)(this,(function(a){switch(a.label){case 0:return e=(0,j.Be)(),[4,("passive"==t.type?new E.eth.Contract(H.abi,v.store.getState().currentSUSDCContractAddressState.value):new E.eth.Contract(T.abi,v.store.getState().currentEttrContractAddressState.value)).methods.balanceOf(v.store.getState().currentWalletAccountState).call()];case 1:return s=Z.a.apply(void 0,[a.sent(),18]),r="passive"==t.type?5:50,s>=r?n.methods.cltrnft_mint(e,r,v.store.getState().currentEttrContractAddressState.value,v.store.getState().currentSUSDCContractAddressState.value,"passive"==t.type?1:0).send({from:v.store.getState().currentWalletAccountState,gas:6721975}).on("transactionHash",(function(t){})).on("receipt",(function(n){if(n.events&&n.events.TokenMinted){var s=n.events.TokenMinted,r=(s.returnValues.sender,s.returnValues.tokenId);(0,u.Z)((function(){return(0,x.__generator)(this,(function(n){switch(n.label){case 0:return[4,(0,_.VV)({type:t.type,token_id:r,token_uri:e})];case 1:return n.sent(),[2]}}))}))()}})):(0,o.M)("Your ".concat("passive"==t.type?"SUSDC":"ETTR"," balance is not sufficient enough!"),!1),[2]}}))})),children:[(0,r.jsx)("img",{src:"passive"==t.type?"./images/svgs/usdc-token.svg":"./images/svgs/clettr-token.svg",alt:"clettr-logo",style:{width:"20px",marginRight:"5px"}}),"passive"==t.type?(0,r.jsxs)("p",{children:["5.00",(0,r.jsxs)("span",{className:b().transparent_text,children:[(0,j.Vs)(5*C.r)," PHP"]})]}):(0,r.jsxs)("p",{children:["50.00"," ",(0,r.jsx)("span",{className:b().transparent_text,style:{margin:"0px 5px"},children:(0,j.Vs)(null!=v.store.getState().tickerPriceState.value?50*v.store.getState().tickerPriceState.value:0)}),(0,r.jsx)("span",{className:b().transparent_text,children:null!=v.store.getState().currentCurrencyState.value?v.store.getState().currentCurrencyState.value.toUpperCase():null})]})]})]})};return(0,r.jsxs)("div",{className:b().popup_content_root,style:{width:"auto"},children:[(0,r.jsx)("div",{style:{width:"100%",marginBottom:"10px"},onClick:function(){return(0,h.j4)()},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14.05",height:"14.048",viewBox:"0 0 14.05 14.048",className:b().close_button,children:(0,r.jsx)("path",{d:"M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z",fill:"#d08080"})})}),(0,r.jsx)("p",{style:{width:"100%",textAlign:"center",fontSize:"15px"},children:"Mint Market"}),(0,r.jsx)("div",{className:b().line,style:{margin:"20px 0px"}}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",gap:"15px"},children:[(0,r.jsx)(a,{type:"passive"}),(0,r.jsx)(a,{type:"active"})]})]})},q=n(62),R=n(3972),B=new(m())("ws://".concat("development"==M.N?"localhost":"159.223.39.105",":7545")),F=function(t){var e=(0,p.useState)("Search by Hash"),s=e[0],a=e[1],i=(0,p.useState)("Search All"),l=i[0],c=i[1],d=(0,f.v9)((function(t){return t.queryState.value})),g=(0,p.useState)(null),w=(g[0],g[1],(0,p.useState)(null)),N=w[0],b=w[1];(0,p.useEffect)((function(){(0,u.Z)((function(){var t,e,s,r,a,i,l;return(0,x.__generator)(this,(function(c){switch(c.label){case 0:return t=n(7645),[4,(e=new(m())("ws://".concat("development"==M.N?"localhost":"159.223.39.105",":7545"))).eth.net.getId()];case 1:return s=c.sent(),(r=t.networks[s])?(a=t.abi,i=r.address,l=new e.eth.Contract(a,i),b(l)):alert("Smart Contract has not been detected"),[2]}}))}))()}),[]);var C=function(t){var e=(0,p.useState)(null),n=e[0],s=e[1];return(0,p.useEffect)((function(){s(!0)}),[]),(0,r.jsx)("div",{children:n?[(0,r.jsx)("div",{className:S().grey_info_block,style:{marginBottom:"15px",display:"flex",justifyContent:"center"},children:(0,r.jsxs)("p",{className:S().transparent_text,children:["Owner ",(0,r.jsx)("span",{children:t.data.current_owner})]})},0),(0,r.jsx)("div",{className:S().market_item_card,children:(0,r.jsx)(y.Z,{data:t.data})},1),(0,r.jsxs)("div",{className:"".concat(S().colored_button," ").concat(S().grey_button),style:{marginTop:"15px",justifyContent:"center",height:"50px"},onClick:(0,u.Z)((function(){var e;return(0,x.__generator)(this,(function(n){switch(n.label){case 0:return null!=v.store.getState().queryState.value.user&&t.data.current_owner==v.store.getState().queryState.value.user.username||null==v.store.getState().queryState.value.user?(null==v.store.getState().queryState.value.user?(0,o.M)("You must be logged in for this action.",!1):(0,o.M)("Cannot buy your own NFT.",!1),[3,3]):[3,1];case 1:return e="ettr"==t.data.market_info.split("-")[0]?"ettr":"susdc",[4,("ettr"==e?new B.eth.Contract(q.abi,v.store.getState().currentEttrContractAddressState.value):new B.eth.Contract(R.abi,v.store.getState().currentSUSDCContractAddressState.value)).methods.balanceOf(v.store.getState().currentWalletAccountState).call()];case 2:Z.a.apply(void 0,[n.sent(),18])>=Number(t.data.market_info.split("-")[1])?N.methods.cltrnft_market_buy(t.data.nft_token_id,Number(t.data.market_info.split("-")[1]),v.store.getState().currentEttrContractAddressState.value,v.store.getState().currentSUSDCContractAddressState.value,"ettr"==e?0:1).send({from:v.store.getState().currentWalletAccountState.value,gas:6721975}).on("transactionHash",(function(e){(0,u.Z)((function(){return(0,x.__generator)(this,(function(e){switch(e.label){case 0:return[4,(0,_.uk)({nft_id:t.data.id})];case 1:return e.sent(),window.location.reload(),[2]}}))}))()})):(0,o.M)("You do not have sufficient amount",!1),n.label=3;case 3:return[2]}}))})),children:["ettr"==t.data.market_info.split("-")[0]?(0,r.jsx)("img",{src:"./images/svgs/clettr-token.svg",alt:"clettr-logo",style:{width:"20px",marginRight:"5px"}}):(0,r.jsx)("img",{src:"./images/svgs/usdc-token.svg",alt:"usdc-logo",style:{width:"20px",marginRight:"5px"}}),(0,r.jsxs)("p",{style:{display:"flex",gap:"5px"},children:[t.data.market_info.split("-")[1],(0,r.jsx)("span",{className:S().transparent_text,children:(0,j.Vs)(null!=v.store.getState().tickerPriceState.value?v.store.getState().tickerPriceState.value:0)}),(0,r.jsx)("span",{className:S().transparent_text,children:v.store.getState().currentCurrencyState.value.toUpperCase()})]})]},2)]:null})};return(0,r.jsxs)("div",{className:S().marketplace_block_component_root,children:[(0,r.jsxs)("div",{className:S().wrapper,children:[(0,r.jsxs)("div",{className:S().grey_info_block,children:[(0,r.jsx)("p",{children:"Marketplace"}),(0,r.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,r.jsxs)("p",{children:[null!=d&&null!=d.market_nfts&&null!=d.market_nfts.active_nft?(0,j.Vs)(d.market_nfts.active_nfts):0," ",(0,r.jsx)("span",{className:S().transparent_text,children:"Active NFTs"})]}),(0,r.jsxs)("p",{children:[null!=d&&null!=d.market_nfts&&null!=d.market_nfts.passive_nfts?(0,j.Vs)(d.market_nfts.passive_nfts):0," ",(0,r.jsx)("span",{className:S().transparent_text,children:"Passive NFTs"})]})]})]}),(0,r.jsxs)("div",{className:"".concat(S().grey_button," ").concat(S().colored_button," ").concat(S().button_responsive),onClick:function(){null!=v.store.getState().queryState.value.user?(0,h.Mw)((0,r.jsx)(P,{})):(0,o.M)("You must be logged in for this action.",!1)},children:[(0,r.jsx)("img",{src:"./images/svgs/clettr-logo.svg",alt:"clettr-logo",style:{width:"20px",marginRight:"5px"}}),(0,r.jsx)("p",{children:"Mint Market"})]}),(0,r.jsx)("div",{className:S().vertical_line,style:{width:"7px"}}),(0,r.jsxs)("div",{className:"".concat(S().select_box," ").concat(S().select_box_responsive),children:[(0,r.jsxs)("select",{onChange:function(t){return c(t.target.value)},children:[(0,r.jsx)("option",{children:"Search All"}),(0,r.jsx)("option",{children:"Search Passive NFTs"}),(0,r.jsx)("option",{children:"Search Active NFTs"})]}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"51",viewBox:"0 0 25 51",children:(0,r.jsxs)("g",{transform:"translate(-1393 -359)",children:[(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1393 359)",fill:"#fff"}),(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1418 410) rotate(180)",fill:"#fff"})]})})]}),(0,r.jsxs)("div",{className:S().input_box,style:{height:"50px"},children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"56.515",height:"56.515",viewBox:"0 0 56.515 56.515",style:{transform:"scale(0.3)",marginRight:"-20px",marginLeft:"-10px"},children:(0,r.jsx)("g",{transform:"translate(0 56.515)",children:(0,r.jsx)("path",{d:"M33.379-14.481A22.323,22.323,0,0,1,22.44-11.635,22.451,22.451,0,0,1,0-34.075a22.451,22.451,0,0,1,22.44-22.44,22.451,22.451,0,0,1,22.44,22.44,22.323,22.323,0,0,1-2.846,10.939L54.723-10.448A6.12,6.12,0,0,1,56.515-6.12a6.12,6.12,0,0,1-1.792,4.327h0A6.12,6.12,0,0,1,50.4,0a6.12,6.12,0,0,1-4.327-1.793ZM22.44-48.11A14.041,14.041,0,0,1,36.474-34.075,14.041,14.041,0,0,1,22.44-20.041,14.041,14.041,0,0,1,8.406-34.075,14.041,14.041,0,0,1,22.44-48.11Z",fill:"#fff",fillRule:"evenodd"})})}),(0,r.jsx)("input",{type:"text",placeholder:s})]}),(0,r.jsxs)("div",{className:"".concat(S().select_box," ").concat(S().select_box_responsive2),children:[(0,r.jsxs)("select",{onChange:function(t){return a(t.target.value)},children:[(0,r.jsx)("option",{children:"Search by Hash"}),(0,r.jsx)("option",{children:"Search by Player"})]}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"51",viewBox:"0 0 25 51",children:(0,r.jsxs)("g",{transform:"translate(-1393 -359)",children:[(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1393 359)",fill:"#fff"}),(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1418 410) rotate(180)",fill:"#fff"})]})})]})]}),"Search Active NFTs"==l?(0,r.jsxs)("div",{className:S().filter_container,children:[(0,r.jsxs)("div",{className:S().select_box,style:{height:"50px",width:"100%"},children:[(0,r.jsxs)("select",{children:[(0,r.jsx)("option",{children:"1 Star"}),(0,r.jsx)("option",{children:"2 Star"}),(0,r.jsx)("option",{children:"3 Star"}),(0,r.jsx)("option",{children:"4 Star"}),(0,r.jsx)("option",{children:"5 Star"})]}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"51",viewBox:"0 0 25 51",children:(0,r.jsxs)("g",{transform:"translate(-1393 -359)",children:[(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1393 359)",fill:"#fff"}),(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1418 410) rotate(180)",fill:"#fff"})]})})]}),(0,r.jsxs)("div",{className:S().select_box,style:{height:"50px",width:"100%"},children:[(0,r.jsxs)("select",{children:[(0,r.jsx)("option",{children:"Pink"}),(0,r.jsx)("option",{children:"Purple"}),(0,r.jsx)("option",{children:"Blue"}),(0,r.jsx)("option",{children:"Teal"}),(0,r.jsx)("option",{children:"Lime"}),(0,r.jsx)("option",{children:"Green"}),(0,r.jsx)("option",{children:"Yellow"}),(0,r.jsx)("option",{children:"Orange"}),(0,r.jsx)("option",{children:"Red"})]}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"51",viewBox:"0 0 25 51",children:(0,r.jsxs)("g",{transform:"translate(-1393 -359)",children:[(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1393 359)",fill:"#fff"}),(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1418 410) rotate(180)",fill:"#fff"})]})})]}),(0,r.jsxs)("div",{className:S().select_box,style:{height:"50px",width:"100%"},children:[(0,r.jsxs)("select",{children:[(0,r.jsx)("option",{children:"Striped"}),(0,r.jsx)("option",{children:"Spotted"}),(0,r.jsx)("option",{children:"Zigzag"}),(0,r.jsx)("option",{children:"Checkered"}),(0,r.jsx)("option",{children:"Cross"}),(0,r.jsx)("option",{children:"Sharp"})]}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"51",viewBox:"0 0 25 51",children:(0,r.jsxs)("g",{transform:"translate(-1393 -359)",children:[(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1393 359)",fill:"#fff"}),(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1418 410) rotate(180)",fill:"#fff"})]})})]})]}):"Search Passive NFTs"==l?(0,r.jsxs)("div",{className:S().filter_container,children:[(0,r.jsxs)("div",{className:S().select_box,style:{height:"50px",width:"100%"},children:[(0,r.jsxs)("select",{children:[(0,r.jsx)("option",{children:"1 Star"}),(0,r.jsx)("option",{children:"2 Star"}),(0,r.jsx)("option",{children:"3 Star"}),(0,r.jsx)("option",{children:"4 Star"}),(0,r.jsx)("option",{children:"5 Star"})]}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"51",viewBox:"0 0 25 51",children:(0,r.jsxs)("g",{transform:"translate(-1393 -359)",children:[(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1393 359)",fill:"#fff"}),(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1418 410) rotate(180)",fill:"#fff"})]})})]}),(0,r.jsxs)("div",{className:S().select_box,style:{height:"50px",width:"100%"},children:[(0,r.jsxs)("select",{children:[(0,r.jsx)("option",{children:"1 Requirement"}),(0,r.jsx)("option",{children:"2 Requirements"}),(0,r.jsx)("option",{children:"3 Requirements"}),(0,r.jsx)("option",{children:"4 Requirements"}),(0,r.jsx)("option",{children:"5 Requiremenst"})]}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"51",viewBox:"0 0 25 51",children:(0,r.jsxs)("g",{transform:"translate(-1393 -359)",children:[(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1393 359)",fill:"#fff"}),(0,r.jsx)("path",{d:"M12.5,0,25,19H0Z",transform:"translate(1418 410) rotate(180)",fill:"#fff"})]})})]})]}):null,["Search Passive NFTs","Search Active NFTs"].includes(l)?(0,r.jsx)("div",{className:"".concat(S().colored_button," ").concat(S().grey_button),style:{marginTop:"10px",height:"44px"},children:"Search by Filter"}):null,(0,r.jsx)("div",{className:S().line}),(0,r.jsx)("div",{className:S().mbc_item_card_container,children:null!=d&&null!=d.market_nfts&&d.market_nfts.market_nfts.length>0?function(){for(var t=[],e=0;e<d.market_nfts.market_nfts.length;e++)t.push((0,r.jsx)(C,{data:d.market_nfts.market_nfts[e]}));return t}():(0,r.jsx)("div",{className:S().grey_info_block,style:{justifyContent:"center",display:"flex"},children:"\u26a0\ufe0f\xa0No Market Items"})}),(0,r.jsx)(k.Z,{query:t.query})]})},O=n(1428),V=n(5953),U=n(3119);function D(){var t=(0,U.Z)(["\n  query ($page: Int) {\n    user {\n      username\n      bsc_address\n    }\n    misc {\n      total_players\n      ettr_minted\n      nft_circulation\n      active_hashes\n      passive_hashes\n    }\n    user_info {\n      current_energy\n      max_energy\n      unclaimed_ettr\n      active_nfts\n      passive_nfts\n      node_used\n    }\n    market_nfts(page: $page) {\n      market_nfts {\n        id\n        current_owner\n        original_owner\n        creation_date\n        nft_token_id\n        nft_type\n        nft_traits\n        nft_hash\n        nft_stars\n        nft_requirement\n        status\n        market_info\n      }\n      active_nfts\n      passive_nfts\n    }\n  }\n"]);return D=function(){return t},t}var I=(0,n(2283).Ps)(D()),L=n(7593),G=function(){(0,L.useRouter)();var t=(0,p.useState)(null),e=(t[0],t[1]),n=v.store.dispatch,a=(0,s.Z)((0,V.t)(I),2),l=a[0],u=a[1],x=(u.loading,u.error,u.data);return(0,p.useEffect)((function(){l({variables:{page:1}})}),[]),(0,p.useEffect)((function(){void 0!==x&&(n({type:"queryStateReducer/SET",value:x}),null!=x.user?(n({type:"edit/loggedStateReducer/LOGGED_IN"}),e(!1)):(n({type:"edit/loggedStateReducer/LOGGED_OUT"}),e(!0)))}),[x]),(0,r.jsxs)("div",{className:c().page_root,children:[(0,r.jsx)(d.Z,{}),(0,r.jsx)(h.ZP,{}),(0,r.jsx)(o.Z,{}),(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Clettr | Marketplace"})}),(0,r.jsx)("div",{className:c().page_main,children:(0,r.jsx)(F,{query:l})}),(0,r.jsx)(O.Z,{})]})}},5807:function(t,e,n){t.exports=n(2564)}},function(t){t.O(0,[903,985,539,565,774,888,179],(function(){return e=4826,t(t.s=e);var e}));var e=t.O();_N_E=e}]);