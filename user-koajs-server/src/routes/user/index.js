import userController from '../../controllers/user';
const userCtrl = new userController();

class userRoutes {
   constructor(router){
    this.router = router;
    this.registerRoutes();
   }
   
   registerRoutes(){
    this.router.post('/users/userRegister', userCtrl.userRegister);
    this.router.post('/users/userLogin', userCtrl.userLogin);
    this.router.get('/users/validateToken', userCtrl.validateToken,userCtrl.getUser);
   }
}

module.exports =  userRoutes;