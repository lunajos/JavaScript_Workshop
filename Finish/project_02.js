'use strict';

//var test = require('./modules/my_module.js');
var Message = require('./modules/utils.js');

//console.log(test(5, 3));
var opts = {
    //name: 'Jose Luna',
    title: 'test',
    body: 'this is one big message that needs to be sent'
};
var msg = new Message(opts);

msg.sendMessage();
