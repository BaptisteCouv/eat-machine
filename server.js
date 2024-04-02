const express = require('express');
const path = require('path');
const app = express();

// Serve les fichiers statiques depuis le dossier "dist"
app.use(express.static(path.join(__dirname, 'dist')));

// Route pour servir l'index.html
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Port écouté par l'application (process.env.PORT est utilisé par Heroku)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});