module.exports = (sequelize, dataTypes) => {
    const alias = "Peliculas";
  
    const cols = {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER,
      },
      title: dataTypes.STRING,
      rating: dataTypes.DECIMAL,
      awards: dataTypes.INTEGER,
      length: dataTypes.INTEGER,
      release_date: dataTypes.DATE,
    };
  
    const config = {
      tableName: "movies",
      timestamps: false,
    };
  
    const Peliculas = sequelize.define(alias, cols, config);
  
    return Peliculas;
  };