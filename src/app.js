import express from 'express';
import cors from 'cors';

import { photoList } from './photo-list.data';

const app = express();

app.use( cors() );

app.get('/api/pics', (request, response ) => { 
    response.json( photoList );
})

app.listen( 4455 );
console.log( ' listening at 4455 ');