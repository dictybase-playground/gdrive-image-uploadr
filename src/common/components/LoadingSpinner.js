import styled, { keyframes } from "styled-components"

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const LoadingSpinner = styled.div`
  border-top: 16px solid #00365d;
  border-right: 16px solid #006128;
  border-bottom: 16px solid #610008;
  border-left: 16px solid #610038;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;
  position: absolute;
  top: 40%;
  left: 60%;
  transform: translate(-40%, -60%);
  z-index: 20;
`

export default LoadingSpinner
