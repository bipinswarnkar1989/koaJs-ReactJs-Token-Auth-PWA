const jwt = require('jsonwebtoken');
const User = require('../../models/user');

class userController {
    async userRegister (ctx) {
        console.log(`userRegister: ${JSON.stringify(ctx.request.body)}`);
        const email = ctx.request.body.email;
        const password = ctx.request.body.password;
        if (email && password) {
          const newUser = await new User({
            email
          });
          await newUser.setPassword(password);
          try {
              await newUser.save();
              const token = await jwt.sign({
                newUser,
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
              },process.env.SECRET_TOKEN,
              {
                algorithm:'HS384'
              });
              const resp = {
                success:true,
                message:'User Registered Successfully',
                user: newUser,
                token:token
              }
              ctx.body = resp;
          } catch (error) {
            console.log(error);
              ctx.body = {
                success:false,
                message:'User Registration Failed!',
                error:error.message
              }
          }
        }
      }
      
      async userLogin (ctx) {
        console.log(`userLogin: ${JSON.stringify(ctx.request.body)}`);
        const email = ctx.request.body.email;
        const password = ctx.request.body.password;
        if (email && password) {
          try {
            var  user = await User.findOne({email});
          } catch (error) {
            ctx.body = {
              success:false,
              message:'Something going wrong!',
              error
            }
          }
          if (user) {
            let validPassword = await user.comparePassword(password);
            if (validPassword) {
             try {
              const token = await jwt.sign({
                user,
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
              },process.env.SECRET_TOKEN,
              {
                algorithm:'HS384'
              });
               ctx.body = {
                success:true,
                message:'User LoggedIn Successfully',
                user,
                token
              }
             } catch (error) {
              ctx.body = {
                success:false,
                message:'Something going wrong!',
                error
              }
             }
            }else {
              ctx.body = {
                success:false,
                message:'Invalid Password',
              };
            }
          } else {
            ctx.body =  {
              success:true,
              message:'Invalid Email'
            };
          }
        }
      }
      
      async validateToken (ctx,next){
        console.log(`validateToken: ${JSON.stringify(ctx.request.headers)}`);
        const token = await ctx.request.headers['authorization'];
        if (token) {
          try {
            const result = await jwt.verify(token, process.env.SECRET_TOKEN);
            console.log(`Token Validated Successfully: ${JSON.stringify(result)}`);
            ctx.request.user = result.user;
            next();
          } catch (error) {
            console.log(error);
            ctx.body = {
              success: false,
              message: 'Please Log in using a valid email & password'
            }
          }
        }
      }

      async getUser(ctx,next){
        const resp = {
          success: true,
          message: 'Authenticated Successfully',
          user:ctx.request.user
        }
        ctx.body = resp;
      }
}

module.exports =  userController;