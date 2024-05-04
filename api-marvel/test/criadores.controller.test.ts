import { Request } from 'express';
import * as CriadoresController from '../src/controllers/criadores.controller';
jest.mock('../services/quadrinhos.service');
import * as CriadoresService from '../src/services/criadores.service';

jest.mock('../services/criadores.service'); 

describe('Criadores Controller', () => {
  it('deve retornar todos os criadores', async () => {
    const mockReq = {} as Request;
    const mockRes = {
      status: jest.fn(() => mockRes),
      json: jest.fn()
    } as any;
    
    CriadoresService.getCriadores = jest.fn().mockResolvedValue(['Criador1', 'Criador2']);

    await CriadoresController.obterCriadores(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(['Criador1', 'Criador2']);
  });
});
