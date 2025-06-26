
import { Router } from 'express'; //herramienta para crear mini aplicaciones / sub rutas
import { 
    getALLcharacters,
    createCharacter, 
} from "../controllers/character.controllers.js";

const router = Router()

router.get('/', getALLcharacters)

router.post('/',createCharacter)

export default router;
