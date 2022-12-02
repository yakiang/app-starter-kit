const Router = require('koa-router');
const config = require('../../configs');

const router = new Router({
  prefix: `${config.apiPrefix}/posts`,
});

router.get('/:id', async ctx => {
  ctx.body = 'post1';
});

module.exports = router;