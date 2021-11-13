// **  Initial State
const initialState = {
  walletAddress: "",
  isLoggedIn: false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SETWALLETADDRESS':
      return { ...state, walletAddress: action.data }
    case 'LOGIN':
      return { ...state, isLoggedIn: action.data }
    default:
      return state
  }
}

export default auth