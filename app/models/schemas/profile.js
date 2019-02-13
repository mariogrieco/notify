import mongoose from 'mongoose'
import mongooseSlugPlugin from 'mongoose-slug-plugin'
import mongoose_delete from 'mongoose-delete'

const Schema = mongoose.Schema

const imageSchema = new Schema({
  id: { type: String },
  width: { type: Number },
  height: { type: Number }
}, {timestamps: true});

const profileSchema = new Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country'
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    set: function(city) {
      this._previousCity = this.city;
      return city;
    }
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State'
  },
  neighborhood: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Neighborhood'
  },
  name: {
    type: String,
    min: 3
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'pending', 'blocked', 'draft'],
    default: 'pending',
  },
  oldStatus: {
    type: String,
    enum: ['active', 'inactive', 'pending', 'blocked', 'draft'],
    default: 'pending',
  },
  description: {
    type: String,
    min: 3,
  },
  age: {
    type: Number
  },
  phone: {
    type: Number,
    min: 6,
  },
  whatsapp: {
    type: String,
    min: 6,
  },
  phone_code: {
    type: Number,
    min: 1,
  },
  pictures: {
    type: [imageSchema],
  },
  languages: {
    type: [String],
  },
  country_born: {
    type: String,
  },
  premium: {
    type: Boolean
  },
  verified: {
    type: Boolean
  }
}, {timestamps: true})

profileSchema.index({'$**': 'text'});
profileSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: true,
  deletedBy: false
})

profileSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=phone%>-<%=title%>' })

// profileSchema.statics.createNew = function(opts) {
//   return new Promise((resolve, reject) => {
//     const { categoryCode, cityId, accountId } = opts;

//     if (!categoryCode || !cityId ) {
//       reject({error: 'categoryCode, cityId and accountId are required'});
//     } else {
//       Country.find({'states.cities._id': cityId}, (err, result) => {
//         if (err) { return reject(error) }

//         console.log("Pasas")
//         if (result) {
//           console.log(result);
//         } else {
//           reject({error: 'City no encontrado'})
//         }
//       })
//     }
//   })
// }

// profileSchema.methods.getJSONToIndex = function(username) {
//   return {
//     objectID: this._id,
//     name: this.name,
//     description: this.description,
//     title: this.title,
//     username
//   }
// }

// profileSchema.statics.findFullJSON = function(id) {
//   console.log("enta")
//   console.log(id)
//   return new Promise((resolve, reject) => {
//     mongoose.connection.db.collection('profiles').aggregate([
//       {$match: {_id: id}},
//       { $lookup: {from: 'cities', localField: 'city', foreignField: '_id', as: 'city'} }
//     ], (err, profile) => {
//       if (err) { reject(err) }

//       console.log(profile);

//       resolve(profile)
//     });
//   })
// }

// const checkListing = async (profile) => {
//   console.log("CALLED")
//   if (profile.status === 'active' && profile.listingStatus === 'active' && (profile.planTop || profile.planSubidas)) {
//     if (profile.planTop) {
//       await addToListing(profile, 'top')
//     }
  
//     if (profile.planSubidas) {
//       if (profile.planSubidas.type !== 'no_subir') {
//         await addToListing(profile, 'subidas')
//       }
//     }
//   } else {
//     await removeFromListing(profile, 'top')
//     await removeFromListing(profile, 'subidas')
//   }
// }

// profileSchema.pre('save', async function (next) {
//   console.log(this.isModified('city'))
//   console.log(this.isModified('category'))

//   console.log(this._previousCategory)
//   console.log(this._previousCity)
//   if (this.isModified('city') || this.isModified('category')) {
//     const category = this._previousCategory
//     const city = this._previousCity
//     await removeFromListing(this, 'top', category, city)
//     await removeFromListing(this, 'subidas', category, city)
//   }

//   //this._previousCategory = undefined
//   //this._previousCity = undefined

//   next()
// })

// profileSchema.post('save', async (profile) => {
//   await checkListing(profile)
// })

// profileSchema.pre('save', (next) => {
  // if (this.isModified("description")) {
    // console.log('this.description, this.description new')
    // this.update({}, { $set: { is_indexed: false } })
  // }
  // next()
// })

export default profileSchema
