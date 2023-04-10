import client from "./client.js";
import fetch from "node-fetch";
import { CronJob } from "cron";
// "0 */6 * * *"
var job = new CronJob("20 * * * * *", function () {
  fetch("https://api.quotable.io/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      tweet(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

const tweet = async (data) => {
  try {
    await client.v2.tweet(`${data.content}
    
- ${data.author}.`);
  } catch (error) {
    console.log(error);
  }
};

job.start();
