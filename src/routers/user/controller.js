const Router = require('koa-router');
const config = require('../../configs');

const router = new Router({
  prefix: `${config.apiPrefix}/user`,
});

router.get('/me', async ctx => {
  ctx.body = ctx.request.path
});

module.exports = router;