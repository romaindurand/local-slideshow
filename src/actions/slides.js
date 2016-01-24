export const SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE'
export const SET_IMAGES = 'SET_IMAGES'
export const NEXT_SLIDE = 'NEXT_SLIDE'
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE'
export const PAUSE_SLIDESHOW = 'PAUSE_SLIDESHOW'
export const RUN_SLIDESHOW = 'RUN_SLIDESHOW'
export const SET_TIMER = 'SET_TIMER'
export const SET_FILTER = 'SET_FILTER'
export const TOGGLE_SLIDESHOW = 'TOGGLE_SLIDESHOW'

export function setCurrentSlide(slideIndex, slides) {
  return {
    type: SET_CURRENT_SLIDE,
    currentIndex: +slideIndex || 0,
    imagesCount: slides.filtered_images.length
  }
}

export function setTimer(delay) {
  return {
    type: SET_TIMER,
    delay
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
    imagesCount: slides.filtered_images.length
  }
}

export function previousSlide(slides) {
  return {
    type: 'PREVIOUS_SLIDE',
    currentIndex: slides.currentIndex,
    imagesCount: slides.filtered_images.length
  }
}

export function pauseSlideshow() {
  return {
    type: 'PAUSE_SLIDESHOW'
  }
}

export function runSlideshow() {
  return {
    type: 'RUN_SLIDESHOW'
  }
}

export function toggleSlideshow(slides) {
  return {
    type: 'TOGGLE_SLIDESHOW',
    playing: !slides.playing
  }
}

export function setFilter(filter, slides) {
  return {
    type: 'SET_FILTER',
    images: slides.images,
    filter
  }
}
