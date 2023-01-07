import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
for (let i = 0; i < galleryItems.length; i++) {
  const item = document.createElement('a');
  item.href = galleryItems[i].original;
  item.classList.add('gallery__item');
  gallery.append(item);
  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = galleryItems[i].preview;
  image.alt = galleryItems[i].description;
  item.append(image);
}
let simpleGallery = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.addEventListener('click', evt => {
  evt.stopPropagation();
  evt.preventDefault();

  if (evt.target.classList.contains('gallery__image')) {
    simpleGallery.open(evt);
  }
});
