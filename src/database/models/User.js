module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        idUser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
        address: {type: DataTypes.TEXT('tiny')},
        phone: {type: DataTypes.STRING},
        employeNumber: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
        hiredAt: {
            type: DataTypes.DATEONLY,
            defaultValue: sequelize.NOW
        }
    });
    User.associate = (models) => {};

    return User;
};
