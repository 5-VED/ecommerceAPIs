const app = require('./app');
const { DB, PORT } = require('./Config/index');
const { success, error } = require('consola');
const {connect} = require('mongoose');

const startApp = async () => {
    try {
        //Connecting to DB
        await connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        success(({
            message: `Successfully connected to database`,
            badge: true
        }));

        //Start Listening to server
        app.listen(PORT, () => {
            success({message: `Server started on port ${PORT}`, badge: true});
        });

    } catch (err) {
        error({message: `Unable to connect to database \n${err}`, badge: true});
        startApp();
    }
}

startApp();


