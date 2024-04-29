import { Schema, model } from "mongoose";

const quadrinhosSchema = new Schema(
  {
    nome: String,
    funcao: String,
    quadrinhos: String,
  },
  {
    timestamps: true,
  }
);

export default model("Quadrinhos", quadrinhosSchema);
