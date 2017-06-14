export function getSongs(user){
  return {
    type: 'GET_SONGS',
    payload: user
  }
}

export function setUser(user){
  return {
    type: 'SET_USER',
    payload: user
  }
}

