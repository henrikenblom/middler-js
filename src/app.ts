"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as compression from "compression";
import * as expressValidator from "express-validator";
import * as logger from "morgan";
import * as lusca from "lusca";

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

module.exports = app;