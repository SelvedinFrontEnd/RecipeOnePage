import { useState } from "react"
import Content from "./Content"
import Navbar from "./Navbar"
import SubmitRecipe from "./SubmitRecipe"
import Login from "./Login"

export default function App() {
  const [name, setName] = useState("")

  return(
    <>
      <Navbar name={name} /> 
      <SubmitRecipe /> 
      <Login setName={setName} />
      <Content /> 
    </>
  )
}