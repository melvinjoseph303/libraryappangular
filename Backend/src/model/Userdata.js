const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.1k3dv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    username : String,
    password : String
});

var Userdata = mongoose.model('user', NewUserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Userdata;