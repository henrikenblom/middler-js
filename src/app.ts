"use strict";

import * as express from "express";
import * as compression from "compression";
import * as logger from "morgan";

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(compression());
app.use(logger("dev"));

app.get("/", function (req, res) {
    res.json("");
});

module.exports = app;