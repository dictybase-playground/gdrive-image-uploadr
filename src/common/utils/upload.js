import { imageUploadResource } from "common/utils/resource"

const getFormData = file => {
  let formData = new FormData()
  formData.append("image", file)
  return formData
}

const uploadAllImages = images => {
  return Promise.all(
    images.map(img =>
      fetch(imageUploadResource, { method: "POST", body: getFormData(img) }),
    ),
  )
}

const imageResponse = responses => {
  console.log("in image response")
  let resolved = []
  let rejected = []
  responses.forEach(r => {
    if (r.ok) {
      resolved.push(r)
    } else {
      rejected.push(r)
    }
  })
  if (rejected.length > 0) {
    console.log("img res rejected" + rejected)
    return Promise.reject(rejected)
  }
  console.log("img res resolved" + resolved)
  return Promise.resolve(resolved)
}

export { uploadAllImages, imageResponse }
