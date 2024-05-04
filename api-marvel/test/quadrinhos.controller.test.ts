import { inserirQuadrinhosNoBanco } from '../src/controllers/quadrinhos.controller';
jest.mock('../services/quadrinhos.service');
import * as QuadrinhosService from '../src/services/quadrinhos.service';


describe('Quadrinhos Controller - inserirQuadrinhosNoBanco', () => {
  it('deve inserir quadrinhos no banco de dados e retornar status 201', async () => {
    const req = { body: {} } as Request;
    const res = {
      status: jest.fn(() => res),
      json: jest.fn()
    } as any;

    QuadrinhosService.createQuadrinho = jest.fn().mockResolvedValue({});

    await inserirQuadrinhosNoBanco(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: "Quadrinhos inseridos no banco de dados com sucesso" });
  });
});
