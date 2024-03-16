import{S as m,i as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const u=document.querySelector(".images-gallery");let l;function f(s){console.log(s.hits);const t=s.hits.map(({webformatURL:i,largeImageURL:e,tags:a,likes:o,views:n,downloads:c,comments:g})=>`
      <li class="gallery-item">
        <a class="image-link" href="${e}">
          <img class="gallery-image" src="${i}" alt="${a}" />
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
            <span class="tag-details">${g}</span>
          </div>
        </div>
      </li>
      `).join("");u.innerHTML=t,l?l.refresh():l=new m(".gallery a")}function p(s){const r=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:s,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0});fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(t.ok)return t.json();throw new Error("response.code")}).then(t=>{t.hits.length?f(t):d.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",timeout:!1,position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}).catch(t=>{console.log(t)})}const h=document.querySelector(".image-search-form");h.addEventListener("submit",y);function y(s){if(s.preventDefault(),s.currentTarget.elements.searchImage.value.trim()===""){alert("You should fill in all the fields");return}const r=s.currentTarget.elements.searchImage.value;s.currentTarget.reset(),p(r)}
//# sourceMappingURL=commonHelpers.js.map
