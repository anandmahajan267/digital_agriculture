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
    region_field_id: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
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

  Property.associate = (models) => {
    Property.belongsTo(models.RegionField,
      { foreignKey: 'region_field_id', as: 'region_field' });
  };

  return Property;
};
