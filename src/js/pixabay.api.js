// ============================================= INCLUDING IZITOAST
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { renderImages } from './render-functions';

// ===================================== MAKING SERVER REQUEST TO FIND IMAGES
export function findImages(image) {

  const imageSearchParams = new URLSearchParams({
    key: '42878081-96b370588af70c81d3a302fb0',
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    order: 'latest',
    safesearch: true,
  });

  // making request to pixabay
  fetch(`https://pixabay.com/api/?${imageSearchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('response.code');
        return;
      } else {
        return response.json();
      }
    })
    // no images handling
    .then(response => {
      console.log(response);
      if (!response.hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          messageSize: '16px',
          maxWidth: '432px',
          backgroundColor: 'rgb(239, 64, 64)',
          position: 'topRight',
          progressBarColor: 'rgb(181, 27, 27)',
          // icon: 'icon-error-sign',
        });
      } else {
        // calling rendering images function
        renderImages(response);
      }
    }) // handling an error
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight'
      });
    });
}
