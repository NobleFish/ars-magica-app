//models/Covenant
import mongoose from 'mongoose';

const CovenantSchema = new mongoose.Schema({
    covenant_name: {
        type: String,
        required: [true, 'Please add a covenant name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Covenant name can not be more than 50 characters']
    }
});

module.exports = mongoose.models.Covenant || mongoose.model('Covenant', CovenantSchema);