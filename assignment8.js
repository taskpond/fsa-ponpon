var xml2json 	= require('node-xml2json'),
		fs 				= require('fs'),
 		program 	= require('commander')
 		_ 				= require('lodash'),
 		log			  = require('bunyan').createLogger({name: "assignment8"});

program
	.version('0.0.1')
	.usage('--file input.xml --split xml_block --db dbname --table tablename \n         Example: node assignment8.js -f public/plantCatalog.xml -s plant -d assignment8 -t plant')
	.option('-f, --file [file]', 'input xml file')
	.option('-s, --split [xml_block]', 'XML Block')
	.option('-d, --db [database]', 'Database Name')
	.option('-t, --table [table]', 'Table Name')
	.parse(process.argv);

if((typeof program.file === 'string') && 
	(typeof program.split === 'string') && 
	(typeof program.db === 'string') &&
	(typeof program.table === 'string'))
{
	var xml  			= program.file;
	var block 		= program.split;
	var dbname 		= program.db;
	var tablename = program.table;
	var Promise   = require('bluebird');
	var Sequelize = require('sequelize'), 
			sequelize = new Sequelize('assignment8', 'root', 'asdqwe123', {
	      dialect: "mysql",
	      port:    3306
	    });

	fs.readFile(xml, 'utf8', function(err, content){

		if(err) throw err;

		var json = xml2json.parser(content);
		var sqlCommands = [];
		_.forEach(json.catalog, function(item, key){
			// Block not found in xml file
			if(!_.isEqual(block, key)) throw "XML Block doen't found.";

			var columns = [];
			// Define sheama
			var fields = {};

			_.each(item, function(plant, index){
				var values  = _.values(plant).join('","');

				// Create field follow xml block				
					var obj = {};
				_.each(_.keys(plant), function (val, i) {
					fields[val] = _.isEqual(typeof _.values(plant)[i], 'number') ? Sequelize.INTEGER : Sequelize.STRING(255);
					obj[val] = _.values(plant)[i];
				});
				columns.push(obj);
				// sqlCommands.push('INSERT INTO '+tablename+'('+columns+') VALUES("'+values+'")');
			});

			var Assignment8 = sequelize.define(tablename, fields, {
				timestamps: true,
				engine: "MYISAM"
			});

			Assignment8.sync({force: true}).then(function(){
				log.info('Table was created');

				Assignment8.bulkCreate(columns)
				.done(function(){
					log.info('Everything OK!!!');
				})
				.error(function(err){
					console.log(err);
				});
			}).catch(function(err){
				console.log(err);
			});
		});

	});
}
else{
	program.help();
}