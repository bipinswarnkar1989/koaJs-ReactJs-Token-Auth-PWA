const multer = require('koa-multer');

const upload = multer({ dest: 'uploads/' });

class postController {
    async createDraft (ctx) {
       console.log(`createDraft: ${JSON.stringify(ctx.request)}`);
       let imageFile = ctx.request.files.file;
       upload.single('file');
    }
}

module.exports = postController;