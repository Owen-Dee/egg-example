'use strict';

const Controller = require('egg').Controller;

class MessageController extends Controller {
    async findByUserId() {
        this.ctx.body = await this.ctx.request.url;
    }
}

module.exports = MessageController;