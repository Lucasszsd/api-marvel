import { Request, Response } from "express";
import * as QuadrinhosService from "../services/quadrinhos.service";

export const inserirQuadrinhosNoBanco = async (req: Request, res: Response) => {
  try {
    const quadrinhosDaAPI =
      await QuadrinhosService.getQuadrinhosFromMarvelAPI();
    for (const quadrinho of quadrinhosDaAPI) {
      const dadosQuadrinho = {
        titulo: quadrinho.title,
        descricao: quadrinho.description,
        dataPublicacao: quadrinho.dates[0].date,
        thumbnail: quadrinho.thumbnail.path,
        extension: quadrinho.thumbnail.extension,
      };
      await QuadrinhosService.createQuadrinho(dadosQuadrinho);
    }
    res
      .status(201)
      .json({ message: "Quadrinhos inseridos no banco de dados com sucesso" });
  } catch (error: any) {
    console.error("Erro ao inserir personagens no banco de dados:", error);
    res.status(500).json({ error: error.message });
  }
};

export const criarQuadrinho = async (req: Request, res: Response) => {
  try {
    const novoQuadrinho = await QuadrinhosService.createQuadrinho(req.body);
    res.status(201).json(novoQuadrinho);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const obterQuadrinhos = async (req: Request, res: Response) => {
  try {
    const quadrinhos = await QuadrinhosService.getQuadrinhos();
    res.status(200).json(quadrinhos);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const obterQuadrinhoPorId = async (req: Request, res: Response) => {
  try {
    const quadrinho = await QuadrinhosService.getQuadrinhoById(req.params.id);
    if (!quadrinho) {
      return res.status(404).json({ message: "Quadrinho não encontrado" });
    }
    res.status(200).json(quadrinho);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const atualizarQuadrinho = async (req: Request, res: Response) => {
  try {
    const quadrinho = await QuadrinhosService.updateQuadrinho(
      req.params.id,
      req.body
    );
    if (!quadrinho) {
      return res.status(404).json({ message: "Quadrinho não encontrado" });
    }
    res.status(200).json(quadrinho);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deletarQuadrinho = async (req: Request, res: Response) => {
  try {
    const personagem = await QuadrinhosService.deleteQuadrinho(req.params.id);
    if (!personagem) {
      return res.status(404).json({ message: "Quadrinho não encontrado" });
    }
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const obterImagemQuadrinho = async (req: Request, res: Response) => {
  try {
    const quadrinho = await QuadrinhosService.getQuadrinhoImagemById(
      req.params.id
    );
    if (!quadrinho) {
      return res.status(404).json({ message: "Quadrinho não encontrado" });
    }
    res.status(200).json(quadrinho);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const obterDataQuadrinho = async (req: Request, res: Response) => {
  try {
    const quadrinho = await QuadrinhosService.getQuadrinhoDataById(
      req.params.id
    );
    if (!quadrinho) {
      return res.status(404).json({ message: "Quadrinho não encontrado" });
    }
    res.status(200).json(quadrinho);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
