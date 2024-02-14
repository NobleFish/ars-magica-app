// models/Character.js

import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
  character_type: {
    type: String,
    required: [true, 'Please add a character type'],
    enum: ['grog', 'companion', 'mage']
  },
  character_name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: false,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters']
  },
  player_name: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: [50, 'Player name can not be more than 50 characters']
  },
  saga: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: [50, 'Saga title can not be more than 50 characters']
  },
  // Add other character attributes as needed
});

module.exports = mongoose.models.Character || mongoose.model('Character', CharacterSchema);