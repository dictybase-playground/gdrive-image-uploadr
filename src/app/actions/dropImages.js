const dropImages = (accepted, rejected) => {
  if (rejected.length > 0) {
    return console.log("error")
  }
  return {
    type: "DROP_IMAGES",
    payload: accepted,
  }
}

export default dropImages
