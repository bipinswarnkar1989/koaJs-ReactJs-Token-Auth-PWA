const Router = require('koa-router');
const router = new Router({
    prefix: '/api/v1'
  });



//routes
const userRoutes = require('./user');
const postRoutes = require('./post');

new userRoutes(router);
new postRoutes(router);

module.exports = router;

//export default router;
