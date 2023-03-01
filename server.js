const express = require("express");
const bodyparser = require('body-parser');
const cors = require('cors');
const dbconfig = require('./db')

const app = express();


app.use("/uploads", express.static("uploads"));
app.use(express.json())
app.use(cors());
app.use(bodyparser.json());

const userRouter = require('./routes/userRoute')
const AdminRouter = require('./routes/adminRoute')
const subAdmin = require('./routes/subAdmin')
const users = require('./routes/userssRoute')
const religion = require('./routes/religionRouter');
const motherLanguage = require('./routes/motherLanguageRouter');
const cast = require('./routes/castRouter');
const sect = require('./routes/sectRouter');
const looks = require('./routes/looksRoute');
const complexion = require('./routes/complexionRoute')
const build = require('./routes/buildRoute')
const house = require('./routes/house.route')
const country = require('./routes/countryRoute')
const provinvces = require('./routes/provinvcesRoute')
const notification = require('./routes/notification');
const preference = require('./routes/preference');

app.use('/api/user', userRouter)
app.use('/api/users', users)
app.use("/api/admin", AdminRouter)
app.use("/api/subAdmin",subAdmin)
app.use("/api", religion)
app.use("/api", motherLanguage)
app.use("/api",cast)
app.use("/api",sect)
app.use("/api",looks)
app.use("/api",complexion)
app.use("/api",build)
app.use("/api",house)
app.use("/api",country)
app.use("/api",provinvces)
app.use("/api",notification)
app.use("/api",preference);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node server started by using nodemon"))