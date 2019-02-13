import mongoose from 'mongoose'
import roleSchema from './schemas/role'

export default mongoose.model('Role', roleSchema)