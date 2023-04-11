export const mouseEnter = (user) => {
  return {
    type: 'MOUSE_ENTER',
    payload: {
      user,
    }
  }
}
export const mouseLeave = (user) => {
  return {
    type: 'MOUSE_LEAVE',
    payload: {
      user,
    }
  }
}