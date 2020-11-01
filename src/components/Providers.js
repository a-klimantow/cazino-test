import React from "react"
import styled, { use } from "reshadow/macro"

import { useAppContext } from "../hooks"

export const Providers = () => {
  const [{ providerList }] = useAppContext()

  return styled()`
    providers {
      --display: contents;
      margin: 13px 0 26px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
      grid-auto-rows: 50px;
      font-size: 12px;
      line-height: 14.9px;
      grid-gap: 10px;

      @media (max-width: 800px) {
        --display: none;
        grid-template-columns: 1fr;
        margin: 26px 0 10px;
      }
    }

    hidden {
      display: var(--display);
    }
  `(
    <providers>
      <hidden>{providerList.map(Provider)}</hidden>
      <Search />
    </providers>
  )
}

const Provider = ({ name, logo }, i) =>
  styled()`
    provider {
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border: 2px solid var(--grey);

      &::before {
        content: ${`url(${logo})`};
        margin-right: ${name && logo ? "1em" : 0};
      }

      &[|menu] {
        width: 50px;
        justify-self: start;
        grid-column: span 2;
      }
    }
  `(
    <provider key={i} {...use({ menu: !name })}>
      {name}
    </provider>
  )

const Search = () =>
  styled()`
    search {
      border: 2px solid var(--grey);
      display: inline-grid;
      grid-template-columns: auto 1fr;
      grid-template-areas: "icon .";
      grid-gap: 10px;
      align-items: center;
      padding: 0 14px;
      &::after {
        grid-area: icon;
        content: url("./svg/search.svg");
      }

      @media (max-width: 800px) {
        grid-template-areas: ". icon";
        grid-template-columns: 1fr auto;
      }
    }

    input {
      font: inherit;
      color: inherit;
      text-transform: inherit;
      background: inherit;
      border: none;
      width: 100%;

      &:focus {
        outline: 0;
      }

      &::placeholder {
        color: inherit;
      }
    }
  `(
    <search as="div">
      <input type="text" placeholder="find the game" />
    </search>
  )
