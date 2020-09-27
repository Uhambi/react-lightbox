import React, { useState, useEffect } from "react"
import styled from "styled-components"
import useKeyDown from "../hooks/useKeyDown";
import ImagePreview from "./ImagePreview"

interface Props {
  slides: Array<string>
  activeIndex?: number
  className?: string
}

const ImageSlideshow: React.FC<Props> = ({
  slides,
  activeIndex,
  className
}) => {
  const [index, setIndex] = useState(0)
  const prevSlide = () => {
    goToSlide(index - 1)
  }
  const nextSlide = () => {
    goToSlide(index + 1)
  }
  const goToSlide = (index: number) => {
    if (index >= slides.length) {
      setIndex(0)
    } else if (index < 0) {
      setIndex(slides.length - 1)
    } else {
      setIndex(index)
    }
  }
  
  useEffect(() => {
    setIndex(activeIndex || 0)
  }, [activeIndex])

  useKeyDown('ArrowLeft', prevSlide)
  useKeyDown('ArrowRight', nextSlide)

  return (
    <DivContainer className={className}>
      <ImagePreview
        url={slides[index]}
        className="ImageSlideshow--slide"
      />
      <button className="ImageSlideshow--btn prev" onClick={prevSlide}>‹</button>
      <button className="ImageSlideshow--btn next" onClick={nextSlide}>›</button>
    </DivContainer>
  )
}

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  
  .ImageSlideshow--btn {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    margin-top: -15px;
    border: 0;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid lightgray;
    box-sizing: border-box;
    cursor: pointer;
    color: #000;
    padding: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    
    &.prev {
      left: 15px;
    }
    
    &.next {
      right: 15px;
    }
  }

  .ImageSlideshow--slide {
    width: 100%;
    height: 100%;
  }
`

export default ImageSlideshow
