import React from "react"
import styled from "styled-components"

interface Props {
  url: string
  onClick?: () => void
  className?: string
}

const ImagePreview: React.FC<Props> = ({
  url,
  className,
  onClick
}) => {
  return (
    <DivContainer className={className}>
      <div
        onClick={onClick}
        className="ImagePreview--image"
        style={{ backgroundImage: `url(${url})` }}
      />
    </DivContainer>
  )
}

const DivContainer = styled.div`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid lightgray;

  .ImagePreview--image {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: white;
  }
`

export default ImagePreview
