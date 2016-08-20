import mongoose, { Schema } from 'mongoose';

// create a schema for snaps with fields
const SnapSchema = new Schema({
  pictureURL: String,
  sentFrom: String,
  sentTo: String,
  time: Date,
  key: String,

});

// create model class
const SnapModel = mongoose.model('Snap', SnapSchema);

export default SnapModel;
