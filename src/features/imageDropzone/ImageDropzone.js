import React from "react"
import ImageDropzoneStyle from "features/imageDropzone/ImageDropzoneStyle"

const ImageDropzone = ({ children, ...props }) => (
  <ImageDropzoneStyle {...props}>{children}</ImageDropzoneStyle>
)

export default ImageDropzone
