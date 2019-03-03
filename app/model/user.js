'use strict';

// module.exports = app => {
//     const mongoose = app.mongoose;
//     const Schema = mongoose.Schema;

//     const UserSchema = new Schema({
//         name: { type: String },
//         password: { type: String },
//     });

//     console.info('link:' + mongoose.model('User', UserSchema));

//     return mongoose.model('User', UserSchema);
// };

module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    const User = app.model.define('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(45),
        password: STRING(45),
        address: STRING(250)
    }, {
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: false,
    });

    return User;
};