const express = require("express");
const routes = require("./routes"); // when you require it from a folder, it expects it from an index file.

// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\n\n 🚀 App in now listening on: http://localhost:${PORT} 🔥\n\n`
    )
  );
});
