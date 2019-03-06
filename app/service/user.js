'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async findAll() {
        const users = await this.ctx.model.User.findAll();
        this.ctx.status = 200;
        return Object.assign({}, {
            data: users
        });
    }

    async findById(id) {
        const user = await this.ctx.model.User.findById(id);
        this.ctx.status = 200;
        return Object.assign({}, {
            data: user
        });
    }

    async update(id, body) {
        const user = await this.ctx.model.User.findOne({ where: { id: id } });
        console.info(user);
        await user.update(body);
        this.ctx.status = 200;

        return Object.assign({}, {
            data: user
        });
    }
}

module.exports = UserService;