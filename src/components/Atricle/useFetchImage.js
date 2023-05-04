import { useEffect, useState } from 'react'

import avatarPlaceholder from '../Header/Rectangle 1.png'

export const useFetchImage = (url) => {
  const [imageLoading, setImageLoading] = useState(false)
  const [image, setImage] = useState(null)
  const fetchImage = async () => {
    setImageLoading(true)
    const request = await fetch(url)
    if (!request.ok) {
      console.log('error')
      setImage(avatarPlaceholder)
    } else {
      const result = request.url
      setImageLoading(false)
      setImage(result)
    }
  }

  useEffect(() => {
    fetchImage()
  }, [])
  return [imageLoading, image]
}
