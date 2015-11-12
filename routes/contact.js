var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// par défaut le get sera avec /contact
router.get('/', function(req, res, next) {
							//On passe le title correct pour le highlight du lien
	res.render('contact', { title: 'contact' });
});


router.post('/envoyer', function(req, res, next) {

	// **************************************************************Code repris ici : https://github.com/andris9/Nodemailer
	// create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'powolnymarcel@gmail.com',
			//Si vous avez activé l'authentification en 2 étapes il vous faudra créer un Mots de passe d'application voir google (Mots de passe d'application)
			// https://security.google.com/settings/security/apppasswords
			pass: ''
		}
	});
	var mailOptions = {
		from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
		to: 'powolnymarcel@gmail.com', // list of receivers
		subject: 'Hello ✔', // Subject line
		text: 'Hello world ✔' , // plaintext body
		html: '<b>Hello world ✔</b><br> Nom: ' +req.body.nom + ' <br> Email: ' + req.body.email + ' <br>Message: ' + req.body.message // html body
	};
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			return console.log(error);
			res.redirect('/');
		}
		console.log('Message sent: ' + info.response);
		res.redirect('/');
	});
	// **************************************************************************************************************************

});



module.exports = router;
