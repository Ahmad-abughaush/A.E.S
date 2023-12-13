require('dotenv').config();
const mongoose = require("mongoose");
const dbURI = "mongodb+srv://ahmedabughoshh:123@cluster0.leatrkm.mongodb.net/?retryWrites=true&w=majority";
// const server = require('./server');
// server.start();

mongoose
.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(PORT, () => {
        console.log(`Starting server on port ${PORT}`);
    });
})
.catch((error) => console.error('Error in starting server', error))