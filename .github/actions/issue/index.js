const core = require("@actions/core");
const github = require("@actions/github");

try {
  const token = core.getInput("token");
  const title = core.getInput("title");
  const body = core.getInput("body");
  const assignees = core.getInput("token");

  const octokit = new github.Github(token);

  const response = octokit.issues.create({
    ...github.context.repo,
    title,
    body,
    assignees: assignees ? assignees.split("\n") : undefined,
  });

  core.setOutput("issue", JSON.stringify(response.date));
} catch (error) {
  core.setFailed(error.message);
}
