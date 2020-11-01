import React from "react"
import { useFetch } from "./useFetch"

const initialState = {
  games: [],
  data: null,
  providerList: [
    { name: "all providers" },
    { name: "netent", logo: "./svg/logo_netent.svg" },
    { name: "play'n go", logo: "./svg/logo_playngo.svg" },
    { name: "microgaming", logo: "./svg/logo_microgaming.svg" },
    { name: "", logo: "./svg/points.svg" },
  ],
  categoryList: [
    {
      name: "all games",
      icon: "./svg/star.svg",
      active: true,
      categories: null,
    },
    {
      name: "top games",
      icon: "./svg/crown.svg",
      active: false,
      categories: null,
    },
    {
      name: "live casino",
      icon: "./svg/play.svg",
      active: false,
      categories: "Live Casino",
    },
    {
      name: "slots games",
      icon: "./svg/slots.svg",
      active: false,
      categories: "Slot",
    },
    {
      name: "roulette",
      icon: "./svg/roulette.svg",
      active: false,
      categories: "Roulette",
    },
    {
      name: "table games",
      icon: "./svg/dice.svg",
      active: false,
      categories: "Extra Games",
    },
    {
      name: "card games",
      icon: "./svg/card.svg",
      active: false,
      categories: "Card Games",
    },
  ],
  categories: null,
}

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "fetch_success":
      return { ...state, data: payload, games: payload }
    case "change_categories":
      const { categories } = state.categoryList.find((_, i) => i === payload)
      const newList = state.categoryList.map((item, i) => ({
        ...item,
        active: i === payload,
      }))
      return { ...state, categories, categoryList: newList }
    default:
      console.error("app", type)
      return state
  }
}

export const useApp = () => {
  const state = React.useReducer(reducer, initialState)
  useFetch(state)

  return state
}
