const Koa = require('koa');
const responseTime = require('koa-response-time');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//routes
const apiRoutes = require('./routes');

const app = new Koa();

const port = process.env.PORT || 3001;
dotenv.load({ path:'.env' });

app.use(responseTime());
app.use(helmet());
app.use(logger());
app.use(bodyParser());
app.use(apiRoutes.routes())
app.use(apiRoutes.allowedMethods())


// allow cors
app.use(async (ctx,next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requestes, Content-Type, Accept, Authorization');
    await next();
});

let mongoDbUri;
if (process.env.NODE_ENV === 'dev') {
    mongoDbUri = process.env.MONGODB_DEV_URI;
} else {
   mongoDbUri = process.env.MONGODB_URI;
}
mongoose.Promise = global.Promise;
const mongodb = mongoose.connect(mongoDbUri);
mongodb.then((() => {
        // response
        app.use(async ctx => {
            ctx.body = '<h2 align=center>Welcome to MernSocial</h2>';
        });
    
      app.listen(port, () => {
        console.log(`MernSocial is listening at ${port}`)
    });
}))
.catch(err => console.log(err));

module.exports = app;




