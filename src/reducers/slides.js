import { SET_CURRENT_SLIDE, SET_IMAGES, NEXT_SLIDE, PREVIOUS_SLIDE } from '../actions/slides'

export default function slides(state = {currentIndex: 0, images: []}, action) {
  let currentIndex;
  switch (action.type) {
    case SET_CURRENT_SLIDE:
      return {...state, currentIndex: action.currentIndex}

     case SET_IMAGES:
      return {...state, images: action.images}

      case NEXT_SLIDE:
        currentIndex = (action.currentIndex + 1 >= action.imagesCount)? 0 : action.currentIndex + 1;
        return {...state, currentIndex}

      case PREVIOUS_SLIDE:
        currentIndex = (action.currentIndex - 1 < 0)? action.imagesCount -1 : action.currentIndex - 1;
        return {...state, currentIndex}
    default:
      return state
  }
}
