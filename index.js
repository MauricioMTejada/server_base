require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const port = process.env.PORT || 3002;


const server = express();

const corsOptions = { origin: "*", };

server.use(cors(corsOptions));
server.use(bodyParser.json({ limit: "10mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
server.use(morgan("dev"));

// Imprimo en consola el pedido:
/*   server.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    // console.log(req);
    next(); }); */

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: err.message });
});

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