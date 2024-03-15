// MAKING SERVER REQUEST
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import {renderImages} from "./render-functions";

export function findImages(image) {
  const imageSearchParams = new URLSearchParams({
    key: '42878081-96b370588af70c81d3a302fb0',
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    order: 'latest',
    safesearch: true,
    min_height: 200
  });

  fetch(`https://pixabay.com/api/?${imageSearchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('response.code');
        return;
      } else {
        return response.json();
      }
    })
    .then(response => {
      if (!response.hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          messageSize: '16px',
          maxWidth: '432px',
          backgroundColor: 'rgb(239, 64, 64)',
          timeout: false,
          position: 'topRight',
          progressBarColor: 'rgb(181, 27, 27)',
          // icon: 'icon-error-sign',
        });
      } else {
        renderImages(response)
      }
    })
    .catch(error => {
      console.log(error);
    });
}
