'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async findAll() {
        this.ctx.body = await this.service.user.findAll();
    }

    async findOne(obj) {
        const id = obj.params.id ? obj.params.id : 0;
        this.ctx.body = await this.service.user.findOne(id);
    }

    async update(obj) {
        const id = obj.params.id ? obj.params.id : 0;
        this.ctx.body = await this.service.user.update(id);
    }
}

module.exports = UserController;