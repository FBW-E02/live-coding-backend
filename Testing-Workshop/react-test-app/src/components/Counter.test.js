import {fireEvent, render, screen} from "@testing-library/react"
import Counter from "./Counter"

it("Counter receive title props", ()=>{
    render(<Counter title="counter"/>)
    const h1 = screen.getByTestId("count")
    expect(h1).toContainHTML("counter: 0")
})

it("counter starts with 0",()=>{
    render(<Counter title="counter"/>)
    const h1 = screen.getByTestId("count")
    expect(h1).toContainHTML("counter: 0")
})
it("input Value is 1", ()=>{
    render(<Counter title="counter"/>)
    const input = screen.getByRole("spinbutton")
    expect(input.value).toBe("1")
})

it("check input value gets change",()=>{
    render(<Counter title="counter"/>)
    const input = screen.getByRole("spinbutton")
    fireEvent.change(input,{target: {value:"5"}} )
    expect(input.value).toBe("5")
    fireEvent.change(input,{target:{value:"2"}})
    expect(input.value).toBe("2")
})

it("increment button exist", ()=>{})
it("increment button increment our counter", ()=>{})

it("decrement button exist", ()=>{})
it("decrement button decrement our counter", ()=>{})

it("reset button exist", ()=>{})
it("reset button reset our counter", ()=>{})