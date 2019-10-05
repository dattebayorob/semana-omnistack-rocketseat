import express from 'express'

const app = express();
const port = 3001

app.get('/', (_request, response) => {
    return response.send("Hello World");
});

app.listen(port, () => console.log(`App initialized on port ${port}`));