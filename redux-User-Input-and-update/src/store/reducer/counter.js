
function counter(state = 0, action) {
  switch (action.type) {
    case "Inc":
      return state + 1;

      case "Inc_with_user_input":
      return state + action.val


}}

export default counter