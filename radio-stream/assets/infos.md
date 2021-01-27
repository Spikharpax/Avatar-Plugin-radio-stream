# radio-stream
Ecoutez votre radio préférée avec Radio-Stream !

### Configuration
- Copiez le fichier _avatar.js_ du répertoire _"A copier sur le client"_ du plugin dans le répertoire _"<CLIENT>/resources/app/core"_ de chaque client de votre installation.
- Acceptez le remplacement.
- Redémarrez le client.
**Note:** Cette copie n'est plus à faire sur la version 1.4 du client

Le plugin contient déjà quelques radios disponibles, pour en ajouter:
- Cliquez sur l'onglet Propriétés
- Cliquez sur le bouton "actions menu" à gauche d'une station de radio déjà présente
- Cliquez sur "Insert" puis "Auto"
- Ajoutez dans la section "radios" le nom de la radio (à droite) et son adresse de streaming (à gauche)
- Faites un click droit dans la fenêtre et dans le menu déroulant, cliquez sur "sauvegarder"
- Faites un click gauche sur le plugin et dans le menu déroulant, cliquez sur "Recharger"

**Note:**
Il existe beaucoup de sites sur lesquels vous pouvez trouver les adresses de streaming des
stations de radio, par exemple [içi](http://doc.ubuntu-fr.org/liste_radio_france).
Il peut arriver que les adresses ne soient pas bonnes, cherchez alors sur d'autres sites.

### Règles
Ce plugin est multirooms, si vous ne précisez pas le nom de la pièce avec la règle, la radio est jouée sur le client courant.

- radio
- radio dans le Salon
- Démarre la radio
- Démarre la radio dans la chambre
- Stop la radio
- Arrête la radio dans la chambre

### Autre paramètre
Le paramètre "timeout_start" vous permet d'augmenter la temporisation du lancement de la radio après avoir dicté la règle. Par défaut la valeur est de 2 secondes.
Si vous constatez que votre radio ne se lance pas, augmentez la valeur pour que votre PC puisse terminer la règle avant d'essayer de lancer la radio.


<br><br><br><br>
