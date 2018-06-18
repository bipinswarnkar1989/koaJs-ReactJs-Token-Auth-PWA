import userController from '../../controllers/user';
const userCtrl = new userController();

class userRoutes {
   constructor(router){
    this.router = router;
    this.registerRoutes();
   }
   
   registerRoutes(){
    this.router.post('/userRegister', userCtrl.userRegister);
    this.router.post('/userLogin', userCtrl.userLogin);
    this.router.get('/validateToken', userCtrl.validateToken,userCtrl.getUser);
   }
}

module.exports =  userRoutes;