import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import router from './routes/employess.routes.js'


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.set('port', process.env.PORT || 3000)

app.use('/api/employees', router)

export default app