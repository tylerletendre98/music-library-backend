const repoContext = require('./repository/repository-wrapper');
const express = require('express');
const { updateSong } = require('./repository/music-repository');
const {validateSong} = require('./middleware/songs-validation');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, function(){
    console.log('Server started. Listening on port 5000');
});

//GET all songs
app.get('/api/songs', (req,res) => {
    let songs = repoContext.songs.findAllSongs();
    res.send(songs);
});

//GET song by id
app.get('/api/songs/:id',(req,res) => {
    let id = req.params.id;
    let song = repoContext.songs.findSongById(id);
    res.send(song);
});

//POST a new song
app.post('/api/songs', [validateSong], (req,res) => {
    let newSong = req.body;
    let addedSong = repoContext.songs.createSong(newSong);
    res.send(addedSong);
});

//PUT endpoint updating exisiting song

app.put('/api/songs/:id', [validateSong],(req,res) => {
    let id = req.params.id;
    let songToUpdate = req.body;
    let updatedSong = repoContext.songs.updateSong(id, songToUpdate);
    res.send(updatedSong);
});

//DELETE endpoint delete a song

app.delete('/api/songs/:id',(req,res) => {
    let id = req.params.id;
    let updatedDataSet = repoContext.songs.deleteSong(id);
    res.send(updatedDataSet);
});