import styled, { css, keyframes } from 'styled-components'

import CircleWithLine from '@assets/images/circle-with-line.png'

export const LinearGradientEffect = styled.div`
  position: absolute;
  z-index: 1;
  width: 600px;
  height: 95px;
  left: 0px;
  top: 310px;
  background: linear-gradient(267.23deg, rgba(255, 140, 0, 0) 2.31%, rgba(255, 69, 0, 0.15) 97.69%);
  opacity: 0.4;
  backdrop-filter: blur(98px);

  @media (max-width: 980px) {
    height: 72px;
    top: 250px;
    left: -40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 72px;
    top: 250px;
  }
`

export const CircleEffect = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  width: 300px;
  height: 300px;
  left: -200px;
  top: 100vh;
  opacity: 0.5;
  border: 2px solid #ff8c00;
  border-radius: 300px;

  @media (max-width: 1300px) {
    width: 250px;
    height: 250px;
    top: 105vh;
  }

  @media (max-width: 980px) {
    display: none;
  }
`

export const CircleWithLineEffect = styled.div`
  position: absolute;
  z-index: 1;
  background-image: url(${CircleWithLine.src});
  width: 48px;
  height: 98px;
  left: 864px;
  top: 100vh;

  @media (max-width: 980px) {
    display: none;
  }
`

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const animatedBackground = css`
  background: linear-gradient(270deg, #ff8c00, #ff4500, #ff8c00);
  background-size: 600% 600%;
  animation: ${backgroundAnimation} 10s ease infinite;
`
