//Library imports
import express from 'express';

//Controllers imports
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

//Controller instences
const pointsController = new PointsController();
const itemsController = new ItemsController();

//Routes
routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);


export default routes;
