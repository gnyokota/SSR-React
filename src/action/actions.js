export const fecthUsersAction = (data) => ({
  type: 'FETCH_USERS',
  payload: data,
})

export const fetchUser = () => async (dispatch) => {
  const response = await fetch(`http://react-ssr-api.herokuapp.com/users`)
  const users = await response.json()
  dispatch(fecthUsersAction(users))
}
