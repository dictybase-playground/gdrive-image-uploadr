import React from "react"
import Gallery from "react-photo-gallery"
import { Text } from "rebass"
import LoadingMask from "common/components/LoadingMask"
import LoadingSpinner from "common/components/LoadingSpinner"

const getImageObject = image => {
  return {
    src: image.preview,
    width: 75,
    height: 75,
  }
}

const ImagePreview = ({ images, loading }) => {
  let content
  if (images.length > 0) {
    content = (
      <LoadingMask blocking={loading} w={1}>
        <Gallery
          photos={images.map(img => getImageObject(img))}
          cols={5}
          margin={4}
        />
        {loading && <LoadingSpinner />}
      </LoadingMask>
    )
  } else {
    content = (
      <Text center f={4} pt={10}>
        No images to preview
      </Text>
    )
  }
  return content
}

export default ImagePreview
