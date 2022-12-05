const Router = require('koa-router');
const config = require('../../configs');

const router = new Router({
  prefix: `${config.apiPrefix}/user`,
});

router.get('/:name', async ctx => {
  ctx.body = ctx.request.params.name;
});

module.exports = router;