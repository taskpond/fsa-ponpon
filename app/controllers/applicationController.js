// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    index: {
        handler: function(request, reply){
          // Render the view with the custom greeting
            reply.view('./welcome/index', {
                title: 'Hello Node World'
            });
        },
        app: {
            name: 'index'
        }
    },
    about: {
        handler: function(request, reply){
          // Render the view with the custom greeting
            reply.view('./welcome/about', {
                title: 'About Page'
            });
        },
        app: {
            name: 'about'
        }
    },
    missing: {
        handler: function(request, reply){
            reply.view('./404', {
                title: '404 Page'
            }).code(404);
        },
        app: {
            name: '404'
        }
    }
}
