var express = require('express')
const bp = require('body-parser')
const routerPagination = require("./router/pagination")
const routerSort=require('./router/sort')
const app = express();
var cors = require('cors');
app.use(bp.json())
app.use(cors());
var port = process.env.PORT || 4500;
app.listen(port);
console.log('Listening on http://localhost:' + port);
app.use('/pagination', routerPagination);
app.use('/sort',routerSort);
