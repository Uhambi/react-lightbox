import React from "react"
import { render } from "@testing-library/react"
import App from "./App"
import Lightbox from "./components/Lightbox"

test("renders the app", () => {
  const { getByText } = render(<App />)
  const headerElement = getByText(/Click an image/i)
  expect(headerElement).toBeInTheDocument()
})

test("show content when lightbox is open", () => {
  const { container } = render(<Lightbox isOpen={true} close={() => {}} />)
  const content = container.querySelector('div.Lightbox--content')
  expect(content).not.toBe(null)
})

test("hide content when lightbox is closed", () => {
  const { container } = render(<Lightbox isOpen={false} close={() => {}} />)
  const content = container.querySelector('div.Lightbox--content')
  expect(content).toBe(null)
})
