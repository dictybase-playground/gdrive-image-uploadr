import React, { Component } from "react"
import { Flex, Box, Heading, Subhead, Container } from "rebass"
import UploadButtonDisplay from "features/uploadButtonDisplay/UploadButtonDisplay"
import ImageDropzone from "features/imageDropzone/ImageDropzone"
import ImageInformation from "features/imageInformation/ImageInformation"
import ImagePreview from "features/imagePreview/ImagePreview"
import NotificationPopup from "features/notificationPopup/NotificationPopup"

class App extends Component {
  //  state = { images: [], loading: false }

  /*onDrop = (accepted, rejected) => {
    if (rejected.length > 0) {
      this.notification.addNotification({
        level: "error",
        title: "Error",
        message: "Rejected files",
        position: "tc",
        children: <RejectedFilesDisplay rejected={rejected} />,
        autoDismiss: 0,
      })
    }
    this.setState(prevState => {
      if (prevState.images.length > 0) {
        return {
          images: prevState.images.concat(accepted),
        }
      }
      return { images: accepted }
    })
    console.log(accepted)
    return accepted;
  }

  handleNetworkError = error => {
    this.setState({ loading: false })
    this.notification.addNotification({
      title: "Network error",
      message: error.message,
      level: "error",
      position: "tc",
      autoDismiss: 0,
    })
  }

  handleHttpError = errResponses => {
    this.setState({ loading: false })
    Promise.all(errResponses.map(err => err.json())).then(errors => {
      this.notification.addNotification({
        level: "error",
        title: "Upload error",
        message: "Error in uploading images",
        position: "tc",
        children: <UploadErrorsDisplay errors={errors} />,
        autoDismiss: 0,
      })
    })
  }

  handleUpload = responses => {
    this.setState({ images: [], loading: false })
    this.notification.addNotification({
      title: "Successful upload",
      message: `Uploaded total ${responses.length} images`,
      level: "success",
      position: "tc",
      autoDismiss: 10,
    })
  }

  onUpload = () => {
    this.setState({ loading: true })
    uploadAllImages(this.state.images)
      .then(imageResponse, this.handleNetworkError)
      .then(this.handleUpload)
      .catch(this.handleHttpError)
  }

  onReset = () => {
    this.setState({ images: [] })
  }*/

  render() {
    //const { images, loading } = this.state
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
