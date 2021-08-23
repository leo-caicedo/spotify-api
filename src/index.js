const createApp = require("./app");
const { config } = require("./config");
require("./db");

const app = createApp();
app.listen(config.port, (error) => {
  if (error) return console.error(`ERROR ${error}`);
  console.log(`Server on port ${config.port}`);
});
