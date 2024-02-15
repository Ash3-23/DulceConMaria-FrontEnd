const { default: mongoose } = require("mongoose");

const user = new mongoose.Schema({
  usersName: {
    type: String,
    required: true,
  },
  email:
  {
    type: String,
    required: true,
  },
  password:
  {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  avatarImg: {
    type: Object,
  }

});

// UsersNight.pre('save', function (next) {
//   const user = this;

//   if (!user.isModified('password')) return next();

//   bcrypt.hash(user.password, 10, (err, hash) => {
//     if (err) return next(err);

//     user.password = hash;
//     next();
//   });
// });

// UsersNight.methods.setImgUrl = function setImgUrl(filename) {
//   this.avatarImg = `${filename}`;
// };


module.exports = mongoose.model('User', user);