import { Request, Response } from "express";
import * as CriadoresService from "../services/criadores.service";

export const inserirCriadoresNoBanco = async (req: Request, res: Response) => {
  try {
    const criadoresDaAPI = await CriadoresService.getCreatorsFromMarvelApi();
    for (const criador of criadoresDaAPI) {
      let x = 0;
      while (x < criador.creators.items.length) {
        console.log(criador);
        const dadosCriador = {
          nome: criador.creators.items[x].name,
          funcao: criador.creators.items[x].role,
          quadrinhos: criador.title,
        };
        x++;
        await CriadoresService.createCriadores(dadosCriador);
      }
    }
    res
      .status(201)
      .json({ message: "Criadores inseridos no banco de dados com sucesso" });
  } catch (error: any) {
    console.error("Erro ao inserir personagens no banco de dados:", error);
    res.status(500).json({ error: error.message });
  }
};

export const criateCriador = async (req: Request, res: Response) => {
  try {
    const novoCriador = await CriadoresService.createCriadores(req.body);
    res.status(201).json(novoCriador);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
