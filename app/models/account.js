import mongoose from 'mongoose'
import accountSchema from './schemas/account'

export default mongoose.model('Account', accountSchema)
