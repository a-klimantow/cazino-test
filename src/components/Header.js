import React from "react"
import styled, { css } from "reshadow/macro"

import { DesctopMenu } from "./DesctopMenu"
import { Title } from "./Title"
import { MobileMenu } from "./MobileMenu"
import { LastWinners } from "./LastWinners"
import { Statistic } from "./Statistic"

const styles = css`
  header {
    height: 640px;
    margin-bottom: 85px;
    margin-right: -1rem;
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-image: url("./jpg/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    @media (max-width: 500px) {
      height: 788px;
      background-image: url("./jpg/bg_small.jpg");
      background-size: contain;
      background-position: top right;
    }
  }
  logo {
    padding: 1rem;
    padding-left: 0;
  }
  top {
    display: flex;
  }

  bottom {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  middle {
    align-self: end;
    margin-bottom: 50px;
    @media (max-width: 500px) {
      margin-bottom: 20px;
    }
  }
`

export const Header = () => {
  return styled(styles)(
    <header>
      <top>
        <logo as="img" src="./svg/logo_roomcasino.svg" alt="lototip" />
        <DesctopMenu />
      </top>
      <middle>
        <Title />
      </middle>
      <bottom>
        <MobileMenu />
        <LastWinners />
        <Statistic />
      </bottom>
    </header>
  )
}
