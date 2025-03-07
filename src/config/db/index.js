const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8-education-dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('ConnectDB successfully');
    } catch (error) {
        console.log('ConnectDB failure');
    }
}

module.exports = { connect };
