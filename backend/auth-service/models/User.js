const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;

const UserSchema = new mongoose.Schema({
  email:    { type: String, required:true, unique:true },
  password: { type: String, required:true },
  roles:    [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }]
}, { timestamps:true });

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = function(candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', UserSchema);
