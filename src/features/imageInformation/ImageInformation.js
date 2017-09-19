import React from "react"
import { Text } from "rebass"
import { connect } from "react-redux"

const listSizes = images => images.map(img => img.size)

const getTotalSize = images => {
  let size =
    listSizes(images).reduce((prev, curr) => prev + curr) / (1024 * 1024)
  return size.toFixed(2)
}

const displayInformation = images => {
  let content
  if (images.length > 0) {
    content = (
      <div>
        <p> Total images: {images.length} </p>
        <p>Total Size: {getTotalSize(images)} Mb</p>
      </div>
    )
  } else {
    content = <div>No image information</div>
  }
  return content
}

const ImageInformation = props => {
  return (
    <Text center f={2} pt={10}>
      {displayInformation(props.images)}
    </Text>
  )
}

function mapStateToProps(state) {
  return {
    images: state.images.data,
  }
}

export default connect(mapStateToProps)(ImageInformation)
