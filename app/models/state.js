import mongoose from 'mongoose'
import stateSchema from './schemas/state'

export default mongoose.model('State', stateSchema)