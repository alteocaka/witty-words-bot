import client from "./client.js";
import fetch from "node-fetch";
import http from 'http';
import { CronJob } from "cron";

// const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

var job = new CronJob("0 */6 * * *", function () {
  fetch("https://api.quotable.io/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      tweet(data);
      console.log('New tweet!')
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

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

job.start();

server.listen(port, () => {
  console.log(`Server running!`);
});
