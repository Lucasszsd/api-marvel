import { Router } from "express";
import * as PersonagemController from "./controllers/personagem.controller";
/*import * as CriadoresController from "./controllers/criadores.controller";
import * as ComicsController from "./controllers/quadrinhos.controller";*/

const routes = Router();

routes.post(
  "/inserir-personagens",
  PersonagemController.inserirPersonagensNoBanco
);

routes.post("/personagens", PersonagemController.criarPersonagem);
routes.get("/personagens", PersonagemController.obterPersonagens);
routes.get("/personagens/:id", PersonagemController.obterPersonagemPorId);
routes.put("/personagens/:id", PersonagemController.atualizarPersonagem);
routes.delete("/personagens/:id", PersonagemController.deletarPersonagem);

export { routes };
