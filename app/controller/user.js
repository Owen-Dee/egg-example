'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async findAll() {
        this.ctx.body = await this.service.user.findAll();
    }

    async findById() {
        const id = this.ctx.params.id;
        this.ctx.body = await this.service.user.findById(id);
    }

    async update() {
        const id = this.ctx.params.id;
        const body = this.ctx.request.body;
        this.ctx.body = await this.ctx.service.user.update(id, body);
    }
}

module.exports = UserController;