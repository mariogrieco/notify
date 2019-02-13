import mongoose from 'mongoose'

const Schema = mongoose.Schema

const countrySchema = new Schema({
  name: {
    type: String,
    min: 3,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  iso: {
    type: String
  },
  states: [{
    type: Schema.Types.ObjectId,
    ref: 'State'
  }]
}, {timestamps: true})

countrySchema.index({
  name: 1,
  code: 1,
  iso: 1
}, { unique: true })

export default countrySchema