import { SIDEBAR_TOGGLE } from '../actions/sidebar'

export default function sidebar(state = {open: true}, action) {
  switch (action.type) {
    case SIDEBAR_TOGGLE:
      return {...state, open: !state.open}
    default:
      return state
  }
}
