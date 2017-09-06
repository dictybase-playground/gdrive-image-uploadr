import styled from "styled-components"
import { Flex } from "rebass"

const WrapperFlex = styled(Flex)`
  background-color: ${props => (props.bgcolor ? props.bgcolor : "#a5cfed")};
`
export default WrapperFlex
