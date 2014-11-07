var xml2json 	= require('node-xml2json'),
		fs 				= require('fs'),
 		program 	= require("commander");

program
	.version('0.0.1')
	.usage('-f <*.xml> -o <*.json>')
	.option('-f, --file [file]', 'input xml file')
	.option('-o, --output [file]', 'Output xml file to JSON format')
	.parse(process.argv);

if((typeof program.file === 'string') && (typeof program.output === 'string')){
	var xml  = program.file;
	var output = program.output;

	fs.readFile(xml, 'utf8', function(err, content){

		if(err) throw err;

		var json = xml2json.parser(content);

		fs.writeFile(output, JSON.stringify(json, null, 2), 'utf8', function(err){
			if(err) throw err;
			console.log('Convert ' + xml + ' to ' + output + ' successful.');
		});

	});
}
else{
	program.help();
}