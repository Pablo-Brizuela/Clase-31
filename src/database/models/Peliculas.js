module.exports = (sequelize, dataTypes) => {
    const alias = "Peliculas";
  
    const cols = {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER,
      },
      title: dataTypes.STRING,
      rating: dataTypes.STRING,
      awards: dataTypes.STRING,
      length: dataTypes.STRING,
      release_date: dataTypes.STRING,
    };
  
    const config = {
      tableName: "movies",
      timestamps: false,
    };
  
    const Peliculas = sequelize.define(alias, cols, config);
  
    return Peliculas;
  };