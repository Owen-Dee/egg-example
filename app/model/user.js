'use strict';

module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    const User = app.model.define('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(45),
        password: STRING(45),
        age: INTEGER,
        address: STRING(250),
        role: STRING(45)
    }, {
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: false,
    });

    return User;
};