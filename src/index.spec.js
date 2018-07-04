import init from "./index.js"

describe("test", () => {
  it("executes imported function", () => {
    expect(init()).toBe(5)
  })
})