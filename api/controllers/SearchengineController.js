/**
 * SearchengineController
 *
 * @description :: Server-side logic for managing searchengines
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	search: function (request, response) {
 	console.log("Hola");
 	return response.view('searchengine', {
 		currentDate: (new Date()).toString()
 	});
},
	storesearch:function(request,response){
		console.log(request.param("search")+"jajaaj");
	}
};
