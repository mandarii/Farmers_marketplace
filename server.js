const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { sequelize } = require('./models');

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // For serving JS/CSS files

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.post('/register', require('./controllers/usercontrollers').registerUser);
app.post('/login', require('./controllers/usercontrollers').login);


// Sync DB
sequelize.sync()
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log('Error: ' + err);
    });

// Run the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
