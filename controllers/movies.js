const Movie = require('../models/movie')

module.exports = {
   create, 
   index,
   delete: deleteOne
}

function create(req, res) {
    req.body.addedBy = req.user._id
    req.body.cast = req.body.cast.split(',');
    Movie.create(req.body)
    .then(movie => {res.json(movie)})
    .catch(err => {res.json(err)})
  }

function index(req, res) {
   Movie.find({})
   .populate('addedBy')
   .then(movies => {res.json(movies)})
   .catch(err => {res.json(err)})
}

function deleteOne(req, res){
   Movie.findByIdAndDelete(req.params.id)
   .then(movie => {res.json(movie)})
   .catch(err => {res.json(err)})
};
