import  express  from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import data from './data.js'


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/products', async (req,res) => {
    res.send(data);
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})