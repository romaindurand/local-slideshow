export const SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE'
export const SET_IMAGES = 'SET_IMAGES'
export const NEXT_SLIDE = 'NEXT_SLIDE'
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE'

export function setCurrentSlide(slideIndex) {
  return {
    type: SET_CURRENT_SLIDE,
    currentIndex: slideIndex
  }
}

export function setImages(images){
  return {
    type: SET_IMAGES,
    images
  }
}

export function nextSlide(slides) {
  return {
    type: 'NEXT_SLIDE',
    currentIndex: slides.currentIndex,
    imagesCount: slides.images.length
  }
}

export function previousSlide(slides) {
  return {
    type: 'PREVIOUS_SLIDE',
    currentIndex: slides.currentIndex,
    imagesCount: slides.images.length
  }
}
