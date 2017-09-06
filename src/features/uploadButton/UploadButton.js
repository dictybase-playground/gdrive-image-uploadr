import React from "react"
import styled from "styled-components"
import { Button } from "rebass"

const ButtonStyle = styled(Button)`
  line-height: 1.5;
  border-radius: 4px;
  text-shadow: -2px 2px #346392;
  background-image: linear-gradient(top, #6496c8, #346392);
  box-shadow: inset 0 0 0 1px #27496d;
`

const UploadButton = ({ children, ...props }) => (
  <ButtonStyle px={1} py="3px" f="15px" bg="#00365d" {...props}>
    {children}
  </ButtonStyle>
)

export default UploadButton
