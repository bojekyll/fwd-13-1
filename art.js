const express = require('express');
const dataProvider = require('./data-provider');
const app = express();

// Serve static files
app.use(express.static('static'));

// Routes
app.get('/', (req, res) => {
    res.json(dataProvider.getPaintings());
});

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const painting = dataProvider.getPaintingById(id);
    painting ? res.json(painting) : res.status(404).json({ error: 'Painting not found' });
});

app.get('/gallery/:id', (req, res) => {
    const galleryId = parseInt(req.params.id);
    res.json(dataProvider.getPaintingsByGalleryId(galleryId));
});

app.get('/artist/:id', (req, res) => {
    const artistId = parseInt(req.params.id);
    res.json(dataProvider.getPaintingsByArtistId(artistId));
});

app.get('/year/:min/:max', (req, res) => {
    const min = parseInt(req.params.min);
    const max = parseInt(req.params.max);
    res.json(dataProvider.getPaintingsByYearRange(min, max));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));