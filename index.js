const repoContext = require('./repository/repository-wrapper');
const express = require('express');
const app = express();

app.listen(5000, function(){
    console.log('Server started. Listening on port 5000');
});

//GET all songs
app.get('/api/songs', (req,res) => {
    let songs = repoContext.songs.findAllSongs();
    res.send(songs);
});

//GET song by id
app.get("/api/songs/:id",(req,res) => {
    let id = req.params.id;
    let song = repoContext.songs.findAllSongs(id);
    res.send(song);
});