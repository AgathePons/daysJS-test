// Pour une présentation de notre séléction littéraire 
// nous utilisons un page web il nous faut donc la libraire http
// afin de créer notre serveur
const http = require('http');
const buildHead = require('./service/htmlHead');
const bookShelf = require('./service/templateBookShelf');

// Création de notre serveur
const server = http.createServer((req, res) => {

  // On court-circuite l'appel automatique du navigateur au favicon.ico
  if (req.url === '/favicon.ico') {
    res.writeHead(200, {
      'Content-Type': 'image/x-icon'
    });
    res.end();
    return;
  }

  // On envoi les header de la réponse http
  // ici nous voulons une réponse de type text encodé en UTF-8
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  // On écrit l'entête de notre page html
  res.write('<!DOCTYPE html><html lang="en">');
  res.write(buildHead());
  res.write('<body>')

  // Corps de la page
  res.write(bookShelf());

  // On écrit le pied de page de notre page html
  res.write('</body></html>');
  
  // On à fini d'envoyer nos informations au client
  res.end();
});

// Notre serveur sera sur le port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`listen: ${PORT}`);
});