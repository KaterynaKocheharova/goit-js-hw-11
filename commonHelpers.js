import{i as m}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=document.querySelector(".images-gallery");function d(o){console.log(o.hits);const t=o.hits.map(({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:n,downloads:c,comments:l})=>`
      <li class="gallery-item">
        <a class="image-link" href="${e}">
          <img class="gallery-image" src="${i}" alt="${r}" />
        </a>

        <div>
          <div>
            <p>likes</p>
            <span>${a}</span>
          </div>
          <div>
            <p>views</p>
            <span>${n}</span>
          </div>
          <div>
            <p>downloads</p>
            <span>${c}</span>
          </div>
          <div>
            <p>comments</p>
            <span>${l}</span>
          </div>
        </div>
      </li>
      `);u.insertAdjacentHTML("beforeend",t)}function f(o){const s=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:o,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0,min_height:200});fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(t.ok)return t.json();throw new Error("response.code")}).then(t=>{t.hits.length?d(t):m.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",timeout:!1,position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}).catch(t=>{console.log(t)})}const g=document.querySelector(".image-search-form");g.addEventListener("submit",p);function p(o){if(o.preventDefault(),o.currentTarget.elements.searchImage.value.trim()===""){alert("You should fill in all the fields");return}const s=o.currentTarget.elements.searchImage.value;o.currentTarget.reset(),f(s)}
//# sourceMappingURL=commonHelpers.js.map
