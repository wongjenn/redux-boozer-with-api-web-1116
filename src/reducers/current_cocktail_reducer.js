export default function current_cocktail_reducer(state="", action) {
  switch ( action.type ) {
    case 'UPDATE_CURRENT_COCKTAIL':
      return action.payload;
    default:
      return state;
  }
};
