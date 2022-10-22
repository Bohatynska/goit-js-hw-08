import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// console.log(galleryItems);
const galleryListRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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

    .join('');
}
galleryListRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryListRef.addEventListener('click', onGalleryListClick);

function onGalleryListClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
