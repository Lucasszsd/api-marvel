import { obterPersonagens } from '../src/controllers/personagem.controller';
jest.mock('../services/quadrinhos.service');
import * as PersonagemService from '../src/services/personagem.service';

describe('Personagem Controller - obterPersonagens', () => {
  it('deve retornar todos os personagens', async () => {
    const req = {} as Request;
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res)
    } as any;

    PersonagemService.getPersonagens = jest.fn().mockResolvedValue(['Personagem1', 'Personagem2']);

    await obterPersonagens(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(['Personagem1', 'Personagem2']);
  });
});
