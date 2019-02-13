import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
// import passwordHash from 'password-hash'
// import Profile from './profile'

const Schema = mongoose.Schema

const accountSchema = new Schema({
  username: {
    type: String, 
    required: true,
    min: 5
  },
  password: {
    type: String, 
    required: true
  },
  profiles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  }],
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  },
  description: {
    type: String
  },
}, {timestamps: true})

accountSchema.index({username: 1}, {unique: true})
accountSchema.plugin(mongoosePaginate);

// accountSchema.set('toJSON', {
//   transform: function (doc, ret, options) {
//     ret.id = ret._id
//     delete ret._id
//     delete ret.__v
//     delete ret.password
//   }
// });

// accountSchema.methods.profile = function() {
//   return this.profiles[0]
// }

// accountSchema.statics.register = function(opts) {
//   return new Promise((resolve, reject) => {
//     let { username, password } = opts;

//     opts.password = passwordHash.generate(opts.password); 

//     this.create(opts)
//       .then((account) => {
//         const u = {
//           id: account.id,
//           username: account.username
//         };

//         resolve(u);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// accountSchema.statics.changePassword = function({_id, password}) {
//   return new Promise((resolve, reject) => {
//     const passwordHashed = passwordHash.generate(password); 
//     this.update({
//       _id: _id
//     }, {
//       $set: {
//         password: passwordHashed
//       }
//     }, (err, result) => {
//       if (err) { return reject(err) }

//       resolve(result)
//     })
//   })
// }

// accountSchema.statics.verifyPassword = function(password, account) {
//   return passwordHash.verify(password, account.password)
// }

export default accountSchema;