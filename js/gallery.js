import image from './gallery-items.js';
import { refs } from './refs.js';

refs.galleryEl.insertAdjacentHTML("beforeend", createGalleryList(image));
function createGalleryList(image) {
  return image
    .map((img) => `<li class="gallery__item">
      <a
    class="gallery__link"
    href ="${img.original}"
      >
      <img
        class="gallery__image"
        src= "${img.preview}"
        data-source="${img.original}"
        alt="${img.description}"
      />
  </a >
</li > `)
        .join("");
    }