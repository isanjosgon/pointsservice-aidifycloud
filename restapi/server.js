(function() {

'use strict';

const restify = require('restify');
const config = require('../package.json');
const Response = require('./response');

class Server {
	
	constructor(logger, serverConfig) {
		let api = restify.createServer({
			name: config.name,
			version: config.version
		});
		api.use(restify.acceptParser(api.acceptable));
		api.use(restify.queryParser());
		api.use(restify.bodyParser());
		
		api.get('/',function (req,res) {
		  let response = new Response(res);
		  response.pong();
		});
		
		api.listen(serverConfig.port || 5009,function () {
			logger.log(config.name + ' up and ready');
		});
	}
}

module.exports = Server;

})();