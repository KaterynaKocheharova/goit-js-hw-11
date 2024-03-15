// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const imageSearchForm = document.querySelector('.image-search-form');
imageSearchForm.addEventListener('submit', handleImageSearchFormSubmit);

function handleImageSearchFormSubmit(event) {
  event.preventDefault();
  if (event.currentTarget.elements.searchImage.value.trim() === '') {
    alert('You should fill in all the fields');
    return;
  }
  const imageToSearchFor = event.currentTarget.elements.searchImage.value;
  event.currentTarget.reset();

  // MAKING SERVER REQUEST

  const imageSearchParams = new URLSearchParams({
    key: '42878081-96b370588af70c81d3a302fb0',
    q: imageToSearchFor,
    image_type: 'photo',
    orientation: 'horizontal',
    order: 'latest',
    per_page: 9,
    safesearch: true,
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
      console.log(response);
      if (!response.hits.length) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          messageColor: "#fafafb",
          messageSize: "16px",
          maxWidth: "432px",
          backgroundColor: "rgb(239, 64, 64)",
          timeout: false,
          position: "topRight",
          progressBarColor: "rgb(181, 27, 27)",
          icon: 'icon-error-sign',
          

        });
      }
    });
}
