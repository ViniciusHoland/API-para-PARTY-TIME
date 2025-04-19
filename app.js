import express from  "express"
import cors from 'cors'
import dotenv from 'dotenv'
import conn from './db/conn.js'
import routes from './routes/router.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

conn()


// routes

app.use("/api", routes)


app.listen(3000, () => {
    console.log("server runnig ")
})

