import express from 'express';

import { config } from './config/index.js';
import {connectDB} from './config/db.js';
import router from './router/index.route.js';

const PORT = config.PORT;
const app = express();

app.use(express.json());

await connectDB();

app.use('/api', router)

app.listen(PORT, () => console.log('Server running on port', PORT))