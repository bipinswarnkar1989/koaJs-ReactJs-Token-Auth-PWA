const Koa = require('koa');
const responseTime = require('koa-response-time');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs-promise');
const koaBody = require('koa-body');
const os = require('os');
const serve = require('koa-static');
const path = require('path');
const cors = require('@koa/cors');
//const formidable = require('koa2-formidable')

//routes
const apiRoutes = require('./routes');

const app = new Koa();
app.use(cors());
// app.use( koaBody({
//     multipart: true,
//     formidable: {
//       uploadDir: __dirname + '/public'
//     }
//   }));
//app.use (formidable());

const port = process.env.PORT || 3001;
dotenv.load({ path:'.env' });

// allow cors
app.use(async (ctx,next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requestes, Content-Type, Accept, Authorization');
    await next();
});

app.use(responseTime());
app.use(helmet());
app.use(logger());
app.use(bodyParser());
app.use(apiRoutes.routes())
app.use(apiRoutes.allowedMethods())



// serve files from ./public

app.use(serve(path.join(__dirname, '/public')));

// handle uploads

app.use(async function(ctx, next) {
  // ignore non-POSTs
  if ('POST' != ctx.method) return await next();

  const file = ctx.request.files.file;
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
  reader.pipe(stream);
  console.log('uploading %s -> %s', file.name, stream.path);

  //ctx.redirect('/');
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




