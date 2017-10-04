//@flow

import React from "react"
import { Flex, Box, Subhead } from "rebass"
import DisplayButton from "common/components/DisplayButton"
import WrapperFlex from "common/components/WrapperFlex"
import { connect } from "react-redux"
import {
  resetImages,
  onUpload,
} from "features/uploadButtonDisplay/UploadResetActions"

export type Props = {
  images: Array<Object>,
  loading: boolean,
  onUpload: () => mixed,
  resetImages: () => mixed,
}

const manageDisplay = (props: Props) => {
  let content
  if (props.loading) {
    content = (
      <DisplayButton px={1} py="3px" f="15px" bg="#00365d">
        Loading images .....
      </DisplayButton>
    )
  } else if (props.images.length > 0) {
    content = (
      <Flex justify="space-around">
        <DisplayButton
          px={1}
          py="3px"
          f="15px"
          bg="#00365d"
          onClick={() => props.onUpload()}>
          Upload images
        </DisplayButton>
        <DisplayButton
          px={1}
          py="3px"
          f="15px"
          bg="#00365d"
          onClick={() => props.resetImages()}>
          Reset
        </DisplayButton>
      </Flex>
    )
  } else {
    content = null
  }
  return content
}

const UploadButtonDisplay = (props: Props) => (
  <WrapperFlex justify="space-between" p={1}>
    <Box w="70%">
      <Subhead>Image preview</Subhead>
    </Box>
    <Box pr={2} w="30%">
      {manageDisplay(props)}
    </Box>
  </WrapperFlex>
)

//map required data from state to props of this component
function mapStateToProps(state) {
  return {
    images: state.images.data,
    loading: state.images.loading,
  }
}

export default connect(mapStateToProps, { resetImages, onUpload })(
  UploadButtonDisplay,
)
