import{g,r as v}from"./index-BP8_t0zE.js";import{u as b,p as O}from"./VideoPlayer-BMv-hhbs.js";function V(e,t){for(var r=0;r<t.length;r++){const a=t[r];if("string"!=typeof a&&!Array.isArray(a))for(const t in a)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(a,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>a[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var D=Object.create,n=Object.defineProperty,j=Object.getOwnPropertyDescriptor,w=Object.getOwnPropertyNames,S=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty,A=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},h=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of w(t))!M.call(e,s)&&s!==r&&n(e,s,{get:()=>t[s],enumerable:!(a=j(t,s))||a.enumerable});return e},L=(e,t,r)=>(r=null!=e?D(S(e)):{},h(e&&e.__esModule?r:n(r,"default",{value:e,enumerable:!0}),e)),R=e=>h(n({},"__esModule",{value:!0}),e),s=(e,t,r)=>(A(e,"symbol"!=typeof t?t+"":t,r),r),_={};E(_,{default:()=>y});var f=R(_),c=L(v),d=b,P=O;const x="https://play.vidyard.com/embed/v4.js",C="VidyardV4",N="onVidyardAPI";class y extends c.Component{constructor(){super(...arguments),s(this,"callPlayer",d.callPlayer),s(this,"mute",(()=>{this.setVolume(0)})),s(this,"unmute",(()=>{null!==this.props.volume&&this.setVolume(this.props.volume)})),s(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:t,config:r,onError:a,onDuration:s}=this.props,o=e&&e.match(P.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,d.getSDK)(x,C,N).then((e=>{this.container&&(e.api.addReadyListener(((e,t)=>{this.player||(this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))}),o),e.api.renderPlayer({uuid:o,container:this.container,autoplay:t?1:0,...r.options}),e.api.getPlayerMetadata(o).then((e=>{this.duration=e.length_in_seconds,s(e.length_in_seconds)})))}),a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return c.default.createElement("div",{style:t},c.default.createElement("div",{ref:this.ref}))}}s(y,"displayName","Vidyard"),s(y,"canPlay",P.canPlay.vidyard);const T=g(f),B=V({__proto__:null,default:T},[f]);export{B as V};