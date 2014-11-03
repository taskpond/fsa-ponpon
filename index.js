// Basic Calculator Application

var stdio = require('stdio');
var app = stdio.getopt({
    'add': {key: 'a', description: 'Add'},
    'minus': {key: 'm', description: 'Minus'},
    'multiply': {key: 'x', description: 'Multiply'},
    'divide': {key: 'd', description: 'Divide'}
});

if(app.add) basicCal(app.args, '+');

if(app.minus) basicCal(app.args, '-');

if(app.multiply) basicCal(app.args, '*');

if(app.divide) basicCal(app.args, '/');

function basicCal(value, sign){
	var math = require('mathjs');
	return value === undefined ? "--help" : console.log('Result: ', math.eval(value.join(sign)));
}