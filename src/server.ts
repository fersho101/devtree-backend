import express from 'express' // ESM EcmaScript modules

const app = express()

app.get('/', (req, res) => {
    res.send('Hola mundo en express / typescript')
})

export default app