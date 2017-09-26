//@flow

import React from "react"
import Gallery from "react-photo-gallery"
import { Text } from "rebass"
import LoadingMask from "common/components/LoadingMask"
import LoadingSpinner from "common/components/LoadingSpinner"
import { connect } from "react-redux"

type Props = {
  images: Array<Object>,
  loading: boolean,
}

const getImageObject = (image: Object) => {
  return {
    src: image.preview,
    width: 75,
    height: 75,
  }
}

const ImagePreview = (props: Props) => {
  let content
  if (props.images.length > 0) {
    content = (
      <LoadingMask blocking={props.loading} w={1}>
        <Gallery
          photos={props.images.map(img => getImageObject(img))}
          cols={5}
          margin={4}
        />
        {props.loading && <LoadingSpinner />}
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

function mapStateToProps(state) {
  return {
    images: state.images.data,
    loading: state.images.loading,
  }
}

export default connect(mapStateToProps)(ImagePreview)
