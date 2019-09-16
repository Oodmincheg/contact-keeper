const mongoosse = require('mongoose')

const ContactSchema = mongoosse.Schema({
    user: {
        type: mongoosse.Schema.Types.ObjectId,
        refer: 'users'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoosse.model('contact', ContactSchema)