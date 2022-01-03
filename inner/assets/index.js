import{j as u,h as a,s as c,r as f,W as g,R as y,a as h}from"./vendor.js";const x=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};x();const r=u.exports.jsx,p=u.exports.jsxs,b=a("20240721","YYYYMMDD"),m=()=>a.duration(b.diff(a())),S=c.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
overflow-y: auto;
background-image: linear-gradient(-45deg, rgb(33, 150, 243), rgb(102, 178, 240));
color: white;
`,v=c.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`,M=c.span`
  font-size: 3.5rem;
`;function l(o){return o.toString().padStart(2,"0")}function j(){const[o,n]=f.exports.useState(m());return f.exports.useEffect(()=>{const s=setInterval(()=>n(m()),1e3);return()=>clearInterval(s)},[o,n]),r(S,{children:r(v,{children:p(M,{children:[o.asDays().toFixed(0),":",l(o.hours()),":",l(o.minutes()),":",l(o.seconds())]})})})}const O=g`
    body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;y.render(p(h.StrictMode,{children:[r(O,{}),r(j,{})]}),document.getElementById("root"));
