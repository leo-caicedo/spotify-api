const createApp = require("./app");
const { config } = require("./config");

const app = createApp();
app.listen(config.port, (error) => {
  if (error) return console.error(`ERROR ${error}`);
  console.log(`Server on port ${config.port}`);
});
