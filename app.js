import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import path from 'path';

//Use __dirname as the root directory for the project - will be referenced in other files
export const __dirname = path.resolve();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4016; //uses port specified in a .env file if it is there

app.listen(PORT, () => {
    //Log to the terminal stating the server is running
    console.log(`Server working on port ${PORT}`);
});

app.use('/', routes);