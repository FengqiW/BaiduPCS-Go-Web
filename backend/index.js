// express
const express = require("express");
const app = express();
const router = express.Router();
//  parse body
const bodyParser = require("body-parser");
// shell
const shell = require("shelljs");
const path = require("path");
const password = process.env.APP_PASSWORD || "YourPassword"; // change your password here
const port = process.env.PORT || 3001;

// app.use(express.static(`${__dirname}/dist`));
// app.engine(".html", require("ejs").renderFile);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

app.use("/", router);

app.post("/", (req, res) => {
  const body = req.body;
  const prefix = "./BaiduPCS-Go ";
  const cmd = prefix + body.cmd;
  const psw = body.psw;
  const method = body.cmd.split(" ")[0];

  if (psw !== password) {
    res.status(403).send({
      msg: "invalid password"
    });
    return;
  }

  shell.exec(cmd, (code, stdout, stderr) => {
    let result = {
      code,
      method
    };

    if (code === 0) {
      result.data = stdout;
      res.status(200).send(result);
    } else {
      result.msg = stderr;
      res.status(400).send(result);
    }
  });
});

console.log("Listennint on port: " + port);
app.listen(port);
