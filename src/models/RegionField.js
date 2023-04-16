module.exports = (sequelize, DataTypes) => {
  const RegionField = sequelize.define('RegionField', {
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
    parent_id: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    row_type: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ['REGION', 'FIELD'],
      defaultValue: 'REGION'
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
      tableName: 'region_field',
      underscored: false,
    }
  );

  return RegionField;
};
