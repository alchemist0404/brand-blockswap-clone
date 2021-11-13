// ** Handle User Login
export const setWalletAddress = (data) => {
  return dispatch => {
    dispatch({ type: 'SETWALLETADDRESS', data })
  }
}

export const handleLogin = (data) => {
  return dispatch => {
    dispatch({ type: 'LOGIN', data })
  }
}