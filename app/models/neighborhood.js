import mongoose from 'mongoose'
import neighborhoodSchema from './schemas/neighborhood'

export default mongoose.model('Neighborhood', neighborhoodSchema)