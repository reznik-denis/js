import galleryItems from './js/galleryItems.js';

function itemList({ preview, original, description }) {
    return (`<li class="gallery__item"><a class="gallery__link"
    href="${original}"><img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`)
};

const murcupList = galleryItems.map(itemList).join('');

const refs = {
    galary: document.querySelector('ul.js-gallery'),
    modal: document.querySelector('div.lightbox'),
    image: document.querySelector('img.lightbox__image'),
    button: document.querySelector('button[data-action="close-lightbox"]'),
    overlay: document.querySelector('div.lightbox__overlay')
};

refs.galary.innerHTML = murcupList;
refs.galary.addEventListener('click', onClickOpenModal);
refs.button.addEventListener('click', onClickCloseModal);
refs.overlay.addEventListener('click', onClickOverlayClose)


function onClickOpenModal(event) {
    event.preventDefault()
    if (event.target.nodeName != `IMG`) {
    return
    }
    
    window.addEventListener('keydown', onKeydownClose)

    refs.modal.classList.add('is-open');
    refs.image.src = `${event.target.dataset.source}`;
    refs.image.alt = `${event.target.alt}`

    window.addEventListener('keydown', siblingImg)
}

function onClickCloseModal(event) {
    window.removeEventListener('keydown', onKeydownClose)
    refs.modal.classList.remove('is-open');
    refs.image.src = ''
}

function onKeydownClose(event) {
    if (event.code != `Escape`) {
        return
    }
    onClickCloseModal();
}

function onClickOverlayClose(event) {
    if (event.currentTarget != event.target) {
        return
    }
    onClickCloseModal()
}

function siblingImg(event) {
    const currentElement = galleryItems.findIndex(({ original }) => original == refs.image.src);
    if (event.code === `ArrowRight`) {
        refs.image.src = `${galleryItems[(currentElement + 1) % galleryItems.length].original}`
    } else if (event.code === `ArrowLeft`) {
        if (currentElement === 0) {
            refs.image.src = `${galleryItems[(currentElement + galleryItems.length - 1) % galleryItems.length].original}`
        } else {
            refs.image.src = `${galleryItems[(currentElement - 1) % galleryItems.length].original}`
        }
    }
    return
}
