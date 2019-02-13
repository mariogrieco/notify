import mongoose from 'mongoose'

const Schema = mongoose.Schema

const neighborhoodSchema = new Schema({
  name: {
    type: String,
    min: 3,
    required: true
  },
  latitude: {
    type: Number
  },
  longitud: {
    type: Number
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  }
}, {timestamps: true})

export default neighborhoodSchema