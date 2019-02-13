import mongoose from 'mongoose'

const Schema = mongoose.Schema

const citySchema = new Schema({
  name: {
    type: String,
    min: 3,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  state: {
    type: Schema.Types.ObjectId,
    ref: 'State'
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  }
}, {timestamps: true})

citySchema.index({
  code: 1,
  name: 1
}, {unique: true})

export default citySchema
