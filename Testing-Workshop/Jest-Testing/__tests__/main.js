const {sum} = require("../main.js")

describe("first group", ()=>{
     it("test sum function", ()=>{
        //assertion
        expect(sum(2,2)).toBe(4)
        expect(sum("2","3")).toBe("23")
        expect(sum()).toBeFalsy()
    })

    it("test sum function, never returns null value", ()=>{
        expect(sum(null,null)).not.toBe(null)
    })
})

describe("second group",()=>{
    it("anything", ()=>{

    })
})

// it("", ()=>{}) //test("", ()=>{})
/* describe("",()=>{}) */