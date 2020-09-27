import React from "react"
import styled from "styled-components"
import useKeyDown from "../hooks/useKeyDown"

interface Props {
  isOpen: boolean
  close: () => void
  width?: string
  height?: string
}

interface StyledProps {
  w?: string
  h?: string
}

const Lightbox: React.FC<Props> = ({
  isOpen,
  close,
  width,
  height,
  children
}) => {
  useKeyDown('Escape', close)

  if (!isOpen) return null

  return (
    <DivContainer w={width} h={height}>
      <div onClick={close} className="Lightbox--overlay"/>
      <button className="Lightbox--close" onClick={close}>x</button>
      <div className="Lightbox--content">
        {children}
      </div>
    </DivContainer>
  )
}

const DivContainer = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .Lightbox--overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .Lightbox--close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    border: 0;
    background-color: #000;
    border-radius: 50%;
    color: #fff;
    padding: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .Lightbox--content {
    padding: 15px;
    overflow-y: auto;
    max-width: calc(100vw - 30px);
    max-height: calc(100vh - 30px);
    background-color: #fff;
    box-sizing: border-box;
    width: ${p => p.w || '400px'};
    height: ${p => p.h || '400px'};
  }
`

export default Lightbox
