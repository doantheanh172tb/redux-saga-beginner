export default function counterReducer(state = 0, action) {
  console.log("Reducer/counterReducer");
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    case 'INCREMENT_ASYNC': () => {
      return state;
    }
    default:
      return state
  }
}
