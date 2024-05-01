import QuadrinhosSchema from "../schemas/quadrinhos.schema";
import axios from "axios";
import * as util from "../util";

const apiUrl =
  "http://gateway.marvel.com/v1/public/events/270/comics?ts=1&apikey=34efc23fc561a1a203cf581cec43daf0&hash=c7d2edd3395941ec22157a6e0f577d40";

export const getQuadrinhosFromMarvelAPI = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error("Erro ao recuperar quadrinhos da saga", error);
    return [];
  }
};

export const createQuadrinho = async (dados: any) => {
  console.log(dados);
  dados.thumbnail = util.appendExtensaoArquivo(
    dados.thumbnail,
    dados.extension
  );
  return await QuadrinhosSchema.create(dados);
};
