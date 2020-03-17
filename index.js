const core = require('@actions/core');

try {
  const string = core.getInput('stringArray');

  const stringArray = string.substring(1,string.length-1).split(',')

  const stringList = '- ' + stringArray.join('\n- ')

  core.setOutput("stringList", stringList);
} catch (error) {
  core.setFailed(error.message);
}