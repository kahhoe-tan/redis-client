const redis = require("redis");
const fs = require("fs");

// Update redis connection details here
var password = "redis";
var host = "localhost";
var port = "6379";

var url = "rediss://" + password + "@" + host + ":" + port;

const client = redis.createClient({
  url: url,
  tls: {
    cert: fs.readFileSync("tls/client.crt"),
    key: fs.readFileSync("tls/client.key"),
    ca: fs.readFileSync("tls/ca.crt"),
  },
});

client.on('connect', function () {
  console.log('Redis client connected');

  client.set("abc", "def", redis.print);
  client.get("abc", redis.print);

  client.quit();
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});
