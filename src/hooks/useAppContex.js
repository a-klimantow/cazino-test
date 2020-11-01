import React from "react"
import { AppContext } from "../context"

export const useAppContext = () => React.useContext(AppContext)
