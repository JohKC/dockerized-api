const express = require('express');
const router = express.Router();

const ArtistsController = require('../controllers/artists.controller');

router.get('/', ArtistsController.get);
router.get('/:id', ArtistsController.getById);
router.post('/', ArtistsController.insert);
router.put('/:id', ArtistsController.update);
router.delete('/:id', ArtistsController.delete);

module.exports = router;