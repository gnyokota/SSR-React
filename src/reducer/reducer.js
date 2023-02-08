import { FETCH_USERS } from '../action/actions'

const initialState = {
  data: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return { ...state, data: action.payload }
    default:
      return state
  }
}
