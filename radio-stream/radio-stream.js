
exports.timeoutCallbackEnd = function(clientFrom, clientTo) {
	return Config.modules['radio-stream'].timeout_start * 1000;
}



exports.action = function(data, callback){

	var tblCommand = {
		start : function() {
						start (data, client);
					},
		stop : function() {
						stop (data, client);
					}
	};

	let client = setClient(data);
	info("radio-stream:", data.action.command, "From:", data.client, "To:", client);
	tblCommand[data.action.command]();
	callback();
}



function start (data, client) {
	Avatar.askme("Qu'est-ce que tu veux écouter ?|Tu veux quoi ?", data.client,
 		 {
 				 "*": "generic",
 				 "terminer": "done"
 		 }, 0, function (answer, end) {

			 if (!answer) {
				 end(client);
				 return Avatar.speak("Recommence je n'ai pas compris", data.client, function(){
						 start (data, client);
				 });
			 }

			 if (answer.indexOf('generic') != -1) {
					 end(client);
					 let found;
					 answer = answer.split(':')[1].toLowerCase();

					 for (let radio in Config.modules['radio-stream'].radios) {
						 if (answer.toLowerCase().indexOf(radio) != -1) {
							 found = radio;
							 break;
						 }
					 }

					 if (found) {
							 Avatar.speak("Je met " + found, data.client, function() {
								 Avatar.Speech.end(data.client, true, () => {
									 Avatar.play('%URL%'+Config.modules['radio-stream'].radios[found], client);
								 });
						 	});
					 } else {
						 return Avatar.speak("Recommence je n'ai pas compris", data.client, function(){
							 	start (data, client);
							});
					 }
           return;
			 }
			 // Grammaire fixe
			 switch(answer) {
				 case "done":
				 default:
						 Avatar.speak("Terminé", data.client, function(){
								 end(data.client, true);
						 });
			}
	})

}


function stop (data, client) {

	Avatar.speak("Je stoppe la radio", data.client, function() {
		 Avatar.Speech.end(data.client, true, () => {
			 Avatar.stop(null, client);
		 });
	});

}



// Méthode de recherche du client où l'action doit être exécutée.
function setClient (data) {

	// Init de la variable avec data.client (le client qui a passé la règle)
	var client = data.client;

	// Test si une pièce est ajoutée dans la règle.
	// Défini par la méthode Avatar.ia.clientFromRule du <plugin>.actions.js
	// Peut retourner 'current' pour la pièce courante
	if (data.action.room)
		client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;

	// Peut provenir d'une commande HTTP où un paramètre "setRoom" est défini avec le nom d'une pièce
	if (data.action.setRoom)
		client = data.action.setRoom;

	// On peut ajouter d'autres tests suivant d'autres paramètres provenant d'autres sources...
	// if (data.action.<autre param>)
	//	client = data.action.<autre param>


	// Retourne le nom de la pièce où l'action doit être exécutée.
	return client;
}
