var mongoose = require('mongoose');

// Create Genre Schema..
var bookSchema = mongoose.Schema({

        title:{
            type: String,
            required:true
        },
        genre:{
            type:String,
            required:true

        },
        description:{
            type:String,


        },
        author:{
            type:String,
            required:true
        },
        publisher:{
            type:String

        },
        image_url:{
            type:String

        },
        buy_url:{
            type:String

        },
        created_date:{
            type:Date,
            default:Date.now    

        }




});

var Book = module.exports = mongoose.model('books',bookSchema)


// Get All Books Function..

module.exports.getBooks =   function(callback,limit){

          Book.find(callback).limit(limit);


}
// Get Single Book by ID ..

module.exports.getBookById =   function(id,callback){

    Book.findById(id,callback);


}

// Post a Book.
module.exports.addBook =  function(book,callback){

    Book.create(book,callback);


}