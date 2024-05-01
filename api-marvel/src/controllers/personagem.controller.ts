import { Request, Response } from "express";
import * as PersonagemService from "../services/personagem.service";

export const inserirPersonagensNoBanco = async (
  req: Request,
  res: Response
) => {
  try {
    const personagensDaAPI =
      await PersonagemService.getPersonagensFromMarvelAPI();
    for (const personagem of personagensDaAPI) {
      const dadosPersonagem = {
        nome: personagem.name,
        descricao: personagem.description,
        thumbnail: personagem.thumbnail.path,
        extension: personagem.thumbnail.extension,
      };
      await PersonagemService.createPersonagem(dadosPersonagem);
    }
    res
      .status(201)
      .json({ message: "Personagens inseridos no banco de dados com sucesso" });
  } catch (error: any) {
    console.error("Erro ao inserir personagens no banco de dados:", error);
    res.status(500).json({ error: error.message });
  }
};

export const obterPersonagens = async (req: Request, res: Response) => {
  try {
    const personagens = await PersonagemService.getPersonagens();
    res.status(200).json(personagens);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const obterPersonagemPorId = async (req: Request, res: Response) => {
  try {
    const personagem = await PersonagemService.getPersonagemById(req.params.id);
    if (!personagem) {
      return res.status(404).json({ message: "Personagem não encontrado" });
    }
    res.status(200).json(personagem);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const atualizarPersonagem = async (req: Request, res: Response) => {
  try {
    const personagem = await PersonagemService.updatePersonagem(
      req.params.id,
      req.body
    );
    if (!personagem) {
      return res.status(404).json({ message: "Personagem não encontrado" });
    }
    res.status(200).json(personagem);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deletarPersonagem = async (req: Request, res: Response) => {
  try {
    const personagem = await PersonagemService.deletePersonagem(req.params.id);
    if (!personagem) {
      return res.status(404).json({ message: "Personagem não encontrado" });
    }
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
