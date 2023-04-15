module.exports = (sequelize, DataTypes) => {
  const OrganizationProperty = sequelize.define('OrganizationProperty', {
    organization_id: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    property_id: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
  },
    {
      timestamps: false,
      tableName: 'organizations_properties',
      underscored: false,
    }
  );

  OrganizationProperty.associate = (models) => {

    models.Property.belongsToMany(models.Organization, {
      as: 'organization',
      through: OrganizationProperty,
      foreignKey: 'property_id',
      otherKey: 'organization_id',
    });
    models.Organization.belongsToMany(models.Property, {
      as: 'property',
      through: OrganizationProperty,
      foreignKey: 'organization_id',
      otherKey: 'property_id',
    });
  };

  return OrganizationProperty;
};
