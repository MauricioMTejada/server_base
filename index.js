require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const port = process.env.PORT || 3002;

// const router = require("./routes/index.routes.js");

// const { sequelize } = require("./database.js");

const server = express();

  server.get('/', (req, res) => {
    const htmlResponse =
    `<html>
        <head>
            <title>Hello World!</title>
        </head>
        <body>
         <h1>Hello World!</h1>
         </body>
         </html>`;

    res.send(htmlResponse);
  });

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });