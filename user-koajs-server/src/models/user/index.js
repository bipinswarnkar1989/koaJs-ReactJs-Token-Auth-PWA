const mongoose = require('mongoose');
const crypto = require('crypto');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        index: true,
        validate: {
            validator: function(v) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: '{VALUE} is not a valid email address!'
          },
      },
      hash:{
        type:String
      },
      salt:{
        type:String
      },
      role:String,
      createdAt:{
        type:Date,
        default:Date.now
      }
});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);

//Before saving create salt and hash the password
userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

userSchema.methods.comparePassword = function(password){
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash = hash;
}

userSchema.set('toJSON', {
    transform:function(doc,ret,options){
        delete ret.hash;
        delete ret.salt;
        return ret;
    }
});

userSchema.set('toObject', {
    transform:function(doc,ret,options){
        delete ret.hash;
        delete ret.salt;
        return ret;
    }
});

module.exports = mongoose.model('User', userSchema);
