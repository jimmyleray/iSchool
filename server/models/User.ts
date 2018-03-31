import * as mongoose from 'mongoose'

export default mongoose.model('User', {
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  active: { type: Boolean, default: false },
  last: { type: Date, default: Date.now }
})
