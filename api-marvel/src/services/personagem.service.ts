import PersonagemSchema from "../schemas/personagem.schema";
import axios from "axios";
import * as util from "../util";

const apiUrl =
  "http://gateway.marvel.com/v1/public/events/270/characters?ts=1&apikey=34efc23fc561a1a203cf581cec43daf0&hash=c7d2edd3395941ec22157a6e0f577d40";

export const getPersonagensFromMarvelAPI = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error("Erro ao recuperar personagens", error);
    return [];
  }
};

export const createPersonagem = async (dados: any) => {
  dados.thumbnail = util.appendextensaoArquivo(dados.thumbnail, dados.extension) 
  return await PersonagemSchema.create(dados);
};

export const getPersonagens = async () => {
  return await PersonagemSchema.find();
};

export const getPersonagemById = async (id: string) => {
  return await PersonagemSchema.findById(id);
};

export const updatePersonagem = async (id: string, novosDados: any) => {
  return await PersonagemSchema.findByIdAndUpdate(id, novosDados, {
    new: true,
  });
};

export const deletePersonagem = async (id: string) => {
  return await PersonagemSchema.findByIdAndDelete(id);
};
