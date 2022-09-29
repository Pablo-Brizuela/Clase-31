module.exports = (sequelize, dataTypes) => {
    const alias = "Genero";
  
    const cols = {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER,
      },
      name: dataTypes.STRING,
    };
  
    const config = {
      tableName: "genres",
      timestamps: false,
    };
  
    const Generos = sequelize.define(alias, cols, config);
  
    return Generos;
  };