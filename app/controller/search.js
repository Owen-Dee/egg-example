'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
    async find() {
        this.ctx.body = await this.ctx.request.url;
    }
}

module.exports = SearchController;