import mongoose from 'mongoose'

const Schema = mongoose.Schema

const stateSchema = new Schema({
  name: {
    type: String,
    min: 3,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  cities: [{
    type: Schema.Types.ObjectId,
    ref: 'City'
  }],
  country: {
    type: Schema.Types.ObjectId,
    ref: 'Country'
  }
}, {timestamps: true})
  
export default stateSchema
