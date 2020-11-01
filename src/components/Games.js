import React from "react"
import styled from "reshadow/macro"

import { useAppContext } from "../hooks"
import { Image } from "./Image"

export const Games = (props) => {
  const [{ games }] = useAppContext()
  return styled()`
    games {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(134px, auto));
      place-items: center;
    }
  `(<games {...props}>{games.map(Game)}</games>)
}

export const Game = ({ item_title }, i) =>
  styled()`
    game {
      display: inline-grid;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.05);
      }
    }
  `(
    <game key={i}>
      <Image name={item_title} />
    </game>
  )
