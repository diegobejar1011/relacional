import {Router} from 'express';
import * as pedidosController from '../controllers/pedidos.controllers.mjs';
import {verificarJWT} from '../middlewares/auth.middleware.mjs';


const router = Router();

router.get("/",pedidosController.getPedidos);
router.post("/", verificarJWT, pedidosController.createPedido);
router.get("/pedido/:id", pedidosController.getByIdPedido);
router.delete("/eliminarFisico/:id", verificarJWT ,pedidosController.deleteFisico);
router.delete("/eliminarLogico/:id", verificarJWT ,pedidosController.deleteLogico);
router.patch("/actualizarParcial/:id", verificarJWT ,pedidosController.updatePartialPedido);
router.put("/actualizarCompleto/:id", verificarJWT ,pedidosController.updatePedido);

export default router;