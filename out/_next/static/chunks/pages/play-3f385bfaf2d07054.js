(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{2190:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/play",function(){return l(1041)}])},1041:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return w}});var n=l(4637),o=l(5807),_=l.n(o),c=l(6369),a=l.n(c),s=l(6381),r=l(5016),i=l(3510),p=l(7135),y=l(9938),b=l(7593),d=l(9496),m=l(3628),k=l(7228),x=l(1413),u=l(4713),f=function(){var e=(0,p.Z)((function(e){var t;return(0,y.__generator)(this,(function(l){switch(l.label){case 0:return t=null,[4,u.b.post("/play/",{node_id:e.node_id}).then((function(e){(0,s.M)(e.data.message,e.data.success),t=e.data}))];case 1:return l.sent(),[2,t]}}))}));return function(t){return e.apply(this,arguments)}}(),h=l(4452),g=l.n(h),v=l(7938),j=function(e){var t=(0,b.useRouter)(),l=(0,m.v9)((function(e){return e.playState.value})),o=(0,d.useState)(null),_=o[0],c=o[1];return(0,d.useEffect)((function(){null==l?t.push("/"):(0,p.Z)((function(){return(0,y.__generator)(this,(function(e){switch(e.label){case 0:return[4,f({node_id:l.node.id})];case 1:return c.apply(void 0,[e.sent()]),[2]}}))}))()}),[l]),null==l||null==_?(0,n.jsx)("div",{className:g().loading_circle_container,children:(0,n.jsx)("img",{src:"./images/svgs/loading-circle.svg",alt:"loading-circle"})}):(0,n.jsx)("div",{className:g().play_block_component_root,children:(0,n.jsxs)("div",{className:g().pbc_info_container,children:[(0,n.jsx)("div",{className:g().light_grey_info_block,style:{display:"flex",justifyContent:"center"},children:"Set"}),(0,n.jsxs)("div",{className:g().pbc_set_item_container,style:{margin:"15px 0px"},children:[(0,n.jsx)("div",{className:g().pbc_left_item_container,children:(0,n.jsx)(v.Z,{data:l.node,no_borders:!0,hover:!1})}),(0,n.jsx)("div",{className:g().vertical_line,style:{height:"440px"}}),(0,n.jsx)("div",{className:g().pbc_right_item_container,children:function(){for(var e=[],t=0;t<l.set.length;t++)e.push((0,n.jsx)(v.Z,{data:l.set[t],no_borders:!0,hover:!1}));return e}()})]}),(0,n.jsxs)("div",{style:{display:"flex",gap:"15px",alignItems:"center"},children:[(0,n.jsxs)("div",{className:g().light_black_info_block,style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)("p",{className:g().transparent_text,children:"Set Hash"}),(0,n.jsx)("p",{children:l.set_hash})]}),(0,n.jsxs)("div",{className:g().light_black_info_block,style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)("p",{className:g().transparent_text,children:"Node Hash"}),(0,n.jsx)("p",{children:l.node.nft_hash})]}),(0,n.jsxs)("div",{className:g().light_black_info_block,style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)("p",{className:g().transparent_text,children:"Total Boost"}),(0,n.jsx)("p",{className:g().yellow_text,children:"x".concat(l.boost," Boost")})]})]}),(0,n.jsx)("div",{className:g().line}),(0,n.jsx)("div",{className:g().light_grey_info_block,style:{display:"flex",justifyContent:"center",marginBottom:"15px"},children:"Results"}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"15px",alignItems:"center"},children:[(0,n.jsxs)("div",{className:g().light_black_info_block,style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)("p",{className:g().transparent_text,children:"Rounds"}),(0,n.jsx)("p",{children:_.rounds})]}),(0,n.jsxs)("div",{className:g().light_black_info_block,style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)("p",{className:g().transparent_text,children:"Final Difficulty"}),(0,n.jsx)("p",{children:_.final_difficulty})]}),(0,n.jsxs)("div",{className:g().light_black_info_block,style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,n.jsx)("img",{src:"./images/svgs/clettr-token.svg",alt:"clettr-logo",style:{width:"15px",transform:"scale(1.5)"}}),(0,n.jsx)("p",{className:g().transparent_text,children:"Rewards"})]}),(0,n.jsxs)("p",{style:{display:"flex",gap:"5px"},children:[(0,x.Vs)(_.total_reward),(0,n.jsx)("span",{className:g().transparent_text,children:(0,x.Vs)(null!=k.store.getState().tickerPriceState.value?Number(k.store.getState().tickerPriceState.value)*Number(_.total_reward):0)}),(0,n.jsx)("span",{className:g().transparent_text,children:k.store.getState().currentCurrencyState.value.toUpperCase()})]})]})]}),(0,n.jsx)("div",{className:g().line}),(0,n.jsx)("div",{className:g().light_grey_info_block,style:{display:"flex",justifyContent:"center",marginBottom:"15px"},children:"Word Cracked"}),(0,n.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"15px",justifyContent:"center"},children:function(){for(var e=[],t=0;t<_.words_cracked.length;t++)e.push((0,n.jsx)("div",{className:g().grey_info_block,style:{display:"flex",justifyContent:"center",maxWidth:"250px"},children:_.words_cracked[t]}));return e}()})]})})},N=l(1428),w=function(){return(0,n.jsxs)("div",{className:a().page_root,children:[(0,n.jsx)(r.Z,{}),(0,n.jsx)(i.ZP,{}),(0,n.jsx)(s.Z,{}),(0,n.jsx)(_(),{children:(0,n.jsx)("title",{children:"Clettr | Marketplace"})}),(0,n.jsx)("div",{className:a().page_main,children:(0,n.jsx)(j,{})}),(0,n.jsx)(N.Z,{})]})}},4452:function(e){e.exports={star_svg:"play-block-component-style_star_svg__jRRGc",line:"play-block-component-style_line__9MMdz",vertical_line:"play-block-component-style_vertical_line__4NTGF",link_hover:"play-block-component-style_link_hover__4i5OA",no_select:"play-block-component-style_no_select__mMzlI",close_button:"play-block-component-style_close_button___oRbu",p_hover:"play-block-component-style_p_hover__Xjzu4",transparent_text:"play-block-component-style_transparent_text__EdCW6",red_text:"play-block-component-style_red_text__q5k0q",green_text:"play-block-component-style_green_text__YK8pV",yellow_text:"play-block-component-style_yellow_text__xLGIs",forge_arrow:"play-block-component-style_forge_arrow__caYcN",arrow_body:"play-block-component-style_arrow_body__udDWR",arrow_border:"play-block-component-style_arrow_border__LWU0n",loading_circle_container:"play-block-component-style_loading_circle_container__ZU6Gm",loading_circle_rotation:"play-block-component-style_loading_circle_rotation__sRHby",fill_background:"play-block-component-style_fill_background__PTtfR",fill_bar:"play-block-component-style_fill_bar__wBOZ7",float_element:"play-block-component-style_float_element__F5_5K",float_element_animation:"play-block-component-style_float_element_animation__exKKU",slider:"play-block-component-style_slider__s_iHX",slider_dark:"play-block-component-style_slider_dark__T_Cvf",token_live_price_container:"play-block-component-style_token_live_price_container__dRWWJ",token_live_price_container_no_hover:"play-block-component-style_token_live_price_container_no_hover__AbIJF",positive_arrow:"play-block-component-style_positive_arrow__rOu2g",negative_arrow:"play-block-component-style_negative_arrow__TLQw_",requirement_box:"play-block-component-style_requirement_box___tIth",grey_info_block:"play-block-component-style_grey_info_block__ANo__",black_info_block:"play-block-component-style_black_info_block__A17WZ",light_black_info_block:"play-block-component-style_light_black_info_block__Fm259",dark_black_info_block:"play-block-component-style_dark_black_info_block__8RWSg",light_grey_info_block:"play-block-component-style_light_grey_info_block__qQD0e",colored_button:"play-block-component-style_colored_button__4GgId",black_button:"play-block-component-style_black_button__Cx6_D",grey_button:"play-block-component-style_grey_button__rCFNI",light_grey_button:"play-block-component-style_light_grey_button__5izqa",light_black_button:"play-block-component-style_light_black_button__Gl4o4",dark_black_button:"play-block-component-style_dark_black_button__n_Nk2",green_button:"play-block-component-style_green_button__j49CI",red_button:"play-block-component-style_red_button__gceUO",input_box:"play-block-component-style_input_box__TFgFm",select_box:"play-block-component-style_select_box__lREqF",play_block_component_root:"play-block-component-style_play_block_component_root___YQ4o",pbc_letter_container:"play-block-component-style_pbc_letter_container__JCSpo",item_box:"play-block-component-style_item_box__b00Dp",blank_letter:"play-block-component-style_blank_letter__WxQd_",pbc_info_container:"play-block-component-style_pbc_info_container__pNp1T",pbc_set_item_container:"play-block-component-style_pbc_set_item_container__tr9pS",pbc_right_item_container:"play-block-component-style_pbc_right_item_container__K0B3n"}},5807:function(e,t,l){e.exports=l(2564)}},function(e){e.O(0,[903,985,539,565,774,888,179],(function(){return t=2190,e(e.s=t);var t}));var t=e.O();_N_E=t}]);