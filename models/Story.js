const mongoose = require('mongoose')

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    body: {
        type: String,
        required: true,
        
    },
    status: {
        type: String,
        default: 'public', 
        enum: ['public', 'private'],
        
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
module.exports = mongoose.model('Story', StorySchema)

//if I want this to go to an already existing collection, you specify it with a third argument
// module.exports = mongoose.model('User', UserSchema, 'collection-name')
