import React from 'react'

export const GifItem = ({ title, url }) => {
  return (
    <div>
        <h5> {title} </h5>
        <img src={url} />
    </div>
  )
}
