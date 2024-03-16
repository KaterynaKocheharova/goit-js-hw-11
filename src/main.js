
import {findImages} from "./js/pixabay.api";

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

  findImages(imageToSearchFor);
}








