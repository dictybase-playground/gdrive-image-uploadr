import styled from "styled-components"
import { width } from "styled-system"

const LoadingMask = styled.div`
  opacity: ${props => (props.blocking ? 0.3 : 1)};
  ${width};
`

export default LoadingMask
