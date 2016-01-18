import { SET_CURRENT_SLIDE, SET_IMAGES } from '../actions/slides'

export default function slides(state = {currentIndex: 0, images: []}, action) {
  switch (action.type) {
    case SET_CURRENT_SLIDE:
      return {...state, currentIndex: action.currentIndex}
     case SET_IMAGES:
      return {...state, images: action.images}
    default:
      return state
  }
}