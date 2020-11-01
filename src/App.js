import React from "react"
import styled from "reshadow/macro"

import { AppContext } from "./context"
import { useApp } from "./hooks"
import { Games, Providers, Categories, Header } from "./components"

export const App = () => {
  const state = useApp()
  return styled()`
    container {
      max-width: 1248px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  `(
    <AppContext.Provider value={state}>
      <container>
        <Header />
        <Categories />
        <Providers />
        <Games />
      </container>
    </AppContext.Provider>
  )
}
