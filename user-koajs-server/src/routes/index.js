const Router = require('koa-router');
const router = new Router({
    prefix: '/api/v1'
  });



//routes
const userRoutes = require('./user');


new userRoutes(router);

module.exports = router;

