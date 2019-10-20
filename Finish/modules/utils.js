'use strict';

module.exports = function (msg) {
    this.name = msg.name;
    this.title = msg.title;
    this.body =  msg.body;
    this.sendMessage = function () {
        console.log(msg.title + ' has sent');
    };
};
