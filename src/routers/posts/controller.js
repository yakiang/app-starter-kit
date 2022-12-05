const Router = require('koa-router');
const { savePost } = require("./service");
const config = require('../../configs');

const router = new Router({
  prefix: `${config.apiPrefix}/posts`,
});

router.post('/', async ctx => {
  const id = await savePost(ctx.request.body);
  ctx.body = id;
});

module.exports = router;