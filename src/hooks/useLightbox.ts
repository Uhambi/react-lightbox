import { useState, useCallback } from "react"

export default function (initialValue: boolean) {
  const [isOpen, setOpen] = useState(initialValue)
  
  const open = useCallback(() => {
    setOpen(true)
  }, [])
  
  const close = useCallback(() => {
    setOpen(false)
  }, [])
  
  return [isOpen, open, close] as const
}
