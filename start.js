require = require("esm")(module /*, options*/);
const path = require("path");
require("dotenv").config(path.join(__dirname, ".env"));
const { ShortLinkServer } = require("./serverApi/server");

new ShortLinkServer().start();
