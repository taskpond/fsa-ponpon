var xml2json 	= require('node-xml2json'),
		fs 				= require('fs'),
 		program 	= require('commander')
 		_ 				= require('lodash'),
 		log			  = require('bunyan').createLogger({name: "assignment8"})
 		figlet 		= require('node-figlet');
program
	.version('0.0.1')
	.usage('--file input.xml --split xml_block --db dbname --table tablename \n         Example: node assignment8.js -f public/plantCatalog.xml -s plant -d assignment8 -t plant')
	.option('-f, --file [file]', 'input xml file')
	.option('-s, --split [xml_block]', 'XML Block')
	.option('-d, --db [database]', 'Database Name')
	.option('-t, --table [table]', 'Table Name')
	.option('-u, --username [root]', 'Database\'s username')
	.option('-p, --password [1234]', 'Database\'s password')
	.parse(process.argv);

if((typeof program.file === 'string') &&
	(typeof program.split === 'string') &&
	(typeof program.db === 'string') &&
	(typeof program.table === 'string'))
{
	var xml  	  = program.file;
	var block 	  = program.split;
	var dbname 	  = program.db;
	var tablename = program.table;
	var dbusername= program.username;
	var dbpassword= program.password;
	var Promise   = require('bluebird');
	var Sequelize = require('sequelize'),
			sequelize = new Sequelize(dbname, dbusername, dbpassword, {
	      dialect: "mysql",
	      port:    3306
	    });

	fs.readFile(xml, 'utf8', function(err, content){

		if(err){
			log.error(err);
			return;
		}

		var json = xml2json.parser(content);
		_.forEach(json.catalog, function(item, key){
			// Block not found in xml file
			if(!_.isEqual(block, key)) {
				log.error("XML Block '"+block+"' doesn't found.");
				return;
			}

			var columns = [];
			var fields = {};
			var tableColumn = [];
			_.each(item, function(plant, index){
				var values  = _.values(plant).join('","');
				tableColumn = _.keys(plant);
				// Create bulk command from xml block
					var obj = {};
				_.each(_.keys(plant), function (val, i) {
					fields[val] = _.isEqual(typeof _.values(plant)[i], 'number') ? Sequelize.INTEGER : Sequelize.STRING(255);
					obj[val] = _.values(plant)[i];
				});
				columns.push(obj);
			});

			var Assignment8 = ASS8.define(sequelize, tablename, fields);
			ASS8.initDB(Assignment8, dbname);
			ASS8.bulkCreate(Assignment8, columns, tableColumn);
		});

	});
}
else{
	program.help();
}

var ASS8 = {
	define: function(sequelize, tablename, fields){
		// Define sheama
		return sequelize.define(tablename, fields, {
						timestamps: true,
						engine: "MYISAM"
					});
	},
	initDB: function(obj, dbname){
		var exec = require('child_process').exec;
		return obj.sync({force: true})
		.catch(function(err){
			if(_.isEqual(err.code, 'ER_BAD_DB_ERROR')){
				log.info('create database "'+dbname+'" if not exists');
				exec("mysql -u "+dbusername+" -p'"+dbpassword+"' -e 'CREATE DATABASE IF NOT EXISTS "+dbname+"'");
			}
		});
	},
	bulkCreate: function(obj, columns, tableColumn){

		var self = this;
		this.initDB(obj)
		.then(function(){
			log.info('Table was created');

			// Bulk command
			obj.bulkCreate(columns)
			.success(function(result){
				self.render(result, columns, tableColumn);
			})
			.catch(function(err){
				log.error(err);
			});
		})
		.catch(function(err){
			log.error(err);
		});
	},
	render: function(data, columns, tableColumn){
		var AsciiTable = require('ascii-table');
		var table = new AsciiTable('Assignment 8: XML to MySQL')
				tableColumn.unshift("id");
				table.setHeading(tableColumn);
				_.each(data, function(value, index){
					var values = [];
					_.each(tableColumn, function(c){
						if(value.dataValues[c]){
							values.push(value.dataValues[c]);
						}
					});
					values.unshift(++index);
					table.addRow(values);
				});
				console.log(table.toString())
				figlet(columns.length + ' records inserted', function (ascii){
				  console.log(ascii.toString());
				});
	}
}