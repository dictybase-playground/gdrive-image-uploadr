import React, { Component } from "react"
import { Flex, Box, Heading, Subhead, Container } from "rebass"
import UploadButtonDisplay from "features/uploadButtonDisplay/UploadButtonDisplay"
import ImageDropzone from "features/imageDropzone/ImageDropzone"
import ImageInformation from "features/imageInformation/ImageInformation"
import ImagePreview from "features/imagePreview/ImagePreview"
import NotificationPopup from "features/notificationPopup/NotificationPopup"

class App extends Component {
  render() {
    return (
      <Container maxWidth="90%">
        <NotificationPopup />
        <Flex>
          <Box w={1} p={1}>
            <Heading bg="#4a9eda" p={1}>
              Image uploader
            </Heading>
          </Box>
        </Flex>
        <Flex>
          <Box is="section" w="40%" p={1}>
            <Flex>
              <Box w={1}>
                <Subhead bg="#a5cfed" p={1}>
                  Image dropzone
                </Subhead>
              </Box>
            </Flex>
            <Flex>
              <Box w={1 / 2} p={1}>
                <ImageDropzone />
              </Box>
              <Box w={1 / 2} p={1}>
                <ImageInformation />
              </Box>
            </Flex>
          </Box>
          <Box is="section" w="60%" p={1}>
            <Box w={1}>
              <UploadButtonDisplay />
            </Box>
            <Box w={1}>
              <ImagePreview />
            </Box>
          </Box>
        </Flex>
      </Container>
    )
  }
}

export default App
