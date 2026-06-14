import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 8000
const mongoUri = 'mongodb://127.0.0.1:27017/octofit_db'

app.use(cors())
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-backend' })
})

async function startServer() {
  try {
    await mongoose.connect(mongoUri)
    console.log('Connected to MongoDB at octofit_db')
  } catch (error) {
    console.warn('MongoDB connection unavailable, starting API anyway:', error)
  }

  app.listen(port, () => {
    console.log(`OctoFit backend running on http://localhost:${port}`)
  })
}

void startServer()