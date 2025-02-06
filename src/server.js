const Hapi = require("@hapi/hapi");
const routes = require("./routes/booksRoutes");

const port = process.env.PORT || 9000;
const host = process.env.HOST || "localhost";

const init = async () => {
  const server = Hapi.server({
    port,
    host,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server Running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.error("UnhandledRejection:", err);
  process.exit(1);
});

init();
