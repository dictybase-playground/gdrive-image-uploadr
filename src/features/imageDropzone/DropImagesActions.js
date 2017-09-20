export const acceptImages = accepted => {
  return {
    type: "DROP_IMAGES",
    payload: accepted,
  }
}
