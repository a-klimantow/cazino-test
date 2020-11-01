import React from "react"
import axios from "axios"

const baseURL = "https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io"

export const useFetch = ([{ categories }, dispatch]) => {
  console.log(categories)
  React.useEffect(() => {
    axios({
      baseURL,
      params: { liveCasinoOnly: true, limit: 50, categories },
    }).then(({ data }) => dispatch({ type: "fetch_success", payload: data }))
  }, [categories, dispatch])
}
