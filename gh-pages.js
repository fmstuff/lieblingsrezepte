import { publish } from "gh-pages";

console.log("Deploying now...");

publish("dist", () => {
  console.log("Deploy Complete!");
});
