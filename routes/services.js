var express = require('express');
var router = express.Router();
//Pour recupere un fichier on a vesoin du filesystem module
//Il ne faut pas l'installer car c'est un core module, un peu comme express
var fs = require('fs');

var resultats;

//On va lire le fichier
fs.readFile('json/services.json','utf8',function(erreur,donnee){
	//Si erreur on balance l'erreur
	if(erreur){
		throw erreur
	}else{
		//Si pas d'erreur on parse le fichier
		resultats = JSON.parse((donnee));
		//petit test simple, pas nécessaire...
		for(var i = 0; i<resultats.length;i++){
			console.log(i);
		}
	}
});




// par défaut le get sera avec /services
router.get('/', function(req, res, next) {
							//On passe le title correct pour le highlight du lien
	res.render('services', {
		title: 'services',
		donnees:resultats});
});

module.exports = router;
