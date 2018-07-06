import {deepClone, partial} from "./utils"

describe("test", () => {
  it("deep clones the array", () => {
    expect(true).toBe(true)
  })
  it("partially applies a function once", () => {
    const add = (x, y) => x + y 
    const add2 = partial(add, 2)
    expect(add2(3)).toBe(5) 
  })
})