import React from "react"
import styled from "reshadow/macro"
import { Image } from "./Image"

const winners = [
  { item_title: "StickyDiamonds", sum: "€ 11.574.60", userName: "Wild98" },
  { item_title: "MustangGold", sum: "€ 8.200.66", userName: "Luliana" },
  {
    item_title: "BlackjackSilverTouch",
    sum: "€ 6.483.67",
    userName: "Farisha",
  },
]

export const LastWinners = () =>
  styled()`
    winners {
      display: inline-grid;
      grid-column-gap: 10px;
      grid-row-gap: 1rem;
      grid-template-columns: repeat(3, auto);
      margin-right: 1em;
    }
    name {
      grid-column: 1 / -1;
      margin: 0;
    }
  `(
    <winners>
      <name as="h4">Last Winners</name>
      {winners.map(Item)}
    </winners>
  )

const Item = ({ item_title, sum, userName }) =>
  styled()`
    item {
      display: grid;
      grid-gap: 4px;
      position: relative;
      &::before {
        content: url("./svg/crown_fill.svg");
        position: absolute;
        z-index: 1;
      }
    }
    wrap {
      display: inline-grid;
      max-width: 130px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: linear-gradient(
          180deg,
          rgba(6, 14, 42, 0) 0%,
          rgba(6, 14, 42, 0.26) 33.78%,
          rgba(6, 14, 42, 0.88) 85%,
          #060e2a 100%
        );
      }
    }

    sum {
      position: absolute;
      font-size: 14px;
      z-index: 1;
      right: 0;
      bottom: 0;
      color: var(--yellow);
    }

    user_name {
      font-weight: 400;
      font-size: 12px;
      line-height: 118%;
      text-align: right;
      color: var(--grey);
    }

    @media (max-width: 500px) {
      sum {
        font-size: 12px;
      }
      user_name {
        font-size: 10px;
      }
    }
  `(
    <item>
      <wrap>
        <Image name={item_title} />
        <sum as="span">{sum}</sum>
      </wrap>
      <user_name as="span">{userName} just won</user_name>
    </item>
  )
