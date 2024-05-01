import { Schema, model } from "mongoose";

const creatorsSchema = new Schema(
  {
    nome: String,
    funcao: String,
    quadrinhos: String,
  },
  {
    timestamps: true,
  }
);

export default model("Creators", creatorsSchema);
