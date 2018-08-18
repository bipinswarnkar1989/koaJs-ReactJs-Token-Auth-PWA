import postController from '../../controllers/post';
const postCtrl = new postController();

class postRoutes {
   constructor(router){
    this.router = router;
    this.registerRoutes();
   }
   
   registerRoutes(){
    this.router.post('/posts', postCtrl.createDraft);
   }
}

module.exports =  postRoutes;