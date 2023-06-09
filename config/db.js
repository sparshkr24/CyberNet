const moongose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//calling database using async await

const connectDB = async () => {
    try {
        await moongose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        console.log('MongoDb Connected..');
    } catch (err) {
        console.error(err.message);
        console.log("ITS DATABSE")
        //exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
