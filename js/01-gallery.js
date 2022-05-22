import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkUp = createElement(galleryItems);

galleryList.insertAdjacentHTML('afterbegin', galleryMarkUp);
galleryList.addEventListener("click", onGalleryListClick);
// galleryList.document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     instance.close();
//   }
// })
function createElement(galleryItems){ 
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
function onGalleryListClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  } else {
    const instance = basicLightbox.create(`<img src= "${e.target.dataset.source}" alt="${e.target.alt}"/>`,
       { onShow: () => {window.addEventListener('keydown', onEscPress) } },
    );
    instance.show()
function onEscPress(e) {
        if (e.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscPress);
        }
}
  } 
  console.log(e.target);
}

