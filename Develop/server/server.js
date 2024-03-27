const express = require('express');
const apiRoutes = require('./server/routes/apiRoutes');
const htmlRoutes = require('./server/routes/htmlRoutes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/text-editor', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
