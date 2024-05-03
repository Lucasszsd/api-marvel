import { Router } from "express";
import * as PersonagemController from "./controllers/personagem.controller";
import * as CriadoresController from "./controllers/criadores.controller";
import * as ComicsController from "./controllers/quadrinhos.controller";

const routes = Router();

routes.post(
  "/inserir-personagens",
  PersonagemController.inserirPersonagensNoBanco
);
routes.post("/inserir-criadores", CriadoresController.inserirCriadoresNoBanco);
routes.post("/inserir-quadrinhos", ComicsController.inserirQuadrinhosNoBanco);

routes.get("/personagens", PersonagemController.obterPersonagens);
routes.get("/personagens/:id", PersonagemController.obterPersonagemPorId);
routes.put("/personagens/:id", PersonagemController.atualizarPersonagem);
routes.delete("/personagens/:id", PersonagemController.deletarPersonagem);

routes.get("/criadores", CriadoresController.obterCriadores);
routes.get("/criador/:id", CriadoresController.obterCriadorPorId);
routes.put("/criador/:id", CriadoresController.atualizarCriador);
routes.delete("/criador/:id", CriadoresController.deletarCriador);

routes.get("/comics", ComicsController.obterQuadrinhos);
routes.get("/comics/:id", ComicsController.obterQuadrinhoPorId);
routes.put("/comics/:id", ComicsController.atualizarQuadrinho);
routes.delete("/comics/:id", ComicsController.deletarQuadrinho);

routes.get(
  "/quadrinhocriador/:id",
  CriadoresController.obterQuadrinhosPorCriador
);

routes.get(
  "/imagempersonagem/:id",
  PersonagemController.obterImagemPersonagemPorId
);

routes.get("/capaquadrinho/:id", ComicsController.obterImagemQuadrinho);

routes.get("/datalancamentoquadrinho/:id", ComicsController.obterDataQuadrinho);

routes.delete(
  "/deletaPersonagemIndesejado/:nome",
  PersonagemController.deletarPersonagemPorNome
);

export { routes };
