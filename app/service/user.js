'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async findAll() {
        const result = await this.ctx.model.User.find();
        console.info(result);
        return result;
    }
}

module.exports = UserService;