import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
function createGalleryCardsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </div>
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
    // console.log(event.target);
    // const urlImgOriginal = event.target.dataset.source;
    // console.log(urlImgOriginal);

    const instance = basicLightbox.create(`
            <img
        src="${event.target.dataset.source}"
        width="900"
         height="700"
         />
    
`)
   instance.show()
    }
