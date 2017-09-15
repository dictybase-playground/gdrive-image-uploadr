import React, { Component } from "react"
import { Flex, Box, Heading, Subhead, Text, Container } from "rebass"
import UploadButtonDisplay from "features/uploadButtonDisplay/UploadButtonDisplay"
import ImageDropzone from "features/imageDropzone/ImageDropzone"
import ImageInformation from "features/imageInformation/ImageInformation"
import ImagePreview from "features/imagePreview/ImagePreview"
import NotificationSystem from "react-notification-system"
import RejectedFilesDisplay from "common/components/RejectedFilesDisplay"
import UploadErrorsDisplay from "common/components/UploadErrorsDisplay"
import { uploadAllImages, imageResponse } from "common/utils/upload"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import dropImages from "../actions/dropImages"

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
        <NotificationSystem
          ref={n => {
            this.notification = n
          }}
        />
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
                <ImageDropzone onDrop={this.props.dropImages} accept="image/*">
                  <Text p={1} f={2}>
                    Drop images here or click to select images to upload
                  </Text>
                </ImageDropzone>
              </Box>
              <Box w={1 / 2} p={1}>
                <ImageInformation images={this.props.images} />
              </Box>
            </Flex>
          </Box>
          <Box is="section" w="60%" p={1}>
            <Box w={1}>
              <UploadButtonDisplay
                images={this.props.images}
                loading={this.props.loading}
                /*onUpload={this.onUpload}
                onReset={this.onReset}*/
              />
            </Box>
            <Box w={1}>
              <ImagePreview
                images={this.props.images}
                loading={this.props.loading}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
    loading: state.loading,
  }
}

/*function mapDispatchToProps(dispatch) {
  
  return {
    actions: bindActionCreators(dropImages, dispatch),
  }
}*/

export default connect(mapStateToProps, { dropImages })(App)
