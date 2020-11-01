import React from "react"
import styled from "reshadow/macro"

const menu = [
  { name: "menu", icon: "./svg/menu.svg" },
  { name: "promotions", icon: "./svg/promo.svg" },
  { name: "deposit", icon: "./svg/money.svg" },
  { name: "support", icon: "./svg/chat.svg" },
]

export const MobileMenu = () =>
  styled()`
    mob_menu {
      grid-column: 1 / -1;
      min-height: 60px;
      display: grid;
      align-items: center;
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      font-size: max(7px, 2vw);
      line-height: 1.5;
      margin-bottom: 12px;

      @media (min-width: 800px) {
        display: none;
      }
    }
  `(<mob_menu>{menu.map(MenuItem)}</mob_menu>)

const MenuItem = ({ name, icon }) =>
  styled()`
    item > a {
      display: grid;
      grid-gap: 0.5rem;
      place-content: end center;
      place-items: end center;
      text-shadow: 2px 2px 0.5rem var(--dark-500);
      &::before {
        content: ${`url(${icon})`};
      }
    }
  `(
    <item key={name}>
      <a href={`/${name}`}>{name}</a>
    </item>
  )
