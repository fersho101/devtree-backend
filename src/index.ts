
import express from 'express' // ESM EcmaScript modules

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Hola mundo en express / typescript')
})

app.listen(port, () => {
    // console.log('Servidor funcionando en el puerto ' + port)
    console.log(`Servidor funcionando en puerto ${port}`)
})
