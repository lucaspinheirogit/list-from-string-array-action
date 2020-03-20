const core = require("@actions/core")

try {
  const stringArray = core.getInput("stringArray")
  if (!stringArray) throw new Error("stringArray's required.")

  console.log("---INPUTS---")
  console.log("stringArray: ", stringArray)

  const isArray = Array.isArray(stringArray)
  if (!isArray) throw new Error("stringArray must be an Array.")

  const allElementsAreString = stringArray.every(el => typeof el === "string")
  if (!allElementsAreString)
    throw new Error("stringArray must only contain Strings.")

  const stringList = "- " + stringArray.join("\n- ")

  console.log("\n---OUTPUTS---")
  console.log("stringList:")
  console.log(stringList)

  core.setOutput("stringList", stringList)
} catch (error) {
  core.setFailed(error.message)
}
