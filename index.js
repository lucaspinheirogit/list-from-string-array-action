const core = require("@actions/core")

try {
  const stringArrayInput = core.getInput("stringArray")
  if (!stringArrayInput) throw new Error("stringArray's required.")

  console.log("---INPUTS---")
  console.log("stringArray:")
  console.log("value:", stringArrayInput)
  console.log("type:", typeof stringArrayInput)

  let stringArray = stringArrayInput
  const isArray = Array.isArray(stringArrayInput)

  if (!isArray) {
    stringArray = stringArrayInput
      .substring(1, stringArrayInput.length - 1)
      .split(",")
  }

  if (!Array.isArray(stringArray))
    throw new Error("stringArray must be an Array.")

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
