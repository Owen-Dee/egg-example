'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('portal.pug');
    // this.ctx.body = this.service.home.index();
  }

  async findHot() {
    this.ctx.body = this.service.home.findHot();
  }

  async findHeart() {
    this.ctx.body = this.service.home.findHeart();
  }
}

module.exports = HomeController;