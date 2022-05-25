import express from 'express';
import {MongoClient} from 'mongodb';

const app = express();

app.use(express.json());

const client = new MongoClient('mongodb://localhost:27017');

app.post('/api/deleteMovie', async (req, res) => {
    try {
        
        await client.connect();

        const db = client.db('movies');
        console.log(req.body);
        const movieInfo = await db.collection('mymovies').deleteOne(req.body);

        res.status(200)

        client.close();
    } 
    catch (error) {
        res.status(500)
    }
    
})

app.post('/api/addMovie', async (req, res) => {
    try {
        
        await client.connect();

        const db = client.db('movies');
        console.log(req.body);
        const movieInfo = await db.collection('mymovies').insertOne(req.body);

        res.status(200)

        client.close();
    } 
    catch (error) {
        res.status(500)
    }
    
})

app.get('/api/data', async (req, res) => {
    try {
        
        await client.connect();

        const db = client.db('movies');

        const movieInfo = await db.collection('mymovies').find({}).toArray();
        console.log(movieInfo);
        res.status(200).json(movieInfo);

        client.close();
    } 
    catch (error) {
        res.status(500)
    }
    
})

app.listen(8000, () => console.log("Server is listening on port 8000"));