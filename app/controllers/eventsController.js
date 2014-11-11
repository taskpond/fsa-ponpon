/**
 * HTTP Errors
 */
var Boom    = require('boom'); 

var MeetupEvent = require('../models/event.js');

module.exports = {
  index: {
    handler: function(request, reply){
      reply.view('./events/index', {
        title: 'Assignment 7: Hapi + Joi + Mongoose',
        desc: 'Register New Event'
      });
    },
    app: {
      name: 'index'
    }
  },
  create: {
    handler: function (request, reply) {
      var data = {
        title : request.payload.title,
        status: request.payload.status,
        skills: request.payload.skill,
        name  : request.payload.InputName,
        email : request.payload.InputEmail
      }

      var event = new MeetupEvent(data);
      event.save(function(err, result){
        if (!err) {
          reply(result).redirect('/events/' + result._id);    // HTTP 201
        } else {
          reply(Boom.forbidden(getErrorMessageFrom(err))); // HTTP 403
        }
      });
    },
    app: {
      name: 'create'
    }
  },
  show: {
    handler: function(request, reply){
      MeetupEvent.findById(request.params.id).exec(function(err, result){
        reply(result);
      });
    },
    app: {
      name: 'show'
    }
  },
  list: {
    handler: function(request, reply){
      MeetupEvent.find({}, function(err, result){
        if (!err) {
          reply(result);
        } else {
          reply(Boom.forbidden(getErrorMessageFrom(err))); // HTTP 403
        }
      });
    }
  }
}
