import{i as g}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m=document.querySelector(".images-gallery");function d(s){console.log(s.hits);const a=s.hits.map(({webformatURL:i,largeImageURL:e,tags:t,likes:o,views:n,downloads:c,comments:l})=>`
      <li class="gallery-item">
        <a class="image-link" href="${e}">
          <img class="gallery-image" src="${i}" alt="${t}" />
        </a>

        <div class="tags-container">
          <div class="tag">
            <p class="tag-name">likes</p>
            <span class="tag-details">${o}</span>
          </div>
          <div class="tag">
            <p class="tag-name">views</p>
            <span class="tag-details">${n}</span>
          </div>
          <div class="tag">
            <p class="tag-name">downloads</p>
            <span class="tag-details">${c}</span>
          </div>
          <div class="tag">
            <p class="tag-name">comments</p>
            <span class="tag-details">${l}</span>
          </div>
        </div>
      </li>
      `).join("");m.insertAdjacentHTML("beforeend",a)}function u(s){const r=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:s,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0});fetch(`https://pixabay.com/api/?${r}`).then(a=>{if(a.ok)return a.json();throw new Error("response.code")}).then(a=>{a.hits.length?d(a):g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",timeout:!1,position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}).catch(a=>{console.log(a)})}const f=document.querySelector(".image-search-form");f.addEventListener("submit",p);function p(s){if(s.preventDefault(),s.currentTarget.elements.searchImage.value.trim()===""){alert("You should fill in all the fields");return}const r=s.currentTarget.elements.searchImage.value;s.currentTarget.reset(),u(r)}
//# sourceMappingURL=commonHelpers.js.map
