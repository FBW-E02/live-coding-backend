import {render, screen} from "@testing-library/react"
import App from "./App"

//getBy.. error if you have multiple elements
//findBy.. null if you have multiple elements
//queryBy.. asynchronous code

//getAllBy...
//findAllBy..
//queryAllBy..

test("displaying h1 with Counter App", ()=>{
  render(<App/>)
  const h1 = screen.getByRole("heading",{name:"Counter App"})
  expect(h1).toBeInTheDocument()
})