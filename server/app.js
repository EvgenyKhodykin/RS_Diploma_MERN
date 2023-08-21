import express from 'express'
import mongoose from 'mongoose'
import chalk from 'chalk'
import cors from 'cors'
import 'dotenv/config'
import router from './routes/index.js'
import initDatabase from './startUp/initDatabase.js'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api', router)

const PORT = process.env.PORT ?? 4000

async function start() {
    try {
        mongoose.connection.once('open', () => {
            initDatabase()
        })
        await mongoose.connect(process.env.MONGO_URI)
        console.log(chalk.blue('MongoDB connected'))
        app.listen(PORT, () => {
            console.log(chalk.green(`Server has been started on port ${PORT}...`))
        })
    } catch (error) {
        console.log(chalk.red(error.message))
        process.exit(1)
    }
}

start()
