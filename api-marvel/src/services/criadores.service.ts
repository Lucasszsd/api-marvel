import CreatorsSchema from "../schemas/criadores.schema";
import axios from "axios";
import * as util from "../util";

const apiUrl =
  "http://gateway.marvel.com/v1/public/events/270/comics?ts=1&apikey=34efc23fc561a1a203cf581cec43daf0&hash=c7d2edd3395941ec22157a6e0f577d40";

export const getCreatorsFromMarvelApi = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error("Erro ao recuperar criadores da saga", error);
    return [];
  }
};

export const createCriadores = async (dados: any) => {
  dados.thumbnail = util.appendExtensaoArquivo(
    dados.thumbnail,
    dados.extension
  );
  return await CreatorsSchema.create(dados);
};

export const getCriadores = async () => {
  return await CreatorsSchema.find();
};

export const getCriadorById = async (id: string) => {
  return await CreatorsSchema.findById(id);
};

export const updateCriador = async (id: string, novosDados: any) => {
  return await CreatorsSchema.findByIdAndUpdate(id, novosDados, {
    new: true,
  });
};

export const deleteCriador = async (id: string) => {
  return await CreatorsSchema.findByIdAndDelete(id);
};

export const getComicsCriador = async (id: string) => {
  return await CreatorsSchema.findById({ _id: id }, { _id: 0, quadrinhos: 1 });
};
