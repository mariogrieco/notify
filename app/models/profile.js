import mongoose from 'mongoose'
import profileSchema from './schemas/profile'

export default mongoose.model('Profile', profileSchema)