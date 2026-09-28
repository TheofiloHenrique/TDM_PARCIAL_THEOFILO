// Define los endpoints de la API para la entidad "items".

import { Router } from 'express';
import ItemController from '../controllers/item.controller.js';

const router = Router();

router.get('/', ItemController.list);
router.get('/:id', ItemController.getOne);
router.post('/', ItemController.create);
router.put('/:id', ItemController.update);
router.delete('/:id', ItemController.remove);

export default router;
