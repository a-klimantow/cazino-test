import React from "react"
import styled from "reshadow/macro"

export const Image = ({ name, size = "200", type = "sq", ...props }) =>
  styled()`
    img {
      width: 100%;
      height: auto;
    }
  `(
    <img
      src={`https://aws-origin.image-tech-storage.com/gameRes/${type}/${size}/${name}.jpg`}
      alt={name}
      {...props}
    />
  )
