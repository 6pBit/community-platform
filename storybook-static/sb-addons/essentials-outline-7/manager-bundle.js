try{(()=>{var e=__REACT__,{Children:t,Component:o,Fragment:r,Profiler:a,PureComponent:n,StrictMode:l,Suspense:s,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:u,cloneElement:i,createContext:c,createElement:S,createFactory:m,createRef:_,forwardRef:p,isValidElement:d,lazy:T,memo:O,useCallback:y,useContext:b,useDebugValue:h,useEffect:C,useImperativeHandle:E,useLayoutEffect:g,useMemo:k,useReducer:A,useRef:R,useState:L,version:B}=__REACT__,{ActiveTabs:P,Consumer:f,ManagerContext:I,Provider:M,addons:v,combineParameters:H,controlOrMetaKey:N,controlOrMetaSymbol:F,eventMatchesShortcut:D,eventToShortcut:W,isMacLike:w,isShortcutTaken:x,keyToSymbol:K,merge:Y,mockChannel:U,optionOrAltSymbol:G,shortcutMatchesShortcut:V,shortcutToHumanString:q,types:z,useAddonState:Z,useArgTypes:$,useArgs:j,useChannel:J,useGlobalTypes:Q,useGlobals:X,useParameter:ee,useSharedState:te,useStoryPrepared:oe,useStorybookApi:re,useStorybookState:ae}=(__STORYBOOK_API__,__STORYBOOK_API__),{A:ne,ActionBar:le,AddonPanel:se,Badge:ue,Bar:ie,Blockquote:ce,Button:Se,ClipboardCode:me,Code:_e,DL:pe,Div:de,DocumentWrapper:Te,ErrorFormatter:Oe,FlexBar:ye,Form:be,H1:he,H2:Ce,H3:Ee,H4:ge,H5:ke,H6:Ae,HR:Re,IconButton:Le,IconButtonSkeleton:Be,Icons:Pe,Img:fe,LI:Ie,Link:Me,ListItem:ve,Loader:He,OL:Ne,P:Fe,Placeholder:De,Pre:We,ResetWrapper:we,ScrollArea:xe,Separator:Ke,Spaced:Ye,Span:Ue,StorybookIcon:Ge,StorybookLogo:Ve,Symbols:qe,SyntaxHighlighter:ze,TT:Ze,TabBar:$e,TabButton:je,TabWrapper:Je,Table:Qe,Tabs:Xe,TabsState:et,TooltipLinkList:tt,TooltipMessage:ot,TooltipNote:rt,UL:at,WithTooltip:nt,WithTooltipPure:lt,Zoom:st,codeCommon:ut,components:it,createCopyToClipboardFunction:ct,getStoryHref:St,icons:mt,interleaveSeparators:_t,nameSpaceClassNames:pt,resetComponents:dt,withReset:Tt}=(__STORYBOOK_COMPONENTS__,__STORYBOOK_COMPONENTS__),Ot="storybook/outline",yt="outline",bt=O((function(){let[t,o]=X(),r=re(),a=[!0,"true"].includes(t[yt]),n=y((()=>o({[yt]:!a})),[a]);return C((()=>{r.setAddonShortcut(Ot,{label:"Toggle Outline [O]",defaultShortcut:["O"],actionName:"outline",showInMenu:!1,action:n})}),[n,r]),e.createElement(Le,{key:"outline",active:a,title:"Apply outlines to the preview",onClick:n},e.createElement(Pe,{icon:"outline"}))}));v.register(Ot,(()=>{v.add(Ot,{title:"Outline",type:z.TOOL,match:({viewMode:e})=>!(!e||!e.match(/^(story|docs)$/)),render:()=>e.createElement(bt,null)})}))})()}catch(e){console.error("[Storybook] One of your manager-entries failed: "+import.meta.url,e)}