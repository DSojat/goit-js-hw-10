import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as t}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");t.settings({messageColor:"white",messageSize:"18",theme:"light",position:"topCenter",close:!1,progressBar:!1});s.addEventListener("submit",i=>{i.preventDefault();const o=s.elements.delay.value,r=s.elements.state.value;new Promise((e,m)=>{setTimeout(()=>{r==="fulfilled"?e(`✅ Fulfilled promise in ${o}ms`):m(`❌ Rejected promise in ${o}ms`)},o)}).then(e=>t.show({message:e,backgroundColor:"#329932"})).catch(e=>t.show({message:e,backgroundColor:"#ff7373"})),s.reset()});
//# sourceMappingURL=commonHelpers2.js.map
