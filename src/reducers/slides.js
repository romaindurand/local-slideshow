import { RUN_SLIDESHOW, PAUSE_SLIDESHOW, SET_CURRENT_SLIDE, SET_IMAGES, NEXT_SLIDE, PREVIOUS_SLIDE, SET_TIMER, TOGGLE_SLIDESHOW } from '../actions/slides'

export default function slides(state = {currentIndex: 0, images: [], playing: false, delay: 4000}, action) {
  let currentIndex;
  switch (action.type) {
    case TOGGLE_SLIDESHOW:
      return {...state, playing: action.playing}

    case SET_TIMER:
      return {...state, delay: action.delay}

    case PAUSE_SLIDESHOW:
      return {...state, playing: false}

    case RUN_SLIDESHOW:
      return {...state, playing: true}

    case SET_CURRENT_SLIDE:
      currentIndex = action.currentIndex >= action.imagesCount ? 0 : action.currentIndex;
      return {...state, currentIndex}

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
