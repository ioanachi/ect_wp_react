export default function(state = null, action) {
  switch (action.type) {
    case "END_DATE_CHANGED":
      return action.data;
  }
  return state;
}
