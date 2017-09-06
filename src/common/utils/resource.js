let imageUploadResource

if (process.env.REACT_APP_IMAGE_API_BASE) {
  const uploadBase = process.env.REACT_APP_IMAGE_API_UPLOAD_PATH || "/images"
  imageUploadResource = `${process.env.REACT_APP_IMAGE_API_BASE}/${uploadBase}`
} else {
  imageUploadResource = "http://localhost:9000/images"
}

export { imageUploadResource }
