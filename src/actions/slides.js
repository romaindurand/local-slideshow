export const SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE'
export const SET_IMAGES = 'SET_IMAGES'

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
