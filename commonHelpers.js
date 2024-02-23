import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as d,i as l}from"./assets/vendor-77e16229.js";const u=document.querySelector("#datetime-picker"),a=document.querySelector("button[data-start]"),p=document.querySelector(".timer");a.disabled=!0;let n,t;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){n=e[0].getTime(),n<Date.now()?l.show({message:"Please choose a date in the future",messageColor:"white",messageSize:"18",theme:"dark",backgroundColor:"red",position:"topCenter",close:!1,progressBar:!1,iconUrl:"./img/circle.svg"}):a.disabled=!1}};d(u,m);a.addEventListener("click",f);function f(){t=n-Date.now(),a.disabled=!0;const e=setInterval(()=>{t=t-1e3,t<1e3&&(clearInterval(e),t=0);const s=h(t);v(s),p.innerHTML=`<div class="field">
          <span class="value" data-days>${s.days}</span>
          <span class="label">Days</span>
        </div>
        <div class="field">
          <span class="value" data-hours>${s.hours}</span>
          <span class="label">Hours</span>
        </div>
        <div class="field">
          <span class="value" data-minutes>${s.minutes}</span>
          <span class="label">Minutes</span>
        </div>
        <div class="field">
          <span class="value" data-seconds>${s.seconds}</span>
          <span class="label">Seconds</span>
        </div>`},1e3)}function h(e){const o=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),c=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:r,minutes:i,seconds:c}}function v(e){for(const s in e)e[s]=e[s].toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
