const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
console.log(userController);

// Register route

router.post('/register', userController.register); // 'register' should be defined in userController


router.get('/register', (req, res) => {
    res.render('register')
 });

// Login route
router.post('/login', userController.loginUser); 

router.get('/login', (req, res) => {
    res.render('login'); 
  });

module.exports = router;
