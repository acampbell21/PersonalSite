const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_IMAGE':
      return {...state, image: action.image}
    case 'SET_RESUME_IMAGE':
      return {...state, resume_image: action.resume_image}
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export default user;
