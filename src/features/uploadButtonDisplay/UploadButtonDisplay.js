import React from "react"
import { Flex, Box, Subhead } from "rebass"
import DisplayButton from "common/components/DisplayButton"
import WrapperFlex from "common/components/WrapperFlex"

const manageDisplay = (images, loading, onUpload, onReset) => {
  let content
  if (loading) {
    content = (
      <DisplayButton px={1} py="3px" f="15px" bg="#00365d">
        Loading images .....
      </DisplayButton>
    )
  } else if (images.length > 0) {
    content = (
      <Flex justify="space-around">
        <DisplayButton
          px={1}
          py="3px"
          f="15px"
          bg="#00365d"
          onClick={() => onUpload()}>
          Upload images
        </DisplayButton>
        <DisplayButton
          px={1}
          py="3px"
          f="15px"
          bg="#00365d"
          onClick={() => onReset()}>
          Reset
        </DisplayButton>
      </Flex>
    )
  } else {
    content = null
  }
  return content
}

const UploadButtonDisplay = ({ images, loading, onUpload, onReset }) => (
  <WrapperFlex justify="space-between" p={1}>
    <Box w="70%">
      <Subhead>Image preview</Subhead>
    </Box>
    <Box pr={2} w="30%">
      {manageDisplay(images, loading, onUpload, onReset)}
    </Box>
  </WrapperFlex>
)

export default UploadButtonDisplay
