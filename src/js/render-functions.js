// IMAGES GALLERY
export const gallery = document.querySelector('.images-gallery');

export function renderImages(response) {
  // control log
  console.log(response.hits);
  // all needed images
  const images = response.hits;
  // creating markup
  const galleryMarkup = images.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      downloads,
      comments,
    }) =>
      `
      <li class="gallery-item">
        <a class="image-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>

        <div class="tags-container">
          <div class="tag">
            <p class="tag-name">likes</p>
            <span class="tag-details">${likes}</span>
          </div>
          <div class="tag">
            <p class="tag-name">views</p>
            <span class="tag-details">${views}</span>
          </div>
          <div class="tag">
            <p class="tag-name">downloads</p>
            <span class="tag-details">${downloads}</span>
          </div>
          <div class="tag">
            <p class="tag-name">comments</p>
            <span class="tag-details">${comments}</span>
          </div>
        </div>
      </li>
      `
  ).join("");

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}
