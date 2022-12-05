const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { logging, logger } = require('./middlewares/logging');
const routers = require('./routers');
const config = require('./configs');

const app = new Koa();
app.use(logging);

app.use(
  bodyParser({
    formLimit: '10mb',
    jsonLimit: '10mb',
  }),
);

for (const router of routers) {
  app.use(router.routes());
}

app.listen(config.port, () => {
  logger.info(`koa is listening at ${config.port}`);
});
