const router = require('express').Router();

// Import routes from other files
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Add prefix of `/users` to routes created in `userRoutes.js`
router.use('/users', userRoutes);

// Add prefix of `/posts` to routes created in `postRoutes.js`
router.use('/posts', postRoutes);

// Add prefix of `/comments` to routes created in `commentRoutes.js`
router.use('/comments', commentRoutes);

module.exports = router;