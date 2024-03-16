// ======================================= INLCUDING SIMPLE LIGHTBOX
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// ======================================== GALLERY VARIABLES
export const gallery = document.querySelector('.images-gallery');

// ======================================== RENDERING IMAGES
export function renderImages(response) {
  let myLightboxGallery;
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

  // adding markup
  gallery.innerHTML = galleryMarkup;

  // simple lightbox creating or refreshing
  if (!myLightboxGallery) {
    myLightboxGallery = new SimpleLightbox('.gallery a');
  } else {
    // If SimpleLightbox is already initialized, call refresh method
    myLightboxGallery.refresh();
  }
}
