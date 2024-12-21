
import express from 'express'
import dbConnection from './databases/dbConnections.js'
import userRouter from './src/middeleware/modules/user/user.routes.js'
const app = express()
const port = 3000

app.get('/', (_req, res) => res.send('Hello !'))
app.use(express.json())
app.use(userRouter)

dbConnection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
