'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async findAll() {
        this.ctx.body = await this.service.user.findAll();
    }
}

module.exports = UserController;