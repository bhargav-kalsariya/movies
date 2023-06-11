const mongoose = require('mongoose');
let connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://kalsariyabhargav187:moviesapi@cluster0.qadicjw.mongodb.net/?retryWrites=true&w=majority');
        console.log('MongoDB Connected');
    } catch (err) {
        console.log(err);
    }
}
module.exports = connect;