export function selectBook( book ) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type prop
  // Actions usually have 2 values, a type and a payload

  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
