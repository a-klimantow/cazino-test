import React from "react"
import styled, { css } from "reshadow/macro"

const styles = css`
  title,
  text {
    margin: 0;
    padding: 0;
  }

  b {
    color: var(--yellow);
  }

  title,
  text {
    text-shadow: 2px 2px 0.5rem var(--dark-500);
  }

  title {
    font-size: 43px;
    line-height: 46.87px;
    max-width: 410px;
    margin-bottom: 12px;
  }

  text {
    font-size: 28px;
    line-height: 33px;
    margin-bottom: 24px;
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 217px;
    height: 72px;
    background-color: var(--yellow);
    &::before {
      content: "deposit";
      margin-right: 1ch;
    }
  }

  @media (max-width: 500px) {
    title {
      font-size: 24px;
      line-height: 109%;
      max-width: 290px;
      margin-bottom: 9px;
    }

    text {
      font-size: 20px;
      line-height: 118%;
      margin-bottom: 19px;
    }

    button {
      font-size: 14px;
      width: 152px;
      height: 55px;
      &::before {
        content: "register";
      }
    }
  }
`

export const Title = () =>
  styled(styles)(
    <>
      <title as="h1">
        Sign up <b>&</b> get Welcome Bonus
      </title>
      <text as="p">
        € 100 <b>+</b> 55 free spins
      </text>
      <button as="a" href="/registration">
        now
      </button>
    </>
  )
