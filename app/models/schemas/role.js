import mongoose from 'mongoose'

const Schema = mongoose.Schema

const roleSchema = new Schema({
  type: {
    type: String,
    enum: ['admin', 'user'],
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
}, {timestamps: true})

roleSchema.index({type: 1}, {unique: true})

export default roleSchema
