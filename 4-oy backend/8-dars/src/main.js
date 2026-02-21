import express from 'express';
import { config } from 'dotenv';

import { connectDB } from './db/index.js';
import router from './router/index.route.js';


config();

const PORT = Number(process.env.PORT) || 3000;
const app = express();

//Middleware: Serverga data qanday ko'rinishda kelishini aytib qo'yamiz. Bo'lmasam Server kelgan requestni(body'sini) o'qiy olmaydi.  
app.use(express.json());

await connectDB();

// Middleware: Routing middleware, 'api' bilan boshlanadigan API larni filter qiladi, boshqa bilan boshlansa router ga kirmaydi.
app.use('/api', router);


app.listen(PORT, () => console.log("Server running on port", PORT));
