import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryElem = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryElem);

function createGallery(galleryItems) {
    return galleryItems.reduce((acc, { preview, original, description }) =>
        acc + `<li> <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> </li>`, "")
};
const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });