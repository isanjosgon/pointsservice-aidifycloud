(function() {

'use strict';

const restify = require('restify');
const Response = require('./response');

class Server {
	
	constructor(logger, config) {
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
		
		api.listen(config.port || 5009,function () {
			logger.log(config.name + ' up and ready');
		});
	}
}

module.exports = Server;

})();