import mongoose from 'mongoose'
import countrySchema from './schemas/country'

export default mongoose.model('Country', countrySchema)