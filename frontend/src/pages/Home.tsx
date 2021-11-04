import dotenv from "dotenv";
import { useState } from "react";

dotenv.config({
  path: `${__dirname}/../.env.${process.env.NODE_ENV}`
})

export const HomePage: React.FC<{}> = () => {
  const [data, setData] = useState()
  fetch(process.env.REACT_APP_API!).then(async response => {
    const {data} = await response.json()
    setData(data)
  })
  return (
    <div>
      <h1>home page</h1>
      <p>{data}</p>
    </div>
  )
}