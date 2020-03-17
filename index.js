const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();
client.set("hits", 0);

app.get("/", (req, res) => {
  client.get("hits", (err, hits) => {
    res.send(`Number of hits is ${hits}`);
    client.set("hits", parseInt(hits) + 1);
  });
});

app.listen(8081, () => {
  console.log(`Listening on port 8081`);
});
