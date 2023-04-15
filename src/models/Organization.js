module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
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
    user_id: {
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
      tableName: 'organization',
      underscored: false,
    }
  );

  Organization.associate = (models) => {

    Organization.hasMany(models.OrganizationProperty,
      { foreignKey: 'organization_id', as: 'organization' });
      
    Organization.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'user' });
  };

  return Organization;
};
