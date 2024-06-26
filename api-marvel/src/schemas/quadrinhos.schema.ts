import { Schema, model } from "mongoose";

const quadrinhosSchema = new Schema(
  {
    titulo: String,
    descricao: String,
    dataPublicacao: String,
    thumbnail: String,
  },
  {
    timestamps: true,
  }
);

export default model("Quadrinhos", quadrinhosSchema);
