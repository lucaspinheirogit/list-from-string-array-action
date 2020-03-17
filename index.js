const core = require('@actions/core');

try {
  const stringArray = core.getInput('stringArray');

  const stringList = '-' + stringArray.join('\n- ')

  core.setOutput("stringList", stringList);
} catch (error) {
  core.setFailed(error.message);
}