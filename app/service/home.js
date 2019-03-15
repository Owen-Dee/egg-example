'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
    async findAll() {
        const users = await this.ctx.model.User.findAll();
        this.ctx.status = 200;
        return users;
    }

    findHot() {
        const hotArticle = [{
                title: 'Title 001',
                desc: 'This is hot article 001',
            },
            {
                title: 'Title 002',
                desc: 'This is hot article 002',
            },
        ];

        return hotArticle;
    }

    findHeart() {
        const heartArticle = [{
                title: 'Title 001',
                desc: 'This is hot article 001',
            },
            {
                title: 'Title 002',
                desc: 'This is hot article 002',
            },
        ];

        return heartArticle;
    }
}

module.exports = HomeService;