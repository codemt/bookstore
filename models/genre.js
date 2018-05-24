var mongoose = require('mongoose');

// Create Genre Schema..
var genreSchema = mongoose.Schema({

        name:{
            type: String,
            required:true
        },
        created_date:{
            type:Date,
            default:Date.now    

        }



});

var Genre = module.exports = mongoose.model('Genre',genreSchema)


// Get Genres Function..

module.exports.getGenres =   function(callback,limit){

        Genre.find(callback).limit(limit);


}

// Post a Genre...
module.exports.addGenre = function(genre,callback){

        Genre.create(genre,callback);

}

// update Genre
module.exports.updateGenre = function(id,genre,options,callback){
        var query = { _id : id}
                var update = {

                        name : genre.name

                }
                Genre.findOneAndUpdate(query,update,options,callback)


}