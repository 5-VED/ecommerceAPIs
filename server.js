const app = require('./app');
const {DB,PORT} = require('./Config/index');
const {success,error} = require('consola')

app.listen(PORT,()=>{
    success({message: `Server started on port ${PORT}`, badge: true});
})
