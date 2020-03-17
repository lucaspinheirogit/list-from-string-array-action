const core = require('@actions/core');

try {
  const string = core.getInput('stringArray');
  console.log(string)
  
  const stringArray = string.substring(1,string.length-1).split(',')
  console.log(stringArray)
  
  const stringList = '- ' + stringArray.join('\n- ')
  console.log(stringList)

  core.setOutput("stringList", stringList);
} catch (error) {
  core.setFailed(error.message);
}