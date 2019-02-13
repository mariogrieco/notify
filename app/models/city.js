import mongoose from 'mongoose'
import citySchema from './schemas/city'

export default mongoose.model('City', citySchema)
