import React from "react"
import { Text } from "rebass"
import ImageDropzoneStyle from "features/imageDropzone/ImageDropzoneStyle"
import dropImages from "features/imageDropzone/DropImagesActions"
import { connect } from "react-redux"

const ImageDropzone = props => (
  <ImageDropzoneStyle onDrop={props.dropImages} accept="image/*">
    <Text p={1} f={2}>
      Drop images here or click to select images to upload
    </Text>
  </ImageDropzoneStyle>
)

export default connect(null, { dropImages })(ImageDropzone)
