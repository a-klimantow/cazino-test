import React from "react"
import styled from "reshadow/macro"

const statList = [
  ["./svg/payouts.svg", "€ 6.483.67", "fast payout"],
  ["./svg/support.svg", "24/7", "support"],
  ["./svg/games.svg", "250k", "games"],
  ["./svg/providers.svg", "1250k", "top providers"],
]

export const Statistic = () =>
  styled()`
    statistic {
      align-self: end;
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      line-height: 124.2%;
      margin-right: 14px;

      @media (max-width: 800px) {
        display: none;
      }
    }
  `(<statistic>{statList.map(Item)}</statistic>)

const Item = ([icon, top, bottom]) =>
  styled()`
    item {
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 14px;
      padding: 4px;

      &::before {
        content: ${`url(${icon})`};
        grid-row: span 2;
      }
    }

    top {
      white-space: nowrap;
    }
    bottom {
      color: var(--grey);
    }
  `(
    <item>
      <top>{top}</top>
      <bottom>{bottom}</bottom>
    </item>
  )
