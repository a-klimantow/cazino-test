import React from "react"
import styled, { use } from "reshadow/macro"

import { useAppContext } from "../hooks"

export const Categories = () => {
  const [{ categoryList }] = useAppContext()

  return styled()`
    categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
      grid-auto-rows: 96px;
      grid-gap: 10px;
      font-size: 12px;

      @media (max-width: 800px) {
        display: none;
      }
    }
  `(<categories>{categoryList.map(Category)}</categories>)
}

const Category = ({ name, icon, active }, i) => {
  const [, dispatch] = useAppContext()
  return styled()`
    category {
      cursor: pointer;
      display: inline-grid;
      grid-gap: 1em;
      place-content: center;
      place-items: center;
      padding: 1em;
      background: var(--dark-500);
      position: relative;

      &::before {
        content: ${`url(${icon})`};
      }

      &[|active]::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: red;
        border-bottom: 2px solid var(--yellow);
      }
    }
  `(
    <category
      key={i}
      {...use({ active })}
      onClick={() => dispatch({ type: "change_categories", payload: i })}
    >
      {name}
    </category>
  )
}
