var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
	imagePath: 'http://assets1.ignimgs.com/2016/06/02/2ksmktnba2k17agnosticfobnoamarayedgesjpg-d49518_640w.jpg',
	title: 'NBA 2K17',
	description: 'One of the best sports video game releases of the year',
	price: 49
}),
	new Product({
	imagePath: 'http://image3.redbull.com/rbcom/010/2015-09-28/1331750457416_2/0010/1/550/366/2/fifa-16-world-beating-career-mode-wonderkid-xi.jpg',
	title: 'FIFA 16',
	description: 'New and greater experience',
	price: 32
}),
	new Product({
	imagePath: 'https://newagesoldier.com/wp-content/uploads/2016/08/tekken.jpg',
	title: 'Tekken Tag Tournament 2',
	description: 'One of the most anticipated fighting game releases',
	price: 28
}),
	new Product({
	imagePath: 'https://i.ytimg.com/vi/2TrCVonN6Kg/maxresdefault.jpg',
	title: 'Yu-Gi-Oh Millenium Duels',
	description: 'Duel Yu-Gi-Oh! characters from the past and present and others online',
	price: 19
}),
	new Product({
	imagePath: 'https://lh5.ggpht.com/PcqeAzX9dx-LVNL0bbLNa5TlpzVZ3Tg3sviGhQTnN88dk36LZdPqQEDEutkyNi5lLi0=h900',
	title: 'Assassins Creed Unity Companion',
	description: 'Enhance your Assassins Creed® Unity experience by taking Revolutionary Paris into the palm of your hand',
	price: 10
})];

var done = 0;
for (var i=0; i < products.length; i++) {
	products[i].save(function(err, result){
		done++;
		if (done === products.length){
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}