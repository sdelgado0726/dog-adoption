import { Router } from "express";
import {allDog, addDogPage, addDog, editDogPage, editDog, deleteDog, oneDog} from '../controllers/dogController';

const router = Router();

router.get('/', allDog);

router.get('/add', addDogPage);

router.post('/add', addDog);

router.get('/edit/:dogId', editDogPage);

router.post('/edit/:dogId', editDog);

router.post('/delete/:dogId', deleteDog);

router.get('/:dogId', oneDog);

export default router;