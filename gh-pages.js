const ghPages = require("gh-pages");

console.log("Deploying now...");

ghPages.publish("dist", () => {
  console.log("Deploy Complete!");
});
