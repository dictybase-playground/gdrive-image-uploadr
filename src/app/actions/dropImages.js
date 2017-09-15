const onDrop = (accepted, rejected) => {
  console.log("ondrop called")
  if (rejected.length > 0) {
    return console.log("error")
  }
  return {
    type: "DROP_IMAGES",
    payload: accepted,
  }
}

export default onDrop
