'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async findAll() {
        const result = await this.ctx.model.User.findAll();
        console.info(result);
        return result;
    }

    async findOne(id) {
        const result = await this.ctx.model.User.findOne({ where: {id: id} });
        // const result = await this.ctx.model.User.findById(id);
        console.info(result);
        return result;
    }

    async update(id) {
        const result = await this.ctx.model.User.findOne({ where: {id: id} });
        console.info(result);
        await result.update({
            age: 33
        });
        console.info(result);

        return result;
    }
}

module.exports = UserService;