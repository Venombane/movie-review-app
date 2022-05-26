import express from 'express';
import {MongoClient} from 'mongodb';
import multer from 'multer';
import path from 'path';

const app = express();

app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../movie-react-app/public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage: storage});

const client = new MongoClient('mongodb://localhost:27017');



app.post('/api/deleteMovie', async (req, res) => {
    try {
        
        await client.connect();

        const db = client.db('movies');
        const movieInfo = await db.collection('mymovies').deleteOne(req.body);

        res.status(200);

        client.close();
    } 
    catch (error) {
        res.status(500);
    }
    
})

app.post('/api/addMovie', upload.single('moviePoster'), async (req, res) => {
    try {
        
        await client.connect();

        const db = client.db('movies');
        console.log(req.file.filename);

        const movieInfo = await db.collection('mymovies').insertOne({ 
            "name": req.body.movieName,
            "year": req.body.movieYear,
            "actors": req.body.movieActors,
            "poster": req.file.filename,
            "rating": req.body.movieRating
        });

        res.status(200);

        client.close();
    } 
    catch (error) {
        res.status(500);
    }
    
})

app.get('/api/data', async (req, res) => {
    try {
        
        await client.connect();

        const db = client.db('movies');

        const movieInfo = await db.collection('mymovies').find({}).toArray();
        res.status(200).json(movieInfo);

        client.close();
    } 
    catch (error) {
        res.status(500)
    }
    
})

app.listen(8000, () => console.log("Server is listening on port 8000"));