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

        <div>
          <div>
            <p>likes</p>
            <span>${likes}</span>
          </div>
          <div>
            <p>views</p>
            <span>${views}</span>
          </div>
          <div>
            <p>downloads</p>
            <span>${downloads}</span>
          </div>
          <div>
            <p>comments</p>
            <span>${comments}</span>
          </div>
        </div>
      </li>
      `
  );

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}
