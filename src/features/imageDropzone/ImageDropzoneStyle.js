import styled from "styled-components"
import { space, color } from "styled-system"
import Dropzone from "react-dropzone"

const ImageDropzoneStyle = styled(Dropzone)`
  border-style: ${props => (props.borderStyle ? props.borderStyle : "dashed")};
  height: ${props => (props.height ? props.height : "200px")};
  border-width: ${props => (props.borderWidth ? props.borderWidth : "2px")};
  border-color: ${props => (props.borderColor ? props.borderColor : "black")};
  ${space} ${color};
`

export default ImageDropzoneStyle
