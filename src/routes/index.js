const express = require('express');
const router = express.Router();

const { 
    addFriend,
    getFriends,
    updateFriend,
    deleteFriend,
    getFriend
} = require('../controllers/friend')

router.post('/friend', addFriend);
router.get('/friends', getFriends);
router.get('/friend/:id', getFriend);
router.patch('/friend/:id', updateFriend);
router.delete('/friend/:id', deleteFriend);

module.exports = router;