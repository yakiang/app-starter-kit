const Koa = require('koa');
const routers = require('./routers');
const config = require('./configs');

const app = new Koa();

for (const router of routers) {
    app.use(router.routes());
}

app.listen(config.port);
