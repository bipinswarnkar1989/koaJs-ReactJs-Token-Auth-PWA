const Koa = require('koa');
const responseTime = require('koa-response-time');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const dotenv = require('dotenv');
const app = new Koa();

const port = process.env.PORT || 3001;
dotenv.load({ path:'.env' });

app.use(responseTime());
app.use(helmet());
app.use(logger());
app.use(bodyParser());


// allow cors
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requestes, Content-Type, Accept, Authorization');
    next();
});

// response
app.use(async ctx => {
  ctx.body = 'Welcome to MernSocial';
});

app.listen(port, () => {
    console.log(`MernSocial is listening at ${port}`)
});
