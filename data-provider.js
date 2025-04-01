const fs = require('fs');
const dataPath = './paintings.json';

let paintingsData = null;

function loadData() {
    if (!paintingsData) {
        const rawData = fs.readFileSync(dataPath, 'utf8');
        paintingsData = JSON.parse(rawData);
    }
}

function getPaintings() {
    loadData();
    return paintingsData;
}

function getPaintingById(id) {
    loadData();
    return paintingsData.find(p => p.paintingID === id);
}

function getPaintingsByGalleryId(galleryId) {
    loadData();
    return paintingsData.filter(p => p.gallery.galleryID === galleryId);
}

function getPaintingsByArtistId(artistId) {
    loadData();
    return paintingsData.filter(p => p.artist.artistID === artistId);
}

function getPaintingsByYearRange(min, max) {
    loadData();
    return paintingsData.filter(p => p.yearOfWork >= min && p.yearOfWork <= max);
}

module.exports = {
    getPaintings,
    getPaintingById,
    getPaintingsByGalleryId,
    getPaintingsByArtistId,
    getPaintingsByYearRange
};