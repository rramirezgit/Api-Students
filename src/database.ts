import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';

(async () => {
    try {
        const mongooseOptions: ConnectOptions = { //objeto de configuracion de tipo ConnectOptions
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false, 
            // user: config.MONGO_USER,
            // pass: config.MONGO_PASSWORD 
        }
        const db = await mongoose.connect(/* `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}` */
        `mongodb+srv://note_db:P0VEpWwj6xuFv1KR@cluster0.hrmen.mongodb.net/test`
       /*  ,mongooseOptions */)
        console.log('Base de datos conectada a:', db.connection.name)

    } catch (error) {
        console.log(error)
    }
})()