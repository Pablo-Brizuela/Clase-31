const db = require("../database/models");

const genresController = {
  list: async (req, res) => {
    try {
      const peliculas = await db.Peliculas.findAll();
      res.render("moviesList", { movies: peliculas });
    } catch (error) {
      console.log({ error });
    }
  },
  detail: async (req, res) => {
   
    try {
      const peliculas = await db.Peliculas.findByPk(req.params.id);
      res.render("moviesDetail", { movies: peliculas });
    } catch (error) {
      console.log({ error });
    }
  },
  new: async (req, res) => {
   
    try {
      const peliculas = await db.Peliculas.findAll({order:[["release_date","DESC"]]});
      res.render("newstMovies", { movies: peliculas });
    } catch (error) {
      console.log({ error });
    }
  },
  recomended: async (req, res) => {
   
    try {
      const peliculas = await db.Peliculas.findAll({
        order:[["title","DESC"]],
        offset:5,
        limit:5
    });
      res.render("recommendedMovies", { movies: peliculas });
    } catch (error) {
      console.log({ error });
    }
  },
};

module.exports = genresController;
