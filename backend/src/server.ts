import express from 'express';
import routes from './routes'
import mongoose from 'mongoose'

const app = express();
const port = 3001
mongoose.connect('mongodb://root:root@localhost:27017/mongodb', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});


app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`App initialized on port ${port}`));