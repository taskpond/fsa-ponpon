module.exports = {
  index: {
    handler: function(request, reply){
      reply.view('./welcome/index', {
        title: 'The Full-Stack Academy',
        desc: 'Assignment 4: Bootstrap'
      });
    },
    app: {
      name: 'index'
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
