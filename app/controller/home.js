'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const users = await this.ctx.service.home.findAll();
    await this.ctx.render('home.pug', {
      users
    });
  }

  async findHot() {
    this.ctx.body = this.service.home.findHot();
  }

  async findHeart() {
    this.ctx.body = this.service.home.findHeart();
  }
}

module.exports = HomeController;