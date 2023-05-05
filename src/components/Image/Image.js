import { useState } from 'react'

import avatarPlaceholder from '../Header/Rectangle 1.png'

const Image = ({ url }) => {
  const [content, setContent] = useState(url)
  const onShowPlaceholder = (e) => {
    const img = e.target
    if (img.naturalWidth === 1) {
      setContent(avatarPlaceholder)
    }
  }
  return <img onLoad={(e) => onShowPlaceholder(e)} onError={() => setContent(avatarPlaceholder)} src={content} />
}
export default Image
