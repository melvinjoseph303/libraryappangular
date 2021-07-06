const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.1k3dv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
        name: String,
        age: String,
        type: String,
        image: String
});
var Authordata = mongoose.model('authordata',AuthorSchema);
module.exports = Authordata;
