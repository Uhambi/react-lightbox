import React from "react"
import styled from "styled-components"
import ImagePreview from "./ImagePreview"

interface Props {
  images: Array<string>
  onImageClick: (index: number) => void
}

const ImageList: React.FC<Props> = ({
  images,
  onImageClick
}) => {
  const handleClick = (index: number) => () => {
    onImageClick(index)
  }

  return (
    <DivContainer>
      {images.map((imageUrl, index) => (
        <ImagePreview
          key={imageUrl}
          url={imageUrl}
          onClick={handleClick(index)}
          className="ImageList--item"
        />
      ))}
    </DivContainer>
  )
}

const DivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;

  .ImageList--item {
    padding: 20px;
    margin: 0 5px 10px;
    
    @media (max-width: 667px) {
      width: calc(50% - 10px);
    }
    
    @media (max-width: 480px) {
      width: calc(100% - 10px);
    }
  }
`

export default React.memo(ImageList)
