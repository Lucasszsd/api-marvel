import { Schema, model } from "mongoose";

const personagemSchema = new Schema(
  {
    nome: String,
    descricao: String,
    thumbnail: String,
  },
  {
    timestamps: true,
  }
);

export default model("Personagem", personagemSchema);
