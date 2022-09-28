const db = require("../database/models");

const genresController = {
  list: async (req, res) => {
    try {
      const generos = await db.Genero.findAll();
      res.render("genresList", { genres: generos });
    } catch (error) {
      console.log({ error });
    }
  },
  detail: async (req, res) => {
    /**
     *
     */
    try {
      const genero = await db.Genero.findByPk(req.params.id);
      res.render("genresDetail", { genre: genero });
    } catch (error) {
      console.log({ error });
    }
  },
};

module.exports = genresController;
