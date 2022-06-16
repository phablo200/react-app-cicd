const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw new Error('Some error message')
  core.debug("Debug message");
  core.warning("Warning message");
  core.error("Error message");

  const name = core.getInput("who-to-greet");
  core.setSecret("some string here");
  console.log(`Hello World ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup("Loggin github object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();

  core.exportVariable("HELLO", "hello");
} catch (error) {
  core.setFailed(error.message);
}
