import{S as p,i as n}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const c=document.querySelector(".images-gallery");function u(s){let t;const r=s.hits.map(({webformatURL:e,largeImageURL:a,tags:o,likes:l,views:g,downloads:m,comments:d})=>`
      <li class="gallery-item">
        <a class="image-link" href="${a}">
          <img class="gallery-image" src="${e}" alt="${o}" />
        </a>

        <div class="tags-container">
          <div class="tag">
            <p class="tag-name">likes</p>
            <span class="tag-details">${l}</span>
          </div>
          <div class="tag">
            <p class="tag-name">views</p>
            <span class="tag-details">${g}</span>
          </div>
          <div class="tag">
            <p class="tag-name">downloads</p>
            <span class="tag-details">${m}</span>
          </div>
          <div class="tag">
            <p class="tag-name">comments</p>
            <span class="tag-details">${d}</span>
          </div>
        </div>
      </li>
      `).join("");c.innerHTML=r,t?t.refresh():t=new p(".gallery a")}function f(s){const t='<span class="loader"></span>';c.innerHTML=t;const i=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:s,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0});fetch(`https://pixabay.com/api/?${i}`).then(r=>{if(r.ok)return r.json();throw new Error("response.code")}).then(r=>{r.hits.length?u(r):n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}).catch(r=>{console.log(r)})}const h=document.querySelector(".image-search-form");h.addEventListener("submit",y);function y(s){if(s.preventDefault(),s.currentTarget.elements.searchImage.value.trim()===""){n.warning({message:"Write what image you want to search for",position:"topRight"});return}const t=s.currentTarget.elements.searchImage.value;s.currentTarget.reset(),f(t)}
//# sourceMappingURL=commonHelpers.js.map