const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true,
        
    },
    firstName: {
        type: String,
        required: true,
        
    },
    lastName: {
        type: String,
        required: true,
        
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

//creates new collection user
module.exports = mongoose.model('User', UserSchema)

//if I want this to go to an already existing collection, you specify it with a third argument
// module.exports = mongoose.model('User', UserSchema, 'collection-name')
