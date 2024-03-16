// ======================================= INCLUDING IZITOAST

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { findImages } from './js/pixabay.api';

const imageSearchForm = document.querySelector('.image-search-form');
imageSearchForm.addEventListener('submit', handleImageSearchFormSubmit);


// ======================================= HANDLE FORM SUBMIT

function handleImageSearchFormSubmit(event) {
  event.preventDefault();
  if (event.currentTarget.elements.searchImage.value.trim() === '') {
    iziToast.warning({
      message: 'Write what image you want to search for',
      position: 'topRight'
    });
    return;
  }
  const imageToSearchFor = event.currentTarget.elements.searchImage.value;
  event.currentTarget.reset();
  findImages(imageToSearchFor);
}
