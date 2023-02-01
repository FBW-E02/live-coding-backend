import {cleanup, fireEvent, render, screen} from "@testing-library/react"
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

it("increment button exist", ()=>{
    render(<Counter title="counter"/>)
    const btn = screen.getByRole("button",{name:"increment"})
    expect(btn).toBeInTheDocument()
})
it("increment button increment our counter", ()=>{
    render(<Counter title="counter"/>)
    const btn = screen.getByRole("button",{name:"increment"})
    const input = screen.getByRole("spinbutton")
    expect(input.value).toBe("1")
    fireEvent.change(input, {target:{value:"3"}})
    fireEvent.click(btn)
    const h1 = screen.getByTestId("count")
    expect(h1).toHaveTextContent("counter: 3") 
    fireEvent.click(btn)
    expect(h1).toHaveTextContent("counter: 6") 
})

 it("decrement button exist", ()=>{
    render(<Counter title="counter"/>)
    const btn = screen.getByRole("button",{name:"decrement"})
    expect(btn).toBeInTheDocument()
})


it("decrement button decrement our counter", ()=>{
    render(<Counter title="counter"/>)
    const btn = screen.getByRole("button",{name:"decrement"})
    const input = screen.getByRole("spinbutton")
    expect(input.value).toBe("1")
    fireEvent.change(input, {target:{value:"3"}})
    fireEvent.click(btn)
    const h1 = screen.getByTestId("count")
    expect(h1).toHaveTextContent("counter: -3") 
    fireEvent.click(btn)
    expect(h1).toHaveTextContent("counter: -6") 
})

/* beforeAll(()=>{
    cleanup()
})
beforeEach(()=>{
    
})
afterAll()
afterEach(()=>{
    mongoose.connection.close()
}) */
/*it("reset button exist", ()=>{})
it("reset button reset our counter", ()=>{}) */