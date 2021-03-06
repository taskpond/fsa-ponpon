The Full-Stack Academy
=========

### Assignment 1: Basic Calculation Program

![Assignment 1](https://raw.githubusercontent.com/taskpond/fsa-ponpon/develop/public/assignment-1.gif)

- `git checkout feature/Assignment01`
- Usage `node . --help` to show helper eg.
	- Sum `node . -a 3 3` ==> `Result:  6`
	- Minus `node . -m 3 3` ==> `Result:  0`
	- Multiply `node . -x 3 3` ==> `Result:  9`
	- Devide `node . -d 3 3` ==> `Result:  1`


## Assignment 2 - 4
`node .` or `node index.js` to run node server

### Assignment 2: Hapi

This assignment will show how to use Hapi create route to load page

![Assignment 2](https://raw.githubusercontent.com/taskpond/fsa-ponpon/develop/public/assignment-2.gif)

- `git checkout feature/Assignment02`

### Assignment 3: jQuery

This assignment use [Bower](http://bower.io/) to install [jQuery](http://jquery.com/) ans demonstrate $.ajax to fetch data from json file

![Assignment 3](https://raw.githubusercontent.com/taskpond/fsa-ponpon/develop/public/assignment-3.gif)

- `git checkout feature/Assignment03`

### Assignment 4: Bootstrap

![Assignment 4](https://raw.githubusercontent.com/taskpond/fsa-ponpon/develop/public/assignment-4.gif)

This assignment use [Bower](http://bower.io/) install [Bootstrap](http://getbootstrap.com/) and demonstrate root page intregated with [Bootstrap](http://getbootstrap.com/)

- `git checkout feature/Assignment04`

### Assignment 5: Node.js file handling

![Assignment 5](https://raw.githubusercontent.com/taskpond/fsa-ponpon/develop/public/assignment-5.gif)

Create a command-line program that can be run as follows;
node your-program.js -f input.xml -o output.json

- `git checkout feature/Assignment05`
- `node assignment5.js -f public/plantCatalog.xml -o public/plantCatalog.json`

### Assignment 6: Linux

Demonstrate serve website by setting virtual host on nginx in linux and set reverse-proxy to Hapi server on port 80

- Open Bowser (chrome, firefox etc)
- Go to `172.18.5.130` to access Hapi server on port 80 (Ethernet website)

### Assignment 7: Hapi + Joi + Mongoose

Demonstrate server-side form validation using Joi and save the data in a Mongoose model.

- Open Bowser (chrome, firefox etc)
- Go to `172.18.5.130/register` to register new event
- Go to `172.18.5.130/events` to show event list
- Go to `172.18.5.130/events/{id}` to specific event

### Assignment 8: XML to MySQL

![Assignment 8](https://raw.githubusercontent.com/taskpond/fsa-ponpon/develop/public/assignment-8.gif)

Create a command-line program that runs as follows;
node your-program.js --file input.xml --split post --db test --table input_data

- `git checkout feature/Assignment08`
- open file `assignment8.js` at line 27 edit `'root', 'asdqwe123'` as your mysql username and password 
- For example run this comand on terminal: `node assignment8.js -f public/plantCatalog.xml -s plant -d assignment8 -t plant -u root -p 1234 | bunyan`
