const repoContext = require('./repository/repository-wrapper');
const express = require('express');
const app = express();

app.listen(5000, function(){
    console.log('Server started. Listening on port 5000');
});

app.get('/api/songs', (req,res) => {
    let songs = repoContext.songs.findAllSongs();
    res.send(songs);
})
