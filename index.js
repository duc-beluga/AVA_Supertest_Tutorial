import express from 'express'

const app = express()

app.use(express.json());

const arr = [1,2,3,4,5]

const PORT = process.env.PORT || 3001
    
app.get('/', (req, res) => {
    res.json('Hi').status(200);
})

app.get('/arr', (req, res) => {
    res.json(arr).status(200);
})
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})

export {app}