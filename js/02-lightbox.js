import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
function createGalleryCardsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    
        <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            title="${description}"
            alt="${description}" />
        </a>
  
    `;
    }).join('');
};
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
console.log(galleryItems);
galleryContainer.addEventListener('click', onClick);
function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }
    
    const lightbox = new SimpleLightbox('.gallery a', { caption: true, captionDelay: 250});
  
}

