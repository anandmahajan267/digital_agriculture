module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    created_on: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_on: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  },
    {
      timestamps: false,
      tableName: 'property',
      underscored: false,
    }
  );

  return Property;
};
