/**
* Dependencies.
*/
var requireDirectory = require('require-directory');

// Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space. https://github.com/troygoode/node-require-directory
var controller = requireDirectory(module, '../app/controllers');

module.exports = [
    {
        method: 'GET',
        path: '/',
        config: controller.applicationController.index
    },
    {
        method: 'GET',
        path: '/about',
        config: controller.applicationController.about
    },
    {
        method: 'GET',
        path: '/{path*}',
        config: controller.applicationController.missing
    }
];
