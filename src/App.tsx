import React, { useState, useCallback } from "react"
import styled from "styled-components"
import useLightbox from "./hooks/useLightbox"
import ImageList from "./components/ImageList"
import Lightbox from "./components/Lightbox"
import ImageSlideshow from "./components/ImageSlideshow"

const IMAGE_URLS = [
  "https://lh3.googleusercontent.com/YEcRcfKUaq3mA3vHN_VcE2G4TN8ZzvyTJnjfOXgVHjfCO3u2zKjJmK6xTdEUm6q5F8OTTcTB7EoiZ4ePpknxq8Jz",
  "https://lh3.googleusercontent.com/0jGB0WpcTOTGUAjSkLZFjV2lox-9rZ1WhduWJYdXlThaaowvZVm7RfvB0F7S6SkaRZTA1L3-O8Ik5x47d4bt8riR",
  "https://lh3.googleusercontent.com/BTmQVc1Rmcee-9JxVcqSeklCQyZbEStqdO43NSnfY-FzhARq66bqJl2LRsvRydmyLGFwn9kxnhCpTmsf5kiUZ5xR=s300",
  "https://lh3.googleusercontent.com/wWyUN_8wHRMxhanvt9jm0ZYFfv72jLArs3AgJVBmSRODdaZ8I9vr9CRxtB9LNWV5uYfw5Yxaqktc7tgDm_sp6V7aNA=s700",
  "https://lh3.googleusercontent.com/yeqH5r517R1hEsotL3Yfk00ntwFdxmFf5s6gU9fui9d1BSnJVojsWkWbOqRN2JlaCt3oRKcbEMfaHKwJATRgHIEy",
]

const App = () => {
  const [isOpen, openLightbox, closeLightbox] = useLightbox(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openFullImage = useCallback((index: number) => {
    setActiveIndex(index)
    openLightbox()
  }, [openLightbox])

  return (
    <DivContainer>
      <div className="App--instructions">Click an image below</div>
      <ImageList
        images={IMAGE_URLS}
        onImageClick={openFullImage}
      />
      <Lightbox
        width="600px"
        height="600px"
        close={closeLightbox}
        isOpen={isOpen}>
        <ImageSlideshow
          slides={IMAGE_URLS}
          activeIndex={activeIndex}
        />
      </Lightbox>
    </DivContainer>
  )
}

const DivContainer = styled.div`
  padding: 20px;

  .App--instructions {
    margin-bottom: 20px;
  }
`

export default App
