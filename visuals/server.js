const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to MongoDB');
        const db = client.db('mydb');
        const collection = db.collection('data');

        // Endpoint to handle form submission
        app.post('/submit', (req, res) => {
            const inputData = req.body.inputData;
            collection.insertOne({ data: inputData })
                .then(result => {
                    console.log('Data saved to database');
                    res.status(200).send('Data saved to database');
                })
                .catch(error => {
                    console.error('Error:', error);
                    res.status(500).send('Error saving data to database');
                });
        });
    })
    .catch(error => console.error('Error connecting to MongoDB:', error));

// Define route handler for the root ("/")
app.get('/', (req, res) => {
    res.sendFile('C:/Users/shivk/OneDrive/Documents/my design/visuals/homepage/index.html');
});

app.get('/visuals/clothes/clothes.html', (req, res) => {
    res.sendFile('C:/Users/shivk/OneDrive/Documents/my design/visuals/clothes/clothes.html');
});

app.post('')

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
