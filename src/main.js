// ======================================= INCLUDING IZITOAST

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ======================================= IMPORTING RENDER IMAGES FUNCTION
import { findImages } from './js/pixabay.api';

const imageSearchForm = document.querySelector('.image-search-form');
imageSearchForm.addEventListener('submit', handleImageSearchFormSubmit);

// ======================================= HANDLE FORM SUBMIT

function handleImageSearchFormSubmit(event) {
  event.preventDefault();
  const imageToSearchFor = event.currentTarget.elements.searchImage.value.trim();

  if (imageToSearchFor === "") {
    iziToast.warning({
      message: 'Write what image you want to search for',
      position: 'topRight'
    });
    return;
  }

  event.currentTarget.reset();

  // calling findimages function; making a request
  findImages(imageToSearchFor);
}
