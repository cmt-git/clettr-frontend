(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[171],{3132:function(e,n,o){"use strict";o.d(n,{Z:function(){return y}});var t=o(4637),_=o(3628),r=o(3114),c=o(7905),l=o.n(c),a=o(665),i=o(7135),s=o(9938),m=o(9496),p=o(9775);function u(e){return b.apply(this,arguments)}function b(){return(b=(0,i.Z)((function(e){return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,(0,p.sB)(e)];case 1:return[4,n.sent().data];case 2:return[2,n.sent()]}}))}))).apply(this,arguments)}var k=o(1413),h=o(3894),d=o.n(h),f=function(e){var n=e.current_price;if(null==n)return null;var o=Number(n.open)>Number(n.close)?Number(n.open):Number(n.close),_=o==Number(n.open)?Number(n.close):Number(n.open),r=(e.highest-o)/(e.highest-e.lowest)*100,c=(o-_)/(e.highest-e.lowest)*100;return(0,t.jsxs)("div",{className:d().tcc_bar,onMouseEnter:function(){console.log(n),w(n.open<n.close?n.open:n.close),v(n.date)},children:[(0,t.jsx)("div",{className:d().upper_bar,style:{height:"".concat(r,"%")}}),(0,t.jsx)("div",{className:n.open<n.close?d().positive_middle_bar:d().negative_middle_bar,style:{height:"".concat(c,"%")}}),(0,t.jsx)("div",{className:n.open<n.close?d().positive_lower_bar:d().negative_lower_bar})]})},g=null,w=null,v=null,x=function(e){var n=(0,m.useState)(0),o=n[0],c=n[1],l=(0,m.useState)(0),p=l[0],b=l[1],h=(0,r.Z)(),x=(0,m.useRef)(),y=(0,m.useState)(null),j=y[0],N=y[1],q=(0,m.useState)(null),T=q[0],S=q[1];w=N,v=S;var F=(0,m.useState)(null),G=F[0],C=F[1],I=(0,m.useState)(0),Z=I[0],B=I[1],E=function(){var e=(0,i.Z)((function(e){var n,o;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return n=Z,"increase"==e?n+=1:"decrease"==e&&Z-1>=0&&(n-=1),console.log(n,e,Z,"increase"==e),[4,u(n)];case 1:return o=t.sent(),console.log(o),o.length>0?(b(o.length),C(o)):n-=1,B(n),[2]}}))}));return function(n){return e.apply(this,arguments)}}();g=E,(0,m.useEffect)((function(){(0,i.Z)((function(){return(0,s.__generator)(this,(function(e){return E("default"),[2]}))}))()}),[]);var A=(0,_.v9)((function(e){return e.currentCurrencyState.value}));return(0,m.useEffect)((function(){console.log(j)}),[j]),(0,t.jsxs)("div",{className:d().token_chart_component_root,children:[(0,t.jsx)("div",{className:d().token_price_info_container,children:(0,t.jsxs)("div",{className:d().tpic_right_container,children:[(0,t.jsx)("img",{src:"./images/svgs/clettr-token.svg",alt:"clettr-token"}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{children:[null==j&&null!=A?"---":(0,k.Vs)(j*("php"==A?a.r:1)),(0,t.jsx)("span",{className:d().transparent_text,style:{marginLeft:"5px"},children:null!=A?A.toUpperCase():null})]}),(0,t.jsx)("p",{className:d().transparent_text,style:{fontSize:"13px"},children:"".concat(null==T?"---":(0,k.IZ)(T))})]})]})}),(0,t.jsx)("div",{className:d().bar_graph_container,ref:x,style:{justifyContent:1==e.priceonly?"flex-start":"center"},children:null!=G&&null!=G[0]?function(){for(var e=Number(G[0].open),n=Number(G[0].open),o=0;o<G.length;o++)void 0!=G[o]&&(e<Number(G[o].open)&&(e=Number(G[o].open)),n>Number(G[o].open)&&(n=Number(G[o].open)));for(var _=[],r=0;r<p;r++)_.push((0,t.jsx)(f,{highest:e,lowest:n,index:r,current_price:G[r]}));return _}():null}),h<=1200||1==e.priceonly?(0,t.jsx)("input",{type:"range",className:"".concat(d().slider," ").concat(d().slider_dark),min:"0",max:"100",value:o,onChange:function(e){c(parseInt(e.currentTarget.value)),x.current.style.transform="translateX(".concat(parseInt(e.currentTarget.value)/p*-(1500-x.current.getBoundingClientRect().width),"px)")}}):null]})},y=function(e){var n=(0,r.Z)(),o=(0,_.v9)((function(e){return e.queryState.value})),c=(0,_.v9)((function(e){return e.colorThemeState.value}));return(0,t.jsxs)("div",{className:l().welcome_block_component_main,style:{width:!0===e.priceonly?"1000px":"100%"},children:[!0!==e.priceonly?(0,t.jsxs)("div",{className:l().header_container,children:[(0,t.jsxs)("div",{className:l().info_container,children:[(0,t.jsxs)("h1",{children:["Hello, ",(0,t.jsx)("span",{children:o.user.username})]}),(0,t.jsx)("p",{className:l().transparent_text,style:{wordWrap:"break-word",width:"100%",marginTop:"0px"},children:"Remember to have fun, and good luck!"})]}),(0,t.jsxs)("div",{className:l().info_container,style:{display:"flex",flexDirection:n>960?"row":"column",marginTop:n>960?"0px":"40px",justifyContent:"center",alignItems:"flex-start"},children:[(0,t.jsxs)("div",{className:l().info_div,style:{marginRight:n>960?"40px":"0px"},children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5",height:"5",viewBox:"0 0 5 5",children:(0,t.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#A0D951"})}),(0,t.jsxs)("p",{style:{color:"dark"==c?"white":"black",margin:"0px 5px"},children:["---",void 0!=o.user_info&&void 0!==o.user_info.total_gains?o.user_info.total_gains.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):null]}),(0,t.jsx)("p",{style:{color:"dark"==c?"#EBF2C2":"#6d7d48"},children:"Gains Today"})]}),(0,t.jsxs)("div",{className:l().info_div,children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5",height:"5",viewBox:"0 0 5 5",children:(0,t.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#FFE781"})}),(0,t.jsxs)("p",{style:{color:"dark"==c?"white":"black",margin:"0px 5px"},children:["---",void 0!=o.user_info&&void 0!==o.user_info.total_gains?o.user_info.total_gains.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):null]}),(0,t.jsx)("p",{style:{color:"dark"==c?"#FFF7D5":"#786f36"},children:"Gains Yesterday"})]})]})]}):null,(0,t.jsx)("div",{className:l().token_price_container,children:(0,t.jsx)(x,{priceonly:e.priceonly})}),(0,t.jsxs)("div",{className:l().bottom_container,children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"45.962",height:"70.962",viewBox:"0 0 45.962 70.962",className:l().arrow,onClick:function(){return g("decrease")},children:(0,t.jsxs)("g",{transform:"translate(-1485.519 -344.019)",children:[(0,t.jsx)("rect",{width:"15",height:"50",transform:"translate(1520.874 344.019) rotate(45)",fill:"#fff"}),(0,t.jsx)("rect",{width:"15",height:"50",transform:"translate(1485.519 379.626) rotate(-45)",fill:"#fff"})]})}),(0,t.jsx)(a.Z,{no_hover:!0}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"45.962",height:"70.962",viewBox:"0 0 45.962 70.962",style:{transform:"rotate(180deg)"},className:l().arrow,onClick:function(){return g("increase")},children:(0,t.jsxs)("g",{transform:"translate(-1485.519 -344.019)",children:[(0,t.jsx)("rect",{width:"15",height:"50",transform:"translate(1520.874 344.019) rotate(45)",fill:"#fff"}),(0,t.jsx)("rect",{width:"15",height:"50",transform:"translate(1485.519 379.626) rotate(-45)",fill:"#fff"})]})})]})]})}},1564:function(e,n,o){"use strict";o.d(n,{K:function(){return r}});var t=o(3119);function _(){var e=(0,t.Z)(["\n  query ($page: Int) {\n    user {\n      username\n      bsc_address\n    }\n    misc {\n      total_players\n      ettr_minted\n      nft_circulation\n      active_hashes\n      passive_hashes\n    }\n    user_info {\n      current_energy\n      max_energy\n      unclaimed_ettr\n      active_nfts\n      passive_nfts\n      node_used\n    }\n    user_set {\n      user_set {\n        id\n        current_owner\n        original_owner\n        creation_date\n        nft_token_id\n        nft_type\n        nft_traits\n        nft_hash\n        nft_stars\n        nft_requirement\n        status\n        market_info\n      }\n    }\n    user_play_history_query(page: $page) {\n      user_play_history {\n        match_nfts {\n          id\n          current_owner\n          original_owner\n          creation_date\n          nft_token_id\n          nft_type\n          nft_traits\n          nft_hash\n          nft_stars\n          nft_requirement\n          status\n          market_info\n        }\n        date\n        words_cracked\n        rounds\n        total_boost\n        final_difficulty\n        reward\n      }\n    }\n    user_earnings_query {\n      user_earnings {\n        reward\n        day\n      }\n    }\n  }\n"]);return _=function(){return e},e}var r=(0,o(2283).Ps)(_())},3894:function(e){e.exports={star_svg:"token-chart-component_star_svg__aZFtg",line:"token-chart-component_line__icG2H",vertical_line:"token-chart-component_vertical_line__MI07H",link_hover:"token-chart-component_link_hover__AfqjC",no_select:"token-chart-component_no_select__Pn82E",close_button:"token-chart-component_close_button__qWsRz",p_hover:"token-chart-component_p_hover__XpR3a",transparent_text:"token-chart-component_transparent_text__36Hye",red_text:"token-chart-component_red_text__waQKW",green_text:"token-chart-component_green_text__C5I52",yellow_text:"token-chart-component_yellow_text__x2WF3",forge_arrow:"token-chart-component_forge_arrow__GMb_Y",arrow_body:"token-chart-component_arrow_body__MRKVU",arrow_border:"token-chart-component_arrow_border__yJlAG",loading_circle_container:"token-chart-component_loading_circle_container__bTGQ5",loading_circle_rotation:"token-chart-component_loading_circle_rotation__4bhk6",fill_background:"token-chart-component_fill_background__GONbe",fill_bar:"token-chart-component_fill_bar__rGSGZ",float_element:"token-chart-component_float_element__E6Qn0",float_element_animation:"token-chart-component_float_element_animation__nyy8v",slider:"token-chart-component_slider__FlZeG",slider_dark:"token-chart-component_slider_dark__7n8gZ",token_live_price_container:"token-chart-component_token_live_price_container__jXWbh",token_live_price_container_no_hover:"token-chart-component_token_live_price_container_no_hover__AOa9O",positive_arrow:"token-chart-component_positive_arrow__xwLoR",negative_arrow:"token-chart-component_negative_arrow__mb5jo",requirement_box:"token-chart-component_requirement_box__UXwOI",grey_info_block:"token-chart-component_grey_info_block__A_G4D",black_info_block:"token-chart-component_black_info_block__SlOTA",light_black_info_block:"token-chart-component_light_black_info_block__u_zr0",dark_black_info_block:"token-chart-component_dark_black_info_block__T2TAj",light_grey_info_block:"token-chart-component_light_grey_info_block__OVF9V",colored_button:"token-chart-component_colored_button__eRvdm",black_button:"token-chart-component_black_button__oMQXu",grey_button:"token-chart-component_grey_button__ydsIh",light_grey_button:"token-chart-component_light_grey_button__qTT04",light_black_button:"token-chart-component_light_black_button__ozS6n",dark_black_button:"token-chart-component_dark_black_button__e360_",green_button:"token-chart-component_green_button__v3sD8",red_button:"token-chart-component_red_button__pglY3",input_box:"token-chart-component_input_box__T6FHc",select_box:"token-chart-component_select_box__PHMGV",token_chart_component_root:"token-chart-component_token_chart_component_root__Qov3X",token_price_info_container:"token-chart-component_token_price_info_container__spUf_",tpic_right_container:"token-chart-component_tpic_right_container__NVh26",bar_graph_container:"token-chart-component_bar_graph_container__UjwKc",tcc_bar:"token-chart-component_tcc_bar__Lb4ED",upper_bar:"token-chart-component_upper_bar__xQ5he",positive_middle_bar:"token-chart-component_positive_middle_bar__Bi_Bj",negative_middle_bar:"token-chart-component_negative_middle_bar__02Ad6",positive_lower_bar:"token-chart-component_positive_lower_bar__I1uuM",negative_lower_bar:"token-chart-component_negative_lower_bar__R0eOF"}},7905:function(e){e.exports={star_svg:"welcome-block-component_star_svg__nuTmY",line:"welcome-block-component_line__M7fA8",vertical_line:"welcome-block-component_vertical_line__STvRb",link_hover:"welcome-block-component_link_hover__Kn_Oi",no_select:"welcome-block-component_no_select__DNw5F",close_button:"welcome-block-component_close_button__ZwUc3",p_hover:"welcome-block-component_p_hover__zz9HD",transparent_text:"welcome-block-component_transparent_text__4NLOF",red_text:"welcome-block-component_red_text__1lcqJ",green_text:"welcome-block-component_green_text__koEX2",yellow_text:"welcome-block-component_yellow_text__WYRr8",forge_arrow:"welcome-block-component_forge_arrow__tLwxI",arrow_body:"welcome-block-component_arrow_body__SUqyE",arrow_border:"welcome-block-component_arrow_border__LTOn_",loading_circle_container:"welcome-block-component_loading_circle_container__ZlVc0",loading_circle_rotation:"welcome-block-component_loading_circle_rotation__kQKda",fill_background:"welcome-block-component_fill_background__tGjaI",fill_bar:"welcome-block-component_fill_bar__3q1S7",float_element:"welcome-block-component_float_element__6LkKt",float_element_animation:"welcome-block-component_float_element_animation__met1j",slider:"welcome-block-component_slider__Nl6XG",slider_dark:"welcome-block-component_slider_dark__UNTcq",token_live_price_container:"welcome-block-component_token_live_price_container__F18BE",token_live_price_container_no_hover:"welcome-block-component_token_live_price_container_no_hover__AfjAN",positive_arrow:"welcome-block-component_positive_arrow__HBFMb",negative_arrow:"welcome-block-component_negative_arrow__5iITY",requirement_box:"welcome-block-component_requirement_box__pnrBP",grey_info_block:"welcome-block-component_grey_info_block__FSCMn",black_info_block:"welcome-block-component_black_info_block__JO6Lp",light_black_info_block:"welcome-block-component_light_black_info_block__nup0H",dark_black_info_block:"welcome-block-component_dark_black_info_block__vglxK",light_grey_info_block:"welcome-block-component_light_grey_info_block__90_j0",colored_button:"welcome-block-component_colored_button__YWvTh",black_button:"welcome-block-component_black_button__Joo7Y",grey_button:"welcome-block-component_grey_button__VPiMi",light_grey_button:"welcome-block-component_light_grey_button__kpKJe",light_black_button:"welcome-block-component_light_black_button__H3Ed4",dark_black_button:"welcome-block-component_dark_black_button__76Lx2",green_button:"welcome-block-component_green_button__doFoQ",red_button:"welcome-block-component_red_button___OwG3",input_box:"welcome-block-component_input_box__hfL6X",select_box:"welcome-block-component_select_box__AVgAI",welcome_block_component_main:"welcome-block-component_welcome_block_component_main__cimCl",header_container:"welcome-block-component_header_container__Tlyxm",info_container:"welcome-block-component_info_container__ko1bq",info_div:"welcome-block-component_info_div__qp2GU",token_price_container:"welcome-block-component_token_price_container__9I63V",bottom_container:"welcome-block-component_bottom_container__azNlH",arrow:"welcome-block-component_arrow__k_qqs",overlay_container:"welcome-block-component_overlay_container__zQdkh",gem_container:"welcome-block-component_gem_container__n8aQt"}},5807:function(e,n,o){e.exports=o(2564)}}]);