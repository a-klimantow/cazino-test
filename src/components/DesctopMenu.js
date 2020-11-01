import React from "react"
import styled from "reshadow/macro"

const menu = [
  "lobby",
  "categories",
  "promotions",
  "tournaments",
  "login",
  "register",
]

export const DesctopMenu = () =>
  styled()`
    nav,
    ul {
      display: flex;
      flex: 1;
      align-items: center;
      font-size: 12px;
    }

    @media (max-width: 800px) {
      nav {
        display: none;
      }
    }
  `(
    <nav>
      <ul>{menu.map(NavItem)}</ul>
    </nav>
  )

const NavItem = (name) =>
  styled()`
    nav_item {
      display: inline-block;
      &:nth-child(-n + 3)::after {
        content: "/";
        color: var(--grey);
        font-size: 10px;
        padding: 1em;
      }
      &:nth-child(4) {
        margin-right: auto;
      }

      &:nth-child(5) {
        display: inline-block;
        padding: 22px;
      }
      &:nth-child(6) {
        padding: 29px;
        background-color: var(--red);
      }
    }
  `(
    <nav_item as="li" key={name}>
      <a href={`/${name}`}>{name}</a>
    </nav_item>
  )
