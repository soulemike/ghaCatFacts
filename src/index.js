import * as core from "@actions/core";
//import * as github from "@actions/github";

try {
  async function getCatFact() {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    return data.fact;
  }
  core.setOutput("fact", `Cat fact: ${await getCatFact()}`);

  // Get the JSON webhook payload for the event that triggered the workflow
  //const payload = JSON.stringify(github.context.payload, undefined, 2);
  //core.info(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}